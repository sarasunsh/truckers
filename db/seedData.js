'use strict'
const NUMBER_OF_FOOD_TRUCKS = 20;
const NUMBER_OF_MENU_ITEMS = 300;
const NUMBER_OF_USERS = 100;


const casual = require('casual');

const cuisineNames = [
  'Mexican',
  'Italian',
  'Japanese',
  'Chinese',
  'Spanish',
  'Thai',
  'Vietnamese',
  'French',
  'Greek',
  'Lebanese'
]

const foodTruckImageURLs = [
  'http://freevectorfinder.com/images/thumb/indian-food-logo-40391.jpg',
  'http://freevectorfinder.com/images/thumb/mexican-food-logo-with-cactus-40800.jpg',
  'http://freevectorfinder.com/images/thumb/mexican-food-logo-with-hat-40156.jpg',
  'http://www.ncstatefair.org/2016/Visitor/images/web_graphics_242x200px-30.png'
]

const foodTruckModel = casual.define('foodTruckModel', () => {
  return {
    name: casual.company_name,
    description: casual.catch_phrase,
    location: casual.address,
    website: casual.url,
    cuisine: casual.random_element(cuisineNames),
    image: casual.random_element(foodTruckImageURLs),
    isOpen: casual.coin_flip,
    rating: casual.integer(1, 5)
  }
})

// food_truck_id must be defined as well
const menuItemModel = casual.define('menuItemModel', () => {
  return {
    name: casual.word,
    description: casual.short_description,
    price: casual.integer(1, 15),
    food_truck_id: casual.integer(1, NUMBER_OF_FOOD_TRUCKS)
  }
})

const userModel = casual.define('userModel', () => {
  return {
    name: casual.full_name,
    email: casual.email,
    isVendor: casual.coin_flip
    // ,
    // food_truck_id: casual.integer(1, NUMBER_OF_FOOD_TRUCKS)
  }
})

const dataGenerator = (times, generator) => {
  let data = [];

  for (let i = 0; i < times; ++i) {
    data.push(generator());
  }

  return data;
}

exports.foodTrucks = dataGenerator(NUMBER_OF_FOOD_TRUCKS, casual._foodTruckModel);
exports.menuItems = dataGenerator(NUMBER_OF_MENU_ITEMS, casual._menuItemModel);
exports.users = dataGenerator(NUMBER_OF_USERS, casual._userModel);
