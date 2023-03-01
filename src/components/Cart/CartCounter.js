import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

const CartCounter = ({ colorScheme }) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const count = cartItems.length || 0;
    const isNotEmpty = count > 0;

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            {isNotEmpty && (
                <Badge colorScheme={colorScheme} 
                borderRadius="full"
                px={2}>
                    {totalQuantity}
                </Badge>
            )}
        </>
    );
};

export default CartCounter;