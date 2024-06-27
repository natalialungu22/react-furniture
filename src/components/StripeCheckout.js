import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';

const StripeCheckout = () => {
    const { user } = useUserContext();
    const { total_amount } = useCartContext();
    return (
        <div>
            <h4>Hello, {user && user.name}</h4>
            <p>Your total is {formatPrice(total_amount)}</p>
            <p>Test Card Number: 4242 4242 4242 4242</p>
        </div>
    );
};

export default StripeCheckout;
