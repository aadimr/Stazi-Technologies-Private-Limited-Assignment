import { FiSearch } from 'react-icons/fi';

function SearchPanel() {
    return (
        <div className="flex items-center rounded-[1rem] w-[21rem] bg-white shadow-md">
            <input className="w-[18rem] h-[2.7rem] rounded-[1rem] px-[1rem] outline-none" placeholder="Search..." />
            <FiSearch className="text-[1.5rem]"/>
        </div>
    )
}

export default SearchPanel;
