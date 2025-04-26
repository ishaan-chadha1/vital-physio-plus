"use client";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    icon: CheckCircleIcon,
    title: "Evidence-Based Care",
    desc: "We use the latest research to inform every treatment we provide.",
  },
  {
    icon: HeartIcon,
    title: "Compassionate Team",
    desc: "Our therapists truly care — you're not just a number here.",
  },
  {
    icon: UserGroupIcon,
    title: "Personalized Plans",
    desc: "Every treatment is tailored to your unique needs and goals.",
  },
  {
    icon: SparklesIcon,
    title: "Modern Techniques",
    desc: "We blend manual therapy with modern rehab tools and tech.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#38bdf8] text-white"
      id="why-choose-us"
    >
      <div className="max-w-6xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Why Choose Vital Physio +
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#3cc4fc] p-6 rounded-xl flex flex-col items-center text-center hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-white group-hover:text-blue-700 transition duration-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="/why-us"
            className="inline-block bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
          >
            Why Choose Us
          </a>
        </div>
      </div>
    </section>
  );
}
