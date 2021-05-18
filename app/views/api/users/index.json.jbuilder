json.users do 
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
    # json.likes do 
    #   # debugger
    #   json.extract! likes
    # end
  end
end