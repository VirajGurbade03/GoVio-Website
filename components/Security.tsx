'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaServer, FaCheckCircle } from 'react-icons/fa';

const Security = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = [
        {
            icon: <FaServer size={40} />,
            title: 'Secure Cloud Infrastructure',
            description: 'Hosted on enterprise-grade cloud servers with automatic backups and disaster recovery',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: <FaUserShield size={40} />,
            title: 'Role-based Access Control',
            description: 'Granular permissions ensure users only see what they need to see',
            color: 'from-purple-500 to-purple-600',
        },
        {
            icon: <FaLock size={40} />,
            title: 'End-to-End Encryption',
            description: 'All data is encrypted in transit and at rest using industry-standard protocols',
            color: 'from-green-500 to-green-600',
        },
        {
            icon: <FaCheckCircle size={40} />,
            title: '99.9% Uptime Guarantee',
            description: 'Reliable service with minimal downtime and 24/7 monitoring',
            color: 'from-orange-500 to-orange-600',
        },
    ];

    const certifications = [
        'ISO 27001 Compliant',
        'GDPR Ready',
        'SOC 2 Type II',
        'Regular Security Audits',
    ];

    return (
        <section id="security" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 shadow-lg">
                        <FaShieldAlt size={40} className="text-white" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="gradient-text">Security & Trust</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Your data security is our top priority. We implement industry-leading security measures to protect your information.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center"
                        >
                            <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12 border border-primary-100"
                >
                    <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gray-900">
                        Compliance & Certifications
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
                            >
                                <FaCheckCircle className="text-green-500 mx-auto mb-3" size={32} />
                                <p className="font-semibold text-gray-900">{cert}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Trusted by <span className="font-bold text-primary-600">10+ organizations</span> across schools, universities, and corporations.
                        Your data is safe with us.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Security;
