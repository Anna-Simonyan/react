import React from 'react'
import styles from './SmallFooter.module.css'
import { NavLink } from 'react-router-dom'
import deliveri from '../../assets/Images/delivery.svg'
import { useSelector } from 'react-redux'
const SmallFooter = () => {
    const products = useSelector((state) => state.cart.products);
  return (
    <div>
        <div className={styles.mainSmallDivFooter}>
  <NavLink to='/home'>
<div className={styles.mainSmallDivFooter1}>
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23.48" class="ng-star-inserted"><g _ngcontent-ldj-c30="" id="Layer_2" data-name="Layer 2"><g _ngcontent-ldj-c30="" id="Layer_1-2" data-name="Layer 1"><g _ngcontent-ldj-c30="" class="cls-1"><path _ngcontent-ldj-c30="" d="M11,0c2.53,0,11,8.11,11,10.87v7.62a4.81,4.81,0,0,1-4.58,5H4.58a4.81,4.81,0,0,1-4.58-5V10.87C0,8.11,8.47,0,11,0Zm0,2A7.62,7.62,0,0,0,9.14,3.11,29.73,29.73,0,0,0,5.92,5.86C3.16,8.55,2.1,10.4,2,10.91v7.58a2.82,2.82,0,0,0,2.58,3H17.42a2.82,2.82,0,0,0,2.58-3V10.91c-.1-.5-1.16-2.35-3.92-5a29.73,29.73,0,0,0-3.22-2.75A7.62,7.62,0,0,0,11,2" class="cls-2"></path><path _ngcontent-ldj-c30="" d="M8,22.48v-6a3,3,0,1,1,6,0v6Z" class="cls-3"></path></g></g></g></svg>
<span>Home</span>
</div>
</NavLink>
<NavLink to='/about'>
<div className={styles.mainSmallDivFooter1}>
<img src="https://www.pizza-hut.am/assets/images/app_2/aboutUs.svg" alt="" />
<span >ABOUT US</span>
</div></NavLink>

<div className={styles.deliveriDiv}>
<ul>
    <li> 
  <div className={styles.deliveriImgDiv}>
    <img src={deliveri} alt="" />
   <span  > DELIVERY </span>
   </div>
    </li>
  
   
</ul>
</div>
<NavLink to='/orderBasket'>
<div className={styles.mainSmallDivFooter1}>
    {products.length}
<img src="https://www.pizza-hut.am/assets/images/app_2/basket.svg" alt="" />
<span >BASKET</span>
</div>
</NavLink>
<NavLink to = '/login'>
<div className={styles.mainSmallDivFooter1}>
<img src="	https://www.pizza-hut.am/assets/images/app_2/user.svg" alt="" />
<span >LOG IN</span>
</div>
</NavLink>
</div>
    </div>
  )
}

export default SmallFooter