import php  from '../assets/php.png'
import laravel from '../assets/laravel.png'
import cSharp from '../assets/c-sharp.png'
import vb from '../assets/vb.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import sass from '../assets/sass.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import tailwindcss from '../assets/tailwindcss.png'
import mysql from '../assets/mysql.png'
import sql from '../assets/sql-server.png'
import access from '../assets/access.png'
import rest from "../assets/restaurant.png"
import radeel from "../assets/radeel.png"
import cabinet from "../assets/cabinet.png"
import blog from "../assets/blog.png"
import play from "../assets/play.png"
import portfolio from "../assets/portfolio.png"

import { SiPhp } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiVisualbasic } from "react-icons/si";
import { SiCrystal } from "react-icons/si";
import { SiMicrosoftaccess } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJson } from "react-icons/si";

const ProData = [
    {key : '01', logo1 : <SiPhp/>,logo2 : <TiHtml5/>, logo3 : <FaCss3Alt/>, logo4 : <IoLogoJavascript/>, logo5 : <SiTailwindcss/>, logo6 : <SiMysql/>,lang1 : 'php',lang2 : 'html', lang3 : 'css', lang4 : 'javaScript', lang5 : 'tailwindcss', lang6 : 'mysql', img : rest, title : 'Restaurant Management System', paragra : 'An e-commerce platform for reserving tables and placing orders, equipped with an Admin Management System.'},
    {key : '02', logo1 : <SiPhp/>,logo2 : <TiHtml5/>, logo3 : <FaCss3Alt/>, logo4 : <IoLogoJavascript/>, logo5 : '', logo6 : <SiMysql/>,lang1 : 'php',lang2 : 'html', lang3 : 'css', lang4 : 'javaScript', lang5 : '', lang6 : 'mysql', img : radeel, title : 'Intern Management',    paragra : 'Intern Management System and everything related to the interns, including the interns documents and trainers within the company.'},
    {key : '03', logo1 : <SiVisualbasic/> ,logo2 : <SiMicrosoftaccess/>, logo3 : <SiCrystal/>, logo4 : '', logo5 : '', logo6 : '',lang1 : 'visual basic.NET',lang2 : 'Microsoft Access', lang3 : 'crystal report', lang4 : '', lang5 : '', lang6 : '', img : cabinet ,title : 'Medical office Management System', paragra : 'Software that manages the information systems of a medical office.'},
    {key : '04', logo1 : <FaLaravel/>,logo2 : <SiPhp/>, logo3 : <SiTailwindcss/>, logo4 : '', logo5 : '', logo6 : <SiMysql/>,lang1 : 'Laravel',lang2 : 'php', lang3 : 'tailwindcss', lang4 : '', lang5 : '', lang6 : 'mysql', img : blog ,title : 'Blogs Hub', paragra : 'A user-friendly platform for writing blog posts and sharing content effortlessly.'},
    {key : '05', logo1 : <FaReact/>,logo2 : <FaCss3Alt/>, logo3 : <SiTailwindcss/>, logo4 : <SiJson/>, logo5 : '', logo6 : '',lang1 : 'reactJs',lang2 : 'css', lang3 : 'talwindcss', lang4 : 'json', lang5 : '', lang6 : '', img : play ,title : 'LetsPlay', paragra : 'A video game discovery platform'},
    {key : '06', logo1 : <FaReact/>,logo2 : <FaCss3Alt/>, logo3 : <SiTailwindcss/>, logo4 : <SiJson/>, logo5 : '', logo6 : '',lang1 : 'reactJs',lang2 : 'css', lang3 : 'talwindcss', lang4 : 'json', lang5 : '', lang6 : '', img : portfolio,title : 'Portfolio'},
]


const Data = {
    back : [
        {key : "01", tech : 'PHP', logo : php},
        {key : "02", tech : 'Laravel', logo : laravel},
        {key : "03", tech : 'Visual Basic', logo : vb},
        {key : "04", tech : 'C#', logo : cSharp},
    ],
    front : [
        {key : "05", tech : 'HTML', logo : html},
        {key : "06", tech : 'CSS', logo : css},
        {key : "07", tech : 'javaScript', logo : javascript},
        {key : "08", tech : 'Sass', logo : sass},
        {key : "09", tech : 'Bootstrap', logo : bootstrap},   
        {key : "10", tech : 'TailwindCss', logo : tailwindcss},   
        {key : "11", tech : 'ReactJs', logo : react},   
    ],
    base : [
        {key : "12", tech : 'Mysql', logo : mysql},
        {key : "13", tech : 'Sql-Server', logo : sql},
        {key : "14", tech : 'Access', logo : access},
    ]
    }
//Administrative Human Resources Officer
    const ExperDb = [
        {
            key   : '01',
            date  : '21.02.2024',
            title : 'Employment | Atlentic Blue Berries Morocco',
            parag : 'Administrative Human Resources Agent'
        },
        {
            key   : '02',
            date  : '06.04.2023',
            title : 'Employment | Atlentic Blue Berries Morocco',
            parag : 'Data Entry Agent'
        },  
        {
            key   : '03',
            date  : '01.06.2022',
            title : 'Internship | RADEEL Larache',
            parag : 'Informatique Technicien in the Human Resources Service'
        },
        {
            key   : '04',
            date  : '06.06.2021',
            title : 'Internship | Anapec Larache',
            parag : 'Informatique Technicien'
        },
        {
            key   : '05',
            date  : '07.06.2019',
            title : 'Internship | Larache Municipality',
            parag : 'Informatique Technicien, Division of Works Service'
        },
        {
            key   : '06',
            date  : '07.07.2018',
            title : 'Employment | Seasonal job at Civil Protection Morocco | Lifeguard',
            parag : 'Lifeguard'
        },
        {
            key   : '07',
            date  : '07.03.2021',
            title : 'Internship | Lixus Beach Resort',
            parag : 'Hotel Receptionist'
        },
        {
            key   : '08',
            date  : '07.01.2016',
            title : 'Internship | Larache Municipality',
            parag : 'Lighting Maintenance'
        },
        
    ]


export default Data
export {ExperDb, ProData}