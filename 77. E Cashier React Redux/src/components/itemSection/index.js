import {memo} from "react"
import dataBarang from "../../dataBarang"
import Card from "./Card"
const ItemSection = () => {
  return (
    <div className="row justify-content-center mx-auto my-3">
    {dataBarang.map((data,index)=>(
      <div key={index} className="col col-12 col-md-6  mb-2">
      <Card id={data.id} mark={data.mark} price={data.price}  />
      </div>
      ))}
      </div>
    )
    
}

export default memo(ItemSection)