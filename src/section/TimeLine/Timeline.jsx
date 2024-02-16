import { Container, Title, Experience } from "../../component/index";
import { ExperDb } from "../../JSON/Data";
const Timeline = () =>{


    const GetExperience = () =>{
        return ExperDb.map( 
            Exp => <Experience key = {Exp.key} date = {Exp.date} title = {Exp.title} parag = {Exp.parag} />
        )
    } 

    return(

    <>
    <Container>
    <Title>Experience</Title>
        
        <ol className="border-l border-neutral-300 dark:border-neutral-500 w-5/6 mx-auto py-8 my-4">
        
            

            {GetExperience()}

        </ol>
        
    </Container>
    </>
    );
}
export default Timeline;