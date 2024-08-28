"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import meData from "@/constants/data";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
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
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {meData.profile.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {meData.profile.title}
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            {darkMode ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Profile</h2>
              <p className="text-lg">{meData.profile.summary}</p>
            </section>

            <nav className="mb-8">
              <ul className="flex space-x-4">
                {["experience", "education", "projects"].map((tab) => (
                  <li key={tab}>
                    <Button
                      variant={activeTab === tab ? "default" : "outline"}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "experience" && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      Employment History
                    </h2>
                    {meData.employment_history.map((job, index) => (
                      <motion.div
                        key={job.company}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="mb-4 p-4 rounded-lg bg-opacity-10 bg-blue-500"
                      >
                        <h3 className="text-xl font-semibold">
                          {job.title} at {job.company}
                        </h3>
                        <p className="text-sm opacity-70">
                          {job.start_date} - {job.end_date}
                        </p>
                        <ul className="list-disc list-inside mt-2">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </section>
                )}

                {activeTab === "education" && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    {meData.education.map((edu, index) => (
                      <motion.div
                        key={edu.institution}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="mb-4 p-4 rounded-lg bg-opacity-10 bg-green-500"
                      >
                        <h3 className="text-xl font-semibold">
                          {edu.degree || edu.program}
                        </h3>
                        <p>{edu.institution}</p>
                        <p className="text-sm opacity-70">
                          {edu.graduation_date ||
                            `${edu.start_date} - ${edu.end_date}`}
                        </p>
                      </motion.div>
                    ))}
                  </section>
                )}

                {activeTab === "projects" && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {meData.links.projects.map((project, index) => (
                        <motion.div
                          key={project.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="p-4 rounded-lg bg-opacity-10 bg-purple-500"
                        >
                          <h3 className="text-xl font-semibold">
                            {project.name}
                          </h3>
                          {project.description && (
                            <p className="mt-2 text-sm">
                              {project.description}
                            </p>
                          )}
                          <Button className="mt-4" variant="outline">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              View Project{" "}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}
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
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <p>{meData.profile.contact.location}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <p>{meData.profile.contact.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <p>{meData.profile.contact.phone}</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Links</h2>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  <a
                    href={meData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full">
                  <a
                    href={meData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-2">
                {meData.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-center p-2 bg-opacity-20 bg-blue-500 rounded"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Languages</h2>
              <div className="space-y-2">
                {meData.languages.map((language, index) => (
                  <div key={language}>
                    <div className="flex justify-between mb-1">
                      <span>{language}</span>
                      <span>{index === 0 ? "90%" : "30%"}</span>
                    </div>
                    <Progress value={index === 0 ? 90 : 30} className="h-2" />
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
