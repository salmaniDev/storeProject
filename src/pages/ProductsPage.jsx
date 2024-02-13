import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useProducts } from "../context/ProductContext"


// components
import Card from "../components/Card"
import Loader from "../components/Loader"
import SideBar from "../components/SideBar"
import SearchBox from "../components/SearchBox"

// icons


// helper
import { serachProduct, filterProducts, getInitialQuery, createQueryObject } from "../helper/helper"

function ProductsPage() {
  const products = useProducts()
  const [displayed, setDisplayed] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayed(products)
    setQuery(getInitialQuery(searchParams))
  }, [products])

  useEffect(() => {
    setSearchParams(query)
    let { search, category } = query
    setSearch(query.search)

    let finalProducts = serachProduct(products, search)
    finalProducts = filterProducts(finalProducts, category)

    setDisplayed(finalProducts)
  }, [query])



  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
     
      <div className="container">

        <div className="products">
          {!displayed.length && <Loader />}
          {
            displayed.map(item => <Card key={item.id} data={item} />)
          }
        </div>
        <SideBar query={query} setQuery={setQuery} />

      </div>
    </>
  )
}

export default ProductsPage