import { initialState } from "../store/index.js"


const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FAVOURITE": 
			return {
				data:{
						...state.data,
			favourites: [
				...state.data.favourites,
				 action.payload
			]
				}
		
		}
		case "REMOVE_FAVOURITE": 
			return {
				data: {
					...state.data,
			favourites: [
				...state.data.favourites.filter(element => element._id === action.payload._id)
			]
				}
			
		}
		default:
			return state 	
	}
}

export default mainReducer





