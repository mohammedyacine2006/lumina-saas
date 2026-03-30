import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Users, Globe, Zap, Calendar, Shield, Brain, Rocket, Cpu, TrendingUp, Briefcase, MessageCircle, Code } from 'lucide-react';

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

const AboutUs = () => {
    // Timeline Scroll Animation Setup
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const stats = [
        { label: 'Founded', value: '2024', icon: Calendar, color: 'text-fuchsia-400' },
        { label: 'Active Users', value: '10k+', icon: Users, color: 'text-cyan-400' },
        { label: 'Uptime', value: '99.99%', icon: Zap, color: 'text-purple-400' },
        { label: 'Countries', value: '50+', icon: Globe, color: 'text-blue-400' },
    ];

    const team = [
        {
            name: 'Alex Rivera',
            role: 'CEO',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop',
            twitter: '#',
            linkedin: '#',
        },
        {
            name: 'Sarah Jenkins',
            role: 'Head of Product',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop',
            twitter: '#',
            linkedin: '#',
        },
        {
            name: 'Marcus Chen',
            role: 'Lead Engineer',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop',
            twitter: '#',
            linkedin: '#',
        },
        {
            name: 'Elena Rodriguez',
            role: 'Design Director',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop',
            twitter: '#',
            linkedin: '#',
        },
    ];

    const timeline = [
        {
            year: '2024',
            title: 'The Spark',
            description: 'The idea of connected knowledge was born. We set out to solve the fragmentation of digital thought.',
            icon: Rocket,
            glow: 'from-[#CD7F32] to-[#8B5A2B]',
        },
        {
            year: '2025',
            title: 'Building in Stealth',
            description: 'Engineering the core graph engine. Focused on performance, security, and bi-directional linking.',
            icon: Cpu,
            glow: 'from-slate-300 to-slate-500',
        },
        {
            year: '2026',
            title: 'Lumina 1.0',
            description: 'Public launch and rapid scaling. Helping thousands of thinkers connect their ideas.',
            icon: TrendingUp,
            glow: 'from-fuchsia-400 to-cyan-400',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200 font-sans overflow-x-hidden pt-24 pb-20">
            {/* Background Ambient Glows (Optimized with transform-gpu) */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden transform-gpu">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* 1. HERO SECTION */}
                <section className="text-center mb-24 relative">
                    <FadeDown>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-8 backdrop-blur-md transform-gpu">
                            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
                            Our Story
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Our{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                                Mission
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Redefining how human knowledge is connected, organized, and shared.
                            We're building the infrastructure for the next generation of digital collaboration.
                        </p>
                    </FadeDown>

                    {/* Hero Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-fuchsia-500/5 to-cyan-500/5 blur-[100px] -z-10 rounded-full transform-gpu" />
                </section>

                {/* 2. BACKED BY SECTION */}
                <section className="mb-32 text-center">
                    <FadeDown delay={0.2}>
                        <p className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-[0.2em]">Backed by world-class investors</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                            <div className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-white">SEQUOIA</div>
                            <div className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-[#FF6600]">Y Combinator</div>
                            <div className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-white">a16z</div>
                            <div className="text-xl md:text-2xl font-bold tracking-tighter hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-white">LIGHTSPEED</div>
                        </div>
                    </FadeDown>
                </section>

                {/* 3. STATS GRID */}
                <section className="mb-40">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {stats.map((stat, idx) => (
                            <FadeDown key={stat.label} delay={idx * 0.1}>
                                <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-300 transform-gpu">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-2xl" />
                                    <stat.icon className={`w-5 h-5 ${stat.color} mb-4`} />
                                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                </div>
                            </FadeDown>
                        ))}
                    </div>
                </section>

                {/* 4. CORE VALUES (BENTO GRID) */}
                <section className="mb-40">
                    <FadeDown>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                The principles that guide every feature we build and every decision we make.
                            </p>
                        </div>
                    </FadeDown>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Large */}
                        <FadeDown delay={0.1} className="md:col-span-2">
                            <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group transform-gpu">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 blur-[80px] -mr-20 -mt-20 group-hover:bg-fuchsia-500/20 transition-colors" />
                                <Shield className="w-10 h-10 text-fuchsia-400 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                    We believe your thoughts should be yours alone. Lumina is built with end-to-end encryption from the ground up, ensuring that only you can access your data.
                                </p>
                            </div>
                        </FadeDown>

                        {/* Card 2: Small */}
                        <FadeDown delay={0.2}>
                            <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group transform-gpu">
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] -mb-10 -mr-10 group-hover:bg-cyan-500/20 transition-colors" />
                                <Zap className="w-10 h-10 text-cyan-400 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Blazing Fast</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Speed is a feature. Our local-first architecture ensures 60fps performance and instant interactions, even with massive knowledge bases.
                                </p>
                            </div>
                        </FadeDown>

                        {/* Card 3: Small (Full width on mobile, 1/3 on desktop) */}
                        <FadeDown delay={0.3} className="md:col-span-3">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group flex flex-col md:flex-row md:items-center gap-8 transform-gpu">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-[100px] pointer-events-none" />
                                <div className="shrink-0">
                                    <Brain className="w-12 h-12 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">AI-Augmented</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        We don't replace human thought; we amplify it. Our AI tools are designed to surface connections, summarize complex research, and help you find the "aha!" moments faster.
                                    </p>
                                </div>
                            </div>
                        </FadeDown>
                    </div>
                </section>

                {/* 5. THE ORIGIN STORY (TIMELINE WITH SCROLL ANIMATION) */}
                <section className="mb-40">
                    <FadeDown>
                        <div className="text-center mb-24">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Origin Story</h2>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                Our journey from a simple idea to a global platform for thought.
                            </p>
                        </div>
                    </FadeDown>

                    <div ref={timelineRef} className="relative max-w-4xl mx-auto py-10">
                        {/* Background Dim Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

                        {/* Glowing Animated Line */}
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-fuchsia-500 via-cyan-500 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] origin-top transform-gpu"
                        />

                        <div className="space-y-32">
                            {timeline.map((item, idx) => (
                                <div key={item.year} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 relative z-10`}>
                                    <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} w-full`}>
                                        <FadeDown delay={0.1}>
                                            <div className="relative inline-block mb-2">
                                                {/* The dim background year */}
                                                <span className="text-5xl font-black text-white/10 block select-none">
                                                    {item.year}
                                                </span>

                                                {/* The glowing animated year */}
                                                <motion.span
                                                    initial={{ opacity: 0, filter: "blur(10px)" }}
                                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                                    className={`absolute top-0 left-0 w-full h-full text-5xl font-black block bg-clip-text text-transparent bg-gradient-to-r ${item.glow} select-none`}
                                                >
                                                    {item.year}
                                                </motion.span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                        </FadeDown>
                                    </div>

                                    {/* Timeline Dot (Lights up on scroll) */}
                                    <FadeDown className="relative z-10">
                                        <div className="w-12 h-12 rounded-full bg-black border-2 border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <item.icon className="w-5 h-5 text-gray-300 relative z-10" />
                                        </div>
                                    </FadeDown>

                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. THE TEAM */}
                <section className="mb-40">
                    <FadeDown>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Minds Behind Lumina</h2>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                A diverse group of designers, engineers, and dreamers working together to build something extraordinary.
                            </p>
                        </div>
                    </FadeDown>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, idx) => (
                            <FadeDown key={member.name} delay={idx * 0.1}>
                                <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:-translate-y-2 transition-all duration-500 transform-gpu">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 transform-gpu" />
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            referrerPolicy="no-referrer"
                                            className="w-32 h-32 rounded-full border-2 border-white/10 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-500 font-medium mb-6">{member.role}</p>

                                    <div className="flex items-center gap-4">
                                        <a href={member.twitter} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all transform-gpu">
                                            <MessageCircle className="w-4 h-4" />
                                        </a>
                                        <a href={member.linkedin} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all transform-gpu">
                                            <Briefcase className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all transform-gpu">
                                            <Code className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </FadeDown>
                        ))}
                    </div>
                </section>

                {/* 7. CAREERS CTA */}
                <section className="py-24 md:py-32 px-6 relative min-h-[50vh] h-auto">
                    <div className="relative rounded-3xl bg-[#050505] border border-white/10 px-6 py-24 md:p-20 overflow-hidden shadow-2xl max-w-5xl mx-auto min-h-[50vh] h-auto flex flex-col justify-center">
                        {/* Background Glow Effects optimized */}
                        <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/10 to-transparent blur-3xl -z-10 transform-gpu will-change-transform pointer-events-none" />

                        {/* Sharp Glowing Line at Bottom */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-100 transform-gpu pointer-events-none" />

                        {/* Wide Ambient Glow under the Line optimized */}
                        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-48 bg-fuchsia-600/40 blur-[100px] pointer-events-none transform-gpu will-change-transform" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <FadeDown>
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                                    Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">Mission</span>
                                </h2>
                                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                                    Help us build the future of thought. We're looking for passionate individuals to join our remote-first team.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto mb-6 justify-center">
                                    <button
                                        className="bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white px-8 py-4 rounded-xl text-base font-medium hover:opacity-90 transition-opacity whitespace-nowrap shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                                    >
                                        View Open Roles
                                    </button>
                                </div>
                            </FadeDown>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;