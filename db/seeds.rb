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
  avatar: "https://yt3.ggpht.com/3BkBY3V585eOLW10tD3fBoS8WfxkqNhSU0mMxKff_urLGxATrlGlzQHm7D5_YRjEGevjdrjShQ=s600-c-k-c0x00ffffff-no-rj-rp-mo",
  is_admin: "true"
)

5.times do
    User.create(
      email: Faker::Internet.email,
      password: "123",
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      username: Faker::Internet.username,
      avatar: Faker::Avatar.image,
      is_admin: false
    )
  end

puts "Seeding Breweries...------------------------"


Brewery.create!(
  name: "1817 Brewery",
  brewery_type: "Micro",
  description: "Fresh, hand-crafted beer, made right here in NE Mississippi. You did a real day's work. You deserve a real beer. Drink Local.",
  street: "100 B South Olive St",
  city: "Okolona",
  state: "MS",
  postal_code: "38860",
  phone: "662-305-5907",
  website_url: "https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2F1817Brewery&h=AT1yNlO-fb6Gl6de84H4c8RykrmbXBbfC-fHErgr7NhQQX5v_LYGu-F3LrnEybaTEeqCGCpElCdV72D4J1DEhj5sI4fevAwsAuonXIEiiymYEzuctzoc03bfCHq0dzg8G2FjeKtTVpYX7cwgSglhUgkJwzE",
  image_url: "https://res.cloudinary.com/ratebeer/image/upload/w_150,h_150,c_limit/brew_32259.jpg"
)

Brewery.create!(
  name: "Biloxi Brewing Co",
  brewery_type: "Micro",
  description: "Biloxi Brewing Company is soon to be the newest craft beer manufacturer in the state, located on the beautiful Gulf Coast of Mississippi.",
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
  description: "Chandeleur Brewing Company is a new microbrewery in downtown Gulfport, Mississippi which opened in 2014! We currently have 4 main staples (along with numerous seasonals) and continually add to our lineup. Make sure you stop by and see us regularly. You never know what new brew we might have hidden behind the bar for you!",
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
  description: "Marcus and Christine Cooper (along with baby Harvey) moved from New York City to Hattiesburg, MS (Marcus's home town) with two goals: to brew great beer, and to create a space where people from all walks of life can come and disconnect from their busy schedules and reconnect with friends and family over board games. At our brewpub, in the heart of Hattiesburg, we have over 100 boardgames, a family friendly environment, and some great beers to help the good times roll. All of our beer is brewed on premises and can only be found at the brewpub.",
  street: "2108 West 4th Street",
  city: "Hattiesburg",
  state: "Mississippi",
  postal_code: "39401",
  phone: "601-402-7194",
  website_url: "http://www.colludiumbrewery.com",
  image_url: "https://res.cloudinary.com/ratebeer/image/upload/w_144,c_fill,d_Default_Brewery_q4okin.png,f_auto/brew_48608"
)

Brewery.create!(
  name: "Crooked Letter Brewing Co",
  brewery_type: "Brewpub",
  description: "We are a Micro Brewery Brewery Tours $5.00 Tours Sat 1-3pm doors close at 4pm.",
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
  description: "Wouldn't it be great if there was a store that had all the best craft beers together under one roof? Not only do we have them all but it is a pleasure browsing though all the greatest beers in our modernly designed high class store. Not to mention we have Twenty taps to fill up growlers with you favorites. You don't have to be a brewer to be in heaven here. Come today and try out a new beer or find one of your favorites. We are sure to have it.",
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
  description: "Head Brewer Zack Erickson and his wife, Kaitlin. Inspired by the Belgian brewing tradition they witnessed on their honeymoon in Belgium, they began brewing small, 5-gallon batches on their stovetop. Armed with a passion for Old World beers and a newfound drive, Zack began to ponder leaving his current career in the Video Game Industry. Before too long, Kaitlin encouraged Zack to pursue his passion full-time, which lead to starting his career in the illustrious San Diego beer community, working for two award-winning breweries, (Council Brewing Co. & Groundswell Brewing Co.) while attending UC San Diego’s Brewing program. The perfect weather, incredible burritos, and mega rad beer community in San Diego were almost enough to keep him there forever, but eventually, he started yearning to brew his own recipes. Armed with practical experience and brewing theory, he decided it was time to reach for his dream. Family and the perfect building lured him to Historic Downtown Vicksburg with the dream of creating a warm and inviting brewpub where craft beer could flourish. Luckily the pairing of Parmegiani and Erickson instantly bonded, just like their food and beer, inspiring each other towards a shared creative vision that would become Vicksburg’s first brewpub. Using a 3-barrel brewhouse, Key City put its first beer on tap, Mississippi Queen, in March of 2018. Selling out of the first batch in just 6 days, the small brewhouse in the window began churning out classic and experimental styles left and right. Crushablely crispy lagers, hop-bomb IPAs, robust stouts, and out-of-this-world sours line the tap walls and fill the glasses of friends and family in Downtown Vicksburg. The wild success of Key City’s blend of both Old & New world brewing tendencies led to the purchase of the building next to the current Brewery & Eatery, where a production scale 15-barrel brewhouse & canning line is scheduled to arrive Summer of 2022. Zack and his rag-tag brewery team are excited to be bringing Key City’s beers to distribution later in 2022, so they can share their craft with the rest of Mississippi and beyond.",
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
  description: "Our first brews were crafted under the shade of ‘lazy’ magnolia trees in the backyard. In 2005 we opened Mississippi’s first packaging brewery since prohibition. Our flagship ‘Southern Pecan’ Brown Ale has been enjoyed by tens of thousands, allowing us to grow Mississippi’s craft beer culture, one beer at a time. CHEERS YALL!",
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
  description: "Jackson's only brewery offering world class beer to Mississippi patrons. Located in Midtown Jackson, come see us for a tour and samples. Sláinte!",
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
  description: "GOOD TIMES & GREAT BREWS. Welcome to Mayhew Junction, Starkville's hometown brewery. Inspired by the people and crafted for the people.",
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
  description: "Craft brewery in Greenville, Mississippi",
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
  description: "Lisa Miller is the owner and founder of Natchez Brewing Company. Originally from Plymouth, England. She met her husband Patrick Miller in 1998 while he was in the Marines. After some time they lost touch. In 2001 Lisa moved across the pond and resided in Connecticut. Her career as a dog groomer led her to established her own grooming business in 2009. Our recipes and brews created by Patrick Miller, who was born in Natchez and raised in the Miss-Lou (the name of the area... Natchez MS and Vidalia LA being separated only by the Mississippi river).  At 18, Patrick left the area to join the Marines, and became a military police officer providing security on Marine One, the Presidential Helicopter. After his completed service, he continued his law enforcement career in Washington D.C. for many years until he joined the Park Service and was transferred to Asheville, North Carolina. It was here in Asheville that his love for making craft beer was ignited.",
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
  description: "HOURS: Mon-Wed 3-6 (Take out only) Thurs 3-10 Fri-Sat 3-12 Brewer owned & operated artisan brewery located in the Free State of Jones. Rock the Boat Slowboat Brewing Company is a small, brewer owned and family operated micro located in The Free State of Jones, downtown Laurel, MS. Slowboat's main focus is small batch artisan styles, including Farmhouse, Wild, Belgian style, Barrel-aged, experimental ales, and an ever-evolving portfolio of popular American craft beer styles. We operate our business on three basic principles: Never sacrifice Quality for Quantity, Creativity for Comfort, or Passion for Profit Slowboat is deeply committed to refining our craft, while holding true to thousands of years of brewing history and tradition. Our objective is not to produce large quantities of beer for the masses. We strive produce beers of spectacular quality that we can be proud to call our own. We can't promise that you'll love our beer. We understand that everyone has different tastes. What we can promise is that we LOVE our beer. And we hope our passion for brewing shines through in every glass.",
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
  description: "At SoPro Brewing, we don’t just brew beer, we create unique experiences. Since opening our doors in 2013, our Head Brewer, Ben Green, has driven that process. He is deeply invested from the creative process developing recipes, naming beers, and directing can artwork to the execution using the finest, hand selected ingredients and state of the art techniques. The result is a wide selection of high-quality, enjoyable, and innovative beers.",
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
  description: "Meridian's craft beer company. Mississippi’s first Microbrewery. PROCEED AND BE BOLD. DRINK THREEFOOT BEER! #proceedandbebold",
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
  description: "Brewed In The Red Clay Hills Of North Mississippi",
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