import { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config';

const ProductContext = createContext()

function ProductsProvider({ children }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProducts(await api.get('/products'))
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => {
    const products = useContext(ProductContext)

    return products
}

const useProductDetails = (id) => {
    const products = useContext(ProductContext)

    const result = products.find(item => item.id === id)

    return result
}

export default ProductsProvider;
export { useProducts, useProductDetails }