import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, IconButton } from '@chakra-ui/react';
import { FiHome, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import s from './Header.module.css';

const Menu = ({ toggleColorMode, isDark }) => {
    return (
        <Flex align="center" justify="space-between" w="100%" py={2}>
            <Link to="/">
                <IconButton
                    aria-label="Home"
                    icon={<FiHome size={24} />}
                    className={s.icon}
                />
            </Link>
            <IconButton
                aria-label="Favorite"
                icon={<FiHeart size={24} />}
                className={s.icon}
            />
            <IconButton
                aria-label="Cart"
                icon={<FiShoppingCart size={24} />}
                className={s.icon}
            />
            <IconButton
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                icon={isDark ? <SunIcon size={24} /> : <MoonIcon size={24} />}
                className={s.icon}
                onClick={toggleColorMode}
            />
        </Flex>
    );
};

export default Menu;