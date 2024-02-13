import React from 'react'

import { TbShoppingBagCheck } from 'react-icons/tb'
import { MdDeleteOutline } from 'react-icons/md'

import { useCart } from '../context/CartContext'
import { productQuantity } from '../helper/helper'

function CheckOutPage() {

    const [state, dispatch] = useCart()


    const clickHandler = (type,payload) => {
        dispatch({ type, payload })
    }

    // const quantity = productQuantity(state, id)

    return (
        <>
            {
                state.selectedItems.map(item => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h1>{item.title}</h1>

                        <div>
                            {
                                item.quantity > 1 && <button onClick={() => clickHandler('DECREASE',item)}>-</button>
                            }

                            {
                                item.quantity === 1 && <button onClick={() => clickHandler('REMOVE_ITEM',item)}><MdDeleteOutline /></button>
                            }
                            {
                                <span>{!!item.quantity && item.quantity}</span>
                            }
                            {
                                item.quantity === 0 ? <button onClick={() => clickHandler('ADD_ITEM',item)}><TbShoppingBagCheck /></button> :
                                    <button onClick={() => clickHandler('INCREASE',item)}>+</button>
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default CheckOutPage