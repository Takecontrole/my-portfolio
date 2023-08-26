import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

// service_v7qn5ek
// template_sia7v23
// WCnQUjdEs7OUNZui4
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
'service_v7qn5ek',
 'template_sia7v23',
        {
          from_name: form.name,
          to_name: "Take",
          from_email: form.email,
          to_email: "takecontrole2034@gmail.com",
          message: form.message,
        },
        'WCnQUjdEs7OUNZui4'
      )
      .then(
        () => {
          setLoading(false);
          alert("Спасибо. Я отвечу как можно скорей.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Спасибо. Я отвечу как можно скорей.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Напишите мне</p>
        <h3 className={styles.sectionHeadText}>Связаться</h3>

       <p className={styles.sectionSubText}>Телеграмм +79021573442</p>
       <p className={styles.sectionSubText}>What's up +79021573442</p>
       <p className={styles.sectionSubText}>Я ВКонтакте: vk.com/takecontrole</p>
       <p className={styles.sectionSubText}>GitHub https://github.com/Takecontrole</p>
       <p className={styles.sectionSubText}>Gmail takecontrole2034@gmail.com</p>
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
