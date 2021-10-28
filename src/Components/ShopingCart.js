import { Button } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { addToCart } from "../Actions";
import { useDispatch } from "react-redux";

const ShopingCart = () => {
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="shoping-cart">
                <div className="cart-img">
                    <img className="product-img" src="https://res.cloudinary.com/dkc2wef5t/image/upload/v1635332224/product_wshukz.png" />
                </div>
                <div className="discription">
                    <span>Iphone x</span>
                    <span>$300</span>
                </div>
                <div className="btn">
                    <Button type="info" icon={<ShoppingCartOutlined />} style={{ width: "100%" }} onClick={()=>dispatch(addToCart())}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
}

export default ShopingCart;