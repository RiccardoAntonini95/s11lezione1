const initialState = {
    favourites: []
}

const mainReducer = (state = initialState, action) => {
    if (action.type === 'ADD_FAVOURITES'){
        return {
            ...state,
            favourites: [...state.favourites, action.payload]
        }
    } else if(action.type === 'REMOVE_FAVOURITES'){
        return {
            ...state,
            favourites: [state.favourites.filter((fav,i) => i === action.payload )]
        }
    }
}

export default mainReducer