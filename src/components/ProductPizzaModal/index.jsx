import React,{ useState,useEffect,useRef} from 'react'
import { increament} from '../../store/Slices/productsSlice'
import { useTotal } from '../../hooks/useTotal'
import { useDispatch,useSelector } from 'react-redux'
import close from '../../assets/Images/close.svg'
import styles from './ProductPizzaModal.module.css'
import pasketPlus from '../../assets/Images/basketPlus.svg'
import { addToCart } from '../../store/Slices/productsSlice'
import Share from '../Share'
import {  NavLink } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductMinModal from '../ProductMinModal'



const TOTAL_SLIDES = 3
const ProductPizzaModal = ({ data, closeModal, plus ,minus}) => {

    const total = useTotal()
    
  const dispatch = useDispatch();
  
  const items = useSelector((state) => state.cart.products);
  
  const products = useSelector((state) => state.cart.products);
  
  const [data1, setData] = useState(null);
  const [visible, setVisible] = useState(false);
  const [color , setColor] = useState('red')

  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  
  const next = () => {
    if ( current >= TOTAL_SLIDES ) return
    else setCurrent(current + 1)
  }
  
  const prev = () => {
    if ( current === 0 ) return
    else setCurrent(current - 1)
  }
  
  
  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out'
    ref.current.style.transform = `translateX(-${current}00%)`
  }, [current])

  const toggleItem = (product = null) => {
    setData(product);
    setVisible(product !== null);
    
  };

  
 
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
   
          <div className={styles.ProductModalContainer} >
   
<div className={styles.productModal}  >

<div className={styles.divButArrowClose}>
<div className={styles.divButArrowClose1}>
<div className={styles.modalArrowDiv}>
<img src="https://www.pizza-hut.am/assets/images/app_2/logOutWhite.svg" alt="" />
</div>
<div className={styles.modalArrowDiv} onClick={closeModal }>
<img src="https://www.pizza-hut.am/assets/images/app_2/closeWhite.svg" alt="" />
</div>

</div>

</div>
<div  className={styles.divButClose}>
<button className={styles.butClose} onClick={closeModal }><img  src={close} alt="" /></button>

</div>

   <div className={styles.productModal1}>
 
   <ul>
   
           <div>
               
         <li className={styles.productPizzaModalLi}>
        
        
     <div className={styles.modalImgDiv}>
       
         <img  src={data.picture} alt="" /> 
         </div><div className={styles.prDiv}><div style={{display:'flex',justifyContent: 'space-between'}}><p className={styles.pName}>{data.name}  </p><div className={styles.divShare}> <Share/></div></div>   <p >Code  {data.code}</p> <p>TYPE</p><div></div>
   
     <div className={styles.classicDiv}>
  
     <NavLink  className={({ isActive }) => (isActive ? styles.active : styles.active1 )}  to='/productPizzaModal'>  <div  className={color? styles.classicDiv1 :styles.classicDiv2} >PAN</div> </NavLink>
   <NavLink  className={({ isActive }) => (isActive ? styles.active : styles.active1 )}  to='/productPizzaModal'> <div  className={color? styles.classicDiv1 :styles.classicDiv2}  >CLASSIC</div></NavLink>
  <NavLink  className={({ isActive }) => (isActive ? styles.active : styles.active1 )}  to='/productCheesyModal'> <div  className={color? styles.classicDiv1 :styles.classicDiv2}  >CHEESY CRUST</div></NavLink>
  <NavLink  className={({ isActive }) => (isActive ? styles.active : styles.active1 )}  to ='/productPizzasModal'> <div  className={color? styles.classicDiv1 :styles.classicDiv2}   >CHEESY BITES</div></NavLink> 
      
     </div>

     <div className={styles.sizeDiv}>SIZE</div>
     
     <div className={styles.classicDiv}>
     
        <div className={ styles.classicDiv1} >17SM 4PC</div>
        <div className={ styles.classicDiv1} >27SM 6PC</div>
        <div className={ styles.classicDiv1} >33SM 8PC</div>
     </div>

     <div className={styles.toppingsDiv}>
       <span className={styles.topDiv}>TOPPINGS</span>
       <span className={styles.optDiv}>Optional</span>
       
     </div>

     <div className={styles.labelDiv}>

    <div className={styles.ceckedDiv}>
     <input type="checkbox" />
     <label htmlFor="">
       <div className={styles.labelDiv}>
       <div style={{color: '#515151'}}>Meat</div>
       <div style={{color: '#9d9d9d'}}> 500<span >AMD</span></div>
       </div>
     </label>
     
     </div> 
    <div className={styles.ceckedDiv}>
    <input type="checkbox" />
    <label htmlFor="">
    <div className={styles.labelDiv}>
    <div style={{color: '#515151'}}>Vegetable</div>
    <div style={{color: '#9d9d9d'}}> 500<span >AMD</span></div>
   </div>
    </label>
     </div>   
    <div className={styles.ceckedDiv}>
    <input type="checkbox" />
    <label htmlFor="">
    <div className={styles.labelDiv}>
         <div style={{color: '#515151'}}>Mozzarella</div>
         <div style={{color: '#9d9d9d'}} > 500<span >AMD</span></div>
   </div>
    </label>
     </div>     

     </div>
     
     <div className={styles.modalAddSpecial}>ADD ANY SPECIAL INSTRUCTIONS
     <textarea className={styles.textareaDiv} rows="2" maxlength="450" placeholder="Additional Comment" class="ng-valid ng-dirty ng-touched"></textarea>
     </div>
    


 <div className={styles.priceDiv}> 
   <span style={{margin: 0,fontSize:'18px'}}> {data.price}  
     <span style={{margin: 0,fontSize:'18px'}}>AMD</span></span>
     <div className={styles.priceDivDiv}>
 <div style={{display:'flex',}}>
<div className={styles.decrementDiv}> 

 <span  onClick={() => {
             if(data.count > 1) {
            
              minus(data)
            
             }
         }}  ><span style={{background:' transparent',
           
           fontSize:'22px',marginLeft:'1rem',
           cursor: 'pointer',color:'#E33B41'}}> - </span></span>

           <span style={{fontSize:'14px',color:'red'}}>{data.count}</span><span  onClick={() => {
       
       plus(data)
         
         }}><span style={{background:' transparent',
           
         fontSize:'22px',
         cursor: 'pointer',color:'#E33B41'}}>+</span></span> 
         
         </div>
         
      <div className={styles.closeDiv} onClick={closeModal }> <button className={styles.but}  onClick={e => addToCartHandler(data) } ><img src={pasketPlus} alt="" />  ADD </button></div>
         </div>
         </div>
 </div> 

     </div>
       
         </li>
   
         <div className={styles.customDiv}>
       
         <div className={styles.customDivP}>
   <p className={styles.p1}>CUSTOMERS ALSO ORDERS</p>
   <p className={styles.p2}>We offer you various choice of similar products</p>
   
   </div>
  <div className={styles.carouselArrow1}>
   <span className={styles.carouselArrow}>
<div className='button' onClick={prev}><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" ><g _ngcontent-qrr-c61="" id="Layer_2" data-name="Layer 2"><g _ngcontent-qrr-c61="" id="Layer_1-2" data-name="Layer 1"><polyline _ngcontent-qrr-c61="" points="6 1 1 6 6 11" class="cls-1"></polyline></g></g></svg></div>
<div className='button' onClick={next}><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" style={{ transform: 'rotate(-180deg)'}}><g id="Layer_2" data-name="Layer 2"><g _ngcontent-qrr-c61="" id="Layer_1-2" data-name="Layer 1"><polyline _ngcontent-qrr-c61="" points="6 1 1 6 6 11" class="cls-1"></polyline></g></g></svg></div>
</span>
</div>
   <div className={styles.catalogContainer} ref={ref}>
 
       <div className={styles.catalogContainerChald}>
       
     <div  >
<img src={data.picture1} alt="" onClick={()=>toggleItem(data)}/>
</div> 
<p style={{lineHeight:'30px'}}>{data.name1}</p> 
<div className={styles.buttonDiv}>
       <div><span>{data.price1} AMD</span> </div>
       <button   onClick={e => addToCartHandler(data)}><img src={pasketPlus} alt="" /> Add</button>
   </div>
  
</div>


<div className={styles.catalogContainerChald}>

     <div>
      <img  src={data.picture2} alt="" onClick={()=>toggleItem(data)}/>
      </div>
      <p>{data.name2}</p> 
      <div className={styles.x}></div>
     
      <div className={styles.buttonDiv}>
              <div>{data.price2} AMD</div>
              <button   onClick={e => addToCartHandler(data)} ><img src={pasketPlus} alt=""  /> Add</button>
          </div>

      </div>
      <div className={styles.catalogContainerChald}>
      
      <div >
      <img   src={data.picture3} alt="" onClick={()=>toggleItem(data)}/>
      </div>
      <p style={{lineHeight:'26px'}}>{data.name3}</p> 
      <div className={styles.buttonDiv}>
              <div>{data.price3} AMD</div>
              <div >
              <button   onClick={e => addToCartHandler(products)} ><img src={pasketPlus} alt=""  /> Add</button>
              </div>
          </div>
 
      </div>
    
   </div>
  
   {visible === true && data !== null && (
     <ProductMinModal data={data} closeModal={() => toggleItem()} />
   
   )}

   
   
   
         </div>
       
        
         </div>
      
   </ul>
 
  <div>
 
  </div>
 
 </div>
 <div className={styles.modalFooter}>
   <div>
     <div className={styles.modalTotalDiv}>Total</div>
     <div >{total}  <span >AMD</span></div>
   </div>

   <div className={styles.modalFooter1}>

     <span className={styles.modalFooter1Span}>-</span>
     <span className={styles.modalFooter1Span1}>1</span>
     <span className={styles.modalFooter1Span}>+</span>
   </div>

   <div className={styles.modalFooter2}>
<span>ADD</span>
<img src="https://www.pizza-hut.am/assets/images/app_2/basketPlus.svg" alt="" />
   </div>

 </div>

 
 </div>
 

</div>

    
    </div>
  )
}

export default ProductPizzaModal;