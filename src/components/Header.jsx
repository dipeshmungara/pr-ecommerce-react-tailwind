// Import necessary dependencies and components
import { 
    Button, 
    MegaMenu, 
    MegaMenuDropdown, 
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle
} from 'flowbite-react';

import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <MegaMenu className="px-0 py-3 mb-10 border-b-2 border-gray-200 dark:border-gray-700 sm:px-0 sm:py-3">
      <NavbarBrand className="text-left">
    <Link to="/" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        StellarCraft
    </Link>
</NavbarBrand>
      <div className="order-2 hidden items-center md:flex">
        <Link
          to="/login"
          className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 md:mr-2 md:px-5 md:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Login
        </Link>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        {/* Replace NavbarLink with Link components */}
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <MegaMenuDropdown toggle={<>Company</>}>
          {/* Content of the MegaMenu Dropdown */}
          <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul className="mb-4 hidden space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
              {/* List of links */}
              <li>
                <Link to="/online-stores" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores
                </Link>
              </li>
              <li>
                <Link to="/online-stores" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores
                </Link>
              </li>
              <li>
                <Link to="/online-stores" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores
                </Link>
              </li>
              <li>
                <Link to="/online-stores" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores
                </Link>
              </li>
              {/* Additional links */}
              {/* Add other items here */}
            </ul>
            {/* Additional list items */}
            <ul className="mb-4 space-y-4 md:mb-0">
              <li>
                <Link to="/online-stores" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores
                </Link>
              </li>
              <li>
                <Link to="/online-stores" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores 1
                </Link>
              </li>
              <li>
                <Link to="/online-stores" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores 2
                </Link>
              </li>
              <li>
                <Link to="/online-stores" className="hover:text-primary-600 dark:hover:text-primary-500">
                  Online Stores 3
                </Link>
              </li>
            </ul>
            {/* Call to action */}
            <Link to="/new-flowbite-dashboard" className="rounded-lg bg-gray-800 p-8 text-left">
              <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                Preview the new Flowbite dashboard navigation.
              </p>
              <button
                type="button"
                className="inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-700"
              >
                Get started
                <HiArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </MegaMenuDropdown>
        {/* Additional links */}
        <Link to="/products" className="nav-link">Products</Link>
      </NavbarCollapse>
    </MegaMenu>
  );
};

export default Header;
