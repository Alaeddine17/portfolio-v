import { Container,Title, ProjectCard } from "../../component/index";
import {ProData} from "../../JSON/Data"

const Project = () =>{


    const getProject = () =>{
        return ProData.map(function(item){
            return <ProjectCard key = {item.key} title = {item.title} img = {item.img} logo1 = {item.logo1} logo2 = {item.logo2} logo3 = {item.logo3} logo4 = {item.logo4} logo5 = {item.logo5} logo6 = {item.logo6} lang1 = {item.lang1} lang2 = {item.lang2} lang3 = {item.lang3} lang4 = {item.lang4} lang5 = {item.lang5} lang6 = {item.lang6} parag = {item.paragra} />
        })
    }


    return(<>
            <Container>
                <Title>Projects</Title>

                <div>
                    <ul className="flex flex-row flex-wrap justify-center items-center gap-6">
                        {getProject()}
                    </ul>
                </div>
            </Container>
    </>);
}

export default Project;