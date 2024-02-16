import "./Contact.css";
import {Container, Title, ButtonYellow} from "../../component/index";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () =>{
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
                                <a href="#">
                                    <FaLinkedin/>
                                </a>
                            </li>
                            <li className="text-3xl">
                                <a href="#">
                                    <FaGithub/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              
                <form className="space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-200" />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-200" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-yellow-200" />
                    <textarea placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 border text-sm pt-2.5 outline-yellow-200"></textarea>
                    <ButtonYellow>Send</ButtonYellow>
                </form>
            </div>
        </div>

        </Container>
    </>
    );
}

export default Contact;