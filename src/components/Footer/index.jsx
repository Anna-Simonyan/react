import React from 'react'
import location from '../../assets/Images/location.svg'
import phones from '../../assets/Images/phones.svg'
import email from '../../assets/Images/email.svg'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
<div className={styles.footerDiv}>
    <div className={styles.locationDivContainer}>
    <div className={styles.locationDiv}>
        <img src={location} alt="" />
        <a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.17417620000001,44.5140536"><span _ngcontent-ije-c73="" class="locationName">15 Tigran Mets Avenue, Երևան, Հայաստան</span></a>

    </div>
    <div className={styles.locationDiv}>
        <img src={location} alt="" />
        <a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.1835788,44.5151964"><span _ngcontent-ije-c73="" class="locationName">1 Northern Ave, Երևան, Հայաստան</span></a>
    </div>

    <div className={styles.locationDiv}>
        <img  src={location} alt="" />
        <a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.1972484,44.5676688"><span _ngcontent-ije-c73="" class="locationName">MEGA MALL ARMENIA, Gai Avenue, Yerevan, Armenia</span></a>
    </div>

    <div className={styles.locationDiv}>
        <img src={location} alt="" />
        <a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.1530752,44.4988699"><span _ngcontent-ije-c73="" class="locationName">Yerevan Mall Food court, Arshakunyats Avenue, Yerevan, Armenia</span></a>
    </div>
    <div className={styles.locationDiv}>
        <img src={location} alt="" />
        <a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.2015656,44.4958549"><span _ngcontent-ije-c73="" class="locationName">5 Կոմիտասի պողոտա, Երևան, Հայաստան</span></a>
    </div>

</div>
<div style={{display:'flex'}}>
<div className={styles.phoneDiv}>
    <img src={phones} alt="" />
    <a   href="tel:060505505">060505505</a>
</div>
<div className={styles.phoneDiv}>
    <img  src={email} alt="" />
    <a  href="mailto:delivery@derjavas.am">delivery@derjavas.am</a>
</div>
</div>



<div className={styles.ulDiv}>
    <ul>
        <li> <a href="https://www.facebook.com/PizzaHut.AM/"><i className="fa fa-facebook" aria-hidden="true" style={{color:'white'}}></i></a></li>
       
        <li><a href="https://www.instagram.com/pizzahut_armenia/"><i className="fa fa-instagram" aria-hidden="true" style={{color:'white'}}></i></a></li>
    </ul>
</div>
</div>

<div className={styles.borderDiv}>

</div>

<div className={styles.linkDiv}>

<div className={styles.linkDiv1}>
<NavLink to='/home'>Home</NavLink>
<NavLink to='/about'> About Us</NavLink>
<a _ngcontent-ije-c30="" target="_blank" class="footerItem mr-5" href="https://bonee.net/terms-and-conditions-en.html">Terms and Conditions</a>
<a _ngcontent-ije-c30="" target="_blank" class="footerItem mr-5" href="https://bonee.net/privacy-policy-en.html">Privacy policy</a>

</div>

<div>
<a style={{color: '#969696'}} href="">@ 2021 Copyright: bonee.net</a> 
</div>
</div>
    </div>
  )
}

export default Footer