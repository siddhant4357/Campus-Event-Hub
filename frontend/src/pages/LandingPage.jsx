import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    ArrowRight,
    QrCode,
    LineChart,
    ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const features = [
        {
            icon: <Calendar className="w-8 h-8 text-blue-600" />,
            title: "Real-time Events",
            description: "Discover and register for events happening across colleges in real-time."
        },
        {
            icon: <QrCode className="w-8 h-8 text-indigo-600" />,
            title: "QR Ticketing",
            description: "Seamless entry with instant QR code generation and verification."
        },
        {
            icon: <LineChart className="w-8 h-8 text-blue-600" />,
            title: "Live Analytics",
            description: "Track registrations, revenue, and attendee engagement instantly."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
            title: "Secure Payments",
            description: "Integrated secure payment gateway for paid events and workshops."
        }
    ];

    return (
        <div className="min-h-screen bg-g radient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Custom Navbar */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <div>
                            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent block">
                                CampusEventHub
                            </span>
                            <span className="text-xs text-gray-500 block -mt-1">Connect • Discover • Engage</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/login"
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="lg:w-1/2 text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                                Campus Events <br />
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Reimagined
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                The centralized hub for inter-college fests, hackathons, and workshops.
                                Experience campus life like never before.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/register"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                                >
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    to="/login"
                                    className="px-8 py-4 bg-white/50 backdrop-blur-sm text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all"
                                >
                                    View Events
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-30 animate-pulse group-hover:opacity-40 transition-opacity"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Campus Event"
                                    className="relative rounded-2xl shadow-2xl transition-transform duration-500 border border-white/20 transform group-hover:scale-[1.01]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why CampusEventHub?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Everything you need to manage, participate, and enjoy campus events in one seamless platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="mb-4 bg-blue-50 p-4 rounded-xl inline-block shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Colleges", value: "50+" },
                            { label: "Events Hosted", value: "500+" },
                            { label: "Students", value: "10k+" },
                            { label: "Registrations", value: "25k+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-white"
                            >
                                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-blue-100 uppercase tracking-wide text-sm font-semibold opacity-90">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Join thousands of students and colleges already using CampusEventHub to streamline their event experience.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link
                                to="/register"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-lg"
                            >
                                Sign Up Now
                            </Link>
                            <Link
                                to="/login"
                                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 hover:shadow-md transition-all"
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
