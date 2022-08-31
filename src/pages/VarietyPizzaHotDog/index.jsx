import React,{ useEffect,useState} from 'react'
import styles from './VarietyPizzaHotDog.module.css'
import pasketPlus from '../../assets/Images/basketPlus.svg'
import { useDispatch,useSelector } from 'react-redux'
import ProductModal from '../../components/ProductModal'
import OrderFooter from '../../components/OrderFooter'
import { addToCart, increament } from '../../store/Slices/productsSlice'
import { products } from '../../data/data'
import { useNavigate } from 'react-router-dom'

const VarietyPizzaHotDog = ({ id, picture, name, price }) => {
  
    const items = useSelector((state) => state.cart.products);
    const [active, setActive] = useState(false)
    const [click1,setClick] = useState(true)
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
    
    
    const dispatch = useDispatch();

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

    <div style={{marginBottom: '88px', }}>
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
     
        <div className={styles.varietyPizzas}>PIZZA HOT - DOG</div>
     
    <div  className={click1 ? styles.catalogContainer:styles.catalogContainerColumn}>
    {products.filter(product => product.type === 'hotDog').map(product => 
        <div key={product.id} className={click1 ? styles.catalogContainerChald:styles.catalogContainerChaldColumn}>
            <div  className={click1? styles.catImg:styles.catImgColumn} >
           
<img src= {product.picture} alt="1" onClick={() => toggleItem(product)} />
<div className={ styles.p1}>{product.name}</div>
            </div>

            <div className={styles.butNer} >
            <div className={click1 ? styles.p:styles.pp}>{product.name}
           <div className={click1? styles.infoDiv1:styles.infoDiv}> {product.information}</div>
           
            </div>
            <div className={click1? styles.row1:styles.column1} >
            <div className={click1? styles.row:styles.column} ><div >{product.price}</div>  <div  >AMD</div>  </div>
            <div className={click1? styles.buttonDivDiv:styles.buttonDivColumn}>
         
          
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
              <ProductModal  data={data} plus={plus} minus={minus} closeModal={() => toggleItem()} />
            )}

      
    </div>

    <div className={styles.orderFooter}> <OrderFooter/></div> 
    </div>
    </div>
  )
}

export default VarietyPizzaHotDog