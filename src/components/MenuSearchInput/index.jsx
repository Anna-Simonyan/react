import React, { useState } from 'react'
import styles from './MenuSearchInput.module.css'
import { useNavigate } from 'react-router-dom'
import { products } from '../../data/data'
import OrderFooter from '../OrderFooter'
const MenuSearchInput = () => {
  const [query, setQuery] = useState("")
    const [close, setClose] = useState(true)
    const navigate = useNavigate()
  return (
    <div>
        <div className={close ? styles.menuSearchInputContainer: styles.menuSearchInputContainer1}>
        <div   className={ styles.closeImgDiv} onClick={()=>navigate('/home')} ><img  src="https://www.pizza-hut.am/assets/images/app_2/close.svg"/></div>
<div className={styles.menuInp}>
  <input placeholder='Search'   onChange={event => setQuery(event.target.value)}/>
  </div>
<div className={ styles.menuSearchDiv}  >
<img src="	https://www.pizza-hut.am/assets/images/app_2/searchWhite.svg" alt="" />
    </div>
</div>

<div style={{marginTop:'50px'}}>
{
  products.filter(post => {
    if (query === '') {
    
    } else if (post.name.toLowerCase().startsWith(query.toLowerCase())) {
      return post;
    }
  }).map((post, index) => (
  <div  key={index} className={styles.divSearchInput}>
      <div >
        <div>
          <div >
          <div  style={{display:'flex',marginLeft: '1em',alignItems: 'center'}}>
      
      
      <img src={post.picture} alt="" />
      <div className={styles.searchDiv1}>
      
    
      
      </div>
      <div style={{display:'flex', flexDirection: 'column',marginLeft: '1em', width: '100%'}}>
      <div className={styles.nameDiv}>
        {post.name}
      </div>

      <div className={styles.divAdd} >
      <div style={{fontWeight: '600'}}>{post.price} AMD</div> 
      <div className={styles.addDiv}>ADD</div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
     
    </div>
    
  ))
}
</div>

<OrderFooter/>
    </div>
    
  )
}

export default MenuSearchInput