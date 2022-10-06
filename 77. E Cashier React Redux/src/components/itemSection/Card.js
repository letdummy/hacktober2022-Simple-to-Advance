import React,{memo} from "react"
import {useDispatch} from "react-redux"
import {addToStruk} from "../../redux/actions/itemActions"
import {format} from "../../helper"
const Card = ({id,mark,price}) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addToStruk({id,mark,price}))
  }
  return (
    <div className="card shadow px-2 py-3 col">
    <div className="card-header">
    <h4>{mark}</h4>
    </div>
    <div className="card-body">Price : {format(price)}</div>
    <div className="card-footer">
      <button className="btn btn-sm btn-success fw-bold text-white" onClick={handleClick}>Tambah Ke Struk</button>
    </div>
    </div>
    )
}
export default memo(Card)