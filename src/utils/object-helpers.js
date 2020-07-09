export const updateObjectInArray = (items, idtemId, objPropName, newObjProps) => {
   return items.map( u =>  {
        if (u[objPropName] === idtemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
