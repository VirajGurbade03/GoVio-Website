'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPaperPlane, FaBuilding, FaUser, FaEnvelope, FaPhone, FaBus, FaCommentDots } from 'react-icons/fa';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        organizationName: '',
        contactPerson: '',
        email: '',
        phone: '',
        numberOfBuses: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/hellogovio@gmail.com', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    organizationName: '',
                    contactPerson: '',
                    email: '',
                    phone: '',
                    numberOfBuses: '',
                    message: '',
                });
            } else {
                const data = await response.json();
                console.error('Formspree Error:', data);
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 text-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                            Get Started Today
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Schedule a free demo and see how GoVio can transform your transport operations
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <form
                            action="https://formspree.io/f/hellogovio@gmail.com"
                            method="POST"
                            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-6">Schedule Your Demo</h3>

                            <div className="space-y-6">
                                {/* Organization Name */}
                                <div>
                                    <label htmlFor="organizationName" className="block text-sm font-semibold mb-2 text-gray-200">
                                        Organization Name *
                                    </label>
                                    <div className="relative">
                                        <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            id="organizationName"
                                            name="Organization"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                            placeholder="Your School/Company Name"
                                        />
                                    </div>
                                </div>

                                {/* Contact Person */}
                                <div>
                                    <label htmlFor="contactPerson" className="block text-sm font-semibold mb-2 text-gray-200">
                                        Contact Person *
                                    </label>
                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            id="contactPerson"
                                            name="Name"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                            placeholder="Your Full Name"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-200">
                                            Email *
                                        </label>
                                        <div className="relative">
                                            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="Email"
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-200">
                                            Phone *
                                        </label>
                                        <div className="relative">
                                            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="Phone"
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                                placeholder="+91 8600860254"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Number of Buses */}
                                <div>
                                    <label htmlFor="numberOfBuses" className="block text-sm font-semibold mb-2 text-gray-200">
                                        Number of Buses *
                                    </label>
                                    <div className="relative">
                                        <FaBus className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <select
                                            id="numberOfBuses"
                                            name="Fleet Size"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all appearance-none"
                                        >
                                            <option value="" className="bg-gray-800">Select range</option>
                                            <option value="1-5" className="bg-gray-800">1-5 buses</option>
                                            <option value="6-10" className="bg-gray-800">6-10 buses</option>
                                            <option value="11-25" className="bg-gray-800">11-25 buses</option>
                                            <option value="26-50" className="bg-gray-800">26-50 buses</option>
                                            <option value="50+" className="bg-gray-800">50+ buses</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-200">
                                        Message (Optional)
                                    </label>
                                    <div className="relative">
                                        <FaCommentDots className="absolute left-4 top-4 text-gray-400" />
                                        <textarea
                                            id="message"
                                            name="Message"
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all"
                                >
                                    <span>Schedule Demo</span>
                                    <FaPaperPlane />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right: Contact Info & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* What to Expect */}
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                            <div className="space-y-4">
                                {[
                                    { title: '30-Minute Demo', desc: 'Personalized walkthrough of all features' },
                                    { title: 'Custom Pricing', desc: 'Get a quote tailored to your fleet size' },
                                    { title: 'Q&A Session', desc: 'Ask our experts anything' },
                                    { title: 'Quick Setup', desc: 'Go live within 24-48 hours' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-gray-300 text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-300 text-sm mb-1">Email</p>
                                    <a href="mailto:hellogovio@gmail.com" className="text-cyan-400 font-semibold hover:underline">
                                        hellogovio@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm mb-1">Phone</p>
                                    <a href="tel:+91 8600860254" className="text-cyan-400 font-semibold hover:underline">
                                        +91 8600860254
                                    </a>
                                </div>
                                <div>
                                    <p className="text-gray-300 text-sm mb-1">Address</p>
                                    <p className="text-white font-semibold">Remote</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-6 border border-green-500/30">
                            <p className="text-center text-lg">
                                <span className="font-bold text-green-400">10+</span> organizations trust GoVio
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
