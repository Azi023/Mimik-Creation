import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      className="py-8 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0147D3 0%, #1D3FC1 100%)" }}
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div
            className="w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 bg-mimik-yellow"
          >
            <Mail className="w-5 h-5 md:w-7 md:h-7 text-white" />
          </div>

          <h2 className="text-xl md:text-5xl font-display font-extrabold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-base md:text-xl text-white/75 mb-8 md:mb-10">
            Get creative insights, marketing tips, and project highlights delivered to your inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center bg-mimik-yellow"
              >
                <Send className="w-7 h-7 text-white" />
              </div>
              <p className="text-2xl font-display font-bold text-white">
                Thanks for subscribing!
              </p>
              <p className="text-white/70">We'll be in touch with the good stuff.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-white/50 hover:text-white/80 underline transition-colors"
              >
                Subscribe another email
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 rounded-full bg-white/15 backdrop-blur-md backdrop-saturate-[1.8] border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-mimik-yellow/50 focus:bg-white/25 focus:border-white/40 transition-all font-medium"
              />
              <motion.button
                type="submit"
                className="px-5 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base flex items-center justify-center gap-2 flex-shrink-0 bg-mimik-yellow text-mimik-darker"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
                <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>
          )}

          <p className="mt-6 text-sm text-white/40">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
