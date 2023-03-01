import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ProductList from './ProductList';
import CategorySelect from "../CategorySelect/CategorySelect";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div>
            <SearchForm setSearchTerm={setSearchTerm} />
            <CategorySelect setCategory={setCategory} />
            <ProductList searchTerm={searchTerm} category={category} />
        </div>
    );
};
export default Home;
