import './CartScreen.css';

// components
import CartItem from '../components/CartItem';

const CartScreen = () => {
    return <div className="cartscreen">
        <div className='cartscreen__left'>
            <h2>Your Cart</h2>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
        <div className="cartscreen__right">
            <div className='cartscreen__info'>
                <p>Sub total (0) items</p>
                <p>$99.99</p>
            </div>
            <div>
                <button>Procced to checkout</button>
            </div>
        </div>
    </div>
};

export default CartScreen;