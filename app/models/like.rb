class Like < ApplicationRecord
  belongs_to :song,
  primary_key: :id,
  foreign_key: :song_id,
  class_name: :Song

  belongs_to :liker,
  primary_key: :id,
  foreign_key: :liker_id,
  class_name: :User
end