'use client';

import { motion } from 'framer-motion';
import { FaPlay, FaDownload, FaSignInAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animated bus markers
    const busMarkers = [
        { id: 1, delay: 0, top: '20%', duration: 15 },
        { id: 2, delay: 5, top: '40%', duration: 18 },
        { id: 3, delay: 10, top: '60%', duration: 20 },
        { id: 4, delay: 3, top: '80%', duration: 16 },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(to right, #0066ff 1px, transparent 1px),
              linear-gradient(to bottom, #0066ff 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Floating Shapes */}
                <motion.div
                    className="absolute w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    animate={{
                        x: mousePosition.x * 0.02,
                        y: mousePosition.y * 0.02,
                    }}
                    style={{ top: '10%', left: '10%' }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    animate={{
                        x: mousePosition.x * -0.02,
                        y: mousePosition.y * -0.02,
                    }}
                    style={{ bottom: '10%', right: '10%' }}
                />

                {/* Animated Bus Markers */}
                {busMarkers.map((marker) => (
                    <motion.div
                        key={marker.id}
                        className="absolute text-primary-600"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{
                            x: ['0%', '100vw'],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: marker.duration,
                            delay: marker.delay,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{ top: marker.top }}
                    >
                        <FaMapMarkerAlt size={24} />
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-6"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-primary-100">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-sm font-semibold text-gray-700">Trusted by 10+ Organizations</span>
                        </div>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="gradient-text">Smart Transport.</span>
                        <br />
                        <span className="text-gray-900">Smarter Institutions.</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        Real-time bus tracking & transport management for organizations.
                        <br />
                        <span className="font-semibold text-primary-600">Enhance safety, optimize routes, and streamline operations.</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all group"
                        >
                            <FaPlay className="group-hover:translate-x-1 transition-transform" />
                            <span>Request Demo</span>
                        </motion.a>

                        <motion.a
                            href="https://govio-a61ea.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl border-2 border-primary-200 transition-all group"
                        >
                            <FaSignInAlt className="group-hover:translate-x-1 transition-transform" />
                            <span>Login to Dashboard</span>
                        </motion.a>

                        <motion.a
                            href="#download"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-3 px-8 py-4 bg-secondary-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group"
                        >
                            <FaDownload className="group-hover:translate-y-1 transition-transform" />
                            <span>Download App</span>
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            { number: '10+', label: 'Organizations' },
                            { number: '1K+', label: 'Active Vehicles' },
                            { number: '10K+', label: 'Daily Trips' },
                            { number: '99.9%', label: 'Uptime' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                            >
                                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-primary-600 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-primary-600 rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
