# frozen_string_literal: true

module Mutations
  module Authentication
    class RegisterUser < BaseMutation
      argument :email, String, required: true
      argument :password, String, required: true
      argument :first_name, String, required: true
      argument :last_name_name, String, required: true
      argument :phone, String, required: true

      field :success, Boolean, null: false

      def resolve(**args)
        byebug
        p '------------>>>'
        user = User.new(
          unconfirmed_email:    args[:email],
          password:             args[:password],
          first_name:           args[:first_name],
          last_name:            args[:last_name],
          phone:                args[:phone],
          confirmation_token:   Jwt::Encoder.new(args[:email]).call,
          confirmation_sent_at: Time.zone.now
        )

        ::Authentication::ConfirmUserMailer.with(user:).welcome.deliver_later if user.save
        { success: true }
      rescue StandardError
        { success: false }
      end
    end
  end
end
