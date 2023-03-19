import {
  ADD_TO_STRUK,
  DEL_FROM_STRUK,
  INCREMENT_QTY,
  DECREMENT_QTY,
  PAID
  
} from "../types/itemTypes"

export const addToStruk =  (payload) => {
  return {type:ADD_TO_STRUK,payload}
}
export const delFromStruk = (payload) => {
  return {type:DEL_FROM_STRUK,payload}
}
export const incrementQty = (id) => {
  return {type:INCREMENT_QTY,payload:id}
}
export const decrementQty = (id) => {
  return {type:DECREMENT_QTY,payload:id}
}
export const paid = (payload) => {
  return {type:PAID, payload}
}