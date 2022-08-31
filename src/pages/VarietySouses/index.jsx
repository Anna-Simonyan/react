


import React,{ useState,useEffect} from 'react'
import styles from './VarietySouses.module.css'
import pasketPlus from '../../assets/Images/basketPlus.svg'
import {useSelector , useDispatch } from 'react-redux'
import { addToCart,increament  } from '../../store/Slices.js/productsSlice'
import { products } from '../../data/data'
import OrderFooter from '../../components/OrderFooter'
import { useNavigate } from 'react-router-dom'
import ProductMinModal from '../../components/ProductMinModal'


const VarietySouses = ({ id, picture, name, price }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.products);
   const [click , setClick] = useState(true)
   const [active, setActive] = useState(false)
   const [data, setData] = useState(null);
   const [visible, setVisible] = useState(false);
 
   const toggleItem = (product = null) => {
     setData(product);
     setVisible(product !== null);
   };
    

   const navigate = useNavigate()

    useEffect(() => {

    }, [items])

    const plus =(data)=>{
      setData({
        ...data ,
        count: data.count+1
      })
    }
    const minus =(data)=>{
      setData({
        ...data ,
        count: data.count-1
      })
    }
    
    
   

    const addToCartHandler = (item) => {
        const res = items.some(e => e.id === item.id)
        if(res) {
            dispatch(increament(item))
        } else {
            dispatch(addToCart(item))
        }
    };
    
    
    
  return (
    <div style={{marginBottom: '66px',    }}>
         <div>
<div className={styles.menuHeaderDiv}>
    <div className={styles.menuHeaderDiv1}>
<div className={styles.menuHeaderDiv2}>
<div className={styles.menuImageDiv} onClick={()=>navigate('/home')}><img src="https://www.pizza-hut.am/assets/images/app_2/arrow.svg" alt="" /></div>
<div>MENU</div>

</div>

<div style={{display:'flex'}}>
    <div className={styles.menuDiv}>
      <div onClick={()=>setClick(true)}>
        <div  onClick={()=>setActive(!active)} className={active?styles.menuDiv1:styles.menuDiv11} >
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" onClick={()=>setActive(!active)} className={active?styles.menuSvg:styles.menuSvg1} ><g _ngcontent-gno-c71="" id="Layer_2" data-name="Layer 2"><g _ngcontent-gno-c71="" id="Layer_1-2" data-name="Layer 1"><rect _ngcontent-gno-c71="" x="1" y="1" width="5.25" height="5.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="9.75" y="1" width="5.25" height="5.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="9.75" y="9.75" width="5.25" height="5.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="1" y="9.75" width="5.25" height="5.25" class="cls-view"></rect></g></g></svg>
    
        </div>
        </div>
        <div onClick={()=>setClick(false)}>
        <div   onClick={()=>setActive(!active)} className={active?styles.menuDiv2:styles.menuDiv22}>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 15.75"  onClick={()=>setActive(!active)} className={active?styles.menuSvg1:styles.menuSvg}><g _ngcontent-gno-c71="" id="Layer_2" data-name="Layer 2"><g _ngcontent-gno-c71="" id="Layer_1-2" data-name="Layer 1"><rect _ngcontent-gno-c71="" x="0.75" y="0.75" width="2.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="5.5" y="0.75" width="9.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="5.5" y="6.75" width="9.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="5.5" y="12.75" width="9.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="0.75" y="6.75" width="2.25" height="2.25" class="cls-view"></rect><rect _ngcontent-gno-c71="" x="0.75" y="12.75" width="2.25" height="2.25" class="cls-view"></rect></g></g></svg>
        </div>
        </div>
    </div>

    <div className={styles.menuSearchDiv} onClick={()=>navigate('/menuSearchInput')}>
<img src="	https://www.pizza-hut.am/assets/images/app_2/searchWhite.svg" alt="" />
    </div>
    <div  className={styles.menuLangveagesDiv}>
<div>EN</div>
    </div>
</div>
    </div>
</div>
    </div>
      
<div className={styles.pizzas}>SAUCES</div>

<div className={click ? styles.pizzasContainer:styles.pizzasContainerColumn} >
{products.filter(product => product.type === 'sous').map(product => 
        <div key={product.id}  className={click ? styles.cardDiv:styles.cardDivColumn}>
            <div   className={click ? styles.pizzaImgDiv:styles.pizzaImgDivColumn} >
           
<img src= {product.picture} alt="1" onClick={()=> toggleItem(product)} />
      
            </div>
            <div className={ styles.p1}>{product.name}
           
           
            </div>
 <div className={styles.butNer} >
            <div className={click ? styles.p:styles.pp}>{product.name}
           
           
            </div>
            <div className={click? styles.row1:styles.column1} >
            <div className={click? styles.row:styles.column} ><div>{product.price}</div><div>AMD</div> </div>
            <div className={click? styles.buttonDivDiv:styles.buttonDivColumn}>
         
          
                <button    onClick={e => addToCartHandler(product)} ><img src={pasketPlus} alt="" /> ADD</button>
           </div>
           </div>
            </div>

            <div  >
            
            <div className={styles.buttonDiv}>
            <div ><div>{product.price}</div><div>AMD</div> </div>
          
                <button    onClick={e => addToCartHandler(product)} ><img src={pasketPlus} alt="" /> ADD</button>
           </div>
           </div> 

        </div>
         )}
      {visible === true && data !== null && (
              <ProductMinModal  data={data} plus={plus} minus={minus} closeModal={() => toggleItem()} />
            )}
    </div>
<div className={styles.orderFooter}> <OrderFooter/></div> 
    </div>
  )
}

export default VarietySouses;
