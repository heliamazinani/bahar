import SelectedProduct from "../../components/SelectedProduct/SelectedProduct";
import { products } from "../../DummyData/Products";
function CheckoutPage(){
    const product = products[0];
    return <SelectedProduct product={product} />;
}

export default CheckoutPage;