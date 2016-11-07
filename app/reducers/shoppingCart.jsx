// SHOPPING CART FORMAT
// {
// 		foodTruckID: 12 (which food truck are we ordering from?)
// 		items: [{menuItem, quantity}]
// }

// ACTION NAMES
const 	ADD_ITEM = "ADD_ITEM",
		REMOVE_ITEM = "REMOVE_ITEM",
		CLEAR_CART = "CLEAR_CART",
		ASSIGN_FOODTRUCK_ID = "ASSIGN_FOODTRUCK_ID";

// ACTION CREATORS
const addItem = (menuItem) => {
	type: ADD_ITEM,
	menuItem
}

const removeItem = (menuItem) => {
	type: REMOVE_ITEM,
	menuItem
}

const clearCart = () => {
	type: CLEAR_CART
}

const assignFoodTruckID = (id) => {
	// type: ASSIGN_FOODTRUCK_ID,
	id
}

// REDUCER
const shoppingCartReducer = (state, action) => {
	switch(action.type){
		case ADD_ITEM:
			



			return(
				)
		case REMOVE_ITEM:
			return(
				)
		case CLEAR_CART:
			return(
				)
		case ASSIGN_FOODTRUCK_ID:
			return(
				)
	}
}