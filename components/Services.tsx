'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaSchool, FaUniversity, FaBuilding, FaBus, FaChartBar, FaArrowRight } from 'react-icons/fa';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            icon: <FaSchool size={24} />,
            title: 'School Transport Management',
            description: 'Complete solution for K-12 schools with parent app integration, real-time notifications, and student safety features.',
            features: ['Parent Live Tracking', 'Pickup/Drop Alerts', 'Real-time Updates', 'Emergency SOS'],
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
        },
        {
            icon: <FaUniversity size={24} />,
            title: 'University Transport System',
            description: 'Scalable transport management for colleges and universities with multiple routes, campuses, and thousands of students.',
            features: ['Multi-Campus Support', 'Route Scheduling', 'Student Portal', 'Analytics Dashboard'],
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50',
        },
        {
            icon: <FaBuilding size={28} />,
            title: 'Corporate Employee Transport',
            description: 'Streamline employee commute with optimized routes, shift-based scheduling, and cost management.',
            features: ['Shift Management', 'Cost Allocation', 'Employee App', 'Roster Planning'],
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
        },
        {
            icon: <FaBus size={28} />,
            title: 'Fleet & Driver Monitoring',
            description: 'Comprehensive fleet management with driver behavior tracking, vehicle maintenance, and fuel monitoring.',
            features: ['Driver Behavior', 'Vehicle Maintenance'],
            color: 'from-orange-500 to-orange-600',
            bgColor: 'bg-orange-50',
        },
        {
            icon: <FaChartBar size={28} />,
            title: 'Admin Analytics Dashboard',
            description: 'Powerful web dashboard with real-time insights, custom reports, and data visualization for informed decisions.',
            features: ['Live Map View', 'Custom Reports', 'Cost Analysis', 'Performance Metrics'],
            color: 'from-red-500 to-red-600',
            bgColor: 'bg-red-50',
        },
    ];

    return (
        <section id="services" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">Our Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Tailored transport management solutions for every type of organization
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                            {/* Content */}
                            <div className="relative p-8">
                                {/* Icon */}
                                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                    <div className={`bg-gradient-to-br ${service.color} p-2.5 rounded-xl`}>
                                        <div className="text-white">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-700">
                                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Button */}
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className={`flex items-center space-x-2 font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:opacity-100 transition-opacity`}
                                >
                                    <span>Learn More</span>
                                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </motion.button>
                            </div>

                            {/* Decorative Corner */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300`}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-600 mb-6">
                        Need a custom solution? We've got you covered.
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
                    >
                        <span>Talk to Our Experts</span>
                        <FaArrowRight />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
