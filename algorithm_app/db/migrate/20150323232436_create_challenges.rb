class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |t|
      t.string :name
      t.text :content
      t.string :video
      t.text :answer
      t.integer :duration
      t.references :category, index: true

      t.timestamps null: false
    end
    add_foreign_key :challenges, :categories
  end
end
