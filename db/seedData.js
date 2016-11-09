'use strict'

const foodTrucksCSV = [
1,"Mike's Taco Truck","We make tacos, so you can eat them!","20 Hanover Sq, New York, NY 10005","www.mikestacos.com","Mexican","http://roaminghunger.com/img/trucks/original/5182f1a9-e0ec-43d9-b74c-081d46204482.jpg",TRUE,5,
2,"Sara's Mac & Cheese Truck","Do you want Mac & Cheese? You bet you do.","124 Water St, New York, NY 10005","www.sarasmac.com","Italian","http://www.eatthisny.com/wp-content/uploads/2013/01/IMG_6413.jpg",TRUE,5,
3,"Franklyn's Teas and Candies","We like great tea and awesome candy. So should you.","55 Wall St., New York, NY 10005","www.frankylnstea.com","Chinese","http://s3.amazonaws.com/spoonuniversi-wpengine/spoonuniversi/wp-content/uploads/sites/153/2016/07/gce5xAn6i.jpg",TRUE,5,
4,"Matt's Korean BBQ","Korean BBQ is the best BBQ.","33 Beaver St., New York, NY 10004","www.mattskorean.com","Korean","http://newyork.seriouseats.com/images/20090818koreanbbq.jpg",TRUE,5,
5,"Sushi Go","It's Sushi. On the go.","43 Broad St., New York, NY 10004","www.sushigo.com","Japanese","http://roaminghunger.com/img/trucks/original/4e1508c4-5aa4-4deb-8a61-581546204482.jpg",FALSE,4,
6,"The Lebanese Machine","Making the best in the Mediterranean","53 Pearl St., New York, NY 10004","www.falafel.com","Lebanese","http://falasophy.com/assets/uploads_general/_heroImage/falasophy-food-truck-home-hero.jpg",FALSE,4,
7,"Me So Chorizo","Somos Espanoles","184 Pearl St., New York, NY 10004","www.chorizotruck.com","Spanish","https://s-media-cache-ak0.pinimg.com/originals/5e/3f/f0/5e3ff01be032965fa703f5a9c90bdffb.jpg",TRUE,3,
8,"Spicy Noodles","Spicy. Noodles. Oh baby.","8 S. William St., New York, NY 10004","www.thaifoodtruck.com","Thai","https://buffaloeats.files.wordpress.com/2013/06/img_5409.jpg",TRUE,4,
9,"Lamb Duh","Gyros and Other Deliciousness","42 South St., New York, NY 10005","www.lambduh.com","Greek","http://roaminghunger.com/img/trucks/original/549226da-7f60-459f-ad8a-3e7946204482.jpg",TRUE,3,
10,"Je Suis Truck","Fine Dining from a Truck","123 Fulton St., New York, NY 10038","www.frenchtruck.com","French","https://s-media-cache-ak0.pinimg.com/originals/ee/38/65/ee3865f49f75cd71c9fbe9d78c8a4395.jpg",TRUE,2,
11,"Viet Yum","Pho it up.","14 Exchange Pl, New York, NY 10005","www.vietyum.com","Vietnamese","https://c2.staticflickr.com/8/7196/14065235944_26bfe2f43c_b.jpg",TRUE,3,
12,"Taqueria Oaxaquena","Oaxaca is the home of the best Mexican food. Come and get it.","107 Water St., New York, NY 10005","www.oaxacatacos.com","Mexican","http://farm5.static.flickr.com/4152/5016400827_836af95e24.jpg",TRUE,4,
13,"Comida de Yucatan","Mexico's carribbean food.","70 Water St., New York, NY 10005","www.yucacomida.com","Mexican","http://2.bp.blogspot.com/-lepBk6h7zIs/TwSBIU7kPoI/AAAAAAAAASA/6Gf1mygdPcY/s1600/Border+Grill+truck.jpg",TRUE,2,
14,"Roll Me Some Lunch","Sushi for lunch? You betcha.","66 Water St., New York, NY 10005","www.sushiroll.com","Japanese","https://roaminghunger.com/img/trucks/original/57c0b3a5-ee3c-4bdb-9ce5-772f46204482.jpg",TRUE,3,
15,"Pizza Pizza","NYC's favorite mobile pizzeria.","129 Front St., New York, NY 10005","www.pizzapizza.com","Italian","http://www.ilovethepizzawagon.com/images/wagon-side.png",TRUE,2,
16,"Padded Lunch","Pad Thai everything.","136 Maiden Ln, New York, NY 10038","www.paddedlunchbox.com","Thai","http://mobile-cuisine.com/wp-content/uploads/2015/12/one-of-a-thai.jpg",TRUE,3,
17,"General Tso's","It's good. You know it's good.","77 Water St., New York, NY 10005","www.generaltsotruck.com","Chinese","https://myfoodtruckbusiness.com/wp-content/uploads/2016/01/chinese-food-truck-08.jpg",TRUE,4,
18,"Falafel for the Win","More than falafel, but we have really good falafel!","19 Old Slip, New York, NY 10004","www.falafelwinning.com","Lebanese","http://www.falafelking.com/1000x450_falafel_TRUCK.jpg",TRUE,2,
19,"Banh Mi Forever","A Korean classic for your enjoyment.","59 Water St., New York, NY 10005","www.banhmibaby.com","Korean","https://pbs.twimg.com/media/BwDgq_rCUAIwiZx.jpg",TRUE,3,
20,"Here Be Hummus ","Hummus is the equalizer. We are hummus.","113 Pearl St., New York, NY 10004","www.herebehummus.com","Lebanese","http://foodtruckfiesta.com/wp-content/uploads/2012/12/Truck-Kaftamania.png",TRUE,3,
21,"Meatball Trucker","Meatballs in sandwiches. Meatballs in sandwiches!","32 Old Slip, New York, NY 10005","www.meatballtrucker.com","Italian","http://www.mobilefoodnews.com/wp-content/uploads/2014/04/CO-Denver-Meatball_FoodTruck_303Magazine-2-500x342.jpg",TRUE,4,
]

const menuItemsCSV = [
1,"Guacamole","Avocados, some salt, and spice. Boom.",3,"Appetizer",1
2,"Chile con Queso","That means spicy cheese. Yup.",3,"Appetizer",1
8,"Mac bites","Delicious mac and cheese packaged in bites",3,"Appetizer",2
13,"Haribo Gummy Bears","Ummm, they're gummy bears, duh.",2,"Appetizer",3
14,"Tea Candy","Of course we have tea candy. We have candy. We have tea.",3,"Appetizer",3
19,"Bulgogi Roll","It's a roll. It's bulgogi. It's bulgogi roll.",6,"Appetizer",4
20,"Pajeon","Delicious Korean pancakes.",7,"Appetizer",4
21,"Dumpling Soup","Pork dumplings. The best kind of dumpling.",5,"Appetizer",4
30,"stable","Down-sized zero defect info-mediaries",16,"Appetizer",11
33,"neutral","Secured attitude-oriented neural-net",3,"Appetizer",11
34,"Organized","Innovative analyzing interface",4,"Appetizer",16
35,"Persevering","Exclusive responsive capacity",7,"Appetizer",21
39,"scalable","Public-key foreground contingency",9,"Appetizer",8
42,"asynchronous","Quality-focused intangible hardware",4,"Appetizer",5
43,"Universal","Cross-platform dedicated implementation",15,"Appetizer",10
44,"policy","Progressive contextually-based contingency",10,"Appetizer",19
45,"Balanced","Open-architected background matrices",3,"Appetizer",9
47,"emulation","Ergonomic tangible extranet",4,"Appetizer",5
54,"function","Multi-tiered global adapter",14,"Appetizer",8
55,"Intuitive","Profound 3rd generation attitude",12,"Appetizer",21
56,"infrastructure","Stand-alone full-range algorithm",5,"Appetizer",16
57,"maximized","Enhanced neutral open system",17,"Appetizer",16
64,"attitude-oriented","Open-architected asymmetric synergy",3,"Appetizer",14
65,"neutral","Proactive optimizing architecture",9,"Appetizer",9
71,"workforce","Proactive user-facing solution",4,"Appetizer",13
72,"mobile","Multi-layered human-resource software",15,"Appetizer",20
77,"composite","Ameliorated grid-enabled local area network",17,"Appetizer",21
79,"functionalities","Realigned scalable pricing structure",15,"Appetizer",10
83,"structure","Distributed directional firmware",10,"Appetizer",17
89,"orchestration","Robust demand-driven knowledge base",13,"Appetizer",21
92,"well-modulated","Assimilated uniform Graphical User Interface",4,"Appetizer",19
93,"Streamlined","Triple-buffered solution-oriented installation",5,"Appetizer",14
95,"capacity","Enhanced leading edge instruction set",6,"Appetizer",9
97,"implementation","Business-focused bottom-line strategy",15,"Appetizer",6
100,"Total","Compatible incremental open system",12,"Appetizer",21
101,"multi-state","Assimilated contextually-based knowledge base",4,"Appetizer",5
106,"migration","Quality-focused web-enabled adapter",12,"Appetizer",17
107,"zero tolerance","Open-architected mission-critical matrices",9,"Appetizer",15
108,"global","Horizontal executive protocol",4,"Appetizer",9
115,"impactful","Business-focused full-range collaboration",11,"Appetizer",20
116,"Upgradable","Decentralized explicit policy",4,"Appetizer",9
118,"empowering","Persevering mission-critical project",4,"Appetizer",5
7,"Jarritos","All flavors of Mexico's finest soda.",2,"Beverage",1
12,"Honest Teas","It's tea, it's honest, it works for us.",2,"Beverage",2
15,"Jasmine Pearl Tea","An amazing tea with an amazing jasmine scent.",6,"Beverage",3
16,"White Moonlight Tea","An ancient tea that deserves a special treatment.",15,"Beverage",3
17,"Darjeeling Tea","A classic from the subcontinent.",6,"Beverage",3
18,"Keemun Tea","A pick me up tea for those ready to go.",4,"Beverage",3
25,"Banana Milk","Who knew.",4,"Beverage",4
26,"Hwachae","Drink some flowers.",5,"Beverage",4
28,"zero defect","Operative bandwidth-monitored core",9,"Beverage",11
29,"web-enabled","Extended encompassing flexibility",10,"Beverage",12
31,"Versatile","Pre-emptive uniform paradigm",16,"Beverage",19
32,"capacity","Virtual 24/7 circuit",11,"Beverage",20
37,"Down-sized","Persistent uniform flexibility",9,"Beverage",20
40,"contextually-based","Polarised didactic website",7,"Beverage",10
41,"Streamlined","Robust 24/7 approach",16,"Beverage",7
46,"data-warehouse","User-friendly multi-tasking standardization",11,"Beverage",20
50,"incremental","Cloned methodical open architecture",16,"Beverage",5
58,"Synchronised","Assimilated bandwidth-monitored software",7,"Beverage",11
62,"frame","Compatible static attitude",5,"Beverage",20
66,"orchestration","Profound real-time core",8,"Beverage",17
67,"implementation","Decentralized empowering secured line",11,"Beverage",10
74,"clear-thinking","Fully-configurable explicit interface",10,"Beverage",10
84,"intranet","Profit-focused leading edge migration",8,"Beverage",17
98,"Persevering","Sharable coherent benchmark",4,"Beverage",20
99,"Advanced","Cross-platform actuating encoding",3,"Beverage",15
109,"support","Business-focused full-range matrices",8,"Beverage",17
111,"leading edge","User-friendly clear-thinking toolset",5,"Beverage",12
113,"customer loyalty","Robust system-worthy infrastructure",6,"Beverage",11
114,"concept","Innovative responsive local area network",3,"Beverage",8
119,"User-friendly","Fundamental 3rd generation database",15,"Beverage",7
121,"Compatible","De-engineered actuating conglomeration",17,"Beverage",20
122,"6th generation","Intuitive multi-state concept",14,"Beverage",13
3,"Tacos el Pastor","Delicious pork tacos with pineapple and pickled onion.",5,"Entree",1
4,"Tacos de Cochinita Pibil","Slow-roasted pork tacos with a Yucatan marinade.",6,"Entree",1
5,"Steak Burrito","Our finest cut of beef, shredded with rice, beans, and spicy salsa.",6,"Entree",1
6,"Chicken Quesadillas","Chicken, cheese, and corn tortillas. Yum!",5,"Entree",1
9,"Best Mac & Cheese","Our best and standard bearer of mac and cheese.",5,"Entree",2
10,"Broccoli Mac & Cheese","Our healthiest mac and cheese!",5,"Entree",2
11,"Spicy Pork Mac & Cheese","Wait, what? Spicy pork with mac and cheese!!",6,"Entree",2
22,"Marinated Short Rib","OMG. Korean BBQ Short Rib!!!!",16,"Entree",4
23,"Spicy Pork Ribs","Hoooooly cow. I mean pig.",12,"Entree",4
24,"Pork Belly","Thinly sliced, marinated, and amazing.",14,"Entree",4
27,"static","Profit-focused actuating Graphic Interface",17,"Entree",10
36,"non-volatile","Reactive 4th generation orchestration",11,"Entree",21
38,"algorithm","Enterprise-wide client-driven interface",6,"Entree",13
48,"strategy","Devolved content-based paradigm",17,"Entree",9
49,"architecture","Re-contextualized 24/7 process improvement",12,"Entree",16
51,"Robust","Switchable 4th generation benchmark",8,"Entree",18
52,"reciprocal","Inverse disintermediate customer loyalty",4,"Entree",11
53,"frame","Optimized solution-oriented ability",11,"Entree",9
59,"project","Operative scalable help-desk",7,"Entree",8
60,"multimedia","Front-line full-range time-frame",15,"Entree",5
61,"Graphical User Interface","Organic eco-centric application",15,"Entree",5
63,"encoding","De-engineered reciprocal implementation",5,"Entree",18
68,"Decentralized","Synchronised discrete data-warehouse",8,"Entree",14
69,"policy","Streamlined well-modulated knowledge user",17,"Entree",12
70,"scalable","Adaptive multimedia matrix",7,"Entree",21
73,"hub","Triple-buffered context-sensitive open architecture",10,"Entree",8
75,"application","Seamless 24 hour encryption",13,"Entree",6
76,"multi-state","Implemented transitional framework",14,"Entree",14
78,"bandwidth-monitored","Monitored solution-oriented frame",4,"Entree",17
80,"coherent","Seamless 5th generation software",9,"Entree",13
81,"Synergized","Switchable systematic implementation",6,"Entree",15
82,"Networked","Triple-buffered encompassing customer loyalty",15,"Entree",20
85,"Front-line","Phased non-volatile synergy",6,"Entree",11
86,"Organic","Multi-layered zero tolerance internet solution",10,"Entree",9
87,"emulation","Cross-platform stable encryption",5,"Entree",19
88,"application","Triple-buffered bottom-line projection",10,"Entree",5
90,"hub","Decentralized 24/7 paradigm",15,"Entree",6
91,"discrete","Devolved transitional circuit",4,"Entree",17
94,"toolset","Enterprise-wide tertiary protocol",7,"Entree",16
96,"web-enabled","Open-architected client-server protocol",5,"Entree",10
102,"Advanced","Object-based didactic migration",11,"Entree",14
103,"human-resource","Configurable hybrid middleware",8,"Entree",15
104,"function","Automated user-facing benchmark",3,"Entree",21
105,"content-based","Horizontal even-keeled task-force",16,"Entree",13
110,"toolset","Implemented exuding productivity",16,"Entree",9
112,"archive","Quality-focused optimal hardware",4,"Entree",21
117,"Self-enabling","Down-sized bandwidth-monitored paradigm",6,"Entree",21
120,"object-oriented","Open-architected systemic adapter",12,"Entree",20
123,"maximized","Streamlined holistic open system",14,"Entree",15
124,"utilisation","Optional mobile adapter",15,"Entree",14
125,"local","Customer-focused intermediate moderator",7,"Entree",20

]

exports.foodTrucks = foodTrucksCSV.split('\n')
exports.menuItems = menuItemsCSV.split('\n')

// const NUMBER_OF_FOOD_TRUCKS = 20;
// const NUMBER_OF_MENU_ITEMS = 300;
// const NUMBER_OF_USERS = 100;
//
//
// const casual = require('casual');
//
// const cuisineNames = [
//   'Mexican',
//   'Italian',
//   'Japanese',
//   'Chinese',
//   'Spanish',
//   'Thai',
//   'Vietnamese',
//   'French',
//   'Greek',
//   'Lebanese'
// ]
//
// const foodTruckImageURLs = [
//   'http://freevectorfinder.com/images/thumb/indian-food-logo-40391.jpg',
//   'http://freevectorfinder.com/images/thumb/mexican-food-logo-with-cactus-40800.jpg',
//   'http://freevectorfinder.com/images/thumb/mexican-food-logo-with-hat-40156.jpg',
//   'http://www.ncstatefair.org/2016/Visitor/images/web_graphics_242x200px-30.png'
// ]
//
// const foodTruckModel = casual.define('foodTruckModel', () => {
//   return {
//     name: casual.company_name,
//     description: casual.catch_phrase,
//     location: casual.address,
//     website: casual.url,
//     cuisine: casual.random_element(cuisineNames),
//     image: casual.random_element(foodTruckImageURLs),
//     isOpen: casual.coin_flip,
//     rating: casual.integer(1, 5)
//   }
// })
//
// // food_truck_id must be defined as well
// const menuItemModel = casual.define('menuItemModel', () => {
//   return {
//     name: casual.word,
//     description: casual.short_description,
//     price: casual.integer(1, 15),
//     food_truck_id: casual.integer(1, NUMBER_OF_FOOD_TRUCKS)
//   }
// })
//
// // const userModel = casual.define('userModel', () => {
// //   return {
// //     name: casual.full_name,
// //     email: casual.email,
// //     isVendor: casual.coin_flip
// //     // ,
// //     // food_truck_id: casual.integer(1, NUMBER_OF_FOOD_TRUCKS)
// //   }
// // })
//
// const dataGenerator = (times, generator) => {
//   let data = [];
//
//   for (let i = 0; i < times; ++i) {
//     data.push(generator());
//   }
//
//   return data;
// }

// exports.foodTrucks = dataGenerator(NUMBER_OF_FOOD_TRUCKS, casual._foodTruckModel);
// exports.menuItems = dataGenerator(NUMBER_OF_MENU_ITEMS, casual._menuItemModel);
// exports.users = dataGenerator(NUMBER_OF_USERS, casual._userModel);
