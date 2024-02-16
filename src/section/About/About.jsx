import "./About.css"
import {Container, Title} from '../../component/index' 


const About = () =>{

    return(
        <>
        <Container>
        <div className="text-md md:text-lg lg:text-xl text-center">
            <Title>About Me!</Title>
            <p className="leading-7 md:leading-10 text-slate-900">
            Hi I'm <span className="font-semibold">Alae Eddine</span>, I am a <span className="font-semibold">junior web and desktop applications developer</span>, as well as a competitive programmer.<br></br> I have a preference for solving challenging problems with straightforward approaches. <br /> Currently, I am actively seeking new full-time or part-time opportunities in backend and frontend development.
            </p>
        </div>
        </Container>
        </>
    )

}

export default About;