import * as types from '../actions/actionTypes';


let counterReducer= (state = {count:0}, action)=>{
    const count = state.count;
    switch (action.type) {
        case types.increase:
            return { count: count + 1 };
        default:
            return state
    }
};

export default counterReducer;

