import { initialState } from "../store/index.js"


const jobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_JOBS": 
			return {
				data:{
						...state.data,
			favourites: [
				...state.data.favourites,
				 action.payload
			]
				}
		
		}
		case "SET_ERROR": 
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

export default jobsReducer





