import React,{useState} from 'react'
import Header from '../../components/Header'
import about from '../../assets/Images/about.jpg'
import location from '../../assets/Images/location.svg'
import phones from '../../assets/Images/phones.svg'
import website from '../../assets/Images/website.svg'
import email from '../../assets/Images/email.svg'
import social from '../../assets/Images/social.svg'
import hours from '../../assets/Images/hours.svg'
import facilityFeatures from '../../assets/Images/facilityFeatures.svg'
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import styles from './About.module.css'
import Footer from '../../components/Footer'
import SmallFooter from '../../components/SmallFooter'

import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
  return (
    <div>
        <div className={styles.headerDivArrow}>
            
<div className={styles.headerDivArrow1} onClick={()=>  navigate("/home")}>
<img src="https://www.pizza-hut.am/assets/images/app_2/arrowWhite.svg" alt="" />
</div>
<div className={styles.headerDivArrow1}>
<img src="	https://www.pizza-hut.am/assets/images/app_2/logOutWhite.svg" alt="" />
</div>
        </div>
       <div className={styles.headerDiv}><Header/></div> 
        <div className={styles.aboutImgDiv}>
            <img src={about} alt="" />


            <div className={styles.aboutName}>
            <div className={styles.aboutName1}>Pizza Hut</div>
            <div className={styles.aboutName2}>Open Now...</div>
        </div>
        </div>
<div>  
    <div className={isOpen ? styles.sideBar: styles.open}>
<div  className={styles.effect}>
                <div className={styles.divButton}>
                    <button onClick={()=>setOpen(!isOpen)}><i class="fa fa-chevron-right"></i></button>
                    <a className={styles.a} href="https://www.facebook.com/PizzaHut.AM/" ><i aria-hidden="true" class="fa fa-facebook-f"></i><div></div></a>
               <div className={styles.aa}><a href="https://www.twitter.com/PizzaHut.AM/" title="Share on Twitter" class="tw"><i aria-hidden="true" class="fa fa-twitter"></i></a></div> 
             <div className={styles.aaa}>  <a   title="Share on Pinterest" class="pinterest"><i  aria-hidden="true" class="fa fa-pinterest-p"></i></a></div> 
              <div className={styles.aaaa}> <a  title="Share on Linked In" class="in"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div> 
                </div>
               
            </div>
            </div>
        <div className={styles.aboutInfo}>
           <div className={styles.openNowDiv}>
            <div>
            <span>Pizza Hut</span>
            <span className={styles.openSpan}>Open Now</span>
            </div>
           </div>
           <div className={styles.shareDiv6}>
<div className={styles.shareDiv}>

    <div className={styles.share} onClick={()=>setOpen(!isOpen)}><i className="fa fa-share-alt" aria-hidden="true"></i> &nbsp;Share</div>
    
</div>
</div>
<div className={styles.aboutDescription}>
<p>In 1958 brothers Frank and Dan Carney decided to open a large pizza restaurant
    in Wichita (Kansas). When one of their friends offered them to open a rather rare 
    restaurant at that time, they thought that the idea could bring them success and borrowed
     $ 600 from their mother to start the business with their partner, John Bender. Carney 
     brothers and John Bender rented a small building and obtained the equipment needed for
      cooking pizzas and opened the first Pizza Hut restaurant at 503 South Blaff street in 
      the center of Wichita. On the opening day, they offered free pizzas to people in order
       to get the interest of the community. The small restaurant was meant for 25 people and 
       looked like a hut ... this is how the concept of "Pizza Hut" was born.</p>
<p>A year later, in 1959, Pizza Hut was registered in Kansas 
    City and Dick Hassur opened the first licensed restaurant 
    in Topeka (Kansas). Fifteen years later, the first Pizza Hut opened in the
     United Kingdom and since then Pizza Hut became the largest
      pizza producing company in the world.</p>
<p>Pizza Hut controls over 11,000 pizza restaurants and delivery points in 90
     countries around the world. </p>
<p>Pizza Hut international chain of restaurants is represented in 
    Armenia by <a style={{color:'#007bff'}} href="http://derjavas.am"><strong>Derjava Group of Companies</strong></a> Derjava Group of Companies and currently there are already 
    4 restaurants in Yerevan. </p>
        </div>

        <div className={styles.locationContainer}>
            <div  className={styles.locationDiv}>
<div  className={styles.location}>
    <img src={location} alt="" />
    <span>LOCATION</span>
</div>
<div className={styles.locationADiv}>
<div>
    <a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.17417620000001,44.5140536"><span _ngcontent-ije-c73="" class="locationName">15 Tigran Mets Avenue, Երևան, Հայաստան</span></a>

   
</div>
<div>
<a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.1835788,44.5151964"><span _ngcontent-ije-c73="" class="locationName">1 Northern Ave, Երևան, Հայաստան</span></a>
</div>

<div>
<a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.1972484,44.5676688"><span _ngcontent-ije-c73="" class="locationName">MEGA MALL ARMENIA, Gai Avenue, Yerevan, Armenia</span></a>
</div>

<div>
<a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.1530752,44.4988699"><span _ngcontent-ije-c73="" class="locationName">Yerevan Mall Food court, Arshakunyats Avenue, Yerevan, Armenia</span></a>
</div>

<div>
<a _ngcontent-ije-c73="" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=40.2015656,44.4958549"><span _ngcontent-ije-c73="" class="locationName">5 Կոմիտասի պողոտա, Երևան, Հայաստան</span></a>
</div>
</div>
<div className={styles.numberDiv}>
<div className={styles.aboutPhoneNumber}>
<div className={styles.phoneNumber}>
<img src={phones} alt="" />
<span> PHONES </span>
</div>
</div>
<div className={styles.aDiv}>
<a   href="tel:060505505">060505505</a>
</div>

<div className={styles.aboutWebSite}>
<img src={website} alt="" />
<span> WEB SITE</span>
</div>
<div className={styles.aDiv}>
<a  target="_blank" href="https://pizza-hut.am/">https://pizza-hut.am/</a>
</div>

<div className={styles.aboutWebSite}>
<img src={email} alt="" />
<span>EMAIL</span>
</div>
<div className={styles.aDiv}>
<a  href="mailto:delivery@derjavas.am">delivery@derjavas.am</a>
</div>
<div className={styles.aboutWebSite}>
<img src={social} alt="" />
<span>SOCIAL</span>
</div>
<div className={styles.facebookDiv}>
    <ul>
        <li><a _ngcontent-ije-c73="" target="_blank" class="facebook social" href="https://www.facebook.com/PizzaHut.AM/"><i _ngcontent-ije-c73="" class="fa fa-facebook-f"></i></a></li>
        <li><a _ngcontent-ije-c73="" target="_blank" class="instagram social" href="https://www.instagram.com/pizzahut_armenia/"><i _ngcontent-ije-c73="" class="fa fa-instagram"></i></a></li>
    </ul>
</div>
</div>
            </div>
       

<div className={styles.workingDiv}>
<div className={styles.hoursDiv}>
    <img className={styles.hoursDivImg} src={hours} alt="" />
    <span>WORKING DAYS AND TIMES</span>
</div>

<div className={styles.weekDiv}>
    <p>
    Sunday
    </p>
    <div>
    <p>
    10:00 - 23:00
    </p>
</div>
</div>
<div className={styles.weekDiv}>
    <p>
    Monday
    </p>
    <div>
    <p>
    10:00 - 23:00
    </p>
</div>
</div>
<div className={styles.weekDiv}>
    <p>
    Tuesday
    </p>
    <div>
    <p>
    10:00 - 23:00
    </p>
</div>
</div>
<div className={styles.weekDiv}>
    <p>
    Wednesday
    </p>
    <div>
    <p>
    10:00 - 23:00
    </p>
</div>
</div>

<div className={styles.weekDiv}>
    <p>
    Thursday
    </p>
    <div>
    <p>
    10:00 - 23:00
    </p>
</div>
</div>
<div className={styles.weekDiv}>
    <p>
    Friday
    </p>
    <div>
    <p>
    10:00 - 23:00
    </p>
</div>
</div>
<div className={styles.weekDiv}>
    <p>
    Saturday
    </p>
    <div>
    <p>
    10:00 - 23:00
    </p>
</div>
</div>

<div className={styles.aboutFacility}>
<div className={styles.hoursDiv}>
    <img src={facilityFeatures} alt="" />
    <span>FACILITY FEATURES</span>
</div>
</div>

<div className={styles.aboutFacilityUlDiv}>
    <ul>
        <li><i class="fa fa-wifi" title="Free  Wi-Fi"></i></li>
        <li className={styles.li}><LocalParkingIcon sx={{width:'18px',color:'white'}}/></li>
        <li><i _ngcontent-ije-c73="" class="fa fa-leaf" title="Vegan Options"></i></li>
        <li><LocalShippingIcon /></li>
        <li><i _ngcontent-ije-c73="" class="fa fa-credit-card" title="Accept Credit Cards"></i></li>
        <li>< AgricultureIcon/></li>
    </ul>
</div>
</div>

        </div>
       
        </div>
        </div>
        
        <Footer/>
<div className={styles.smallfooter}><SmallFooter/></div>
       
    </div>
  )
}

export default About