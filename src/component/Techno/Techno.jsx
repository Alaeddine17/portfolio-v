

const Techno = (props) =>{

    return(
        <div className="flex flex-col-reverse justify-center items-center w-16 md:w-24 text-xs gap-1 md:text-sm">
                        <h1>{props.tech}</h1>
                        <img className="min-w-16 md:min-w-20" src={props.logo} alt={props.tech} />
        </div>
    )
}
export default Techno;