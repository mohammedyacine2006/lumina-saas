import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200 font-sans flex flex-col items-center justify-center relative overflow-hidden p-6">

            {/* 1. Background Tech Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            {/* 2. Giant Ambient 404 - With a slight "Glitch" animation idea */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.07] blur-[1px] select-none tracking-tighter pointer-events-none z-0"
            >
                404
            </motion.div>

            {/* 3. Central Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none delay-700" />

            {/* 4. Content Container */}
            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Icon with a pulse effect */}
                    <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-fuchsia-500/20 blur-xl rounded-full animate-pulse" />
                        <Home className="w-10 h-10 text-fuchsia-400 relative z-10" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Lost in <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">Space?</span>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                        The page you're looking for has drifted into the void. Let's get you back to safety.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="px-8 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-200 transition-all flex items-center gap-2 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Return Home
                        </Link>

                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all"
                        >
                            Contact Support
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* 5. Bottom Detail */}
            <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.3em] text-gray-700 font-bold">
                Error Code: Null_Pointer_Lumina
            </div>
        </div>
    );
};

export default NotFound;
