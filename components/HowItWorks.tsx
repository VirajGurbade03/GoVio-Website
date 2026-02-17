'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUserPlus, FaRoute, FaMobileAlt, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const steps = [
        {
            number: '01',
            icon: <FaUserPlus size={32} />,
            title: 'Organization Registers',
            description: 'Sign up and create your organization profile. Add your fleet details, routes, and user roles in minutes.',
            color: 'from-blue-500 to-blue-600',
        },
        {
            number: '02',
            icon: <FaRoute size={32} />,
            title: 'vehicles & Routes Configured',
            description: 'Set up your vehicles routes, stops, schedules, and assign drivers. Our AI suggests optimal route configurations.',
            color: 'from-purple-500 to-purple-600',
        },
        {
            number: '03',
            icon: <FaMobileAlt size={32} />,
            title: 'Drivers Use GoVio App',
            description: 'Drivers download the app, start their trips, and the system automatically tracks location and updates ETA.',
            color: 'from-green-500 to-green-600',
        },
        {
            number: '04',
            icon: <FaMapMarkedAlt size={32} />,
            title: 'Live Tracking for Users',
            description: 'Students, employees, or parents track vehicles location in real-time with accurate ETA and pickup notifications.',
            color: 'from-orange-500 to-orange-600',
        },
        {
            number: '05',
            icon: <FaChartLine size={32} />,
            title: 'Admin Monitors Everything',
            description: 'Access the web dashboard to view all vehicles live, generate reports, and make data-driven decisions.',
            color: 'from-red-500 to-red-600',
        },
    ];

    return (
        <section id="how-it-works" ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">How It Works</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get started in 5 simple steps and transform your transport operations
                    </p>
                </motion.div>

                {/* Timeline - Desktop */}
                <div className="hidden lg:block relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 via-orange-500 to-red-500 transform -translate-y-1/2 opacity-20"></div>

                    <div className="grid grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Step Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-4">
                                    {/* Number Badge */}
                                    <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mx-auto mt-8 mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Dot */}
                                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br ${step.color} rounded-full shadow-lg z-10`}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline - Mobile */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-20"
                        >
                            {/* Vertical Line */}
                            {index < steps.length - 1 && (
                                <div className={`absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b ${step.color} opacity-20`}></div>
                            )}

                            {/* Number Badge */}
                            <div className={`absolute left-0 top-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                {step.number}
                            </div>

                            {/* Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-20"
                >
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-primary-100">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                            Ready to Get Started?
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                            Join 10+ organizations already using GoVio to streamline their transport operations
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
                            >
                                Schedule Free Demo
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-xl shadow-lg border-2 border-primary-200 hover:shadow-xl transition-all"
                            >
                                Contact Sales
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
