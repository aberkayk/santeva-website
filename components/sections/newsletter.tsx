"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { Container } from "@/components/shared/container";
import { fadeInUp } from "@/lib/animations";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);

    toast.success("You're subscribed!", {
      description: "Thank you for joining our mailing list.",
    });
    setEmail("");
  };

  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-accent-charcoal -z-10" />

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Stay Updated on New Products
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Join our mailing list and be the first to know about new products
            and exclusive offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20
                         text-white placeholder-white/50 backdrop-blur-sm
                         focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30
                         transition-all duration-200"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-full bg-white text-accent-charcoal font-semibold
                         hover:bg-white/90 hover:-translate-y-0.5 shadow-lg
                         transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          <p className="text-sm text-white/40 mt-4">
            No spam. You can unsubscribe at any time.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
