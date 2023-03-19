import {memo, useState, useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {paid as paidAction} from "../../redux/actions/itemActions"
 import {format} from "../../helper"
const Pembayaran= () => {
  const itemState = useSelector(state=>state)
  const dispatch = useDispatch()
  const [paid,setPaid] = useState(0)
  const handlePaid = event => {
    setPaid(event.target.value)
  }
  useEffect(()=>{
    
  dispatch(paidAction(paid))
  },[paid,dispatch])
  return (
     <div className="row">
    <div className="col col-12 d-flex justify-between mb-4">
    <b>Total :</b>
    <b>{format(itemState.total)}</b>
    </div>
    <div className="col col-12 d-flex justify-between mb-4">
    {itemState.items.length > 0 &&
    <>
    <b>Dibayar :</b>
    <div className="form-group ms-3">
    <input className="form-control form-control-sm" onChange={handlePaid} type="number" value={paid} />
    </div>
    </>
    }
    </div>
    <div className="col col-12 d-flex justify-between mb-4">
    <b>Kembali :</b>
    <b className={(itemState.bayar-itemState.total)<0?"text-danger":""}>{itemState.bayar > 0 ?
    "Rp. "+format(itemState.bayar- itemState.total)
    : ""}</b>
    </div>
    </div>
    )
}
export default memo(Pembayaran)