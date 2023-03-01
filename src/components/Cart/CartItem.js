import { Link } from 'react-router-dom';
import { Box, Flex, Text, IconButton, Image } from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../../redux/slicers/cartSlice";

const CartItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementQuantity({ id: product.id }));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity({ id: product.id }));
    };

    const handleRemoveItem = () => {
        dispatch(removeItem({ id: product.id }));
    };

    return (
        <Flex p="4" borderBottom="1px" borderColor="gray.200" alignItems="center">
            <Link to={`/details/${product.id}`}>
            <Image src={product.thumbnail} alt={product.name} mr="4" width="100px" height="100px" />
            </Link>
            <Box mr="4">
                <Text fontSize="lg" fontWeight="bold">{product.name}</Text>
                <Text>{product.description}</Text>
            </Box>
            <Text mr="4">${product.price}</Text>
            <IconButton
                aria-label="decrement"
                icon={<MinusIcon />}
                onClick={handleDecrement}
                disabled={product.quantity === 1}
                mr="2"
            />
            <Text mr="2">{product.quantity ? product.quantity : 0}</Text>
            <IconButton
                aria-label="increment"
                icon={<AddIcon />}
                onClick={handleIncrement}
                mr="2"
            />
            <IconButton
                aria-label="delete"
                icon={<DeleteIcon />}
                onClick={handleRemoveItem}
            />
        </Flex>
    );
};

export default CartItem;
