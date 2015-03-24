class CategoriesController < ApplicationController
	def	index
		@categories = Category.all
	end

	def show
    	#respond_to do |format|
      	#	format.html
	    #	format.js
	    #end
  	end


end
