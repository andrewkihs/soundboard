# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all


demoUser = User.create!(
  username: 'DemoUser',
  email: 'demouser@gmail.com',
  password: 'password',
  age: 26,
  display_name: 'Demo user',
  gender: 'Prefer not to say',
  city: 'New York',
  country: "United States",
  first_name: 'Demo',
  last_name: 'User'
)

andrewKihs = User.create!(
  username: 'AndrewKihs',
  email: 'andrewkihs@gmail.com',
  password: 'password',
  age: 26,
  display_name: 'Andrew Kihs',
  gender: 'Male',
  city: 'New York',
  country: "United States",
  first_name: 'Andrew',
  last_name: 'Kihs',
  bio: "Your favorite artist"
)

aphexTwin = User.create!(
  username: 'AfxTwin',
  email: 'afx@gmail.com',
  password: 'password',
  age: 26,
  display_name: 'Afx Twin',
  gender: 'Male',
  city: 'N/A',
  country: "N/A",
  first_name: 'Aphex',
  last_name: 'Twin'
)

beyonce1234 = User.create!(
  username: 'beyoncefan4lyfe',
  email: 'beyoncerocks@gmail.com',
  password: 'password',
  age: 26,
  display_name: 'Beyoncé [official page]',
  gender: 'Female',
  city: 'New York',
  country: "United States",
  first_name: 'Beyoncé',
  last_name: 'Knowles',
  bio: "Beyoncé Giselle Knowles-Carter is an American singer and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as the lead singer of Destiny's Child, one of the best-selling girl groups of all time. "
)