import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Zap, Globe, ChevronDown, MessageCircle, Briefcase, Code } from 'lucide-react';

/**
 * FadeDown Component - OPTIMIZED
 * Added transform-gpu and will-change-transform for buttery 60fps performance.
 */
const FadeDown = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`transform-gpu will-change-transform ${className}`}
    >
        {children}
    </motion.div>
);

// OPTIMIZATION: Moved static data OUTSIDE the component to prevent re-allocation on every render/state change.
const CONTACT_METHODS = [
    { icon: Mail, title: "Chat to sales", value: "hello@lumina.so", color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { icon: MapPin, title: "Visit us", value: "San Francisco, CA", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { icon: Phone, title: "Call us", value: "+1 (555) 000-0000", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" }
];

const SOCIAL_LINKS = [
    { icon: MessageCircle, href: "#", hoverColor: "hover:text-sky-400" },
    { icon: Briefcase, href: "#", hoverColor: "hover:text-blue-500" },
    { icon: Code, href: "#", hoverColor: "hover:text-white" }
];

const GLOBAL_HUBS = [
    { city: "San Francisco", label: "HQ", icon: MapPin, glow: "bg-fuchsia-500/5" },
    { city: "London", label: "European Hub", icon: Globe, glow: "bg-cyan-500/5" },
    { city: "Tokyo", label: "Asia Pacific", icon: MapPin, glow: "bg-purple-500/5" }
];

const FAQS = [
    {
        question: "Do you offer enterprise support?",
        answer: "Yes, our Enterprise plan includes a dedicated success manager, 24/7 priority phone support, and custom SLA agreements tailored to your organization's needs."
    },
    {
        question: "Can I book a personalized demo?",
        answer: "Absolutely. Our solutions engineers are available for 1-on-1 walkthroughs to show you how Lumina can specifically solve your team's knowledge management challenges."
    },
    {
        question: "What are your support hours?",
        answer: "Our standard support operates 24/5 across all time zones. Enterprise customers enjoy 24/7/365 coverage with guaranteed response times under 2 hours."
    },
    {
        question: "Is my data secure?",
        answer: "Security is our top priority. We use AES-256 encryption at rest, TLS 1.3 in transit, and offer full SOC2 Type II compliance for all enterprise data processing."
    }
];

const ContactUs = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200 font-sans overflow-x-hidden pt-32 pb-20 relative">
            {/* Background Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden transform-gpu">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* 1. HEADER */}
                <section className="text-center mb-12 relative">
                    <FadeDown>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Get in{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                                Touch
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                            Have a question or want to scale your team's knowledge? We'd love to hear from you.
                        </p>
                    </FadeDown>

                    {/* Support SLA Badge */}
                    <FadeDown delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-medium mb-16 shadow-[0_0_15px_rgba(168,85,247,0.1)] transform-gpu">
                            <Zap className="w-4 h-4" /> Average response time: Under 2 hours
                        </div>
                    </FadeDown>

                    {/* Header Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-fuchsia-500/5 to-cyan-500/5 blur-[100px] -z-10 rounded-full transform-gpu" />
                </section>

                {/* 2. MAIN LAYOUT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-32">

                    {/* LEFT COLUMN: CONTACT INFO */}
                    <div className="space-y-6">
                        {CONTACT_METHODS.map((method, idx) => (
                            <FadeDown key={idx} delay={0.1 + (idx * 0.1)}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-300 transform-gpu group">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center border ${method.border} group-hover:scale-110 transition-transform`}>
                                            <method.icon className={`w-6 h-6 ${method.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{method.title}</h3>
                                            <p className="text-lg font-semibold text-white">{method.value}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeDown>
                        ))}

                        {/* Social Links */}
                        <FadeDown delay={0.4} className="pt-6">
                            <div className="flex items-center gap-4">
                                {SOCIAL_LINKS.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-white/20 transform-gpu hover:-translate-y-1 ${social.hoverColor}`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </FadeDown>
                    </div>

                    {/* RIGHT COLUMN: THE FORM */}
                    <FadeDown delay={0.2}>
                        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden transform-gpu">
                            {/* Internal Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 blur-[80px] -mr-20 -mt-20 pointer-events-none transform-gpu" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="Jane"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all placeholder:text-gray-600"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all placeholder:text-gray-600"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="jane@company.com"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all placeholder:text-gray-600"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="How can we help you?"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all placeholder:text-gray-600 resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-[0.98] transform-gpu"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </FadeDown>
                </div>

                {/* 3. GLOBAL PRESENCE SECTION */}
                <section className="mb-32">
                    <FadeDown>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Global Hubs</h2>
                            <p className="text-gray-400 max-w-xl mx-auto">Strategically located to support teams across every major time zone.</p>
                        </div>
                    </FadeDown>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {GLOBAL_HUBS.map((hub, idx) => (
                            <FadeDown key={idx} delay={idx * 0.1}>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/[0.08] transition-all relative overflow-hidden group transform-gpu">
                                    <div className={`absolute inset-0 ${hub.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform-gpu`} />
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <hub.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{hub.city}</h3>
                                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{hub.label}</p>
                                    </div>
                                </div>
                            </FadeDown>
                        ))}
                    </div>
                </section>

                {/* 4. FREQUENTLY ASKED QUESTIONS SECTION */}
                <section className="max-w-3xl mx-auto">
                    <FadeDown>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-400">Everything you need to know about our enterprise support and services.</p>
                        </div>
                    </FadeDown>

                    <div className="space-y-4">
                        {FAQS.map((faq, idx) => (
                            <FadeDown key={idx} delay={idx * 0.1}>
                                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transform-gpu">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group outline-none"
                                    >
                                        <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 transform-gpu ${openFaq === idx ? 'rotate-180 text-white' : ''}`}
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openFaq === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden" // OPTIMIZATION: Prevents text spilling during animation
                                            >
                                                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeDown>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactUs;