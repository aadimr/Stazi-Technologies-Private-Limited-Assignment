import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../globalState/Reducers';
import carData from "../carData.json"
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';


function PaginationFooter() {

    let dispatch = useDispatch()

    let navigate = useNavigate()

    let { page, limit, searchValue, filteredCars } = useSelector(state => state.app)

    function handleOnChange(e, pageNo) {
        dispatch(setPage(pageNo))
        navigate(`/page/${pageNo}`)
    }

    return (
        <div className="mx-6 h-[4.8rem] rounded-[1rem] flex items-center bg-slate-100 shadow-lg">
            <div className="flex items-center justify-between w-full mx-[1.4rem]">
                <p className="text-sm text-gray-700">
                    <span className="font-medium">{searchValue ? filteredCars.length : page * limit}</span> from <span className="font-medium">{carData.length}</span>
                </p>
                    <Pagination count={10} variant="outlined" shape="rounded" onChange={handleOnChange} />
            </div>
        </div>
    )
}

export default PaginationFooter;