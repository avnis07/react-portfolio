"use client";
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <header className="p-6 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold">Avni Saxena</h1>
        <Button onClick={toggleDarkMode} variant="outline">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </header>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p>
          I am a Senior Frontend Developer with expertise in ReactJS, Typescript, JavaScript, Java,
          and backend systems with Spring Boot. My strengths include building scalable, high-performing
          frontend interfaces and integrating them with robust backend systems.
        </p>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['ReactJS', 'Typescript', 'Javascript', 'HTML', 'CSS', 'Java', 'Springboot', 'MySQL', 'MongoDB', 'Docker', 'Jenkins', 'CI/CD'].map(tech => (
            <span key={tech} className="px-3 py-1 border rounded-xl text-sm text-center">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Sales and Distribution Management System</h3>
              <p className="mt-2">
                A comprehensive platform for managing inventory, order processing, POS, payment integrations,
                workflows, and user account management. Built with ReactJS, Spring Boot, MySQL, and MongoDB,
                the system supports multi-tenancy and role-based access control, with integrated CI/CD pipelines.
              </p>
              <ul className="mt-2 list-disc list-inside">
                <li>Inventory & Order Management</li>
                <li>POS & Payment Integrations</li>
                <li>Role-based Access and Workflows</li>
                <li>Microservices Architecture with Docker and Jenkins</li>
              </ul>
              {/* <a
                href="https://your-live-project-url.com"
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/avnis07/react-portfolio"
                target="_blank"
                className="ml-4 inline-block mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
              >
                View Code
              </a> */}
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Resume</h2>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <Download /> Download My Resume (PDF)
        </a>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <form
          className="grid gap-4 max-w-xl"
          action="https://formspree.io/f/yourformid"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border px-4 py-2 rounded"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="border px-4 py-2 rounded"
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>
        <div className="mt-6 flex gap-6 items-center">
          <a href="mailto:avnisaxena252@gmail.com" className="flex items-center gap-2">
            <Mail /> Email
          </a>
          <a href="https://github.com/avnis07" target="_blank" className="flex items-center gap-2">
            <Github /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/avni-saxena-7049341b0/" target="_blank" className="flex items-center gap-2">
            <Linkedin /> LinkedIn
          </a>
        </div>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Avni Saxena. All rights reserved.
      </footer>
    </div>
  );
}
