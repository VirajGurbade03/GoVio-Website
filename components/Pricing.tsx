'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheck, FaBus, FaUsers, FaRocket, FaStar } from 'react-icons/fa';

const Pricing = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="pricing" ref={ref} className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">Simple, Transparent Pricing</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Pay only for what you use. No hidden fees, no surprises.
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl shadow-2xl border-2 border-primary-100 overflow-hidden">
                        {/* Popular Badge */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center py-3 font-semibold">
                            <FaStar className="inline mr-2" />
                            Most Popular Plan
                        </div>

                        <div className="p-8 lg:p-12">
                            <div className="grid lg:grid-cols-2 gap-12">
                                {/* Left: Pricing Details */}
                                <div>
                                    <h3 className="text-3xl font-bold mb-6 text-gray-900">Enterprise Plan</h3>

                                    <div className="space-y-6 mb-8">
                                        {/* One-time Setup */}
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-gray-600 font-medium">One-time Setup</span>
                                                <FaRocket className="text-primary-600" size={24} />
                                            </div>
                                            <div className="text-3xl font-bold gradient-text">Professional Setup</div>
                                            <p className="text-sm text-gray-500 mt-2">Includes full system configuration & staff training</p>
                                        </div>

                                        {/* Monthly Subscription */}
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary-200 ring-2 ring-primary-500">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-gray-600 font-medium">Monthly Subscription</span>
                                                <FaUsers className="text-primary-600" size={24} />
                                            </div>
                                            <div className="text-3xl font-bold gradient-text">Flexible Pricing</div>
                                            <p className="text-sm text-gray-500 mt-2">Cost-effective plans that scale with your users</p>
                                        </div>

                                        {/* Unlimited Vehicles */}
                                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-gray-600 font-medium">Unlimited Vehicles</span>
                                                <FaBus className="text-green-600" size={24} />
                                            </div>
                                            <div className="text-3xl font-bold text-green-600">Included</div>
                                            <p className="text-sm text-gray-500 mt-2">Unlimited vehicles, vehicles & routes at no extra cost</p>
                                        </div>
                                    </div>

                                    {/* Highlight */}
                                    <div className="bg-gradient-to-r from-secondary-100 to-secondary-50 border-l-4 border-secondary-600 p-6 rounded-r-2xl">
                                        <p className="text-secondary-900 font-bold text-lg">
                                            "Scales with users, not buses."
                                        </p>
                                        <p className="text-secondary-700 text-sm mt-2">
                                            Unlimited fleet support for your organization
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Features Included */}
                                <div>
                                    <h4 className="text-2xl font-bold mb-6 text-gray-900">Everything Included</h4>
                                    <div className="space-y-4">
                                        {[
                                            'Real-time GPS Tracking',
                                            'Mobile Apps (iOS & Android)',
                                            'Web Admin Dashboard',
                                            'Unlimited Users & Routes',
                                            'Push Notifications',
                                            'Route Optimization',
                                            'Driver App',
                                            'Parent/Student App',
                                            'Analytics & Reports',
                                            'Email & SMS Alerts',
                                            '24/7 Customer Support',
                                            'Regular Updates',
                                            'Data Backup & Security',
                                        ].map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <FaCheck className="text-white text-xs" />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-12 text-center">
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-xl rounded-xl shadow-2xl hover:shadow-primary-500/50 transition-all"
                                >
                                    <span>Get Free Demo</span>
                                    <FaRocket />
                                </motion.a>
                                <p className="text-gray-600 mt-4">No credit card required • Setup in 24 hours</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 text-lg">
                        Need a custom plan for 100+ buses?
                        <a href="#contact" className="text-primary-600 font-semibold hover:underline ml-2">
                            Contact our sales team
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
