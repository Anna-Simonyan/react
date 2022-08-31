
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"



export const useTotal = () => {
    const items = useSelector(state => state.cart.products)
    let [total, setTotal] = useState(0)
    useEffect(() => {
        toCount()
    }, [items])


    const toCount = () => {
        if(items.length !== 0 ){
            setTotal(items.reduce((agr, e) => {
                console.log(agr)
                return (e.price * e.count) + agr
            }, 0))
        } else {
            setTotal(0)
        }
    }
    return total
}