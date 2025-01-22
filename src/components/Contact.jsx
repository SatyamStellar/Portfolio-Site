import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { ObjectCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { Blob1 } from "./decoration/Blob1"


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const template = import.meta.env.VITE_TEMPLATE
  const service = import.meta.env.VITE_SERVICE
  const publickey = import.meta.env.VITE_APP_PUBLIC_KEY
  const handleSumbit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      service,
      template,
      {
        from_name: form.name,
        to_name: 'Satyam',
        from_email: form.email,
        to_email: 'satyam321tomar@gmail.com',
        message: form.message
      },
      publickey
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I Will get back to you as soon as possbile')

        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);

        console.log(error);

        alert('Something went worng');
      })
  }

  return (
    <div className="xl:mt-12 w-auto xl:flex-row flex-col-reverse flex gap-5 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] overflow-hidden bg-tertiary/5 backdrop-blur-sm h-fit p-8 rounded-2xl"
      >
        <Blob1 className="opacity-55 backdrop-blur-xl top-0 left-0" />
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef}
          onSubmit={handleSumbit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-sec font-medium mb-4 font-elronmono">Your Name</span>
            <input type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className=" py-2 px-6 border-b-sec border-b-[1.5px] bg-transparent font-liberationMono outline-none placeholder:text-white placeholder:opacity-40 text-white font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sec font-medium mb-4 font-elronmono">Your Email</span>
            <input type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className=" py-2 px-6 placeholder:text-white font-liberationMono placeholder:opacity-40 text-white font-medium outline-none border-b-sec border-b-[1.5px] bg-transparent"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sec font-medium mb-4 font-elronmono">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className=" py-2 px-6 placeholder:text-white font-liberationMono placeholder:opacity-40 text-white outline-none font-medium border-b-sec border-b-[1.5px] bg-transparent"
            />
          </label>
          <button
            className=" bg-black/20 py-3 px-8 mt-4 outline-none w-fit text-white font-bold font-sfMono shadow-sm shadow-sec rounded-3xl hover:shadow-md hover:shadow-sec transition-all duration-150 ease-in-out active:scale-90"
            type="submit">{loading ? 'Sendng...' : 'Send'}</button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <ObjectCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
