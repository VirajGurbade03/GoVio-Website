'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaApple, FaGooglePlay, FaQrcode, FaBell, FaClock, FaShieldAlt, FaMobileAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MobileApp = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentImage, setCurrentImage] = useState(0);

    const appScreenshots = [
        '/assests/GoVio App Image/WhatsApp Image 2026-02-07 at 8.03.01 AM (1).jpeg',
        '/assests/GoVio App Image/WhatsApp Image 2026-02-07 at 8.03.01 AM.jpeg',
        '/assests/GoVio App Image/WhatsApp Image 2026-02-07 at 8.02.53 AM.jpeg',
        '/assests/GoVio App Image/WhatsApp Image 2026-02-07 at 8.02.59 AM (1).jpeg',
        '/assests/GoVio App Image/WhatsApp Image 2026-02-07 at 8.03.02 AM (1).jpeg',
    ];

    const features = [
        {
            icon: <FaMobileAlt size={24} />,
            title: 'Live Vehicle Tracking',
            description: 'Track your vehicle in real-time on an interactive map',
        },
        {
            icon: <FaBell size={24} />,
            title: 'Push Notifications',
            description: 'Get instant alerts for vehicle arrival and delays',
        },
        {
            icon: <FaClock size={24} />,
            title: 'Accurate ETA',
            description: 'Know exactly when your vehicle will arrive',
        },
        {
            icon: <FaShieldAlt size={24} />,
            title: 'Safe Pickup Alerts',
            description: 'Parents get notified when students board/exit',
        },
    ];

    const nextImage = () => {
        setCurrentImage((prev: number) => (prev + 1) % appScreenshots.length);
    };

    const prevImage = () => {
        setCurrentImage((prev: number) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
    };

    return (
        <section id="download" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Mobile App Screenshots Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative w-full max-w-[320px] sm:max-w-[340px] mx-auto">
                            {/* Phone Frame with Real Screenshot */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                                    {/* Real App Screenshot */}
                                    <div className="relative aspect-[9/19.5] w-full">
                                        <img
                                            src={appScreenshots[currentImage]}
                                            alt={`GoVio App Screenshot ${currentImage + 1}`}
                                            className="w-full h-full object-contain bg-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
                                <motion.button
                                    onClick={prevImage}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 pointer-events-auto hover:bg-primary-50 transition-colors"
                                >
                                    <FaChevronLeft size={20} />
                                </motion.button>
                                <motion.button
                                    onClick={nextImage}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 pointer-events-auto hover:bg-primary-50 transition-colors"
                                >
                                    <FaChevronRight size={20} />
                                </motion.button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {appScreenshots.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? 'bg-primary-600 w-8' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-2xl"
                            >
                                <FaBell />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl flex items-center justify-center text-white text-2xl"
                            >
                                ✓
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Download the <span className="gradient-text">GoVio App</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Track your vehicle in real-time, get instant notifications, and never miss your ride. Available for iOS and Android.
                        </p>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-gray-900">{feature.title}</h4>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Download Buttons */}
                        <div className="space-y-4 mb-8">
                            <motion.a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-4 bg-black text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <FaGooglePlay size={32} className="text-green-400" />
                                <div className="text-left">
                                    <p className="text-xs text-gray-300">GET IT ON</p>
                                    <p className="text-lg font-bold">Google Play</p>
                                </div>
                            </motion.a>

                            {/* Direct APK Download Link */}
                            <motion.a
                                href="/Govio app/GoVio.apk"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-4 bg-primary-600 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <FaGooglePlay size={32} className="opacity-50" />
                                <div className="text-left font-semibold">
                                    <p className="text-xs text-primary-100">Android Users</p>
                                    <p className="text-lg">Direct APK Download</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://apps.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-4 bg-black text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <FaApple size={32} />
                                <div className="text-left font-semibold">
                                    <p className="text-xs text-gray-300">Download on the</p>
                                    <p className="text-lg font-bold">App Store</p>
                                </div>
                            </motion.a>
                        </div>

                        {/* QR Code Option */}
                        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100">
                            <div className="flex items-center space-x-6">
                                <div className="relative group">
                                    <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center shadow-lg p-2 transition-transform group-hover:scale-105">
                                        <img
                                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin + '/Govio app/GoVio.apk' : 'https://govio-a61ea.web.app/Govio app/GoVio.apk')}`}
                                            alt="Scan to Download APK"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-gray-900">Scan to Download</h4>
                                    <p className="text-sm text-gray-600 mb-3">Scan this with your phone camera to download the Android App directly.</p>
                                    <a
                                        href="/Govio app/GoVio.apk"
                                        download
                                        className="text-primary-600 text-sm font-bold hover:underline flex items-center"
                                    >
                                        Click here to download APK file
                                        <FaChevronRight className="ml-1 text-[10px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;
