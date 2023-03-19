export function isExist(arr,target){
  return arr.findIndex(a => a.id === target.id)
}
export function countTotal(arr){
  return arr.reduce((acc,curr)=>acc+(curr.price*curr.qty),0)
}
export function format(number){
  return new Intl.NumberFormat("id-Id").format(number)
}