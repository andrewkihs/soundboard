json.partial! "api/users/user", user: @user
# json.likes @user.likes
# 
# @user.likes.each do |like|
#   json.set! like.song_id do
#     json.extract! like, :id, :song_id
#     json.id like.id
#   end

# end
# 