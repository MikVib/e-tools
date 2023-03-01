import { Box, Flex, Text, Button,Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import CartItem from "./CartItem";
import OrderForm from "./OrderForm";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        navigate(-1);
    };

    if (location.pathname === '/cart/orders') {
        return null;
    }

    return (
        <Box p="4">
            <Heading align="center"  as="h3" mb="4">Cart</Heading>
            <Button onClick={goBack}>Back</Button>
            
            {cartItems.map((item) => (
                <CartItem key={item.id} product={item} />
            ))}
            {cartItems.length === 0 && <Text>Your cart is empty.</Text>}
            {cartItems.length > 0 && (
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold">Total: ${totalPrice}</Text>
                </Flex>
            )}
            
            <OrderForm cartItems={cartItems} totalPrice={totalPrice} />
        </Box>
    );
};

export default Cart;
