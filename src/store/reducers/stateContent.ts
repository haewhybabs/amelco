import * as Actions from '../actions';
const initialState = {
    selectedNumbers:[],
};
export default function stateContent(state = initialState, action = {payload:[],type:''}) {
    switch (action.type) {
        case Actions.UPDATE_NUMBER:
            return {
                ...state,
                selectedNumbers:[...action.payload]
            }
        
    }
    
    return state
}