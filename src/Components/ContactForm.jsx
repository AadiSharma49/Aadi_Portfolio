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
    // Trigger form submission on Enter key press, except in textarea
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA" && !isSending) {
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      className="py-4 lg:w-3/4"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2 className="mb-12 mt-20 text-center text-4xl font-bold md:text-5xl lg:text-5xl">
        Let's Connect
      </h2>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <div className="mb-4 flex space-x-4">
          <motion.div
            className="lg:w-1/2"
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
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.name && (
              <p className="block text-sm text-red-500">{errors.name}</p>
            )}
          </motion.div>
          <motion.div
            className="lg:w-1/2"
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
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.email && (
              <p className="block text-sm text-red-500">{errors.email}</p>
            )}
          </motion.div>
        </div>
        <motion.div
          className="mb-4"
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
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows="10"
          />
          {errors.message && (
            <p className="block text-sm text-red-500">{errors.message}</p>
          )}
        </motion.div>
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-300 px-4 py-2 text-xl font-semibold text-stone-900 hover:bg-stone-400 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-3">
            {isSending ? "Sending..." : "Send Message"}
            <FiSend />
          </div>
        </button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-3/4 max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Notification</h3>
            <p className="mb-6 text-gray-700">{modalMessage}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
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
