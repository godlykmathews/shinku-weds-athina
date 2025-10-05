"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaChurch,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const weddingDate = new Date("2025-10-30T11:00:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 py-8 md:py-16 max-w-4xl"
      >
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 bg-clip-text text-transparent relative">
                We&apos;re Getting Married
              </h1>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-8 md:mb-12 border border-rose-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="text-center"
            >
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(244, 114, 182, 0.3)",
                    "0 10px 40px rgba(244, 114, 182, 0.5)",
                    "0 10px 30px rgba(244, 114, 182, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-4xl md:text-5xl font-serif text-white">
                  S
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800">
                Shinku
              </h2>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl md:text-6xl text-rose-400"
            >
              ❤️
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="text-center"
            >
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(251, 113, 133, 0.3)",
                    "0 10px 40px rgba(251, 113, 133, 0.5)",
                    "0 10px 30px rgba(251, 113, 133, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span className="text-4xl md:text-5xl font-serif text-white">
                  A
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800">
                Athina
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {mounted && timeLeft.days > 0 && (
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl shadow-2xl p-6 md:p-8 mb-8 md:mb-12 text-white"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
              Countdown to Our Special Day
            </h3>
            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 md:p-4 text-center"
                >
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-8 md:mb-12 border border-rose-100"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 md:mb-12 text-gray-800">
            Join Us in Celebrating
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 md:p-8 text-center shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaCalendarAlt className="text-4xl md:text-5xl text-rose-500 mx-auto mb-4" />
              </motion.div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                Date
              </h4>
              <p className="text-xl md:text-2xl font-bold text-gray-800">
                October 30, 2025
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-1">
                Thursday
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 text-center shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaClock className="text-4xl md:text-5xl text-pink-500 mx-auto mb-4" />
              </motion.div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                Time
              </h4>
              <p className="text-xl md:text-2xl font-bold text-gray-800">
                11:00 AM
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-1">
                Indian Standard Time
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-white to-rose-50 rounded-3xl shadow-2xl p-8 md:p-12 mb-8 md:mb-12 border border-rose-100"
        >
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaChurch className="text-5xl md:text-6xl text-rose-500 mx-auto mb-6" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-gray-800">
              St. Simon&apos;s Knanaya Church
            </h3>

            <div className="space-y-2 mb-8">
              <p className="text-lg md:text-xl text-gray-700">
                Puthussery, Vakathanam
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                Kottayam, Kerala
              </p>
            </div>

            <motion.a
              href="https://www.google.com/maps/search/St.+Simon's+Knanaya+Church+Puthussery+Vakathanam+Kottayam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <FaMapMarkerAlt className="text-xl md:text-2xl" />
              View on Google Maps
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.p
            className="text-xl md:text-2xl font-serif text-gray-600 italic"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Your presence will make our day even more special ✨
          </motion.p>
        </motion.div>

        {mounted && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl md:text-4xl"
                initial={{
                  x:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1000),
                  y: -50,
                  opacity: 0.6,
                }}
                animate={{
                  y:
                    typeof window !== "undefined"
                      ? window.innerHeight + 50
                      : 1000,
                  x:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1000),
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              >
                {["🌸", "💕", "✨", "💐", "🌹", "💖"][i]}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </main>
  );
}
