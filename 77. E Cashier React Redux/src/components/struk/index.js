import React,{memo} from "react"
import StrukItem from "./StrukItem"
import Pembayaran from "./Pembayaran"
import {useSelector} from "react-redux"
const Struk = () => {
  
  const itemState = useSelector(state=>state)
  return (
    <div className="card shadow px-3 py-4">
    <h4>Data Pembelian</h4>
    <div className="row">
    {itemState.items.map(({id,mark,price,qty},index)=>(
    <StrukItem  key={index} id={id} mark={mark} price={price} qty={qty} />
    
    ))}
    </div>
   <Pembayaran />
    
    </div>
    )
}

export default memo(Struk)