import React from 'react'
import styles from './MainSmall.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { asyncToggleTheme } from '../../../../store/Slices.js/themeSlice'
import SmallFooter from '../../../SmallFooter'

const MainSmall= () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
    <div className={styles.mainSmallContainer}>
       <div className={styles.pizzaImg}>
    
    <div className={styles.img} onClick ={()=>navigate('/varietyPizzas')}>  <div className={styles.img1}></div>
    <div className={styles.namePizzas}><p>PIZZAS</p> </div>
    </div>
     

      </div>
      <div className={styles.pizzaImg}>
 <div className={styles.img} onClick ={()=>navigate('/varietyPizzaHotDog')}> <div className={styles.img2}></div> </div> 
   <div className={styles.namePizzas}><p>PIZZA HOT-DOG</p> </div>
      </div>
      <div className={styles.pizzaImg}>
      <div className={styles.img}  onClick ={()=>navigate('/varietySalads')}><div className={styles.img3}></div> </div> 
       <div className={styles.namePizzas}><p> SALADS</p></div>
      </div>
      <div className={styles.pizzaImg}>
   <div className={styles.img} onClick ={()=>navigate('/varietyStarters')}><div className={styles.img4}></div> </div> 
     <div className={styles.namePizzas}><p> STARTES</p> </div>
      </div>
      <div className={styles.pizzaImg}>
     <div className={styles.img} onClick ={()=>navigate('/varietySandwiches')}> <div className={styles.img5}></div>  </div>
         <div className={styles.namePizzas}><p>SANDWICHES AND ROLL</p> </div>
      </div>
      <div className={styles.pizzaImg}>
     <div className={styles.img} onClick ={()=>navigate('/varietyBoxers')}> <div className={styles.img6}></div></div>
      <div className={styles.namePizzas}><p> BOXERS</p> </div>
      </div>
      <div className={styles.pizzaImg}>
      <div className={styles.img} onClick ={()=>navigate('/varietyBeverages')}><div className={styles.img7}></div></div>
      <div className={styles.namePizzas}><p>BEVERAGES</p> </div>
      </div>
      <div className={styles.pizzaImg}>
      <div className={styles.img} onClick ={()=>navigate('/varietySouses')}><div className={styles.img8}></div></div>
      <div className={styles.namePizzas}><p>SAUCES</p> </div>
      </div>
     

    </div>
    <div className={styles.container}>
  <label className={styles.switch} for="checkbox" title="Change color scheme to dark mode">
    <input type="checkbox" id="checkbox" />
   
    
    <div  className={ `${styles.slider} ${styles.round}`  } onClick={() => dispatch(asyncToggleTheme())} >
    <div className={styles.toggle1}> Light Mode</div>
    <div className={styles.toggle}> Dark Mode</div>
           
    </div>
    
  </label>
 
  
</div>

<div className={styles.aDiv}>
<a target="_blank" href="https://bonee.net">@ 2021 Copyright: bonee.net</a>
</div>


<SmallFooter/>


    </div>
  )
}

export default MainSmall