'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaDesktop, FaMapMarkedAlt, FaFileDownload, FaUserShield, FaChartPie, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const WebAppAccess = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentImage, setCurrentImage] = useState(0);

    const portalScreenshots = [
        '/assests/GoVio Portal Image/Screenshot (782).png',
        '/assests/GoVio Portal Image/Screenshot (783).png',
        '/assests/GoVio Portal Image/Screenshot (784).png',
        '/assests/GoVio Portal Image/Screenshot (785).png',
        '/assests/GoVio Portal Image/Screenshot (797).png',
        '/assests/GoVio Portal Image/Screenshot (798).png',
    ];

    const features = [
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: 'Live Map View',
            description: 'View all buses on a single map with real-time location updates',
        },
        {
            icon: <FaChartPie size={28} />,
            title: 'Maintenance Analytics',
            description: 'Monitor vehicle status and maintenance schedules with detailed',
        },
        {
            icon: <FaUserShield size={28} />,
            title: 'Route Control',
            description: 'Manage routes, stops, and schedules with ease',
        },
        {
            icon: <FaClock size={28} />,
            title: 'Driver Status',
            description: 'Monitor driver availability, shifts, and performance',
        },
        {
            icon: <FaDesktop size={28} />,
            title: 'Multi-User Access',
            description: 'Role-based access for admins, managers, and supervisors',
        },
    ];

    const nextImage = () => {
        setCurrentImage((prev: number) => (prev + 1) % portalScreenshots.length);
    };

    const prevImage = () => {
        setCurrentImage((prev: number) => (prev - 1 + portalScreenshots.length) % portalScreenshots.length);
    };

    return (
        <section id="webapp" ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Powerful Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Web Dashboard</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Manage your entire transport operation from a single, intuitive web interface. Get real-time insights and make data-driven decisions.
                        </p>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="https://govio-a61ea.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all"
                        >
                            <FaDesktop />
                            <span>Access Web Dashboard</span>
                        </motion.a>
                    </motion.div>

                    {/* Right: Dashboard Screenshots Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl border border-gray-700">
                            {/* Real Dashboard Screenshot */}
                            <div className="bg-gray-950 rounded-2xl overflow-hidden shadow-2xl relative">
                                <img
                                    src={portalScreenshots[currentImage]}
                                    alt={`GoVio Dashboard Screenshot ${currentImage + 1}`}
                                    className="w-full h-auto"
                                />

                                {/* Live Indicator */}
                                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs text-white font-semibold">Live</span>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
                                <motion.button
                                    onClick={prevImage}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors border border-white/20"
                                >
                                    <FaChevronLeft size={20} />
                                </motion.button>
                                <motion.button
                                    onClick={nextImage}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-colors border border-white/20"
                                >
                                    <FaChevronRight size={20} />
                                </motion.button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center mt-4 space-x-2">
                                {portalScreenshots.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? 'bg-cyan-400 w-8' : 'bg-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 -z-10"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WebAppAccess;
