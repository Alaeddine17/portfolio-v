import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Link } from 'react-router-dom';
import "./Contact.css";
import {Container, Title, ButtonYellow} from "../../component/index";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () =>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pq94m8b', 'template_hgahoqd', form.current, {
        publicKey: 'zOGC2PegUnoCYmP9G',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location="Contact"
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



    return(
    <>
        <Container>
        <Title>Contact</Title>
            <div className="my-6">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-5xl ">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold">let's make something awesome together</h1>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="text-4xl">
                                    <CiMail/>
                                </div>
                                    <h1 className="mx-3">elharrakalae.ea@gmail.com</h1>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Socials</h2>
                        <ul className="flex mt-3 space-x-4">
                            <li className="text-3xl">
                                <Link to="https://www.linkedin.com/in/alae-eddine-elharrak-5a8b01175">
                                    <FaLinkedin/>
                                </Link>
                            </li>
                            <li className="text-3xl">
                                <Link to="https://github.com/Alaeddine17/Alaeddine17">
                                    <FaGithub/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input type='text' placeholder='Name'
                        name="user_name" className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-200" />
                    <input type='email' placeholder='Email'
                        name="user_email" className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-200" />
                    <input type='text' placeholder='Subject'
                        name="subject"className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-200" />
                    <textarea placeholder='Message' rows="6"
                        name="message" className="w-full rounded-md px-4 border text-sm pt-2.5 outline-yellow-200"></textarea>
                    <ButtonYellow>Send</ButtonYellow>
                </form>
            </div>
        </div>

        </Container>
    </>
    );
}

export default Contact;