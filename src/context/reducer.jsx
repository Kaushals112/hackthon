const reducer=(state,action)=>{
    switch (action.type) {
     case "SET_LOADING":
        console.log(action.payload);
        return{
            ...state,
            note:action.payload

        }
        case "GET_LANG":
            console.log(action.payload);
            return{
                ...state,
                language:action.payload
    
            }
      
    default:
        console.log(action.payload);
        return{
            ...state,
            note:action.payload
        }
    }
}
export default reducer