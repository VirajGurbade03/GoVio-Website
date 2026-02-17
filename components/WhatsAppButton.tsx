'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/918600860254?text=Hi!%20I'm%20interested%20in%20GoVio%20Transport%20Management%20System"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/50 transition-all group"
        >
            <FaWhatsapp size={32} className="group-hover:scale-110 transition-transform" />

            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us on WhatsApp
                <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
