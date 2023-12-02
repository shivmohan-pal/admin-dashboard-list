export const initialState = {
    total:0,
    data : [],
}


const dataReducer = (state,action) => {
    const {type, payload} = action;

    switch(type){
     case 'remove' : return {...state,data: payload.data}

        default : console.log(`${type} not defined in cases`);
    }
}

export default dataReducer;