import { Container,Title,Techno } from "../../component"
import Data from "../../JSON/Data"

const Technologies = () =>{

    const getFront = () => {
        return Data.front.map(function(item){
           return <Techno tech = {item.tech} logo = {item.logo} key = {item.key} />
        })
    }

    const getBack = () =>{
        return Data.back.map(function(item){
            return <Techno tech = {item.tech} logo = {item.logo} key = {item.key}/>    
        })
    }

    const getDataBase = () =>{
        return Data.base.map(item => {
            return <Techno tech = {item.tech} logo = {item.logo} key = {item.key}/>
        })
    }


    return(
        <div className="mt-3">
        <Container>
            
            <Title>
                Technologies
            </Title>
        
            <div className="text-center my-5">Frontend</div>
            <div className="flex flex-row flex-wrap gap-10 md:gap-16 justify-center">
            {getFront()}
            </div>
        
        
        <div className="my-10">
            <div className="text-center my-5">Backend</div>
            <div className="flex flex-row flex-wrap gap-10 md:gap-20 justify-center">
            {getBack()}
            </div>
        </div>

        <div className="my-10">
            <div className="text-center my-5">Database</div>
            <div className="flex flex-row flex-wrap gap-10 md:gap-20 justify-center">
            {getDataBase()}
            </div>
        </div>

        </Container>
        </div>
    )
}
export default Technologies;