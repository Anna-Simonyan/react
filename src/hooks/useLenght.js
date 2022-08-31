
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useLenght = () => {
    const items = useSelector(state => state.cart.products)
 let [leng, setleng] = useState(0)
 useEffect(() => {
     toCount()
 }, [items])


 const toCount = () => {
     if(items.length !== 0 ){
       setleng(items.reduce((agr, e) => {
             console.log(agr)
             console.log(e)
            //  return agr.length = agr.length + e.length
             return (e.length + e.count) + agr
         }, 0))
     } else {
       setleng(0)
     }
 }
 return items.length

}