import { Row } from "react-bootstrap";
import Category from "./components/Category";
import NavbarComponent from "./components/NavbarComponent";
import Order from "./components/Order";
import ProductDetail from "./components/ProductDetail";

function App() {
    return (
        <>
            <NavbarComponent />
            <div className="container-fluid mt-3">
                <Row>
                    <Category />
                    <ProductDetail />
                    <Order />
                </Row>
            </div>
        </>
    );
}

export default App;
