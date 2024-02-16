import './Container.css'

const Container = (props) =>{

    return(
        
        <>
        <div className='container mx-auto py-4 px-10 md:py-6 lg:py-10 fontFamily'>
            {props.children}
        </div>
        </>
    );

}

export default Container;