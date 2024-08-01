# Base image
ARG RUBY_VERSION=3.1.4
FROM ruby:$RUBY_VERSION

# Install dependencies
RUN apt-get update -qq && \
    apt-get install -y build-essential libvips bash bash-completion libffi-dev tzdata postgresql curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man

# Install Node.js and Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash - && \
    apt-get install -y nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn

# Set environment variable to enable legacy OpenSSL support
ENV NODE_OPTIONS=--openssl-legacy-provider

# Rails app lives here
WORKDIR /rails

# Set environment variable for the build
ARG RAILS_ENV
ENV RAILS_ENV=$RAILS_ENV

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Install frontend dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy application code
COPY . .

# Precompile bootsnap code for faster boot times
RUN bundle exec bootsnap precompile --gemfile app/ lib/

# Precompiling assets for production without requiring secret RAILS_MASTER_KEY
RUN if [ "$RAILS_ENV" = "production" ]; then \
    SECRET_KEY_BASE=1 bin/rails assets:precompile; \
    fi

# Entrypoint prepares the database.
COPY bin/docker-entrypoint /rails/bin/
RUN chmod +x /rails/bin/docker-entrypoint

# Use an absolute path for the entry point script
ENTRYPOINT ["/rails/bin/docker-entrypoint"]

# Start the server by default, this can be overwritten at runtime
EXPOSE 5000
CMD ["./bin/rails", "server"]
