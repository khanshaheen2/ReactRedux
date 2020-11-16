import initialstate from "../state/age";

const reducer = (state=initialstate ,action:any)=>{
    switch (action.type) {
        case "AGE_UP":
            return {
                ...state,
                age: state.age + action.value
            }
            break;
    
        case "AGE_DOWN":
            return {
                ...state,
                age : state.age - action.value
            }
            break;
    }
    return state;
};
export default reducer;