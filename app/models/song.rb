class Song < ApplicationRecord 
  validates :artist_id, :title, presence: true

  has_one_attached :audio
end