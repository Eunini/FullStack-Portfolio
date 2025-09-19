"use client";
import React, { useState } from "react";
import Link from "next/link";
import {SiFacebook, SiWhatsapp, SiLinkedin, SiGithub} from 'react-icons/si';
const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 my-12 md:my-16 py-16 gap-8 md:gap-12 relative p-4 md:p-6"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-700 to-transparent dark:from-blue-800 dark:via-blue-600 dark:to-transparent rounded-full h-80 w-80 md:h-96 md:w-96 z-0 blur-lg absolute top-1/2 -left-8 transform -translate-x-1/2 -translate-y-1/2 opacity-30 dark:opacity-20"></div>
      <div className="z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
          Let&apos;s Build Something Amazing
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-lg leading-relaxed">
          Ready to bring your ideas to life? I&apos;m passionate about collaborating on projects 
          that make a difference. Whether you&apos;re a startup with a vision or an established 
          company looking to innovate, let&apos;s connect and create something extraordinary together.
        </p>
        <div className="mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">What I Can Help With:</h3>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm md:text-base">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mr-3"></span>
              Full-stack web development
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mr-3"></span>
              API development & integration
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mr-3"></span>
              Cloud deployment & DevOps
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 dark:bg-blue-300 rounded-full mr-3"></span>
              Technical consulting
            </li>
          </ul>
        </div>
        <div className="socials flex flex-row gap-4 md:gap-6">
          <Link href="https://github.com/Eunini" target="_blank" className="group">
            <SiGithub size={28} className="md:text-3xl text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/inioluwa-atanda" target="_blank" className="group">
            <SiLinkedin size={28} className="md:text-3xl text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300"/>
          </Link>
          <Link href="https://wa.me/message/TFFG2ETW5L3CH1" target="_blank" className="group">
            <SiWhatsapp size={28} className="md:text-3xl text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors duration-300"/>
          </Link>
        </div>
      </div>
      <div className="z-10">
        {emailSubmitted ? (
          <div className="bg-green-600 dark:bg-green-700 p-6 md:p-8 rounded-2xl text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Message Sent Successfully! 🎉</h3>
            <p className="text-white text-sm md:text-base">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form className="flex flex-col space-y-4 md:space-y-6 bg-gray-50 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-70 p-6 md:p-8 rounded-2xl backdrop-blur-sm shadow-lg" onSubmit={handleSubmit}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">Send me a message</h3>
            <div>
              <label
                htmlFor="email"
                className="text-gray-800 dark:text-gray-200 block mb-2 md:mb-3 text-sm font-medium"
              >
                Your Email Address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-300 text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 md:p-4 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 outline-none border-none shadow-sm"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-gray-800 dark:text-gray-200 block text-sm mb-2 md:mb-3 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-300 text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 md:p-4 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 outline-none border-none shadow-sm"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-gray-800 dark:text-gray-200 block text-sm mb-2 md:mb-3 font-medium"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-300 text-gray-900 dark:text-gray-100 text-sm rounded-xl block w-full p-3 md:p-4 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 resize-none outline-none border-none shadow-sm"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 md:py-4 px-6 md:px-8 rounded-xl w-full transition-colors duration-300 text-sm md:text-base shadow-lg hover:shadow-xl outline-none border-none"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
