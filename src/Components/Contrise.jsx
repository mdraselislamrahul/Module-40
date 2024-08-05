
import { useLoaderData } from "react-router-dom";
import Contry from "./Contry";
import { useRef, useState } from "react";

const Contrise = () => {

    const datas = useLoaderData(null)
    // fetch('https://restcountries.com/v3.1/all')
    const [serchContrysSata, setContryeData] = useState(datas)
    const serchRef = useRef();
    // const [people, setPeople]=useState(false)
    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(serchRef.current.value)
        const search = datas.filter((e, idx) => e.name.common.toLowerCase().includes(serchRef.current.value.toLowerCase()));
        console.log(search)
        setContryeData([...search]);
        if (serchRef.current.value.length < 1) {
            setContryeData([...datas])
        }
    }
    const handleHigh = (e) => {
        // console.log(e.target.value)
        // setPeople(!people)
        const sortPeople = datas.sort((a, b) => a.population - b.population);
        console.log(sortPeople)
        setContryeData([...sortPeople])
    }
    const handleLow = (e) => {
        // console.log(e.target.value)
        // setPeople(!people)
        const sortPeople = datas.sort((a, b) => b.population - a.population);
        console.log(sortPeople)
        setContryeData([...sortPeople])
    }


    return (
        <div className="mt-5">

            <div className="flex justify-around">
                <div>
                    <input ref={serchRef} className="border-2 border-red-500 rounded-md px-2" type="text" />
                    <button className="bg-red-500 text-white ml-2 px-2 py-1 text-sm rounded-md" onClick={handleSearch}>Click here</button>
                    <br />
                </div>
                <div>
                    <button onClick={handleHigh} className="bg-red-500 text-white ml-2 px-2 py-1 text-sm rounded-md">High Population</button>
                    <button onClick={handleLow} className="bg-red-500 text-white ml-2 px-2 py-1 text-sm rounded-md ml-3">Low Population</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-20 ">
                {
                    serchContrysSata.map(contre => <Contry contre={contre} key={contre.cca3}></Contry>)
                }
            </div>
        </div>
    );
};

export default Contrise;