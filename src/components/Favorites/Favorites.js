import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Box, Text, Button, SimpleGrid,Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { removeFromFavorites } from '../../redux/slicers/favoritesSlice';
import ProductCard from '../../components/Home/ProductCard';
import { addToCart } from '../../redux/slicers/cartSlice';

const Favorites = () => {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favor.favorites);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <Box>
            <Flex mt={4} justifyContent="center">
            <Button onClick={goBack}>Back</Button>
            </Flex>
            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                {favorites.length > 0 ? (
                    favorites.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToFavorites={() => { }}
                            removeFromFavorites={() => removeFromFavorites(product.id)}
                            handleAddToCart={handleAddToCart}
                        />
                    ))
                ) : (
                    
                    <Text>No favorites yet.</Text>
                )}
            </SimpleGrid>
        </Box>
    );
};

export default Favorites;
