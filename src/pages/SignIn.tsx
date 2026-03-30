import { useState } from 'react';
import { motion, Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Eye, EyeOff, Globe, Code } from 'lucide-react';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200 font-sans flex flex-col items-center justify-center relative overflow-hidden p-6">

            {/* Background Tech Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            {/* Giant Ambient Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.02] select-none tracking-tighter pointer-events-none whitespace-nowrap z-0">
                LUMINA
            </div>
            {/* Center Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-600/20 to-cyan-600/20 blur-[120px] rounded-full pointer-events-none transform-gpu" />

            {/* Back to Website Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-8 left-8 sm:top-12 sm:left-12 z-20"
            >
                <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Website
                </Link>
            </motion.div>

            {/* THE AUTH CARD */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-10 shadow-2xl relative z-10 transform-gpu mt-24"
            >
                {/* Internal Glow for extra depth */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-[50px] pointer-events-none rounded-full" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10"
                >
                    {/* Logo */}
                    <motion.div variants={itemVariants} className="flex justify-center mb-8">
                        <Link to="/" className="flex items-center gap-2 font-semibold text-xl tracking-tight text-white group">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                <div className="w-3 h-3 bg-black rounded-sm" />
                            </div>
                            Lumina
                        </Link>
                    </motion.div>

                    {/* Title & Subtitle */}
                    <motion.div variants={itemVariants} className="text-center mb-8">
                        <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back</h1>
                        <p className="text-sm text-gray-400">Enter your details to access your workspace.</p>
                    </motion.div>

                    {/* Social Logins */}
                    <motion.div variants={itemVariants} className="space-y-3 mb-8">
                        <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3.5 transition-all group">
                            <Globe className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium">Continue with Google</span>
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3.5 transition-all group">
                            <Code className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            <span className="text-sm font-medium">Continue with GitHub</span>
                        </button>
                    </motion.div>

                    {/* Divider */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] flex-1 bg-white/10" />
                        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">or email</span>
                        <div className="h-[1px] flex-1 bg-white/10" />
                    </motion.div>

                    {/* Form */}
                    <motion.form variants={itemVariants} className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-gray-400 ml-1 uppercase tracking-wider">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all placeholder:text-gray-600"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Password</label>
                                <Link to="/forgot-password" title="Forgot password?" className="text-xs text-fuchsia-500 hover:text-fuchsia-400 transition-colors">
                                    Forgot?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all placeholder:text-gray-600"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-[0.98] flex items-center justify-center gap-2 group mt-2"
                        >
                            Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.form>

                    {/* Footer */}
                    <motion.p variants={itemVariants} className="mt-8 text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-white font-semibold hover:text-fuchsia-400 transition-colors">
                            Sign up
                        </Link>
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SignIn;
