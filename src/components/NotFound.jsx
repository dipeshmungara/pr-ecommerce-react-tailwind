// import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-lg">Page not found</p>
            <p>
                <Link to="/" className="text-blue-600 hover:underline">
                    Go to Home
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
