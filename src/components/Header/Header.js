import React from 'react';
import { Link } from 'react-router-dom';
import {
    useColorMode,
    IconButton,
    Flex,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Badge
} from '@chakra-ui/react';
import {
    SunIcon,
    MoonIcon,
    Icon
} from '@chakra-ui/icons';
import { FiShoppingCart, FiHeart, FiHome, FiMenu, FiMapPin } from 'react-icons/fi';
import { GrHistory } from 'react-icons/gr';
import s from './Header.module.css';

import FavoritesCounter from '../Favorites/FavoritesCounter';
import CartCounter from '../../components/Cart/CartCounter';

import { useDispatch, useSelector } from 'react-redux';
import { selectMenuOpen, openMenu, closeMenu } from '../../redux/slicers/menuSlice';
import { selectOrders } from '../../redux/slicers/ordersSlice';



const Header = () => {


    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';
    const isOpen = useSelector(selectMenuOpen);
    const orders = useSelector(selectOrders);
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        if (isOpen) {
            dispatch(closeMenu());
        } else {
            dispatch(openMenu());
        }
    };

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

    return (
        <>
            <header>
                <nav>
                    {isMobile ? (
                        <Flex align="center" justify="space-between" w="100%" py={2}>
                            <IconButton
                                aria-label="Menu"
                                icon={<Icon as={FiMenu} w={6} h={6} />}
                                className={s.icon}
                                onClick={toggleMenu}
                            />
                        </Flex>
                    ) : (
                        <Flex align="center" justify="space-around" w="100%" py={2}>
                            <Link to="/">
                                <IconButton
                                    aria-label="Home"
                                    icon={<Icon as={FiHome} w={6} h={6} />}
                                    className={s.icon}
                                />
                            </Link>
                            <Link to="/favorites">
                                <IconButton
                                    aria-label="Favorite"
                                    icon={<Icon as={FiHeart} w={6} h={6} />}
                                    className={s.icon}
                                >

                                </IconButton>
                                <FavoritesCounter colorScheme="red" />
                            </Link>
                            {cartItems.length > 0 && (
                            <Link to="/cart">
                                <IconButton
                                    aria-label="Cart"
                                    icon={<Icon as={FiShoppingCart} w={6} h={6} />}
                                    className={s.icon}
                                />

                                <CartCounter />
                            </Link>
                            )}
                            {orders.length > 0 && (
                                <Link to="/cart/orders">
                                    <IconButton
                                        aria-label="Order History"
                                        icon={<Icon as={GrHistory} w={6} h={6} />}
                                        className={s.icon}
                                    />
                                    <Badge colorScheme="red" borderRadius="full" px={2}>
                                        {orders.length}
                                    </Badge>
                                </Link>
                            )}
                            <Link to="/map">
                                <IconButton
                                    aria-label="Map"
                                    icon={<Icon as={FiMapPin} w={6} h={6} />}
                                    className={s.icon}
                                />
                            </Link>
                            <IconButton
                                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                                icon={isDark ? <SunIcon /> : <MoonIcon />}
                                className={s.icon}
                                onClick={toggleColorMode}
                            />
                        </Flex>
                    )}
                </nav>
            </header>

            <Drawer isOpen={isOpen} placement="left" onClose={toggleMenu}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <Flex direction="column" align="center">
                            <Link to="/">
                                <Button variant="ghost" onClick={toggleMenu} size="lg" w="full" my={2}>
                                    Home
                                </Button>
                            </Link>
                            <Link to="/favorites">
                                <Button variant="ghost" onClick={toggleMenu} size="lg" w="full" my={2}>
                                    Favorite
                                    <FavoritesCounter colorScheme="red" />
                                </Button>
                            </Link>
                            <Link to="/cart">
                                <Button variant="ghost" onClick={toggleMenu} size="lg" w="full" my={2}>
                                    Cart
                                    <CartCounter />
                                </Button>
                            </Link>
                            <Link to="/cart/orders">
                                <Button variant="ghost" onClick={toggleMenu} size="lg" w="full" my={2}>
                                    Orders
                                </Button>
                            </Link>
                            <Link to="/map">
                                <Button variant="ghost" onClick={toggleMenu} size="lg" w="full" my={2}>
                                    Map
                                </Button>
                            </Link>
                            <Button
                                variant="ghost"
                                onClick={toggleColorMode}
                                size="lg"
                                w="full"
                                my={2}
                            >
                                {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            </Button>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Header;