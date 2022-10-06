import {memo} from "react"
import {useDispatch} from "react-redux"
import {incrementQty,decrementQty,delFromStruk} from "../../redux/actions/itemActions"
import {format} from "../../helper"
const StrukItem = ({id,mark,price,qty}) => {
  const dispatch= useDispatch()
  const handleDecrement = () => {
    dispatch(decrementQty({id,mark,price,qty}))
  }
  const handleIncrement = () => {
    dispatch(incrementQty({id,mark,price,qty}))
  }
  const handleDelete = () => {
    dispatch(delFromStruk(id))
  }
  return (
    <div className="col col-12 mb-3 card  py-3 ">
    <div className="row ">
    <div className="col col-4">
     <span>{mark} @ {format(price)}</span>
    </div>
    <div className="col col-5">
     <div className="button-group">
     <button className={`btn btn-sm text-light ${qty===1?'btn-light text-dark':'btn-secondary'}`} onClick={handleDecrement}>-</button>
     <button className="btn bg-white border-none px-4">{qty}</button>
     <button className="btn btn-sm btn-secondary text-light" onClick={handleIncrement}>+</button>
     </div>
     </div>
         <div className="col col-3">
     <span> = {format(price*qty)}</span>
     
    </div>
    <button className="col col-8 mx-5 mt-3 btn btn-danger" onClick={handleDelete}>
    remove
    </button>
    </div>
    </div>
    )
}

export default memo(StrukItem)