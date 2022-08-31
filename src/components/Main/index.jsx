
import MySlider from './components/Slider'
import React from 'react'
import Search from '../Search';
import styles from './Main.module.css'
import Catalog from './components/Catalog';
import { NavLink, useNavigate } from 'react-router-dom';
import MainSmall from './components/MainSmall';
const Main = () => {
    const navigate = useNavigate();
  return (
    <div  className={styles.mainContainer}>
        <div className={styles.productsDivContainer}>
            <div className={styles.productsDiv}  ><NavLink to='/products'> ALL PRODUCTS  </NavLink> </div>
            <div><Search/></div>
        </div>
        <div className={styles.cont}>
    
        <MySlider/>
        <Catalog />
        </div>
        <div className={styles.cont1}>
          <MainSmall/>
        </div>
    </div>
  )
}

export default Main;