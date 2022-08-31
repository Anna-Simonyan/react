
import React from 'react'
import Header from '../../components/Header'
import category from '../../assets/Images/categories.svg'
import Search from '../../components/Search'
import pizzaHotDog from '../../assets/Images/pizza.jpg'
import salad from '../../assets/Images/salad.jpg'
import roll from '../../assets/Images/roll.jpg'
import sendwich from '../../assets/Images/sendwich.jpg'
import pattato from '../../assets/Images/pattato.jpg'
import cola from '../../assets/Images/cola.jpg'
import tomatto from '../../assets/Images/tomatto.jpg'
import pizzas from '../../assets/Images/pizzas.jpg'
import { Outlet } from 'react-router-dom'
import styles from './Products.module.css'
import { NavLink } from 'react-router-dom'

const Product = () => {
    
  return (
   
    <div>


      
        <div className={styles.productHeader}> <Header/></div>
        
        <div className={styles.menuDiv}>
        
            <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/home'>Main page &nbsp;&nbsp;&nbsp;</NavLink> 
            <i class="fa fa-angle-right" aria-hidden="true"></i> 
          
            <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to = '/products'>&nbsp;&nbsp;&nbsp;Menu</NavLink>
         
        </div>
        <div className={styles.sliderChild}>
    <div className={styles.sliderChild1}>
    <div style={{display:'flex'}}><img src={category} alt="" />  <div className={styles.categoey}>CATEGORIES  </div></div>
   
    <div><Search/></div>
   
    </div>
 
    
</div>

<div className={styles.productDiv}>
<div className={styles.pizzaImg}>

<NavLink className={({ isActive }) => (isActive ? styles.a : styles.b )} to='/varietyPizzas'><div  className={styles.img} ><img   src={pizzas} alt="" />  </div>   </NavLink> 
<div className={styles.namePizzas}><p>PIZZAS</p> </div>

     

      </div>
      
      <div className={styles.pizzaImg}>
      
 <NavLink className={({ isActive }) => (isActive ? styles.a : styles.b )}  to='/varietyPizzaHotDog'><div className={styles.img} > <img   src={pizzaHotDog} alt="" /> </div> </NavLink>
   <div className={styles.namePizzas}><p>PIZZA HOT-DOG</p> </div>
      </div>
      <div className={styles.pizzaImg}>
     <NavLink className={({ isActive }) => (isActive ? styles.a : styles.b )} to='/varietySalads'><div className={styles.img}  ><img  src={salad} alt="" /> </div> </NavLink> 
       <div className={styles.namePizzas}><p> SALADS</p></div>
      </div>
      <div className={styles.pizzaImg}>
  <NavLink className={({ isActive }) => (isActive ? styles.a : styles.b )} to='/varietyStarters'> <div className={styles.img} > <img  src={roll} alt="" /></div> </NavLink>
     <div className={styles.namePizzas}><p> STARTES</p> </div>
      </div>
      <div className={styles.pizzaImg}>
    <NavLink className={({ isActive }) => (isActive ? styles.a : styles.b )} to = '/VarietySandwiches'> <div className={styles.img} >    <img  src={sendwich} alt="" /></div></NavLink>
         <div className={styles.namePizzas}><p>SANDWICHES AND ROLL</p> </div>
      </div>
      <div className={styles.pizzaImg}>
    <NavLink className={({ isActive }) => (isActive ? styles.a : styles.b )} to='/VarietyBoxers'><div className={styles.img} > <img  src={pattato} alt="" /></div></NavLink> 
      <div className={styles.namePizzas}><p> BOXERS</p> </div>
      </div>
      <div className={styles.pizzaImg}>
    <NavLink className={({ isActive }) => (isActive ? styles.a : styles.b )} to='/varietyBeverages'>  <div className={styles.img} ><img  src={cola} alt="" /></div></NavLink>
      <div className={styles.namePizzas}><p>BEVERAGES</p> </div>
      </div>
      <div className={styles.pizzaImg}>
    <NavLink className={({ isActive }) => (isActive ? styles.a : styles.b )} to='/varietySouses'>  <div className={styles.img} ><img  src={tomatto} alt="" /></div></NavLink>
      <div className={styles.namePizzas}><p>SAUCES</p> </div>
      </div>
     
   
</div>



<Outlet />
    </div>
  )
}

export default Product