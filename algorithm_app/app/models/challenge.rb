class Challenge < ActiveRecord::Base
  belongs_to :category

  validates :name, :content, :presence => true

  validates :name, length: {maximum: 20}
end
