class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.string :description
      t.timestamps
    end
    add_index :songs, :artist_id
    add_index :songs, :title
  end
end
