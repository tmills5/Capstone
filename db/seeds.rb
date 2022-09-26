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

def brewery_dataset
    response = RestClient.get('https://api.openbrewerydb.org/breweries?by_state=mississippi&per_page=50', headers: {'Content-Type': 'application/json'})
    json = JSON.parse(response)
  
    json.each do |brewery|
      Brewery.create!(
        name: brewery["name"],
        brewery_type: brewery["brewery_type"],
        street: brewery["street"],
        city: brewery["city"],
        state: brewery["state"],
        postal_code: brewery["postal_code"],
        # country: brewery["country"],
        phone: brewery["phone"],
        website_url: brewery["website_url"]
        )
    end
  end

brewery_dataset();


# Brewery.create!(
#         name: brewery["name"],
#         brewery_type: brewery["brewery_type"],
#         street: brewery["street"],
#         city: brewery["city"],
#         state: brewery["state"],
#         postal_code: brewery["postal_code"],
#         country: brewery["country"],
#         phone: brewery["phone"],
#         website_url: brewery["website_url"]
#         )

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