import './ButtonDark.css';
const ButtonDark = (props) =>{

    return(
        <>
        <button className="btn-color text-white lg:font-medium px-8 py-2 md:px-8 md:py-2 lg:text-2xl lg:px-8 lg:py-3 rounded-3xl">
            {props.children}
        </button>
        </>
    )
}
export default ButtonDark;