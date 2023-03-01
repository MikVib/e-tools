import React, { useMemo } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const ProductFilter = ({ searchTerm, category, allProducts }) => {
    const filteredProducts = useMemo(() => {
      if (searchTerm) {
        return allProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (category) {
        return allProducts.filter((product) => product.category === category);
      } else {
        return allProducts;
      }
    }, [searchTerm, category, allProducts]);
  
    if (allProducts.length === 0) {
      return <Text>Loading f...</Text>;
    }
  
    return (
      <>
        {filteredProducts.length > 0 ? (
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <Text>No products found</Text>
        )}
      </>
    );
  };
  

export default ProductFilter;
