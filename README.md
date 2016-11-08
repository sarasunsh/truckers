# Welcome to Truckers!

We're a single-page application that makes it easy for you to find the food truck you want to eat from right now, ordering your food, and paying for it in a simple user flow. We're an MVP, so many of our features are still to come, but right now you can sort by a number of filters, including whether the truck is open, it's average menu item cost, cuisine, and rating. We're running on react-redux with url route handling via react-router and API route handling with express. Our user authentication is handled via epilogue and passport and our database runs on a postgres/sequelize back-end. We hope you enjoy getting your next food truck order with us!

Clone or download via git:

git clone https://github.com/melmquist/truckers.git

To run:

npm install
npm run build-watch
npm start

`npm start` doesn't build, so watch out for that. The reason it doesn't build is because you
probably want to watch the build and run me in separate terminals. Otherwise, build errors get
all mixed in with HTTP request logging. Also, please make sure you have Postgres running so that
your database will build.
