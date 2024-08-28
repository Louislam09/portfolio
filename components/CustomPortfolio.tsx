"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { TabNavigation } from "./TabNavigation";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Links } from "./Links";
import { Skills } from "./Skills";
import { Languages } from "./Languages";
import { Education } from "./Education";

export default function CustomPortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("experience");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto p-4 sm:p-8"
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Profile />
            <TabNavigation
              darkMode={darkMode}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "experience" && (
                  <Experience darkMode={darkMode} />
                )}
                {activeTab === "education" && <Education />}
                {activeTab === "projects" && <Projects darkMode={darkMode} />}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`p-8 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-blue-100"
            }`}
          >
            <Contact />
            <Links darkMode={darkMode} />
            <Skills />
            <Languages />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
