import { useState } from "react";
import "../Components/contry.css";
const Contry = ({ contre }) => {
    console.log(contre)
    const { name, flags, population } = contre;

    const [visited, setVisited] = useState(false);
    const handleContary = (e) => {
        setVisited(!visited)
    }

    return (
        <div className={`border-2 border-red-500 p-3 bg-gray-200 rounded-md ${visited? "bg-green-900":""}`}>
            <img className="h-40 w-full" src={flags.png} alt="" />
            <h3 className="text-red-500 mt-5 font-bold">Name: {name.common}</h3>
            {/* <h4>{languages?.eng}</h4> */}
            <h4>Population: {population}</h4>
            <button onClick={handleContary} className="border border-red-500 px-2 text-sm mt-5 rounded-sm">{visited?"Visited":"I Going"}</button>
            {
                visited ? "I have Visited This Contry":"i wont to visited"
            }
        </div>
    );
};

export default Contry;