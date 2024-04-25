import { Footer as FlowbiteFooter, FooterCopyright, FooterDivider } from "flowbite-react";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FlowbiteFooter container className="mt-10 sm:p-6 p-3">
            <div className="w-full text-center ">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" alt="StellarCraft Logo" className="mr-3 h-6 sm:h-9" /> */}
                        <h1 className="text-xl font-semibold dark:text-white">StellarCraft</h1>
                    </Link>
                    <div className="flex space-x-4">
                        <Link to="/about" className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
                            About
                        </Link>
                        <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
                            Privacy Policy
                        </Link>
                        <Link to="/licensing" className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
                            Licensing
                        </Link>
                        <Link to="/contact" className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
                            Contact
                        </Link>
                    </div>
                </div>
                <FooterDivider />
                <FooterCopyright to="/" by="StellarCraft | All rights reserved." year={2024} />
            </div>
        </FlowbiteFooter>
    );
}

export default Footer;
