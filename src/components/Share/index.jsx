import React,{ useState} from 'react'
import styles from './Share.module.css'
const Share = () => {
    const [isOpen, setOpen] = useState(false);
  return (
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
            <div className={styles.shareDiv}>

    <div className={styles.share} onClick={()=>setOpen(!isOpen)}><i className="fa fa-share-alt" aria-hidden="true"></i> &nbsp;Share</div>
    
</div>
    </div>
  )
}

export default Share