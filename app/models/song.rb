class Song < ApplicationRecord 
  validates :artist_id, :title, presence: true

  has_one_attached :audio
  has_one_attached :image

  belongs_to :uploader,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :User
end