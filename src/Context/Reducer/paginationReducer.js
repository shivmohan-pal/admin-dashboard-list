
export const initialState = {
 page:1,
}

const paginationReducer =(state,action)=>{
const {type,payload} = action;

switch(type){
 case "increase": return {...state, page: state.page===payload.totalPages? payload.totalPages : state.page + 1}
 case "decrease": return {...state, page: state.page===1? 1 : state.page - 1}
 case "numClick": return {...state, page:payload.num}
 case 'last' : return {...state, page: payload.totalPages}
 case "first" : return {...state,page: 1}
 case "reboot" : return {...state,page:1}
 default : 
 console.log(`${type} not defined in cases`)
}
}

export default paginationReducer;