import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@chakra-ui/input";
import { searchProducts } from "../../redux/actions/actions";

const SearchForm = ({ setSearchTerm }) => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        setSearchTerm(e.target.value);
        dispatch(searchProducts(e.target.value));
    };

    return (
        <Input
            value={searchInput}
            placeholder="Product search"
            onChange={handleChange}
        />
    );
};

export default SearchForm;
