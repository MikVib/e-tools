import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

const FavoritesCounter = ({ colorScheme }) => {
    const favorites = useSelector((state) => state.favor.favorites);
    const count = favorites.length || 0;
    const isNotEmpty = count > 0;

    return (
        <>
            {isNotEmpty && (
                <Badge colorScheme={colorScheme} borderRadius="full" px={2}>
                    {count}
                </Badge>
            )}
        </>
    );
};

export default FavoritesCounter;
