import React,{ useState} from 'react'
import search from '../../assets/Images/search.svg'
import styles from './Search.module.css'
import { products} from '../../data/data'
const Search = () => {
  const [query, setQuery] = useState("")

  return (
    <div >
    <div className={styles.searchDiv}>
       <div className={styles.inputDiv}> <input placeholder='Type the name of a dish...' type="text"    onChange={event => setQuery(event.target.value)}/></div>
       
        <div className={styles.span}><img src={search} alt=''/></div>
      
    </div>
  <div style={{display:'flex'}}>
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
          <div  >
      <img src={post.picture} alt="" />
      <div className={styles.searchDiv1}>
      
      </div>
      <div className={styles.nameDiv}>{post.name}
      <div>{post.price} AMD</div>
      
      </div>
      <div className={styles.addDiv}>
        
      <div>ADD</div>
        </div>
      </div>
      </div>
      </div>
      </div>
     
    </div>
    
  ))
}
</div>
</div>
   
  )
}

export default Search;