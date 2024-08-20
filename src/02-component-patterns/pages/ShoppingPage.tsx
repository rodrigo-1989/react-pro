
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

  const { products, onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          products.map((product) => (
            <ProductCard product={product} className='bg-dark text-white'
              onChange={onProductCountChange} key={product.id} value={shoppingCart[product.id]?.count || 0}>
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }

        <div className='shopping-cart'>
          {
            Object.values(shoppingCart).map(p => (
              <ProductCard
                product={p}
                key={p.id}
                className='bg-dark text-white' style={{ width: '100px' }}
                value={p.count}
                onChange={onProductCountChange}
              >
                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />
              </ProductCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}
