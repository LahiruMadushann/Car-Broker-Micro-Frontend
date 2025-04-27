import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-lg py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm text-white font-semibold">
                    &copy; {new Date().getFullYear()} Car Broker. All rights reserved.
                </p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-200 transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-200 transition-colors"
                        aria-label="Twitter"
                    >
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-200 transition-colors"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
