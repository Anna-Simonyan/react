


import React,{ useState} from 'react'
import { increament,decrement} from '../../store/Slices/productsSlice'
import { useTotal } from '../../hooks/useTotal'
import { useDispatch,useSelector } from 'react-redux'
import close from '../../assets/Images/close.svg'
import styles from './ProductPizzasModal.module.css'
import pasketPlus from '../../assets/Images/basketPlus.svg'
import { addToCart } from '../../store/Slices/productsSlice'
import Share from '../Share'
import { NavLink } from 'react-router-dom'
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProductPizzasModal = ({ data, closeModal }) => {
    const total = useTotal()
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const items = useSelector((state) => state.cart.products);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const products = useSelector((state) => state.cart.products);
 

  const isCollapsedHandler = (e) => {
    
    setIsCollapsed((prev) => !prev);
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
   
    <div className={styles.ProductModalContainer}>

         <div className={styles.productModal}>
       
         <div  className={styles.divButClose}>
         <button className={styles.butClose} onClick={closeModal }><img  src={close} alt="" /></button>
         
         </div>
         
            <div className={styles.productModal1}>
          
            
            <ul>
           
                    <div>
                        
                  <li style={{display:'flex',fontSize:'14px',}}>
                 
              <div className={styles.modalImgDiv}>

                  <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://bonee.blob.core.windows.net/images/59be08e8-a592-46bb-bf08-dc3bef8457ed_2.webp" />
                </div>
                <div>
                    <img src="https://f.bonee.net/images/e5d1e1b4-64fd-404b-90bf-a9cefe5a7dad_3.webp" />
                </div>
               
            </Carousel>
        </div>
                 
                  </div><div className={styles.prDiv}><div style={{display:'flex',justifyContent: 'space-between'}}><p className={styles.pName}>{data.name}  </p><div style={{marginRight:'30px'}}> <Share/></div></div>   <p >Code  {data.code}</p> <p>TYPE</p><div></div>
            
              <div className={styles.classicDiv}>
               <NavLink exact='true' className={({ isActive }) => (isActive ? styles.active : styles.active1 )} to ='/productPizzaModal1'> <div className={ styles.classicDiv1} >PAN</div></NavLink>  
             <NavLink to='/productPizzaModal1'>    <div className={ styles.classicDiv1} >CLASSIC</div></NavLink> 
              <NavLink to='/productCheesyModal'> <div className={ styles.classicDiv1} >CHEESY CRUST</div></NavLink>  
               <NavLink to ='/productPizzaModal'> <div className={ styles.classicDiv1} >CHEESY BITES</div></NavLink> 
              </div>

              <div className={styles.sizeDiv}>SIZE</div>
              
              <div className={styles.classicDiv}>
              
                 <div className={ styles.classicDiv1} >17SM 4PC</div>
                 <div className={ styles.classicDiv1} >27SM 6PC</div>
                 <div className={ styles.classicDiv1} >33SM 8PC</div>
              </div>

              <div style={{display:'flex'}}>
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
             
        
          <div className={styles.priceDiv}>   <span style={{margin: 0,fontSize:'18px'}}> {data.price}    <span style={{margin: 0,fontSize:'18px'}}>AMD</span></span>
          <div style={{display:'flex',}}>
        <div className={styles.decrementDiv}>  <span  onClick={() => {
                      if(data.count > 1) {
                        dispatch(decrement());
                      }
                  }}  ><span style={{background:' transparent',
                    
                    fontSize:'22px',marginLeft:'1rem',
                    cursor: 'pointer',color:'#E33B41'}}>-</span></span>
                    <span style={{fontSize:'14px',color:'red'}}>{data.count}</span><span  onClick={() => {
                    dispatch(increament());
                  }}><span style={{background:' transparent',
                    
                  fontSize:'22px',
                  cursor: 'pointer',color:'#E33B41'}}>+</span></span> 
                  
                  </div>
                  <button className={styles.but}  onClick={e => addToCartHandler(data)} ><img src={pasketPlus} alt="" /> ADD </button>
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
              <div onClick={isCollapsedHandler}>
        <img src={data.picture1} alt="" />
        </div> 
        <p style={{lineHeight:'30px'}}>{data.name1}</p> 
        <div className={styles.buttonDiv}>
                <div>{data.price1} AMD</div>
                <button   onClick={e => addToCartHandler(products)} ><img src={pasketPlus} alt="" /> ADD</button>
            </div>
   
        </div>
        <div className={styles.catalogContainerChald}>
              <div>
               <img  src={data.picture2} alt="" />
               </div>
               <p>{data.name2}</p> 
               <div className={styles.x}></div>
              
               <div className={styles.buttonDiv}>
                       <div>{data.price2} AMD</div>
                       <button   onClick={e => addToCartHandler(products)} ><img src={pasketPlus} alt="" /> ADD</button>
                   </div>
          
               </div>
               <div className={styles.catalogContainerChald}>
               <div >
               <img   src={data.picture3} alt="" />
               </div>
               <p style={{lineHeight:'26px'}}>{data.name3}</p> 
               <div className={styles.buttonDiv}>
                       <div>{data.price3} AMD</div>
                       <button   onClick={e => addToCartHandler(products)} ><img src={pasketPlus} alt="" /> ADD</button>
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

export default ProductPizzasModal;