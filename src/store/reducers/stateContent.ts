import * as Actions from '../actions';
const initialState = {
    userInfo:{},
    newsData:[]
};
export default function stateContent(state = initialState, action = {payload:{},type:''}) {
    switch (action.type) {
        case Actions.userInfo:
            return {
                ...state,
                userInfo:{...action.payload}
            }
        case Actions.newsData:
            return{
                ...state,
                newsData:[...state.newsData,action.payload]
            }
    }
    
    return state
}