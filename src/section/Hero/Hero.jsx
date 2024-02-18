import './Hero.css';
import photo from '../../assets/profile2.png';
import { ButtonYellow, ButtonDark, Container } from '../../component/index';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () =>{
    return(
        <Container>
            <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-10'>

                <div className='first'>
                    <img className='w-2/3 md:w-full mx-auto rounded-b-full' src={photo} alt="profile"/>
                </div>

                <div className='md:flex md:items-center md:w-full md:pt-20'>
                    <div className='ml-0 md:ml-10 flex flex-col items-center space-y-3 text-slate-900'>
                    <ButtonDark>👋 Alae Eddine, Developer</ButtonDark>
                    <ButtonYellow>elharrakalae.ea@gmail.com</ButtonYellow>
                    <div className='w-full flex flex-row justify-center space-x-6 md:sapce-x-8 text-3xl md:text-4xl xl:text-5xl pt-4'>
                    <a href="https://www.linkedin.com/in/alae-eddine-elharrak-5a8b01175"><FaLinkedin/></a>
                    <a href="https://github.com/Alaeddine17/Alaeddine17.git"><FaGithub/></a>
                    </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default Hero;