import { singleProduct } from "../../data";
import Single from "../single/Single";

const Product = () => {
  return (
    <div className="product">
      <Single {...singleProduct}  />
    </div>
  );
};

export default Product;
