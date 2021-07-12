class AddPeaksToDb < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :audio_peaks, :text
  end
end
