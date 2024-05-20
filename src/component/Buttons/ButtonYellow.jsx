
const ButtonYellow = (props) =>{

    return(
        <>
        <button type="submit" className="bg-yellow-400 text-black lg:font-medium px-6 py-1 md:px-8 md:py-2 lg:text-lg lg:px-10 lg:py-2 rounded-3xl">
            {props.children}
        </button>
        </>
    )
}
export default ButtonYellow;