const initialState ={
    counter: 0
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'INCREMENT': {
            return{
                ...state,
                counter : state.counter +1
            }
        }
        case 'INCREMENTFOR': {
            return{
                ...state,
                counter : state.counter + action.payLoad
            }
        }
        case 'DECREMENTFOR': {
            return{
                ...state,
                counter : state.counter - action.payLoad
            }
        }
        case 'DECREMENT': {
            return{
                ...state,
                counter : state.counter -1
            }
        }
        
        default:
            return{
                ...state
            }
    }
}

export default reducer;