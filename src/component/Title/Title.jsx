const Title = (props) =>{
    return(
        <h1 className="text-xl md:text-2xl font-bold py-3 md:py-4 text-center">
            {props.children}
        </h1>
    )
}
export default Title;