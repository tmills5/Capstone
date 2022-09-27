require 'rest-client'
require 'json'

User.destroy_all
Comment.destroy_all
Brewery.destroy_all

puts "Seeding Users..---------------------------"

User.create(
  email: "ty@gmail.com",
  password: "123",
  first_name: "Tyson",
  last_name: "Mills",
  username: "tyty",
  is_admin: "true"
)

5.times do
    User.create(
      email: Faker::Internet.email,
      password: "123",
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      username: Faker::Internet.username,
      is_admin: false
    )
  end

puts "Seeding Breweries...------------------------"

# def brewery_dataset
#     response = RestClient.get('https://api.openbrewerydb.org/breweries?by_state=mississippi&per_page=50', headers: {'Content-Type': 'application/json'})
#     json = JSON.parse(response)
  
#     json.each do |brewery|
#       Brewery.create!(
#         name: brewery["name"],
#         brewery_type: brewery["brewery_type"],
#         street: brewery["street"],
#         city: brewery["city"],
#         state: brewery["state"],
#         postal_code: brewery["postal_code"],
#         # country: brewery["country"],
#         phone: brewery["phone"],
#         website_url: brewery["website_url"]
#         )
#     end
#   end

# brewery_dataset();


Brewery.create!(
  name: "1817 Brewery",
  brewery_type: "Micro",
  street: "100 B South Olive St",
  city: "Okolona",
  state: "MS",
  postal_code: "38860",
  phone: "662-305-5907",
  website_url: "https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2F1817Brewery&h=AT1yNlO-fb6Gl6de84H4c8RykrmbXBbfC-fHErgr7NhQQX5v_LYGu-F3LrnEybaTEeqCGCpElCdV72D4J1DEhj5sI4fevAwsAuonXIEiiymYEzuctzoc03bfCHq0dzg8G2FjeKtTVpYX7cwgSglhUgkJwzE",
  image_url: "https://scontent.ftup1-1.fna.fbcdn.net/v/t39.30808-6/243164483_2070249896487400_91199706746198626_n.jpg?stp=c0.53.206.206a_dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=_UsaNYPFo4UAX9VlYVq&_nc_ht=scontent.ftup1-1.fna&oh=00_AT9LNRr9yrhWWnrdAR3YSYhzVmzdaQP92laou2Z-uFyH-Q&oe=63378EF8"
)

Brewery.create!(
  name: "Biloxi Brewing Co",
  brewery_type: "Micro",
  street: "186 Bohn St",
  city: "Biloxi",
  state: "MS",
  postal_code: "39530-3812",
  phone: "228-273-1638",
  website_url: "http://www.biloxibrewing.com",
  image_url: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/6163.biloxi-brewing-co.jpg"
)

Brewery.create!(
  name: "Chandeleur Island Brewing Company",
  brewery_type: "Micro",
  street: "2711 14th St",
  city: "Gulfport",
  state: "Mississippi",
  postal_code: "39501-1928",
  phone: "228-701-9985",
  website_url: "http://www.chandeleurbrew.com",
  image_url: "https://secureservercdn.net/198.71.233.90/q71.b66.myftpupload.com/wp-content/uploads/2019/10/ChandeleurBeerGlass.png"
)

Brewery.create!(
  name: "Colludium Brewery",
  brewery_type: "Brewpub",
  street: "2108 West 4th Street",
  city: "Hattiesburg",
  state: "Mississippi",
  postal_code: "39401",
  phone: "601-402-7194",
  website_url: "http://www.colludiumbrewery.com",
  image_url: "https://static.wixstatic.com/media/bd56f6_967a0c0124314e80bbdf07eae77e3d77~mv2_d_6250_2732_s_4_2.png/v1/fill/w_1037,h_453,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bd56f6_967a0c0124314e80bbdf07eae77e3d77~mv2_d_6250_2732_s_4_2.png"
)

Brewery.create!(
  name: "Crooked Letter Brewing Co",
  brewery_type: "Brewpub",
  street: "503 Porter Ave",
  city: "Ocean Springs",
  state: "Mississippi",
  postal_code: "39564",
  phone: "228-235-3994",
  website_url: "https://www.findmeabrewery.com/crooked-letter-brewing-company/",
  image_url: "https://d33wubrfki0l68.cloudfront.net/09a6cb3327f5367b9b9e854b6984f25cd91c9226/5567c/breweries/crooked-letter-brewery.jpg"
)

Brewery.create!(
  name: "Hops and Growlers",
  brewery_type: "Micro",
  street: "2339 Government St",
  city: "Ocean Springs",
  state: "Mississippi",
  postal_code: "39564",
  phone: "228-334-5585",
  website_url: "https://www.facebook.com/hopsandgrowlers/",
  image_url: "https://scontent.ftup1-1.fna.fbcdn.net/v/t39.30808-6/306163119_500488878750886_5842883796466969403_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=-oncT4ivkg0AX8LcVpw&_nc_ht=scontent.ftup1-1.fna&oh=00_AT8LEBIhNRZYjwj6GLhjz-lDT65jv3jB2OSyA7dbwzJx0A&oe=63375CAB"
)

Brewery.create!(
  name: "Key City Brewing Co.",
  brewery_type: "Brewpub",
  street: "1311 Washington St.",
  city: "Vicksburg",
  state: "Mississippi",
  postal_code: "39180",
  phone: "626-487-1330",
  website_url: "http://keycitybeer.com",
  image_url: "http://keycitybeer.com/wp-content/uploads/2022/02/KeyCity_Brewing.png"
)

Brewery.create!(
  name: "Lazy Magnolia Brewing Co, LLC",
  brewery_type: "Micro",
  street: "7030 Roscoe Turner Rd",
  city: "Kiln",
  state: "Mississippi",
  postal_code: "39556-8000",
  phone: "228-467-2727",
  website_url: "http://www.lazymagnolia.com",
  image_url: "https://images.squarespace-cdn.com/content/v1/62c45e3a53800b2476927a98/37c4f982-cefa-4ee8-8a0a-c1d6a8ffe8a8/DSC_3591.png?format=2500w"
)

Brewery.create!(
  name: "Lucky Town Brewing Co",
  brewery_type: "Micro",
  street: "1710 N Mill St",
  city: "Jackson",
  state: "Mississippi",
  postal_code: "39202-1536",
  phone: "601-790-0142",
  website_url: "https://brewbound.com/breweries/lucky-town-brewing-co",
  image_url: "https://d2pxm94gkd1wuq.cloudfront.net/BreweryLogos/Standard/8383.lucky-town-brewing-co.jpg"
)

Brewery.create!(
  name: "Mayhew Junction Brewing Company",
  brewery_type: "Micro",
  street: "106 Eckford Dr",
  city: "Starkville",
  state: "Mississippi",
  postal_code: "39759-3710",
  phone: "662-546-0510",
  website_url: "http://www.mayhewjunction.com",
  image_url: "https://scontent.ftup1-1.fna.fbcdn.net/v/t39.30808-6/305122473_584024043423789_4462737066714364254_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Kkfrwso3YbsAX_6OZ-U&_nc_ht=scontent.ftup1-1.fna&oh=00_AT-MtpuTLwUw2xRyUpESgp-1bHLtfNYT_oPjkw0UFye8Wg&oe=6337AA00"
)

Brewery.create!(
  name: "Mighty Miss Brewing Co.",
  brewery_type: "Micro",
  street: "525 S Washington Ave Ste B",
  city: "Greenville",
  state: "Mississippi",
  postal_code: "38701",
  phone: "662-379-6477",
  website_url: "https://www.facebook.com/mightymissbeer",
  image_url: "https://scontent.ftup1-1.fna.fbcdn.net/v/t39.30808-6/304784331_160189386676386_4829870349022412955_n.jpg?stp=c208.0.206.206a_dst-jpg_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=wWX9P2b5dCAAX9E8EYN&_nc_ht=scontent.ftup1-1.fna&oh=00_AT-AwfHusoV7iZ45UCG1whM4dlEcXOrKWTi5jM600qctug&oe=633685A2"
)

Brewery.create!(
  name: "Natchez Brewing Co",
  brewery_type: "Micro",
  street: "207 High St",
  city: "Natchez",
  state: "Mississippi",
  postal_code: "39120-3222",
  phone: "828-713-5311",
  website_url: "http://www.natchezbrew.com",
  image_url: "http://www.natchezbrew.com/uploads/2/8/0/5/28052945/img-3410-2_orig.jpg"
)

Brewery.create!(
  name: "Slowboat Brewing Company",
  brewery_type: "Micro",
  street: "318 W 5th St",
  city: "Laurel",
  state: "Mississippi",
  postal_code: "39440-3461",
  phone: "601-433-2723",
  website_url: "https://www.facebook.com/slowboatbrewco/",
  image_url: "https://scontent.ftup1-1.fna.fbcdn.net/v/t39.30808-6/301692887_567002325216527_8286016358006452340_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=qsMGv75NVx4AX_TL2Ps&_nc_ht=scontent.ftup1-1.fna&oh=00_AT81TXiT4HRAigj_iWSYpC2ALV1iYn30Azj_Ua84lEc2Mw&oe=63368466"
)

Brewery.create!(
  name: "Southern Prohibition Brewing",
  brewery_type: "Micro",
  street: "301 Mobile St",
  city: "Hattiesburg",
  state: "Mississippi",
  postal_code: "39401-3406",
  phone: "601-467-1057",
  website_url: "http://www.soprobrewing.com",
  image_url: "https://static.wixstatic.com/media/56d62e_d6f149f0d9724c13be6342d9587f0d64~mv2.jpg/v1/fill/w_1099,h_733,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/56d62e_d6f149f0d9724c13be6342d9587f0d64~mv2.jpg"
)

Brewery.create!(
  name: "Threefoot Brewing Company, LLC",
  brewery_type: "Contract",
  street: "4010 23rd Avenue",
  city: "Meridian",
  state: "Mississippi",
  postal_code: "39305",
  phone: "601-693-1074",
  website_url: "http://www.threefootbrewing.com",
  image_url: "https://static.wixstatic.com/media/6b8ad1_3d9dc43f0c9846d2b0d78c9abaa19627~mv2.jpg/v1/crop/x_970,y_0,w_5193,h_4755/fill/w_624,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Threefoot-Brewing-9.jpg"
)

Brewery.create!(
  name: "Yalobusha Brewing Company",
  brewery_type: "Micro",
  street: "102 S Main St",
  city: "Water Valley",
  state: "Mississippi",
  postal_code: "38965-2906",
  phone: "000-000-0000",
  website_url: "https://twitter.com/yalobrew",
  image_url: "https://pbs.twimg.com/profile_images/693095662016069632/IFuiUbJw_400x400.jpg"
)

    

puts "Seeding Comments...-----------------------"

30.times do
  Comment.create!(
    comment_body: Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 4),
    user_id: rand(1..6),
    brewery_id: rand(1..16)
  )
end

puts "Seeding Newsletter Emails...---------------"

20.times do
  Newsletter.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email
  )
end

puts "...DONE!"