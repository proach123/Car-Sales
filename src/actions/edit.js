export const edit = (id)=>{
    return { type: 'ADD_FEATURE', payload: id }
}

export const deleteFeature = (id) =>{
    return {type: 'DELETE_FEATURE', payload: id}
}