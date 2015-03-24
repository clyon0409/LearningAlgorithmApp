class CategoriesController < ApplicationController
	def	index
		@categories = Category.all
		@total_challenges =  0
		@total_completed = 0
		@categories.each do |category|
			@total_challenges = @total_challenges + category.challenges.count
			@total_completed = @total_completed + category.challenges.where(status: 't').count
		end
	end

	def show
    	
  	end


end
