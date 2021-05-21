# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Song.delete_all
Comment.delete_all
Like.delete_all
require 'open-uri'

demo_user = User.new(
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
demo_user_header = open("https://soundboard-seeds.s3.amazonaws.com/demo_header.jpg")
demo_user.header.attach(io: demo_user_header, filename: "header_image#{demo_user.id}.mp3")

demo_user_avatar = open("https://soundboard-seeds.s3.amazonaws.com/demo_user_avatar.png")
demo_user.avatar.attach(io: demo_user_avatar, filename: "avatar_image#{demo_user.id}.jpg")


demo_user.save!


burial = User.new(
  username: 'Burial',
  email: 'burial123@gmail.com',
  password: 'password',
  age: 34,
  display_name: 'Burial',
  gender: 'Male',
  city: 'London',
  country: "England",
  first_name: 'William',
  last_name: 'Bevan',
  bio: "William Emmanuel Bevan, known by his recording alias Burial, is a British electronic musician from South London. Initially remaining anonymous, Burial became the first artist signed to Kode9's electronic label Hyperdub in 2005."
)

burial_header = open("https://soundboard-seeds.s3.amazonaws.com/burial_header.jpeg")
burial.header.attach(io: burial_header, filename: "header_image#{burial.id}.mp3")

burial_avatar = open("https://soundboard-seeds.s3.amazonaws.com/Burial-Header-Press.jpg")
burial.avatar.attach(io: burial_avatar, filename: "avatar_image#{burial.id}.jpg")


burial.save!

skee_mask = User.new(
  username: 'SkeeMask',
  email: 'afx@gmail.com',
  password: 'password',
  age: 28,
  display_name: 'Skee Mask',
  gender: 'Male',
  city: 'Berlin',
  country: "Germany",
  first_name: '',
  last_name: '',
  bio: 'ILIAN TAPE / SKEE SERIES// booking@iliantape.de'
)

skee_mask_header = open("https://soundboard-seeds.s3.amazonaws.com/Skee-Mask-Pool.webp")
skee_mask.header.attach(io: skee_mask_header, filename: "header_image#{skee_mask.id}.mp3")

skee_mask_avatar = open("https://soundboard-seeds.s3.amazonaws.com/skeemask.jpeg")
skee_mask.avatar.attach(io: skee_mask_avatar, filename: "avatar_image#{skee_mask.id}.jpg")


skee_mask.save!

theo_parrish = User.new(
  username: 'theoparrish',
  email: 'theo@gmail.com',
  password: 'password',
  age: 49,
  display_name: 'Theo Parrish',
  gender: 'Male',
  city: 'Detroit',
  country: "United States",
  first_name: 'Theo',
  last_name: 'Parrish',
  bio: "Theo Parrish is an American DJ and record producer based in Detroit, Michigan,and known for his genre-spanning DJ sets and unconventional house productions.He is an owner of the Sound Signature record label."
)

theo_parrish_header = open("https://soundboard-seeds.s3.amazonaws.com/theo_parrish_header.jpg")
theo_parrish.header.attach(io: theo_parrish_header, filename: "header_image#{theo_parrish.id}.mp3")

theo_parrish_avatar = open("https://soundboard-seeds.s3.amazonaws.com/theo-parrish_avatar.jpg")
theo_parrish.avatar.attach(io: theo_parrish_avatar, filename: "avatar_image#{theo_parrish.id}.jpg")


theo_parrish.save!

ak = User.new(
  username: 'ak1200',
  email: 'akihs@gmail.com',
  password: 'password',
  age: 26,
  display_name: 'Andrew Kihs',
  gender: 'Male',
  city: 'New York',
  country: "United States",
  first_name: 'Andrew',
  last_name: 'Kihs',
  bio: "Andrew Kihs is a programmer and music based in New York City"
)
ak_header = open("https://soundboard-seeds.s3.amazonaws.com/ak_header.png")
ak.header.attach(io: ak_header, filename: "header_image#{ak.id}.mp3")

ak_avatar = open("https://soundboard-seeds.s3.amazonaws.com/ak_avatar.png")
ak.avatar.attach(io: ak_avatar, filename: "avatar_image#{ak.id}.jpg")

ak.save!


csh = User.new(
  username: 'CarSeatHeadrest',
  email: 'carseatheadrest@gmail.com',
  password: 'password',
  age: 49,
  display_name: 'Car Seat Headrest',
  gender: 'Male',
  city: 'Virginia',
  country: "United States",
  first_name: 'Will',
  last_name: 'Toledo',
  bio: "Car Seat Headrest is an American indie rock band formed in Leesburg, Virginia, and currently located in Seattle, Washington. The band consists of Will Toledo, Ethan Ives, Seth Dalby, and Andrew Katz."
)

csh_header = open("https://soundboard-seeds.s3.amazonaws.com/csh_header.jpg")
csh.header.attach(io: csh_header, filename: "header_image#{csh.id}.mp3")

csh_avatar = open("https://soundboard-seeds.s3.amazonaws.com/csh_avatar.jpg")
csh.avatar.attach(io: csh_avatar, filename: "avatar_image#{csh.id}.jpg")


csh.save!

selecter = User.new(
  username: 'Selecter',
  email: 'selecter@gmail.com',
  password: 'password',
  age: 49,
  display_name: 'The Selecter',
  gender: 'Female',
  city: 'Tokyo',
  country: "Japan",
  first_name: 'Isabella',
  last_name: 'Melita',
  bio: "I like a lot of music but mostly oldies"
)

selecter_header = open("https://soundboard-seeds.s3.amazonaws.com/selector_header.jpeg")
selecter.header.attach(io: selecter_header, filename: "header_image#{selecter.id}.mp3")

selecter_avatar = open("https://soundboard-seeds.s3.amazonaws.com/music_man_avatar.png")
selecter.avatar.attach(io: selecter_avatar, filename: "avatar_image#{selecter.id}.jpg")


selecter.save!

new_wave_man = User.new(
  username: 'TheNewWave',
  email: 'TheNewWave@gmail.com',
  password: 'password',
  age: 49,
  display_name: 'The New Wave',
  gender: 'Male',
  city: 'Chicago',
  country: "Japan",
  first_name: 'Cal',
  last_name: 'Chuchesta',
  bio: "The Cure, Joy Division, New Order. I like everything new wave"
)

new_wave_man_header = open("https://soundboard-seeds.s3.amazonaws.com/new_wave_header.jpg")
new_wave_man.header.attach(io: new_wave_man_header, filename: "header_image#{new_wave_man.id}.mp3")

new_wave_man_avatar = open("https://soundboard-seeds.s3.amazonaws.com/musicnerd_avatar.png")
new_wave_man.avatar.attach(io: new_wave_man_avatar, filename: "avatar_image#{new_wave_man.id}.jpg")


new_wave_man.save!


# SONGS

idm_song1 = Song.new(
  title: 'Rev8617', 
  artist_id: skee_mask.id, 
  description: "3rd track on compro",
  genre: 'Electronic',
)

idm_song1_image = open("https://soundboard-seeds.s3.amazonaws.com/Cover.jpg")
idm_song1_audio = open("https://soundboard-seeds.s3.amazonaws.com/03.+Rev8617.mp3")

idm_song1.audio.attach(io: idm_song1_audio, filename: "idm#{idm_song1.id}.mp3")
idm_song1.image.attach(io: idm_song1_image, filename: "idm#{idm_song1.id}.jpg")


idm_song2 = Song.new(
  title: 'Dial 274', 
  artist_id: skee_mask.id, 
  description: "7th track on compro",
  genre: 'Electronic',
)

idm_song2_image = open("https://soundboard-seeds.s3.amazonaws.com/Cover+copy+2.jpg")
idm_song2_audio = open("https://soundboard-seeds.s3.amazonaws.com/07.+Dial+274.mp3")

idm_song2.audio.attach(io: idm_song2_audio, filename: "idm#{idm_song2.id}.mp3")
idm_song2.image.attach(io: idm_song2_image, filename: "idm#{idm_song2.id}.jpg")


idm_song3 = Song.new(
  title: 'Flyby VFR', 
  artist_id: skee_mask.id, 
  description: "9th track on compro",
  genre: 'Electronic',
)

idm_song3_image = open("https://soundboard-seeds.s3.amazonaws.com/Cover+copy.jpg")
idm_song3_audio = open("https://soundboard-seeds.s3.amazonaws.com/09.+Flyby+VFR.mp3")

idm_song3.audio.attach(io: idm_song3_audio, filename: "idm#{idm_song3.id}.mp3")
idm_song3.image.attach(io: idm_song3_image, filename: "idm#{idm_song3.id}.jpg")




idm_song4 = Song.new(
  title: 'Forgive', 
  artist_id: burial.id, 
  description: "Right from the Burial self titled",
  genre: 'Electronic',
)
idm_song4_image = open("https://soundboard-seeds.s3.amazonaws.com/forgive.jpg")
idm_song4_audio = open("https://soundboard-seeds.s3.amazonaws.com/09-burial-forgive.mp3")

idm_song4.audio.attach(io: idm_song4_audio, filename: "idm#{idm_song4.id}.mp3")
idm_song4.image.attach(io: idm_song4_image, filename: "idm#{idm_song4.id}.jpg")

idm_song4.save!

idm_song5 = Song.new(
  title: 'Untrue', 
  artist_id: burial.id, 
  description: "Couldn't be alone.",
  genre: 'Electronic',
)
idm_song5_image = open("https://soundboard-seeds.s3.amazonaws.com/untrue.jpg")
idm_song5_audio = open("https://soundboard-seeds.s3.amazonaws.com/yt1s.com+-+Burial++Archangel.mp3")

idm_song5.audio.attach(io: idm_song5_audio, filename: "idm#{idm_song5.id}.mp3")
idm_song5.image.attach(io: idm_song5_image, filename: "idm#{idm_song5.id}.jpg")

idm_song5.save!






















# h o u se songs
# house 

house_song1 = Song.new(
  title: 'Rick Wade - Detroit Hustle', 
  artist_id: ak.id, 
  description: "A great detroit house track",
  genre: 'House',
)

house_song1_image = open("https://soundboard-seeds.s3.amazonaws.com/rickwadedetroithustle.jpeg")
house_song1_audio = open("https://soundboard-seeds.s3.amazonaws.com/+Rick+Wade++Detroit+Hustle.mp3")

house_song1.audio.attach(io: house_song1_audio, filename: "house#{house_song1.id}.mp3")
house_song1.image.attach(io: house_song1_image, filename: "house#{house_song1.id}.jpg")



house_song2 = Song.new(
  title: 'Andras - River Red', 
  artist_id: ak.id, 
  description: "A very sweet song",
  genre: 'House',
)

house_song2_image = open("https://soundboard-seeds.s3.amazonaws.com/andras+river+red.jpg")
house_song2_audio = open("https://soundboard-seeds.s3.amazonaws.com/Andras++River+Red.mp3")

house_song2.audio.attach(io: house_song2_audio, filename: "house#{house_song2.id}.mp3")
house_song2.image.attach(io: house_song2_image, filename: "house#{house_song2.id}.jpg")


house_song3 = Song.new(
  title: 'Sky Walking', 
  artist_id: theo_parrish.id, 
  description: "A classic song from 1998",
  genre: 'House',
)

house_song3_image = open("https://soundboard-seeds.s3.amazonaws.com/theo+parrish+sky+walking.jpeg")
house_song3_audio = open("https://soundboard-seeds.s3.amazonaws.com/Theo+Parrish+-+Sky+Walking.mp3")

house_song3.audio.attach(io: house_song3_audio, filename: "house#{house_song3.id}.mp3")
house_song3.image.attach(io: house_song3_image, filename: "house#{house_song3.id}.jpg")




house_song4 = Song.new(
  title: 'Flowers feat. Andrew Ashong', 
  artist_id: theo_parrish.id, 
  description: "House with an R&B sound",
  genre: 'House',
)
house_song4_image = open("https://soundboard-seeds.s3.amazonaws.com/Andrew_Ashong_Theo_parrish_flowers.jpeg")
house_song4_audio = open("https://soundboard-seeds.s3.amazonaws.com/Andrew+Ashong++Theo+Parrish++Flowers.mp3")

house_song4.audio.attach(io: house_song4_audio, filename: "house#{house_song4.id}.mp3")
house_song4.image.attach(io: house_song4_image, filename: "house#{house_song4.id}.jpg")


house_song5 = Song.new(
  title: 'COS-BER-ZAM - Ne Noya (Daphni Mix)', 
  artist_id: demo_user.id, 
  description: "A fun tune from Daphni",
  genre: 'House',
)
house_song5_image = open("https://soundboard-seeds.s3.amazonaws.com/cosberzam.jpeg")
house_song5_audio = open("https://soundboard-seeds.s3.amazonaws.com/COS-BER-ZAM+-+Ne+Noya+(Daphni+Mix).mp3")

house_song5.audio.attach(io: house_song5_audio, filename: "house#{house_song5.id}.mp3")
house_song5.image.attach(io: house_song5_image, filename: "house#{house_song5.id}.jpg")














# indie
# indie 

indie_song1 = Song.new(
  title: 'Reuse the Cels', 
  artist_id: csh.id, 
  description: "A deeper cut from Starving While Living",
  genre: 'Indie',
)

indie_song1_image = open("https://soundboard-seeds.s3.amazonaws.com/reusethecels.jpg")
indie_song1_audio = open("https://soundboard-seeds.s3.amazonaws.com/Reuse+The+Cels.mp3")

indie_song1.audio.attach(io: indie_song1_audio, filename: "indie#{indie_song1.id}.mp3")
indie_song1.image.attach(io: indie_song1_image, filename: "indie#{indie_song1.id}.jpg")



indie_song2 = Song.new(
  title: 'Maud Gone', 
  artist_id: csh.id, 
  description: "Released in 2012 on the album Monomania",
  genre: 'Indie',
)

indie_song2_image = open("https://soundboard-seeds.s3.amazonaws.com/maudgone.jpg")
indie_song2_audio = open("https://soundboard-seeds.s3.amazonaws.com/yt1s.com+-+Car+Seat+Headrest++Maud+Gone.mp3")

indie_song2.audio.attach(io: indie_song2_audio, filename: "indie#{indie_song2.id}.mp3")
indie_song2.image.attach(io: indie_song2_image, filename: "indie#{indie_song2.id}.jpg")


indie_song3 = Song.new(
  title: 'Alvvays - Archie, Marry Me', 
  artist_id: demo_user.id, 
  description: "Hey hey hey hey... arry me archie",
  genre: 'Indie',
)

indie_song3_image = open("https://soundboard-seeds.s3.amazonaws.com/alvvaysarchie.jpeg")
indie_song3_audio = open("https://soundboard-seeds.s3.amazonaws.com/Alvvays+-+Archie%2C+Marry+Me+(Official+Video).mp3")

indie_song3.audio.attach(io: indie_song3_audio, filename: "indie#{indie_song3.id}.mp3")
indie_song3.image.attach(io: indie_song3_image, filename: "indie#{indie_song3.id}.jpg")




indie_song4 = Song.new(
  title: 'Dean Blunt - 100', 
  artist_id: demo_user.id, 
  description: "Off the album Black Metal",
  genre: 'Indie',
)
indie_song4_image = open("https://soundboard-seeds.s3.amazonaws.com/deanblunt100.jpeg")
indie_song4_audio = open("https://soundboard-seeds.s3.amazonaws.com/Dean+Blunt+-+100.mp3")

indie_song4.audio.attach(io: indie_song4_audio, filename: "indie#{indie_song4.id}.mp3")
indie_song4.image.attach(io: indie_song4_image, filename: "indie#{indie_song4.id}.jpg")



indie_song5 = Song.new(
  title: 'Big Thief - Shark Smile', 
  artist_id: ak.id, 
  description: "From the 2017 album Capacity",
  genre: 'Indie',
)
indie_song5_image = open("https://soundboard-seeds.s3.amazonaws.com/bigthiefcapacity.jpeg")
indie_song5_audio = open("https://soundboard-seeds.s3.amazonaws.com/Big+Thief+-+Shark+Smile+(Single)+%5BOfficial+Audio%5D.mp3")

indie_song5.audio.attach(io: indie_song5_audio, filename: "indie#{indie_song5.id}.mp3")
indie_song5.image.attach(io: indie_song5_image, filename: "indie#{indie_song5.id}.jpg")










new_wave_song1 = Song.new(
  title: 'New Order - Dreams Never End', 
  artist_id: new_wave_man.id, 
  description: "Off the album Movement from 1980",
  genre: 'Alternative Rock',
)

new_wave_song1_image = open("https://soundboard-seeds.s3.amazonaws.com/new+order+dreams+never+die.jpeg")
new_wave_song1_audio = open("https://soundboard-seeds.s3.amazonaws.com/New+Order++Dreams+Never+End.mp3")

new_wave_song1.audio.attach(io: new_wave_song1_audio, filename: "new_wave#{new_wave_song1.id}.mp3")
new_wave_song1.image.attach(io: new_wave_song1_image, filename: "new_wave#{new_wave_song1.id}.jpg")



new_wave_song2 = Song.new(
  title: 'Joy DIvision - Disorder', 
  artist_id: new_wave_man.id, 
  description: "As seen on the Joy Division shirt, as heard on college radio",
  genre: 'Alternative Rock',
)

new_wave_song2_image = open("https://soundboard-seeds.s3.amazonaws.com/joy+division+disorder.png")
new_wave_song2_audio = open("https://soundboard-seeds.s3.amazonaws.com/Joy+Division++Disorder.mp3")

new_wave_song2.audio.attach(io: new_wave_song2_audio, filename: "new_wave#{new_wave_song2.id}.mp3")
new_wave_song2.image.attach(io: new_wave_song2_image, filename: "new_wave#{new_wave_song2.id}.jpg")



new_wave_song3 = Song.new(
  title: "The Cure - Boys Don't Cry", 
  artist_id: new_wave_man.id, 
  description: "One of the most popular The Cure songs. Robert Smith really nailed it",
  genre: 'Alternative Rock',
)

new_wave_song3_image = open("https://soundboard-seeds.s3.amazonaws.com/boysdontcry.jpg")
new_wave_song3_audio = open("https://soundboard-seeds.s3.amazonaws.com/Boys+Don't+Cry+(1).mp3")

new_wave_song3.audio.attach(io: new_wave_song3_audio, filename: "new_wave#{new_wave_song3.id}.mp3")
new_wave_song3.image.attach(io: new_wave_song3_image, filename: "new_wave#{new_wave_song3.id}.jpg")



new_wave_song4 = Song.new(
  title: 'The Blue Nile - Tinseltown in the Rain', 
  artist_id: new_wave_man.id, 
  description: "A lesser known 80's jam",
  genre: 'Alternative Rock',
)
new_wave_song4_image = open("https://soundboard-seeds.s3.amazonaws.com/the_blue_nile_tinseltown_in_the_rain.jpeg")
new_wave_song4_audio = open("https://soundboard-seeds.s3.amazonaws.com/The+Blue+Nile++Tinseltown+in+the+Rain.mp3")

new_wave_song4.audio.attach(io: new_wave_song4_audio, filename: "new_wave#{new_wave_song4.id}.mp3")
new_wave_song4.image.attach(io: new_wave_song4_image, filename: "new_wave#{new_wave_song4.id}.jpg")



new_wave_song5 = Song.new(
  title: 'John Cale, Brian Eno - Spinning Away', 
  artist_id: new_wave_man.id, 
  description: "A beautiful track from John Cale and Brian Eno.",
  genre: 'Alternative Rock',
)
new_wave_song5_image = open("https://soundboard-seeds.s3.amazonaws.com/johncalebe+spinning+away.jpeg")
new_wave_song5_audio = open("https://soundboard-seeds.s3.amazonaws.com/John+Cale++Brian+Eno++Spinning+Away.mp3")

new_wave_song5.audio.attach(io: new_wave_song5_audio, filename: "new_wave#{new_wave_song5.id}.mp3")
new_wave_song5.image.attach(io: new_wave_song5_image, filename: "new_wave#{new_wave_song5.id}.jpg")









classic_song1 = Song.new(
  title: 'Alton Ellis - RockSteady', 
  artist_id: selecter.id, 
  description: "A 1977 smash from the king of early ska and rocksteady",
  genre: 'Reggae',
)

classic_song1_image = open("https://soundboard-seeds.s3.amazonaws.com/alton_ellis_rocksteady.jpg")
classic_song1_audio = open("https://soundboard-seeds.s3.amazonaws.com/yt1s.com+-+Alton+Ellis++Rocksteady.mp3")

classic_song1.audio.attach(io: classic_song1_audio, filename: "classic#{classic_song1.id}.mp3")
classic_song1.image.attach(io: classic_song1_image, filename: "classic#{classic_song1.id}.jpg")



classic_song2 = Song.new(
  title: 'Gal Costa - Baby', 
  artist_id: selecter.id, 
  description: "A beautiful song. Mesmerizing even..",
  genre: 'Folk & Singer-Songwriter',
)

classic_song2_image = open("https://soundboard-seeds.s3.amazonaws.com/gal_costababy.jpg")
classic_song2_audio = open("https://soundboard-seeds.s3.amazonaws.com/Gal+Costa+-+Baby.mp3")

classic_song2.audio.attach(io: classic_song2_audio, filename: "classic#{classic_song2.id}.mp3")
classic_song2.image.attach(io: classic_song2_image, filename: "classic#{classic_song2.id}.jpg")


classic_song3 = Song.new(
  title: 'The Oogum Boogum Song', 
  artist_id: selecter.id, 
  description: "A sweet R&B/Soul tune from 1967",
  genre: 'R&B & Soul',
)

classic_song3_image = open("https://soundboard-seeds.s3.amazonaws.com/oogum_boogum.jpg")
classic_song3_audio = open("https://soundboard-seeds.s3.amazonaws.com/Brenton+Wood+-+The+Oogum+Boogum+Song+1967.mp3")

classic_song3.audio.attach(io: classic_song3_audio, filename: "classic#{classic_song3.id}.mp3")
classic_song3.image.attach(io: classic_song3_image, filename: "classic#{classic_song3.id}.jpg")


classic_song4 = Song.new(
  title: 'Triplett Twins - Pretty Please', 
  artist_id: selecter.id, 
  description: "Pretty please girl with sugar on top.",
  genre: 'R&B & Soul',
)
classic_song4_image = open("https://soundboard-seeds.s3.amazonaws.com/pretty_please.jpg")
classic_song4_audio = open("https://soundboard-seeds.s3.amazonaws.com/Triplett_Twins-Pretty_Please.mp3")

classic_song4.audio.attach(io: classic_song4_audio, filename: "classic#{classic_song4.id}.mp3")
classic_song4.image.attach(io: classic_song4_image, filename: "classic#{classic_song4.id}.jpg")



classic_song5 = Song.new(
  title: 'George McCrae - You Can Have It All', 
  artist_id: selecter.id, 
  description: "The original song famously convered by Yo La Tengo",
  genre: 'R&B & Soul',
)
classic_song5_image = open("https://soundboard-seeds.s3.amazonaws.com/you+_canhaveitall.jpg")
classic_song5_audio = open("https://soundboard-seeds.s3.amazonaws.com/George+McCrae....+You+Can+Have+It+All.+1974..mp3")

classic_song5.audio.attach(io: classic_song5_audio, filename: "classic#{classic_song5.id}.mp3")
classic_song5.image.attach(io: classic_song5_image, filename: "classic#{classic_song5.id}.jpg")




# separated by genre for variance in stream page
idm_song1.save!
house_song1.save!
classic_song1.save!
new_wave_song1.save!
indie_song1.save!

idm_song2.save!
classic_song2.save!
new_wave_song2.save!
indie_song2.save!
house_song2.save!

idm_song3.save!
classic_song3.save!
new_wave_song3.save!
indie_song3.save!
house_song3.save!

idm_song4.save!
classic_song4.save!
new_wave_song4.save!
indie_song4.save!
house_song4.save!

new_wave_song5.save!
classic_song5.save!
idm_song5.save!
indie_song5.save!
house_song5.save!


