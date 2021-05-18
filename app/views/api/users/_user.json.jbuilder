json.extract! user, :id, :username, :display_name, :email, :gender, :bio, :city, :country, :first_name, :last_name
json.likes do
  user.likes.each do |like|
    json.set! like.song_id do
      json.extract! like, :id, :song_id
      json.id like.id
    end
  end
end
# json.extract! user.likes, :ids
# debugger
# user.likes do
#   debugger
# end