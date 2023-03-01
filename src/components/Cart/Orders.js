import { Box, Heading, Text, List, ListItem, Image, Button, Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { clearOrders } from '../../redux/slicers/ordersSlice';

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        };
        return date.toLocaleString('ru-RU', options);
    };

    const handleClearOrders = () => {
        dispatch(clearOrders());
    };

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <Box p="4">

            <Heading align="center" as="h3" mb="4">Order History</Heading>
            <Flex align="center" justify="space-around" w="100%" py={2}>
                <Button onClick={goBack}>Back</Button>
                {orders.length > 0 && (
                    <Button onClick={handleClearOrders} mb="4">Clear History</Button>
                )}
            </Flex>
            {orders.map((order, index) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" p="4" mb="4">
                    <Heading as="h2" size="md" mb="2">Order #{orders.length - index}</Heading>
                    <Text mb="2">Date: {formatDate(order.date)}</Text>
                    <List mb="2">
                        {order.items.map((item) => (
                            <ListItem key={item.id}>
                                <Link to={`/details/${item.id}`}>
                                    <Image src={item.thumbnail} alt={item.title} boxSize="100px" mr="2" />
                                    </Link>
                                {item.title} ({item.quantity} x ${item.price})
                            </ListItem>
                        ))}
                    </List>
                    <Text fontWeight="bold">Total Price: ${order.totalPrice}</Text>
                </Box>
            ))}
        </Box>
    );
};


export default Orders;
