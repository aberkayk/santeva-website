"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Newsletter } from "@/components/sections/newsletter";
import { SITE } from "@/lib/constants";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  textRevealContainer,
  textRevealWord,
} from "@/lib/animations";

const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    value: "paklinollc@gmail.com",
    href: "mailto:paklinollc@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "United States",
    href: undefined,
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "Mon - Fri, 9AM - 6PM EST",
    href: undefined,
  },
];

const SOCIAL_LINKS = [
  { label: "Amazon Store", href: SITE.amazonProductUrl },
  // { label: "Instagram", href: "#" },
  // { label: "Facebook", href: "#" },
  // { label: "Twitter", href: "#" },
];

export default function ContactPage() {
  const words = "Get in Touch".split(" ");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-lightest via-white to-brand-light/30" />
        </div>
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-brand-light/20 rounded-full blur-3xl" />

        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand/10 text-brand-dark px-4 py-2 rounded-full
                         text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              Contact
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textRevealContainer}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight
                         text-text-primary leading-[1.1] mb-6"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={textRevealWord}
                  className="inline-block mr-3 md:mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
            >
              Have a question or need help? We&apos;d love to hear from you.
              Reach out through any of the channels below.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                Contact Information
              </h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="space-y-6"
              >
                {CONTACT_INFO.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      variants={staggerItem}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100
                                 shadow-sm hover:shadow-lg hover:shadow-brand/10 hover:border-brand/20
                                 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-text-secondary hover:text-brand transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-text-secondary">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                Connect With Us
              </h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.label}
                    variants={staggerItem}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 rounded-2xl bg-white border border-gray-100
                               shadow-sm hover:shadow-lg hover:shadow-brand/10 hover:border-brand/20
                               transition-all duration-300 group"
                  >
                    <span className="font-semibold text-text-primary group-hover:text-brand transition-colors">
                      {link.label}
                    </span>
                    <ExternalLink className="w-5 h-5 text-text-secondary group-hover:text-brand transition-colors" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 p-6 rounded-2xl bg-brand-lightest border border-brand/10"
              >
                <p className="text-text-secondary leading-relaxed">
                  For product inquiries and support, please email us directly or
                  visit our Amazon store for the fastest response.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
