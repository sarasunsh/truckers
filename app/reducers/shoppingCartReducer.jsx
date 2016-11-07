// SHOPPING CART FORMAT
//store.shoppingCart
//{
// 		foodTruckID: 12 (which food truck are we ordering from?)
// 		items: [{menuItem, quantity}]
// }

// ACTION NAMES
const 	ADD_ITEM = "ADD_ITEM",
		REMOVE_ITEM = "REMOVE_ITEM",
		CLEAR_CART = "CLEAR_CART",
		ASSIGN_FOODTRUCK_ID = "ASSIGN_FOODTRUCK_ID";

// ACTION CREATORS
export const addItem = (menuItem) => {
	type: ADD_ITEM,
	menuItem
}

export const removeItem = (menuItem) => {
	type: REMOVE_ITEM,
	menuItem
}

export const clearCart = () => {
	type: CLEAR_CART
}

export const assignFoodTruckID = (id) => {
	type: ASSIGN_FOODTRUCK_ID,
	id
}

// REDUCER
const shoppingCartReducer = (state, action) => {
	switch(action.type){
		case ADD_ITEM:
			const newState = Object.assign({}, state)
			const currentCart = newState.items;  //[{menuItem: blah, quantity: 4}, {menuItem, quantity}]
			let found = false;
			currentCart.forEach(item => {
				if (item.menuItem === action.menuItem){
					item.quantity++
					found = true
				}
			})
			if (found === false){
				const obj = {menuItem: action.menuItem, quantity: 1}
				newState.items.push(obj)
			}
			return newState;

		case REMOVE_ITEM:
			const newState = Object.assign({}, state)
			const currentCart = newState.items;  //[{menuItem: blah, quantity: 4}, {menuItem, quantity}]

			currentCart.forEach(item, index => {
				if (item.menuItem === action.menuItem){
					item.quantity--
					if(item.quantity === 0){
						currentCart.splice(index,1)
					}
				}
			})
			return newState;

		case CLEAR_CART:
			const newState = Object.assign({}, state, {items: []})
			return newState;

		case ASSIGN_FOODTRUCK_ID:
			const newState = Object.assign({}, state, {foodTruckID: action.id})
			return newState;

	}
}

export default shoppingCartReducer;
