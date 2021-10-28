import { ShoppingOutlined  } from '@ant-design/icons';
import { useSelector,useEffect } from 'react-redux';
const Header = () => {
    const counter = useSelector((state)=>state.addCart);
    
    return (
        <div className="header">
            <div className="add-to-cart">
                <span className="cart-icon"><ShoppingOutlined style={{fontSize:"30px"}}/></span>
                <span className="counter">{counter}</span>
            </div>
        </div>
    )
}

export default Header;