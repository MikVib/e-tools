import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProduct } from '../../redux/slicers/fakeShopSlice';
import useActions from '../../hooks/hooks';
import { Box, Text, Badge, Tag, Flex, Button } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { addToCart } from '../../redux/slicers/cartSlice';
import { FiShoppingCart } from 'react-icons/fi';
import { addToFavorites, removeFromFavorites } from '../../redux/slicers/favoritesSlice';
import FavoritesButton from '../Favorites/FavoritesButton';


const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { fetchProduct } = useActions('shop');
  const loading = useSelector((state) => state.shop.loading);
  const product = useSelector((state) => state.shop.product);
  const cartItems = useSelector(state => state.cart.cartItems);
    // const cartItem = product.id ? cartItems.find(item => item.id === product.id) : null;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
};

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleThumbClick = (index) => {
    setCurrentSlide(index);
    swiper.slideTo(index);
  };

  return (
    <Box maxW="xl" mx="auto" mb={8} px={4} >
      <Button onClick={goBack}>Back</Button>
      {product ? (
        <>
        {/* <FavoritesButton /> */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSwiper={(swiper) => setSwiper(swiper)} 
            onSlideChange={() => console.log('slide change')}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Flex mt={4} justifyContent="center">
                <img src={image} alt={`${index}`} height="400" width="400" />
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>
          <Flex mt={4} justifyContent="space-between">
            {product.images.map((image, index) => (
              <Box key={index} mr={2} cursor="pointer" onClick={() => handleThumbClick(index)}>
                <img src={image} alt={`${index}`} height="80" width="80" />
              </Box>
            ))}
          </Flex>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {product.title}
          </Text>
          <Flex d="flex"  justifyContent="space-between" mb={2}>
          {/* <Flex  w="100%" py={2}> */}
            <Badge colorScheme="green">{product.category}</Badge>
            <Tag colorScheme="orange">{product.brand}</Tag>
          </Flex>
          <Text fontSize="md" mb={4}>
            {product.description}
          </Text>
          <Box d="flex" alignItems="center">
            <Text fontSize="2xl" fontWeight="semibold" mr={2}>
              ${product.price}
            </Text>
            <Text fontSize="lg" color="gray.600" textDecoration="line-through">
              ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
            </Text>
            <Flex d="flex"  justifyContent="space-between" mb={2}>
            <Badge colorScheme="green" ml={2}>
              {product.discountPercentage}% OFF
            </Badge>
            <Button
                    colorScheme="teal"
                    size="md"
                    leftIcon={<FiShoppingCart />}
                    onClick={() => handleAddToCart(product)}
                >
                    Add to cart
                    {/* {cartItem && ( */}
                    {/* <Badge colorScheme="black" variant='outline' ml='1' fontSize='0.9em' >{cartItem.quantity}</Badge> */}
                {/* )} */}
                </Button>
                </Flex>
          </Box>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Box>
  );

};

export default Details;
