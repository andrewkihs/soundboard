json.extract! user, :id, :username, :display_name, :email, :gender, :bio, :city, :country, :first_name, :last_name
if user.header.attached?
  json.headerUrl url_for(user.header)
else
  json.headerUrl = 'https://assets.tumblr.com/images/default_header/optica_pattern_13.png'
end
if user.avatar.attached?
  json.avatarUrl url_for(user.avatar)
else
  json.avatarUrl = 'https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg'
end

# 

json.likes do
  user.likes.each do |like|
    json.set! like.song_id do
      json.extract! like, :id, :song_id
      json.id like.id
    end
  end
end



# likes.each do |like|
#   json.set! like.id do 
#     json.extract like, :id, 
#   end
# end
# # json.extract! user.likes, :ids
# 
# user.likes do
#   
# end