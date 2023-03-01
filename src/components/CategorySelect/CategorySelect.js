import React from "react";
import { useSelector } from "react-redux";
import { Select } from "@chakra-ui/react";

const CategorySelect = ({ setCategory }) => {
    const products = useSelector((state) => state.shop.products);
    const categories = [...new Set(products.map((product) => product.category))];

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <Select placeholder="All" onChange={handleChange}>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </Select>
    );
};


export default CategorySelect;
