class Song < ApplicationRecord 
  validates :artist_id, :title, presence: true

  has_one_attached :audio
  has_one_attached :image

  belongs_to :uploader,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :song_id,
  class_name: :Comment
  
  has_many :likes, 
  primary_key: :id,
  foreign_key: :song_id,
  class_name: :Like

  has_many :likers,
  through: :likes,
  source: :liker


  def self.see_song_num_likes_optimized
        songs_with_likes = Song
            .select("songs.*, COUNT(*) AS num_likes")
            .joins(:likes)
            .group(:id)
        # 
        songs_with_likes.each do |song|
            puts song.num_likes
        end
    end
end
