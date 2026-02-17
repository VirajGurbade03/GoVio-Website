'use client';

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <a href="#home" className="inline-block">
                                <img
                                    src="/assests/logo/logo.png"
                                    alt="GoVio Logo"
                                    className="h-10 w-auto object-contain mb-2"
                                />
                            </a>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Institutional Transport Intelligence Platform for schools, universities, and corporate organizations.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
                            <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</a></li>
                            <li><a href="#pricing" className="hover:text-primary-400 transition-colors">Pricing</a></li>
                            <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#services" className="hover:text-primary-400 transition-colors">School Transport</a></li>
                            <li><a href="#services" className="hover:text-primary-400 transition-colors">University Transport</a></li>
                            <li><a href="#services" className="hover:text-primary-400 transition-colors">Corporate Transport</a></li>
                            <li><a href="#services" className="hover:text-primary-400 transition-colors">Fleet Management</a></li>
                            <li><a href="#services" className="hover:text-primary-400 transition-colors">Analytics Dashboard</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                                <span className="text-sm">Remote</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                                <a href="mailto:hellogovio@gmail.com" className="text-sm hover:text-primary-400 transition-colors">hellogovio@gmail.com</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaPhone className="text-primary-500 flex-shrink-0" />
                                <a href="tel:+918600860254" className="text-sm hover:text-primary-400 transition-colors">+91 8600860254</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} GoVio. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
                            <a href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</a>
                            <a href="/cookies" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
