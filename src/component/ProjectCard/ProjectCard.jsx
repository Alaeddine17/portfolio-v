import { FaGithub} from "react-icons/fa";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { SiPhp } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const ProjectCard = (props) =>{
    return(
        <>
        <li>
                <div className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <div className="w-5/6 mx-auto mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-60">
                          <img src={props.img} className="w-full h-full border-4  rounded-xl" alt="profile-picture" />
                    </div>
                    <div className="pt-6 pb-4 text-center">
                          <h4 className="block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {props.title}
                          </h4>
                          <div className="flex flex-row gap-2 justify-center">
                            <div className="flex flex-col items-center">{props.logo1}<small className="text-xs">{props.lang1}</small></div>
                            <div className="flex flex-col items-center">{props.logo2}<small className="text-xs">{props.lang2}</small></div>
                            <div className="flex flex-col items-center">{props.logo3}<small className="text-xs">{props.lang3}</small></div>
                            <div className="flex flex-col items-center">{props.logo4}<small className="text-xs">{props.lang4}</small></div>
                            <div className="flex flex-col items-center">{props.logo5}<small className="text-xs">{props.lang5}</small></div>
                            <div className="flex flex-col items-center">{props.logo6}<small className="text-xs">{props.lang6}</small></div>
                          </div>
                    </div>
                    <div className="flex justify-center py-3 pb-6 gap-5">
                        <a href="#" className="border border-b-4 rounded-md py-1 px-2 border-slate-400 flex flex-row gap-2"><span className="font-semibold">Github</span><span className="text-xl"><FaGithub/></span></a>
                        <a href="#" className="border border-b-4 rounded-md py-1 px-2 border-slate-400 flex flex-row gap-2"><span className="font-semibold">Brows</span><span className="text-xl"><MdOutlineOpenInBrowser/></span></a>
                    </div>
                </div>
            </li></>
    )
}
export default ProjectCard;