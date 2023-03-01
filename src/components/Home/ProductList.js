import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import store from '../../redux/store';
import useActions from '../../hooks/hooks';

import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import { addToFavorites, removeFromFavorites } from '../../redux/slicers/favoritesSlice';

import { addToCart } from '../../redux/slicers/cartSlice';

import FavoritesButton from '../Favorites/FavoritesButton';
import ProductCard from './ProductCard';


const ProductList = ({ searchTerm, category }) => {
    const dispatch = useDispatch()
    const { fetchProducts, setCategory } = useActions();
    const loading = useSelector((state) => store.getState().shop.loading);
    const allProducts = useSelector((state) => state.shop.products);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const filtered = allProducts.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredProducts(filteredProducts => filtered);
        } else {
            if (category) {
                const filtered = allProducts.filter((product) => product.category === category);
                setFilteredProducts(filteredProducts => filtered);
            } else {
                setFilteredProducts(allProducts);
            }
        }
    }, [searchTerm, category, allProducts]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <Box p={4} >
            {filteredProducts.length > 0 ? (
                <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={6}>
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                        />
                    ))}
                </SimpleGrid>
            ) : (
                <Text>No products found.</Text>
            )}
        </Box>
    );
};

export default ProductList;
