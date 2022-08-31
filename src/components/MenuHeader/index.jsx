import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MenuHeader.module.css'


const MenuHeader = (props ) => {
    
    const [active, setActive] = useState(false)
    

const navigate = useNavigate()

  return (
    <div>
<div className={styles.menuHeaderDiv}>
    <div className={styles.menuHeaderDiv1}>
<div className={styles.menuHeaderDiv2}>
<div className={styles.menuImageDiv} onClick={()=>navigate('/home')}><img src="https://www.pizza-hut.am/assets/images/app_2/arrow.svg" alt="" /></div>
<div>MENU</div>

</div>

<div style={{display:'flex'}}>
    <div className={styles.menuDiv}>
      
        <div  onClick={()=>setActive(!active)} className={active?styles.menuDiv1:styles.menuDiv11} >
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" onClick={()=>setActive(!active)} className={active?styles.menuSvg:styles.menuSvg1} ><g _ngcontent-gno-c71="" id="Layer_2" data-name="Layer 2"><g _ngcontent-gno-c71="" id="Layer_1-2" data-name="Layer 1"><rect _ngcontent-gno-c71="" x="1" y="1" width="5.25" height="5.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="9.75" y="1" width="5.25" height="5.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="9.75" y="9.75" width="5.25" height="5.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="1" y="9.75" width="5.25" height="5.25" class="cls-view"></rect></g></g></svg>
    
        </div>
        <div   onClick={()=>setActive(!active)} className={active?styles.menuDiv2:styles.menuDiv22}>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 15.75"  onClick={()=>setActive(!active)} className={active?styles.menuSvg1:styles.menuSvg}><g _ngcontent-gno-c71="" id="Layer_2" data-name="Layer 2"><g _ngcontent-gno-c71="" id="Layer_1-2" data-name="Layer 1"><rect _ngcontent-gno-c71="" x="0.75" y="0.75" width="2.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="5.5" y="0.75" width="9.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="5.5" y="6.75" width="9.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="5.5" y="12.75" width="9.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="0.75" y="6.75" width="2.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="0.75" y="12.75" width="2.25" height="2.25" class="cls-view"></rect></g></g></svg>
        </div>
    </div>

    <div className={styles.menuSearchDiv}>
<img src="	https://www.pizza-hut.am/assets/images/app_2/searchWhite.svg" alt="" />
    </div>
    <div  className={styles.menuLangveagesDiv}>
<div>EN</div>
    </div>
</div>
    </div>
</div>
    </div>
  )
}

export default MenuHeader