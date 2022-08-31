import React,{ useEffect,useState} from 'react'
import styles from './Catalog.module.css'
import pasketPlus from '../../../../assets/Images/basketPlus.svg'
import miniPizza from '../../../../assets/Images/miniPizza.png'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart, increament } from '../../../../store/Slices/productsSlice'
import ProductModal from '../../../ProductModal'
import {products} from '../../../../data/data'

const Catalog = ({ id, picture, name, price }) => {
    const items = useSelector((state) => state.cart.products);
    const [data, setData] = useState(null);
    const [visible, setVisible] = useState(false);
  
    const toggleItem = (product = null) => {
      setData(product);
      setVisible(product !== null);
    };

 
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
    useEffect(() => {

    }, [items])

    
    
    
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
        <div className={styles.minipizza}> 
            <img src={miniPizza} alt="" />
            <div>PIZZA HOT-DOG</div>
        </div>
    
    <div className={styles.catalogContainer} >
    {products.filter(product => product.type === 'hotDog').map(product => 
        <div key={product.id} className={styles.catalogContainerChald}>
            <div  className={styles.catImg} >
           
            <img src= {product.picture} alt="1"   onClick={() => toggleItem(product)}/>
            
              
                
          
            </div>
            <p >{product.name}</p>
            
            <div className={styles.buttonDiv}>
             <div>{product.price}&nbsp;<span style={{fontSize:'12px'}}>AMD</span> </div>
                <button   onClick={e => addToCartHandler(product)} ><img src={pasketPlus} alt="" /> ADD</button>
            </div>
            
            
        </div>

        
        
         )}
       
 
     {visible === true && data !== null && (
              <ProductModal  data={data} plus={plus} minus={minus} closeModal={() => toggleItem()} />
            )}
    </div>

    </div>
  )
}

export default Catalog