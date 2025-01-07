import logo from '../assets/logo.png';
import { SOCIAL_MEDIA_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="mb-20 mt-10 flex flex-col items-center"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }} // Ensures animation triggers every time the element comes into view
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center justify-center gap-9"
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-indigo-600"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          width={270}
          className="my-30 md:my-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-9"
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-indigo-600"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        className="mt-8 text-center text-lg tracking-tight text-stone-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        All Rights Reserved. &copy;
      </motion.p>
    </motion.div>
  );
};

export default Footer;
