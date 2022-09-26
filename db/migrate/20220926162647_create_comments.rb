class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :comment_body
      t.integer :user_id
      t.string :brewery_id

      t.timestamps
    end
  end
end
