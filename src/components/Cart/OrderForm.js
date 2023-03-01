import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../../redux/slicers/ordersSlice';
import { Button } from "@chakra-ui/react";
import {clearCartItems} from '../../redux/slicers/cartSlice'

const OrderForm = ({ cartItems, totalPrice }) => {
    console.log(cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bot = {
        TOKEN: '5809890640:AAGUX0mfk9eACxQFZqfvqtCkdB9pjTx4x2s',
        chatID: '-895241811'
    };

    const clearCart = () => {
        dispatch(clearCartItems());
    };

    const sendOrderToTelegram = (e) => {
        
        e.preventDefault(); 
        const message = `New Order:\n\n${cartItems
            .map(
                (item, index) =>
                    `${index + 1}. ${item.category} "${item.title}" (${item.quantity} x $${item.price})`
            )
            .join('\n')}\n\nTotal Price: $${totalPrice}`;

        fetch(
            `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`
        )
            .then((response) => {
                if (response.ok) {
                    const order = {
                        items: cartItems.map((item) => ({
                            ...item,
                            image: item.thumbnail // ссылка на изображение товара
                        })),
                        totalPrice,
                        date: new Date().toISOString(),
                    };
                    dispatch(addOrder(order));
                    clearCart();
                    navigate('/cart/orders');
                }
            })
            .catch((error) => {
                alert('Something went wrong. Please try again later.');
                console.error(error);
            });
    };

    return (
        <>
        {cartItems.length > 0 && (
        <form onSubmit={sendOrderToTelegram}>
            <Button colorScheme="blue" mt="4" 
             type="submit">
                Checkout
            </Button>
            {/* <button type="submit">Submit Order</button> */}
        </form>
        )}
        </>
    );
};

export default OrderForm