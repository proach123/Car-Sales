const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  
}

export const editReducer =(state = initialState, action) =>{
switch (action.type) {
  
    case 'ADD_FEATURE':
      // console.log(state, 'add feature state')
      // console.log('payload', action.payload)
      // console.log(state.car.features)
      state.car.features.forEach((item)=>{
        // console.log(item.name, "HELLO")
        if(item.name === action.payload.name){
          return alert('you can not have multiple of the same feature')
        } else return
      })
        let cost = state.car.price + action.payload.price
        // console.log(cost)
        return{
            ...state,
            car: {...state.car,
              price: cost,
            features: [...state.car.features, action.payload]}
        }
    case 'DELETE_FEATURE':
        let cleanFeat = state.car.features.filter((item)=>{
          return item !== action.payload
        })
        let lost = state.car.price - action.payload.price
        // console.log(lost)
      return {
        ...state,
        car: {
          ...state.car,
          price: lost,
          features: [...cleanFeat]
        }
      }

    default:
        return state
}
}
