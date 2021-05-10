class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.string :display_name, null: false
      t.integer :age, null: false
      t.string :gender
      t.string :bio
      t.string :city
      t.string :country
      t.string :first_name
      t.string :last_name
      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
