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
export const addItem = (menuItem) => ({
	type: ADD_ITEM,
	menuItem
})

export const removeItem = (menuItem) => ({
	type: REMOVE_ITEM,
	menuItem
})

export const clearCart = () => ({
	type: CLEAR_CART
})

export const assignFoodTruckID = (id) => ({
	type: ASSIGN_FOODTRUCK_ID,
	id
})

// REDUCER

const initialState = {foodTruckID: 1, items: []}

const shoppingCartReducer = (state = initialState, action) => {
	switch(action.type){
		case ADD_ITEM:
			let newState = Object.assign({}, state)
			let currentCart = newState.items;  //[{menuItem: blah, quantity: 4}, {menuItem, quantity}]
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
			break;

		case REMOVE_ITEM:
			newState = Object.assign({}, state)
			currentCart = newState.items;  //[{menuItem: blah, quantity: 4}, {menuItem, quantity}]

			currentCart.forEach(item, index => {
				if (item.menuItem === action.menuItem){
					item.quantity--
					if(item.quantity === 0){
						currentCart.splice(index,1)
					}
				}
			})
			return newState;
			break;

		case CLEAR_CART:
			newState = Object.assign({}, state, {items: []})
			return newState;
			break;

		case ASSIGN_FOODTRUCK_ID:
			newState = Object.assign({}, state, {foodTruckID: action.id})
			return newState;
			break;

		default:
			return state;
	}
}

export default shoppingCartReducer;
