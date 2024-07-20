# frozen_string_literal: true

require 'test_helper'

class MagicStudiosControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get magic_studios_index_url
    assert_response :success
  end
end
