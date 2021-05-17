# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Song.delete_all

require 'open-uri'

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

soulfan = User.create!(
  username: 'SoulFan1000',
  email: 'imasoulman100@gmail.com',
  password: 'password',
  age: 50,
  display_name: 'Disco and Soul Man',
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


disco_soul_song1 = Song.new(
  title: 'Eddie Murphy - Party all the time ', 
  artist_id: soulfan.id, 
  description: "My girl wants to party all the time, party all the time, party all the time...",
  genre: 'Disco',
)

disco_soul_song2 = Song.new(
  title: 'Triplett Twins - Pretty please', 
  artist_id: soulfan.id, 
  description: "Pretty please girl sugar on top",
  genre: 'Soul',
)

disco_soul_song3 = Song.new(
  title: 'Rick James - Super Freak', 
  artist_id: soulfan.id, 
  description: "Super freak! Super freak!",
  genre: 'Disco',
)



disco_soul_song1_image = open("https://soundboard-seeds.s3.amazonaws.com/220px-Party_All_the_Time.jpg")
disco_soul_song2_image = open("https://soundboard-seeds.s3.amazonaws.com/pretty-please.png")
disco_soul_song3_image = open("https://soundboard-seeds.s3.amazonaws.com/artworks-000318662316-60i15d-t500x500.jpg")

disco_soul_song1_audio = open("https://soundboard-seeds.s3.amazonaws.com/219-eddie_murphy-party_all_the_time.mp3")
disco_soul_song2_audio = open("https://soundboard-seeds.s3.amazonaws.com/Triplett_Twins-Pretty_Please.mp3")
disco_soul_song3_audio = open("https://soundboard-seeds.s3.amazonaws.com/214-rick_james-super_freak.mp3")


disco_soul_song1.audio.attach(io: disco_soul_song1_audio, filename: "discosoul#{disco_soul_song1.id}.mp3")
disco_soul_song2.audio.attach(io: disco_soul_song2_audio, filename: "discosoul#{disco_soul_song2.id}.mp3")
disco_soul_song3.audio.attach(io: disco_soul_song3_audio, filename: "discosoul#{disco_soul_song3.id}.mp3")


disco_soul_song1.image.attach(io: disco_soul_song1_image, filename: "discosoul#{disco_soul_song1.id}.jpg")
disco_soul_song2.image.attach(io: disco_soul_song2_image, filename: "discosoul#{disco_soul_song2.id}.jpg")
disco_soul_song3.image.attach(io: disco_soul_song3_image, filename: "discosoul#{disco_soul_song3.id}.jpg")



disco_soul_song1.save!
disco_soul_song2.save!
disco_soul_song3.save!