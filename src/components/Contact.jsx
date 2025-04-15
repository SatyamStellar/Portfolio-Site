import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { ObjectCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { Blob1 } from "./decoration/Blob1";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const template = import.meta.env.VITE_TEMPLATE;
  const service = import.meta.env.VITE_SERVICE;
  const publickey = import.meta.env.VITE_APP_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        service,
        template,
        {
          from_name: form.name,
          to_name: "Satyam",
          from_email: form.email,
          to_email: "satyam321tomar@gmail.com",
          message: form.message,
        },
        publickey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="xl:mt-10 flex xl:flex-row flex-col-reverse gap-6 rounded-xl overflow-hidden max-w-6xl mx-auto py-8">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-tertiary/5 backdrop-blur-sm p-6 rounded-xl relative"
      >
        <Blob1 className="opacity-40 absolute top-[-10%] left-[-10%] scale-90 pointer-events-none" />
        <p className={`${styles.sectionSubText} text-white/70`}>Get In Touch</p>
        <h3 className={`${styles.sectionHeadText} text-sec`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-sec font-elronmono font-medium mb-2 text-[14px]">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-2 px-4 bg-transparent border-b-[1.5px] border-b-sec text-white font-liberationMono text-[14px] placeholder:text-white/40 outline-none transition-all duration-200 focus:border-b-sec/80"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sec font-elronmono font-medium mb-2 text-[14px]">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-2 px-4 bg-transparent border-b-[1.5px] border-b-sec text-white font-liberationMono text-[14px] placeholder:text-white/40 outline-none transition-all duration-200 focus:border-b-sec/80"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sec font-elronmono font-medium mb-2 text-[14px]">
              Your Message
            </span>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="py-2 px-4 bg-transparent border-b-[1.5px] border-b-sec text-white font-liberationMono text-[14px] placeholder:text-white/40 outline-none transition-all duration-200 focus:border-b-sec/80 resize-none"
            />
          </label>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black/20 py-2 px-6 mt-4 w-fit text-white font-sfMono font-semibold text-[14px] rounded-full shadow-sm shadow-sec hover:shadow-sec/50 transition-all duration-200"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px] rounded-xl overflow-hidden"
      >
        <ObjectCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
