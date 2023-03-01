import React from 'react';
import { Link } from 'react-router-dom';
import {
    Flex,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react';


const MobMenu = ({ isOpen, toggleMenu, toggleColorMode, isDark }) => {
    const handleItemClick = () => {
        toggleMenu();
    };

    return (
        <Drawer isOpen={isOpen} placement="left" onClose={toggleMenu}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <Flex direction="column" align="center">
                        <Link to="/">
                            <Button variant="ghost" onClick={handleItemClick} size="lg" w="full" my={2}>
                                Home
                            </Button>
                        </Link>
                        <Button variant="ghost" onClick={handleItemClick} size="lg" w="full" my={2}>
                            Favorite
                        </Button>
                        <Button variant="ghost" onClick={handleItemClick} size="lg" w="full" my={2}>
                            Cart
                        </Button>

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
    );
};

export default MobMenu;