import React from 'react'
import { useNavigate } from 'react-router-dom'

import SmallFooter from '../SmallFooter'
import { useSelector, useDispatch } from 'react-redux'
import { resetCart ,increament,decrement,removeFromCart} from '../../store/Slices.js/productsSlice'
import styles from './OrderBasket.module.css'
import { useTotal } from '../../hooks/useTotal'

const OrderBasket = () => {
    const products = useSelector((state) => state.cart.products);
    const navigate= useNavigate()
    const dispatch = useDispatch();
    const total = useTotal()
  return (
    <div>
        <div className={styles.orderBasketContainer}>

<div className={styles.orderBasketHeader}>
    <div className={styles.orderBasketHeaderDiv}>
<div className={styles.orderBasketArrowDiv} onClick={()=>navigate('/varietyPizzas')}>
    <img src="https://www.pizza-hut.am/assets/images/app_2/arrow.svg" alt="" />
</div>

<div className={styles.textBasket}>
<div>basket</div>
</div>

<div className={styles.basketDivDelet}>
<img src="https://www.pizza-hut.am/assets/images/app_2/delete.svg" alt="" />
</div>
    </div>


</div>

{products.map((product,index) => {
                return (
                  <li style={{listStyleType: 'none',fontSize:'14px',justifyContent:'space-between',marginTop:'20px'}}>
                    
                 
                <img style={{width:'100px',height:'100px'}} src={product.picture} alt="" />   <span>{product.name} </span> 
                    
                      <div className={styles.plusMinusDiv}>
    <span onClick={() => {
                      if(product.count > 1) {
                        dispatch(decrement(product));
                      
                      }
                      
                  }} >
        -
    </span>
    <input value={product.count}/>
    <span onClick={()=>dispatch(increament(product))}>
        +
    </span>

</div>
<div>
    {product.price}
    <span>AMD</span>
</div>
                      
                  </li>
                  
                  
                );
               
              })}

<div className={styles.basketMainDiv}>
<div className={styles.basketMainDiv1}>
<div className={styles.basketMainDiv2}>
<div className={styles.basketMainDiv3}>Selected menu </div>
</div>

<div className={styles.basketMainDiv4}>
<div className={styles.basketMainDiv5}></div>
</div>



</div>
</div>

<div className={styles.selectedMenu}>
<div className={styles.selectedMenuDiv}>
<div>Subtotal</div>
<div>{total} <span >AMD</span></div>
</div>
</div>

<div className={styles.selectedMenuDiv1}>
<div >Total</div>
<div > {total} <span >AMD</span></div>
</div>

<div className={styles.selectedMenuDiv2}>
<button  type="button" > Order </button>
</div>
        </div>
        <SmallFooter/>
    </div>
  )
}

export default OrderBasket