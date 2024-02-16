

const Experience = (props) =>{

    return(
        <>
            <li>
                <div className="flex-start flex items-center pt-3 bg-gray-100">
                <div
                    className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-yellow-300 dark:bg-yellow-500"></div>
                <p className="text-sm text-yellow-500 dark:text-yellow-300">
                    {props.date}
                </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">{props.title}</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">{props.parag}
                </p>
                </div>
            </li>
        </>
    );
}
export default Experience;