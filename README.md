# MississippiBrewHouse
This is a SPA that I designed in order to explore and collect information on local breweries in the state of Mississippi.
## Description

The MississippiBrewHouse is a simple, Single Page Application that will serve as my capstone project for Flatiron School. Considering that I have recently moved to Mississippi, I was trying to find some local breweries and decided to build a project in order to do this. The user can Sign up and Login in order to view and comment on any of the breweries I have found in the state of Mississippi. The user can also view, edit, and delete their own profile. My stretch goals are to implement a search functionality as more breweries open up (as of now, I only found 16 in the state 😉), and to allow user generated content.

I have set up a many-many relationship between the users, comments, and breweries. I also have implemented a fourth model to handle the newsletters. There are more than five routes using react router as well as password protection and authorization using the BCrypt Gem. The users have full CRUD on their profiles and Create on comments while, I (admin) have full CRUD actions on the breweries, and newsletters from the backend.

I used MDBoostrap as a framework because I have never used it before. I also used the email_validator gem, figaro gem in order to hide the api keys, and rest client for the same reason. I implemented useContext for state management for the breweries.

This project was a ton of fun for me and I am sad that my time at Flatiron school is coming to an end. However, this has been one of the most rewarding experiences of my life and CANNOT wait to get into the tech field and start creating! 

Huge thank you to Flatiron School for their amazing instructors and curriculum!!!



## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

## Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site
for the latest supported versions.

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

[supported runtimes]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install Postgresql

Heroku requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][postgres downloads page] and install it. Launch the
  app and click "Initialize" to create a new server. You should now be able to
  run `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.

- If your app failed to deploy at the build stage, make sure your local
  environment is set up correctly by following the steps at the beginning of
  this lesson. Check that you have the latest versions of Ruby and Bundler, and
  ensure that Postgresql was installed successfully.

- If you deployed successfully, but you ran into issues when you visited the
  site, make sure you migrated and seeded the database. Also, make sure that
  your application works locally and try to debug any issues on your local
  machine before re-deploying. You can also check the logs on the server by
  running `heroku logs`.

For additional support, check out these guides on Heroku:

- [Deploying a Rails 6 App to Heroku][heroku rails deploying guide]
- [Rails Troubleshooting on Heroku][troubleshooting guide on heroku]

[postgres downloads page]: https://postgresapp.com/downloads.html
[heroku rails deploying guide]: https://devcenter.heroku.com/articles/getting-started-with-rails6
[troubleshooting guide on heroku]: https://devcenter.heroku.com/articles/getting-started-with-rails6#troubleshooting

## Use

Upon page load, the user should create a username and password or login. This directs the user to the main list of breweries. The user can then peruse the list and click on the card to see more about the individual brewery. Only the "admin" user (me) has the ability to add breweries for now. Users can also provide their information in order to sign up for the newsletter. I also have the ability to delete comments from user if they are inappropriate.

## Credits

MDBoostrap for the frontend
General images from pexels.com, unsplash.com, and pixabay.com
The named brewery images and information came from each brewery's individual website, facebook, or twitter. I also pulled information for the breweries from brewbound.com and untapped.com
Most general seed information from teh ruby Faker Gem

## License

MIT License

Copyright (c) [2022] [Merle Tyson Mills]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.