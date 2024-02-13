
import { useParams } from 'react-router-dom'
import { useProductDetails } from '../context/ProductContext'

function DetailsPage() {

  const { id } = useParams()

  const product = useProductDetails(+id)

  if (!product) return <h1>مشترک مورد نظر در حال عبادت است لطفا منتظر بمانید</h1>

  return (
    <>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </>
  )
}

export default DetailsPage