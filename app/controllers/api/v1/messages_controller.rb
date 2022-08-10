module Api
  module V1
    class MessagesController < ApplicationController
      def index
        random = Random.new
        @message = Message.find(random.rand(1..Message.count)).text
        render json: @message
      end
    end
  end
end
