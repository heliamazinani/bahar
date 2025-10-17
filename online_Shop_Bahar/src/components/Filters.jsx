
import ProductList from "./ProductList";
function Filters( {title}){
    return (
      <div className="filters">
        <div className="title-container">
          <div className="title">
            <p> دسته بندی {title}</p>
          </div>
        </div>
        <ProductList></ProductList>

        
      </div>
    );
}
export default Filters;