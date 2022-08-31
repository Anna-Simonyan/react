import React from 'react'
import category from '../../../../assets/Images/categories.svg'
import styles from './Slider.module.css'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MySlider = () => {
    const navigate = useNavigate();
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
    
   

  return (
    <div className={styles.sliderContainer}>
<div className={styles.sliderChild}>
    <div className={styles.sliderChild1}>
    <div><img src={category} alt="" /> </div>
    <div className={styles.categoey}>CATEGORIES</div>
     
    </div>
    <div className={styles.a}><NavLink to='/products'> See All  </NavLink>
    </div>
    
</div>
<div className={styles.aaaaa}>
 
    <Slider {...settings} >
   
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
         
       
        </Slider>
       
        </div>

    </div>
  )
}

export default MySlider;