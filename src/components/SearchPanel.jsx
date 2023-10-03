import { FiSearch } from 'react-icons/fi';
import { setSearchValue,setFilteredCars } from '../globalState/Reducers';
import { useDispatch,useSelector } from 'react-redux';

function SearchPanel() {

    let dispatch = useDispatch()

    let { searchValue } = useSelector(state => state.app)

    function handleOnChange(e) {
        let newValue = e.target.value
        dispatch(setSearchValue(newValue))
        dispatch(setFilteredCars(newValue))
    }

    return (
        <div className="flex items-center rounded-[1rem] w-[21rem] bg-white shadow-md">
            <input className="w-[18rem] h-[2.7rem] rounded-[1rem] px-[1rem] outline-none" placeholder="Search..." value={searchValue} onChange={(e) => handleOnChange(e)}/>
            <FiSearch className="text-[1.5rem]" />
        </div>
    )
}

export default SearchPanel;
