import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useTotal } from '../../hooks/useTotal'
import styles from './OrderFooter.module.css'
const OrderFooter = () => {
  const products = useSelector((state) => state.cart.products);
const navigate=useNavigate()

const total = useTotal()
  return (
    <div>
<div className={styles.orderFooterDiv}>
<div className={styles.orderFooterDiv1}>
<div ><span className={styles.orderSpan}><label className={styles.orderLabel}><div className={styles.orderlabelDiv}><img src="	https://www.pizza-hut.am/assets/images/app_2/delivery.svg" alt="" /><div >Delivery</div></div></label></span></div>
<div className={styles.sreviceDiv}> Service</div> 
</div>

<div style={{display:'flex',justifyContent:'space-between'}}>
    <div className={styles.basketDiv}>
<div><div className={styles.totalDiv}>Total</div></div>
<div className={styles.totalDiv1}>
    <span>{total}</span><span style={{fontSize:'13px',fontWeight:'600'}}>AMD</span>
</div>
    </div>
    <div className={styles.basketDiv1} onClick={()=>navigate('/orderBasket')}>
ORDER
<div>

  <img src="https://www.pizza-hut.am/assets/images/app_2/basketWhite.svg" alt="" /><span className={styles.divCount}>{products.length}</span>
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default OrderFooter