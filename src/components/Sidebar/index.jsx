import React, { useState } from "react";
import styles from "./Sidebar.module.css"
import feedback from "../../assets/Images/feedback.svg"
import burger from '../../assets/Images/burger.svg'
import close from '../../assets/Images/close.svg'

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  
  const click = () => {
    setOpen(!isOpen);
    
  };


  return (
    <div>
         <button className={styles.but} onClick={click}>
    
    <img src={burger} />

  </button>
        <div className={isOpen ? styles.sideBar : styles.open}>
      
    
        <button className={styles.close} onClick={click}>
    
    <img src={close} onClick={click}/>

</button>
     
      <nav className={styles.nav}>
     
      <div><img src={feedback } alt="" />  <a  href="#/feedback?sellingType=isActiveDelivery">Feedback</a></div>  
      </nav>
    </div>

    </div>
  );
};

export default SideBar;