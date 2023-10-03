import { GoPeople } from 'react-icons/go';
import { ImMeter } from 'react-icons/im';
import { MdOutlineLocalGasStation } from 'react-icons/md';
import { PiSteeringWheel } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai';
import Button from "../components/Button";
import { useSelector } from "react-redux"

function HeroPage() {

    let { page, limit, searchValue, filteredCars } = useSelector(state => state.app)

    console.log(filteredCars)

    let selectedCarData = (page, limit) => {
        let result = [];
        let startIndex = (page - 1) * limit;
        let endIndex = page * limit;

        if (searchValue && filteredCars.length > startIndex && filteredCars.length <= endIndex) {
            endIndex = startIndex + (filteredCars.length % limit);
        }

        for (let i = startIndex; i < endIndex; i++) {
            result.push(filteredCars[i]);
        }
        return result;
    };

    let data = selectedCarData(page, limit);

    return (
        <div className="m-6 flex flex-wrap gap-[1rem] min-h-screen">
            {
                data.map((ele, index) => (
                    <div key={index} className="p-[.7rem] rounded-[1rem] bg-slate-100 shadow-lg h-[29rem]">
                        <img src={ele.image} alt="error" className="w-[25rem] h-[15rem] rounded-[1rem]" />
                        <div className="my-[1rem] mx-[.7rem] flex justify-between">
                            <p className="font-semibold text-[1.2rem]">{ele.title}</p>
                            <p className="font-medium border-2 border-dashed border-[#6CB4EE] w-[3.5rem] flex justify-center rounded-[.7rem]">{ele.year}</p>
                        </div>
                        <div className="ml-[1rem] mb-[1rem] w-[20rem] grid grid-cols-2 gap-x-[4rem] gap-y-[.5rem]">
                            <p className="flex flex-row gap-[.4rem]"><GoPeople className="text-[#6CB4EE] text-[1.3rem]" /> {ele.seatingCapacity}</p>
                            <p className="flex flex-row gap-[.4rem]"><MdOutlineLocalGasStation className="text-[#6CB4EE] text-[1.3rem]" /> {ele.category}</p>
                            <p className="flex flex-row gap-[.4rem]"><ImMeter className="text-[#6CB4EE] text-[1.3rem]" /> {ele.kmPerLiter}</p>
                            <p className="flex flex-row gap-[.4rem]"><PiSteeringWheel className="text-[#6CB4EE] text-[1.3rem]" /> {ele.mode}</p>
                        </div>
                        <hr />
                        <div className="m-[1rem] flex justify-between">
                            <p className="font-semibold text-[1.7rem]">{ele.price}<span className="text-[.9rem]"> / month</span></p>
                            <div className="flex items-center gap-[1rem]">
                                <span className="bg-[#E0F0FF] w-[2.3rem] h-[2.3rem] rounded-[.7rem] flex justify-center items-center">
                                    <AiOutlineHeart className="text-[1.5rem] text-[#6CB4EE]" />
                                </span>
                                <Button name={"Rent now"} className="w-[6rem] h-[2.5rem] text-white rounded-[.7rem] bg-[#6CB4EE]" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HeroPage;
