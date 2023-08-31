import { IProductData } from "../interfaces/productData.interface";
import { useOutletContext } from "react-router-dom";

interface IListProductsProps{
  products : IProductData[];
}

const ListProductComponents:React.FC<IListProductsProps> = ({products}) => {
  const handleCartData : (newValue: IProductData) => void = useOutletContext();
    return ( <>
    {products.map((product) => (
            <div className="product-card">
              <p>{product.title}</p>
              <img src={product.img} alt="product" />
              <p>{product.prevPrice}</p>
              <button onClick={() => {
                handleCartData(product);
              }}>Add to cart</button>
            </div>
          ))}
    </> );
}
 
export default ListProductComponents;