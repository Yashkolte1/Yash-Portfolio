import { useState, useRef } from "react";

import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import {styles} from "../styles";
import {EarthCanvas} from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { div } from "framer-motion/client";

const Contact = () => {
    const formRef = useRef();
    const [from, setFrom] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [Loading, setLoading] = useState(false);

    const handleChange =(e) =>{
        const {name,value} = e.target;
        setFrom({ ...from, [name] : value})
    }

    const handleSubmit = (e) => {
   e.preventDefault();
   setLoading(true);

   emailjs.send('service_x1vu4cg','template_5gyori4',
    {
      from_name: from.name,
      to_name:'Yash',
      from_email: from.email,
      to_email:'kolteyash980@gmail.com',
      message: from.message,
    },
    '_vSpU5OyXIMphtzFM'
   ) 
   .then(() => {
    setLoading(false);
    alert('Thank You. I Will Get Back To You As Soon As Possible.');

    setFrom({
      name:"",
      email:"",
      message:"",
    })
   }, (error) =>{
    setLoading(false);
    console.log(error);

    alert('Something Went Wrong. Please Try Again.');
   } 
  )
    }
  return (
  <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
   <p className={styles.sectionSubText}> Get In Touch</p>
   <h3 className={styles.sectionHeadText}>Contact</h3>

   <form 
   ref={formRef}
   onSubmit={handleSubmit}
   className="mt-12 flex flex-col gap-8">

    <label className="flex flex-col">
    <span className="text-white font-medium mb-4">Your Name</span>
    <input type="text" name="name" value={from.name} 
    onChange={handleChange} placeholder="Enter your name" 
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
    
    </label>
     
     
    <label className="flex flex-col">
    <span className="text-white font-medium mb-4">Your Email</span>
    <input type="email" name="email" value={from.email} 
    onChange={handleChange} placeholder="Enter your Email" 
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
    
    </label>

    
    <label className="flex flex-col">
    <span className="text-white font-medium mb-4">Your Message</span>
    <textarea rows={7} type="text" name="message" value={from.message} 
    onChange={handleChange} placeholder="What Do You Want To Say?" 
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
    
    </label>

    <button type="submit" className="bg-teritary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
      {Loading ? "Sending..." : "Send"}

    </button>

   </form>
    </motion.div>


    <motion.div variants={slideIn('right' , 'tween' , 0.2 , 1)}
    className="xl:flex-1 xl:h-auto md:h-[550px] h-[300px]">

      <EarthCanvas/>

    </motion.div>
  </div>
  )
}

export default SectionWrapper( Contact ,"contact");
