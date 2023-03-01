import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Box, Text, Button,Card, CardHeader, CardBody, CardFooter, Badge } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import s from './Home.module.css'
import FavoritesButton from '../Favorites/FavoritesButton';

const ProductCard = ({ product, handleAddToCart, addToFavorites, removeFromFavorites }) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartItem = product.id ? cartItems.find(item => item.id === product.id) : null;
    return (
        <Card key={product.id} boxShadow='xl' rounded='md' align='center' p={2}>
            <FavoritesButton
                product={product}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
            />
            <CardHeader>
                <Text fontSize="x0.5">{product.title}</Text>
            </CardHeader>
            <CardBody >
                <Box className={s.cardImage}>
                <Link to={`/details/${product.id}`}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                </Link>
                </Box>
                <Text>{product.description}</Text>
            </CardBody>
            <CardFooter>
                <Text fontWeight="bold">${product.price}</Text>
                
                
            </CardFooter>
            <Button
                    colorScheme="teal"
                    size="md"
                    leftIcon={<FiShoppingCart />}
                    onClick={() => handleAddToCart(product)}
                >
                    Add to cart
                    {cartItem && (
                    <Badge colorScheme="black" variant='outline' ml='1' fontSize='0.9em' >{cartItem.quantity}</Badge>
                )}
                </Button>
        </Card>
    );
};

export default ProductCard;
