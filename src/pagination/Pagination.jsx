import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../globalState/Reducers';
import carData from "../carData.json"
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';


function PaginationFooter() {

    let dispatch = useDispatch()

    let { page, limit, searchValue, filteredCars } = useSelector(state => state.app)

    let [pageCount, setPageCount] = useState(1)

    function handleOnChange(e, pageNo) {
        dispatch(setPage(pageNo))
        setPageCount(pageNo);
    }

    console.log(pageCount)

    return (
        <div className="mx-6 h-[4.8rem] rounded-[1rem] flex items-center bg-slate-100 shadow-lg">
            <div className="flex items-center justify-between w-full mx-[1.4rem]">
                <p className="text-sm text-gray-700">
                    <span className="font-medium">{searchValue ? filteredCars.length : page * limit}</span> from <span className="font-medium">{carData.length}</span>
                </p>
                <Link to={`/page/${pageCount}`}>
                    <Pagination count={10} variant="outlined" shape="rounded" onChange={handleOnChange} />
                </Link>
            </div>
        </div>
    )
}

export default PaginationFooter;