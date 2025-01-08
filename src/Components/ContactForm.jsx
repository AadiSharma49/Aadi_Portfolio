import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send("service_pr0rzvk", "template_235nxyw", formData, "gODPsKelZpUNOHhBD")
        .then(() => {
          setModalMessage("Message sent successfully!");
          setIsModalOpen(true);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Error...", error);
          setModalMessage("Failed to send message. Please try again.");
          setIsModalOpen(true);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA" && !isSending) {
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      className="py-8 px-4 lg:w-2/3 mx-auto"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-6">
        <div className="space-y-4 md:space-y-0 md:flex md:gap-6">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </motion.div>
        </div>
        <motion.div
          className="w-full"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            rows="6"
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </motion.div>
        <button
          type="submit"
          className={`w-full rounded-lg bg-indigo-600 px-4 py-2 text-white text-lg font-medium hover:bg-indigo-700 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send Message"}
            <FiSend />
          </div>
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Notification</h3>
            <p className="mb-6 text-gray-700">{modalMessage}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ContactForm;
