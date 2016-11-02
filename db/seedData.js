'use strict'

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
  'http://imgur.com/gallery/vAq3aNr',
  'http://imgur.com/gallery/vAq3aNr',
  'http://imgur.com/gallery/0aQAEzr',
  'http://imgur.com/gallery/3ouPK3G',
  'http://imgur.com/gallery/8rRfx',
  'http://imgur.com/gallery/oYLj0'
]

const foodTruckModel = casual.define('foodTruckModel', () => {
  return {
    name: casual.company_name,
    description: casual.catch_phrase,
    location: casual.address,
    website: casual.url,
    cuisine: casual.random_element(cuisineNames),
    image: casual.random_element(foodTruckImageURLs)
  }
})

const menuItemModel = casual.define('menuItemModel', () => {
  return {
    name: casual.word,
    description: casual.short_description,
    price: casual.integer(1, 15)
  }
})

const userModel = casual.define('userModel', () => {
  return {
    name: casual.full_name,
    email: casual.email,
    isVendor: casual.coin_flip
  }
})

const dataGenerator = (times, generator) => {
  let data = [];

  for (let i = 0; i < times; ++i) {
    data.push(generator());
  }

  return data;
}

exports.foodTrucks = dataGenerator(100, casual._foodTruckModel);
exports.menuItems = dataGenerator(100, casual._menuItemModel);
exports.users = dataGenerator(100, casual._userModel);
