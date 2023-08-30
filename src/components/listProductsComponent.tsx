import { IProductData } from "../interfaces/productData.interface";


const ListProductComponents = ({products}:{products : IProductData[]}) => {
    return ( <>
    {products.map((product) => (
            <div>
              <p>{product.title}</p>
              <img src={product.img} alt="product" />
              <p>{product.prevPrice}</p>
            </div>
          ))}
    </> );
}
 
export default ListProductComponents;