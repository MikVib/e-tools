import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

const FavoritesButton = ({ product, addToFavorites, removeFromFavorites }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favor.favorites);

    const handleAddToFavorites = (product) => {
        if (favorites.some((fav) => fav.id === product.id)) {
            dispatch(removeFromFavorites(product.id));
        } else {
            dispatch(addToFavorites(product));
        }
    };


    return (
        <>
            {favorites.some((fav) => fav.id === product.id) ? (
                <Button colorScheme="red" onClick={() => handleAddToFavorites(product)}>
                    <>
                    <FiHeart />
                    </>
                    </Button>
            ) : (
                <Button onClick={() => handleAddToFavorites(product)}>
                    <>
                    <FiHeart />
                    </>
                    </Button>
            )}
        </>
    );
};

export default FavoritesButton;
