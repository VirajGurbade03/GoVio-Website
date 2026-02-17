'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMapMarkedAlt, FaRoute, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = [
        {
            icon: <FaMapMarkedAlt size={32} />,
            title: 'Real-time Tracking',
            description: 'Live GPS tracking of all vehicles with precise location updates every 5 seconds',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: <FaRoute size={32} />,
            title: 'Route Optimization',
            description: 'AI-powered route planning to reduce fuel costs and travel time',
            color: 'from-purple-500 to-purple-600',
        },
        {
            icon: <FaShieldAlt size={32} />,
            title: 'Safety Monitoring',
            description: 'Speed alerts, geofencing, and emergency SOS features for complete safety',
            color: 'from-red-500 to-red-600',
        },
        {
            icon: <FaChartLine size={32} />,
            title: 'Analytics Dashboard',
            description: 'Comprehensive reports on fleet performance, costs, and efficiency metrics',
            color: 'from-orange-500 to-orange-600',
        },
    ];

    return (
        <section id="about" ref={ref} className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">About GoVio</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        GoVio is an <span className="font-semibold text-primary-600">Institutional Transport Intelligence Platform</span> that transforms how organizations manage their transport operations.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left: Why Digitization */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-gray-900">
                            Why Transport Management Needs Digitization
                        </h3>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p className="text-lg">
                                Traditional transport management relies on manual processes, phone calls, and paperwork leading to inefficiencies, safety concerns, and lack of accountability.
                            </p>
                            <p className="text-lg">
                                <span className="font-semibold text-primary-600">GoVio digitizes every aspect</span> of transport operations, providing real-time visibility, automated workflows, and data-driven insights that save time, reduce costs, and enhance safety.
                            </p>
                            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mt-6">
                                <p className="text-primary-900 font-semibold text-lg">
                                    "From chaos to control GoVio brings order to institutional transport."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 lg:p-12 shadow-2xl">
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { value: '95%', label: 'Cost Reduction' },
                                    { value: '100%', label: 'Transparency' },
                                    { value: '24/7', label: 'Monitoring' },
                                    { value: '0', label: 'Paperwork' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
                                        <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Core Features That Set Us Apart
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:border-primary-300 transition-all group"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
