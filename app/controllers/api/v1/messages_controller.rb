class Api::V1::MessagesController < ApplicationController
    def index
        random = Random.new
        @message = Message.find(random.rand(1..Message.count)).text
        render json: @message
    end
end