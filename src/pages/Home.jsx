import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function CountUp({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef();
  const isInView = useInView(nodeRef);

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [end, duration, isInView]);

  return <span ref={nodeRef}>{count}</span>;
}

function Home() {
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32">
        <motion.div 
          className="container mx-auto px-4 py-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-6xl font-extrabold text-blue-800 mb-8 tracking-tight"
          >
            Our Approach
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Our #1 goal is to satisfy our customers' needs.
          </motion.p>
          <motion.div
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            App portfolio coming soon →
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-24 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-blue-800 mb-10 text-center tracking-tight"
            variants={fadeInUp}
          >
            About FutureFind
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-blue-50 rounded-2xl p-8 shadow-lg"
              variants={fadeInUp}
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                FutureFind was established with a clear mission: to create a bridge between talented students and 
                meaningful opportunities that shape their future. We believe that every student deserves access 
                to quality experiences that can help them grow professionally.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our platform serves as a centralized hub where students can discover internships, volunteer 
                positions, and networking events tailored to their skills and interests. By leveraging 
                technology and our deep understanding of the educational landscape, we're able to connect 
                the right students with the right opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We work with schools, universities, and employers to ensure that the opportunities we 
                offer are both enriching and accessible. Our team is dedicated to supporting students 
                throughout their journey, providing guidance and resources every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Passion for Creating Section */}
      <motion.section
        className="py-32 bg-blue-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="text-blue-300 mb-2 text-2xl"
            variants={fadeInUp}
          >
            *
          </motion.div>
          <motion.h2
            className="text-5xl font-bold text-blue-800 mb-8 tracking-tight"
            variants={fadeInUp}
          >
            A passion for creating
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We love tackling challenges and building apps that make a difference.
          </motion.p>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Experience */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-blue-300 text-xl">*</div>
              <h3 className="text-2xl font-bold text-blue-700 tracking-tight">Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                We have 10+ years of experience crafting the best apps for our users.
              </p>
            </motion.div>

            {/* Continuous Support */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-blue-300 text-xl">*</div>
              <h3 className="text-2xl font-bold text-blue-700 tracking-tight">Continuous Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We are always ready to hear our users' problems and work tirelessly to solve them.
              </p>
            </motion.div>

            {/* App Access */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-blue-300 text-xl">*</div>
              <h3 className="text-2xl font-bold text-blue-700 tracking-tight">App Access</h3>
              <p className="text-gray-600 leading-relaxed">
                We work to support as many cultures and diverse groups as possible throughout our apps.
              </p>
            </motion.div>

            {/* Culture */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-blue-300 text-xl">*</div>
              <h3 className="text-2xl font-bold text-blue-700 tracking-tight">Culture</h3>
              <p className="text-gray-600 leading-relaxed">
                Our culture consists of working hard and working fast. No slow movers.
              </p>
            </motion.div>

            {/* Trust & Privacy */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-blue-300 text-xl">*</div>
              <h3 className="text-2xl font-bold text-blue-700 tracking-tight">Trust & Privacy</h3>
              <p className="text-gray-600 leading-relaxed">
                All user data is 100% secure and private. We take privacy very seriously.
              </p>
              <Link to="/privacy" className="text-blue-600 hover:text-blue-800 inline-block mt-2 underline">
                View our Privacy Policy
              </Link>
            </motion.div>

            {/* Architectural Solutions */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-blue-300 text-xl">*</div>
              <h3 className="text-2xl font-bold text-blue-700 tracking-tight">Architectural Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We have the best engineers to solve the most faceted problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <motion.section 
        className="py-20 bg-white border-t border-blue-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold text-blue-800 mb-6 tracking-tight"
            variants={fadeInUp}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Have questions about our services? We'd love to hear from you.
          </motion.p>
          
          <div className="flex flex-col items-center justify-center space-y-8">
            <motion.a 
              href="mailto:rur@future-find.org"
              className="inline-block bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Contact Us
            </motion.a>
            
            <div className="flex space-x-6 mt-8">
              <motion.a 
                href="#" 
                className="text-blue-600 hover:text-blue-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-blue-600 hover:text-blue-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/officialfuturefind/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Home; 