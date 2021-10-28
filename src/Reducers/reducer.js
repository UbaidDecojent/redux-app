

const initialState = 0;

const addCart = (state = initialState, action) =>{
    switch(action.type){
        case "add_to_Cart": return state + 1
        default: return state;
    }
}

export default addCart;