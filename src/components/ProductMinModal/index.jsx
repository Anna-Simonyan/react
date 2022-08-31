import React,{ useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import pasketPlus from '../../assets/Images/basketPlus.svg'
import { addToCart } from '../../store/Slices.js/productsSlice'
import { increament,resetCart , } from '../../store/Slices.js/productsSlice'
import styles from './ProductMinModal.module.css'
import { useTotal } from '../../hooks/useTotal'
import close from '../../assets/Images/close.svg'
import Share from '../Share'
const ProductMinModal = ({ data, closeModal,plus,minus }) => {
  const total = useTotal()
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const items = useSelector((state) => state.cart.products);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const products = useSelector((state) => state.cart.products);
  
  
  const addToCartHandler = (item) => {
    const res = items.some(e => e.id === item.id)
    if(res) {
        dispatch(increament(item))
    } else {
        dispatch(addToCart(item))
  
    }
};

  return (
    <div>
 
    <div className={styles.ProductModalContainer}>
    
    
           
         <div className={styles.productModal}>
       
         <div  className={styles.divButClose}>
         <button className={styles.butClose}  onClick={closeModal}><img  src={close} alt="" /></button>
         
         </div>
         
            <div className={styles.productModal1}>
         
            
            <ul>
           
                    <div>
                        
                  <li style={{display:'flex',fontSize:'14px',marginTop:'20px'}}>
                  
              <div className={styles.modalImgDiv}>  <img  src={data.picture} alt="" /> </div><div className={styles.prDiv}> <div style={{display:'flex',justifyContent: 'space-between'}}><p className={styles.pName}>{data.name}  </p><div style={{marginRight:'30px'}}> <Share/></div></div>  <p >Code  {data.code}</p><div className={styles.informDiv}>{data.information}</div>
              <div className={styles.modalAddSpecial}>ADD ANY SPECIAL INSTRUCTIONS</div>
              <textarea className={styles.textareaDiv} rows="2" maxlength="450" placeholder="Additional Comment" ></textarea>
        
          <div className={styles.priceDiv}>   <span className={styles.divPriceSpan}> {data.price}    <span style={{margin: 0,fontSize:'18px'}}>AMD</span></span>
          <div style={{display:'flex',}}>
        <div className={styles.decrementDiv}>  <span  onClick={() => {
                    minus(data)
                  }}  ><span style={{background:' transparent',
                    
                    fontSize:'22px',marginLeft:'1rem',
                    cursor: 'pointer',color:'#E33B41'}}>-</span></span>
                    <span style={{fontSize:'14px',color:'red'}}>{data.count}</span><span  onClick={() => {
              
                    plus(data)
                  }}><span style={{background:' transparent',
                    
                  fontSize:'22px',
                  cursor: 'pointer',color:'#E33B41'}}>+</span></span> 
                  
                  </div>
               <div  onClick={closeModal} style={{zIndex:'1'}}>   <button className={styles.but}  onClick={e => addToCartHandler(data)} ><img src={pasketPlus} alt="" /> ADD </button></div>
                  </div>

          </div> 
              </div>
               
                  </li>
                  
                  </div>
              
            </ul>
          
           <div>
          
           </div>
          
          </div>
          
          </div>
              
    </div>
    
    
    </div>
  )
}

export default ProductMinModal;