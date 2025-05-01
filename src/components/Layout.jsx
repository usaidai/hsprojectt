import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-40">
        <motion.div 
          className="container mx-auto px-4 py-6"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src="/assets/images/logo.jpeg" 
                  alt="FutureFind Logo" 
                  className="h-12 w-auto mr-3 rounded-md" 
                />
              </Link>
              <Link to="/" className="text-2xl font-bold text-blue-700 tracking-tight">
                FutureFind
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <motion.li whileHover={{ scale: 1.05 }}>
                  <Link to="/" className="text-blue-700 hover:text-blue-800">
                    Home
                  </Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.05 }}>
                  <Link to="/privacy" className="text-blue-700 hover:text-blue-800">
                    Privacy
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white">
        <motion.div 
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © 2024 FutureFind. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-white hover:text-blue-200 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default Layout; 