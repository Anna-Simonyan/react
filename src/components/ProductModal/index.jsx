import React from 'react'
import { increament} from '../../store/Slices/productsSlice'
import { useDispatch,useSelector } from 'react-redux'
import close from '../../assets/Images/close.svg'
import styles from './ProductModal.module.css'
import pasketPlus from '../../assets/Images/basketPlus.svg'
import { addToCart } from '../../store/Slices/productsSlice'
import Share from '../Share'

const ProductModal = ({ data, closeModal,plus,minus }) => {
 
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.products);
 

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
        
          <div className={styles.priceDiv}>   <span style={{margin: 0,fontSize:'18px'}}> {data.price}    <span style={{margin: 0,fontSize:'18px'}}>AMD</span></span>
          <div style={{display:'flex',}}>
        <div className={styles.decrementDiv}>  <span  onClick={() => {
                    if(data.count > 1) {
                    minus(data)
                    }
                  }}  ><span style={{background:' transparent',
                    
                    fontSize:'22px',marginLeft:'1rem',
                    cursor: 'pointer',color:'#E33B41'}}>-</span></span>
                    <span style={{fontSize:'14px',color:'red'}}>{data.count}</span><span  onClick={() => {
                  
                    plus(data)
                    
                  }}><span style={{background:' transparent',
                    
                  fontSize:'22px',
                  cursor: 'pointer',color:'#E33B41'}}>+</span></span> 
                  
                  </div>
               <div onClick={closeModal} style={{zIndex:'1'}}>  <button className={styles.but}  onClick={e => addToCartHandler(data)} ><img src={pasketPlus} alt="" /> ADD </button></div> 
                  </div>

          </div> 
              </div>
           
                  </li>
                  
                  <div className={styles.customDiv}>
                  <div className={styles.customDivP}>
            <p className={styles.p1}>CUSTOMERS ALSO ORDERS</p>
            <p className={styles.p2}>We offer you various choice of similar products</p>
            </div>
            
                
            <div className={styles.catalogContainer}>
         
                <div className={styles.catalogContainerChald}>
              <div >
        <img src={data.picture1} alt="" />
        </div> 
        <p>{data.name1}</p> 
        <div className={styles.buttonDiv}>
                <div>{data.price1} AMD</div>
                <button   onClick={e => addToCartHandler(data)} ><img src={pasketPlus} alt="" /> ADD</button>
            </div>
   
        </div>
        <div className={styles.catalogContainerChald}>
              <div>
               <img style={{marginTop:'86px'}} src={data.picture2} alt=""  />
               </div>
               <p>{data.name2}</p> 
               <div className={styles.x}></div>
              
               <div className={styles.buttonDiv}>
                       <div>{data.price2} AMD</div>
                       <button   onClick={e => addToCartHandler(data)} ><img src={pasketPlus} alt="" /> ADD</button>
                   </div>
          
               </div>
               <div className={styles.catalogContainerChald}>
               <div >
               <img style={{marginTop:'96px'}}  src={data.picture3} alt="" />
               </div>
               <p>{data.name3}</p> 
               <div className={styles.buttonDiv}>
                       <div>{data.price3} AMD</div>
                       <button   onClick={e => addToCartHandler(data)} ><img src={pasketPlus} alt="" /> ADD</button>
                   </div>
          
               </div>
          
            </div>
                  </div>
                 
                  
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

export default ProductModal