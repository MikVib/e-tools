import React from 'react';
import { Flex, Box, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <Flex
            as="footer"
            direction="row"
            justify="space-between"
            align="center"
            p={4}
        >
            <Box>
                &copy; 2023, Company Name
            </Box>
            <Box>
                <IconButton
                    as="a"
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="Facebook"
                    icon={<FaFacebook />}
                    mx={2}
                    size="sm"
                />
                <IconButton
                    as="a"
                    href="https://twitter.com/"
                    target="_blank"
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    mx={2}
                    size="sm"
                />
                <IconButton
                    as="a"
                    href="https://www.instagram.com/"
                    target="_blank"
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    mx={2}
                    size="sm"
                />
                <IconButton
                    as="a"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    mx={2}
                    size="sm"
                />
            </Box>
        </Flex>
    );
};

export default Footer;
