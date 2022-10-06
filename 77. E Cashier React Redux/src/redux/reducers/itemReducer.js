import {
  ADD_TO_STRUK,
  DEL_FROM_STRUK,
  INCREMENT_QTY,
  DECREMENT_QTY,
  PAID
  
} from "../types/itemTypes"
import {isExist,countTotal} from "../../helper"
const initialState = {
  items:[],
  total:0,
  bayar:0,
  kembalian:0
}
const itemReducers = (state = initialState,action ) => {
  switch (action.type) {
    case ADD_TO_STRUK:
      const target = isExist(state.items,action.payload)
      if(target === -1){
        let newItem = action.payload
        newItem.qty = 1
         const stateResult = {
          ...state,
          items:[...state.items,newItem]
        }
        return {
          ...stateResult,
          total:countTotal(stateResult.items)
        }
      }
      
        const items = state.items
        items[target].qty += 1
        return {
          ...state,
          items,
          total: countTotal(items)
        }
      
    case INCREMENT_QTY :
        const itemsToInc = state.items.map(item => {
          if(item.id === action.payload.id){
            return {
              ...item,
              qty:item.qty + 1
            }
          }else{
            return {...item}
          }
        })
      return {
        ...state,
        items:itemsToInc,
        total:countTotal(itemsToInc)
      }
     case DECREMENT_QTY :
        const itemstoDec = state.items.map(item => {
          if(item.id === action.payload.id){
            if(item.qty <= 1){
              return {...item}
            }
            return {
              ...item,
              qty:item.qty - 1
            }
          }else{
            return {...item}
          }
        })
      return {
        ...state,
        items:itemstoDec,
        total:countTotal(itemstoDec)
      }
    case PAID:
      return {
        ...state,
        bayar:action.payload
      }
    case DEL_FROM_STRUK:
      const afterDelete = {
        ...state,
        items:[...state.items.filter(i => i.id !== action.payload)]
      }
      return {
        ...state,
        ...afterDelete,
        total:countTotal(afterDelete.items)
      }
    default:return state
  }
}

export default itemReducers


