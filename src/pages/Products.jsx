// Import necessary dependencies and components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

// Sample categories, colors, and products
const categories = ['All', 'Watches', 'Phones', 'Laptops'];
const colors = ['All', 'Black', 'Silver', 'Gold', 'Rose Gold'];
const products = [
    {
        id: 1,
        name: 'Apple Watch Series 7',
        category: 'Watches',
        price: 599,
        imgSrc: 'https://flowbite-react.com/images/products/apple-watch.png',
        rating: 5.0,
        color: 'Black',
    },
    {
        id: 2,
        name: 'Apple Phones 11',
        category: 'Phones',
        price: 599,
        imgSrc: 'https://flowbite-react.com/images/products/apple-watch.png',
        rating: 5.0,
        color: 'Silver',
    },
    {
        id: 3,
        name: 'Apple Macbook Series',
        category: 'Laptops',
        price: 599,
        imgSrc: 'https://flowbite-react.com/images/products/apple-watch.png',
        rating: 5.0,
        color: 'Silver',
    },
    {
        id: 4,
        name: 'Apple mac Mini',
        category: 'Laptops',
        price: 599,
        imgSrc: 'https://flowbite-react.com/images/products/apple-watch.png',
        rating: 5.0,
        color: 'Silver',
    },
    {
        id: 5,
        name: 'Apple Watch Series 7',
        category: 'Watches',
        price: 599,
        imgSrc: 'https://flowbite-react.com/images/products/apple-watch.png',
        rating: 5.0,
        color: 'Silver',
    },
    // Add more products here
];

export const Products = () => {
    // State variables for filters
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedColor, setSelectedColor] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 1000]); // Adjust the range as needed

    // Filter products based on the selected filters
    const filteredProducts = products.filter(product => {
        // Filter by category
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

        // Filter by color
        const matchesColor = selectedColor === 'All' || product.color === selectedColor;

        // Filter by price range
        const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];

        return matchesCategory && matchesColor && matchesPriceRange;
    });

    return (
        <>
            <div className="text-center mt-16">
                <h2 className="text-4xl font-bold">Our Products</h2>
            </div>

            {/* Two-column grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-8 mb-16">

                {/* Left column for filters */}
                <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Filters</h3>

                    {/* Category filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Category</h4>
                        <ul className="space-y-2">
                            {categories.map(category => (
                                <li key={category}>
                                    <button
                                        className={`block w-full text-left p-2 rounded-lg ${selectedCategory === category ? 'bg-gray-300' : 'hover:bg-gray-200'
                                            }`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Color filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Color</h4>
                        <ul className="space-y-2">
                            {colors.map(color => (
                                <li key={color}>
                                    <button
                                        className={`block w-full text-left p-2 rounded-lg ${selectedColor === color ? 'bg-gray-300' : 'hover:bg-gray-200'
                                            }`}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                        {color}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price range filter */}
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Price Range</h4>
                        <div className="flex items-center space-x-2">
                            <input
                                type="number"
                                className="w-full border p-2 rounded-lg"
                                value={priceRange[0]}
                                onChange={e => setPriceRange([parseFloat(e.target.value), priceRange[1]])}
                                placeholder="Min"
                            />
                            <span>-</span>
                            <input
                                type="number"
                                className="w-full border p-2 rounded-lg"
                                value={priceRange[1]}
                                onChange={e => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
                                placeholder="Max"
                            />
                        </div>
                    </div>
                </div>

                {/* Right column for products */}
                <div className="col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                        <Card key={product.id} className="w-full p-4">
                            <Link to={`/product/${product.id}`}>
                                <img src={product.imgSrc} alt={product.name} className="w-full" />
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {product.name}
                                </h5>
                            </Link>
                            <div className="mb-5 mt-2.5 flex items-center">
                                {/* Product rating */}
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className={`h-5 w-5 ${index < product.rating ? 'text-yellow-300' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                    {product.rating}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    ${product.price}
                                </span>
                                <Link
                                    to="#"
                                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                >
                                    Add to cart
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
