import React,{ useState} from 'react'
import styles from './Header.module.css'
import png1 from '../../assets/Images/1.png'
import userSvg from '../../assets/Images/user.svg'
import basket from '../../assets/Images/basket.svg'
import SideBar from '../Sidebar'
import close from '../../assets/Images/close.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles'
import { asyncToggleTheme } from '../../store/Slices/themeSlice'
import { resetCart ,increament,decrement,removeFromCart} from '../../store/Slices/productsSlice'
import del from '../../assets/Images/del.svg'
import { useTotal } from '../../hooks/useTotal'
import search from '../../assets/Images/search.svg'


const Header = () => {
  const total = useTotal()
  const dispatch = useDispatch();
  const theme = useTheme();
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const products = useSelector((state) => state.cart.products);
  
  const isCollapsedHandler = (e) => {
    
    setIsCollapsed((prev) => !prev);
  };


  const resetHandler = (e) => {
    
    dispatch(resetCart());
    setIsCollapsed(false);
   
  };
 
  const click = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };
  

  
  return (
   
  <div className={theme.palette.mode === "dark"  ? styles.headerContainer : styles.headerContainerColor}>
   
<div className={styles.headerContainer1}>
<div className={styles.headerImg}>  <img className={styles.imgx} src={png1} alt="" /> </div>

<div className={styles.textDiv}>
    <div className={styles.textDiv1}>Welcome to</div>
    <div className={styles.textDiv2}>Pizza Hut</div>
</div>
</div>
<div className={styles.deliveriDiv}>
<ul>
    <li> 
<img src="https://www.pizza-hut.am/assets/images/app_2/delivery.svg" alt="" />
   
    
   <span > DELIVERY </span>

    </li>
   
</ul>
</div>

<div>

<div className={styles.swichDiv}>

<div className={styles.container}>
  <label className={styles.switch} for="checkbox" title="Change color scheme to dark mode">
    <input type="checkbox" id="checkbox" />
   
    <div  className={ `${styles.slider} ${styles.round}`  } onClick={() => dispatch(asyncToggleTheme())} ></div>
    
   
    
           <div className={styles.toggle}>Dark Mode</div>
           <div className={styles.toggle1}>Light Mode</div>
          
      
      
   
  </label>
 
  
</div>

<div style={{display:'flex',alignItems: 'center',
  justifyContent: 'center'}}><div className={styles.se}> <div className={styles.searchDiv}>
 
   <div className={styles.span} onClick={()=>navigate('/menuSearchInput')}><img src={search} alt=''/></div>
</div></div><div className={styles.langvigesDiv} onClick={click}> EN </div></div>
<div className={styles.userDiv} onClick={()=>navigate("/authorization")}> <img src={userSvg} alt=''/> </div>
<div className={styles.userDiv}>  <img src={basket} alt='' onClick={isCollapsedHandler}/></div><div className={styles.price}>{products.length}</div>


{isCollapsed && (
          <div className="cart-dropdown">
            
            <h3>Total: {total} AMD     <button onClick={()=> setIsCollapsed(!isCollapsed)}><img style={{width:'15px'}} src={close } alt=""/> </button></h3>
            {products.length > 0 && (
             <div style={{display:'flex',justifyContent:'space-between',fontSize:'16px',marginRight:'15px'}} onClick={resetHandler} >
              
                {" "}
  
                Basket <span className='sss'><img src={del} alt="" /></span> {" "}
              </div>
            )}
            <ul>
              {products.map((product,index) => {
                return (
                  <li style={{display:'flex',fontSize:'14px',justifyContent:'space-between',marginTop:'20px'}}>
                    
                 
                <img style={{width:'100px',height:'100px'}} src={product.picture} alt="" />   <span>{product.name} </span> 
                    <button style={{marginBottom:'55px'}} onClick={() => {
                      if(product.count > 1) {
                        dispatch(decrement(product));
                      
                      }
                      
                  }}  ><span style={{background:' transparent',
                    
                    fontSize:'36px',
                    cursor: 'pointer',color:'#E33B41'}}>-</span></button><span style={{marginTop:'12px'}}>{product.count}</span><button style={{marginBottom:'55px'}} onClick={() => {
                    dispatch(increament(product));
                  
                   
                  }}><span style={{background:' transparent',
                    
                  fontSize:'22px',
                  cursor: 'pointer',color:'#E33B41'}}>+</span></button> <span> {product.price}<p style={{margin: 0,fontSize:'11px'}}>AMD</p></span>
                    <button style={{marginBottom:'55px',marginRight:'16px',width: '20px',
    height: '20px',
    borderRadius: '6px',
    border: '1px solid #9d9d9d'}} onClick={() => {
                        dispatch(removeFromCart(product));
                      }}><img style={{width:'8px'}} src={close} alt="" /></button>
                  </li>
                  
                );
               
              })}
              
            </ul>
           
            <button className ='buttonCheck'> Checkout </button>
          </div>
        )}
<SideBar />
<div className={isOpen ? styles.sideBar : styles.open}>
      
    
      <button className={styles.close} onClick={click}>
  
  <img src={close} alt="" />

</button>
   
 

    <nav className={styles.nav}>
   
   
    </nav>
  </div>
</div>

</div>

    </div>

  )
}

export default Header