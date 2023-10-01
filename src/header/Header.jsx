import SearchPanel from "../components/SearchPanel"

function Header() {
    return (
        <div className="mx-6 mt-[2px] h-[4.8rem] rounded-[1rem] flex items-center pl-[1.4rem] bg-slate-100 shadow-lg">
            <SearchPanel/>
        </div>
    )
}

export default Header
