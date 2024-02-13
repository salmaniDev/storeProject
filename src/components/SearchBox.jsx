import { ImSearch } from "react-icons/im"
import { createQueryObject } from "../helper/helper"


function SearchBox({ search, setSearch, setQuery }) {

    const searchHandler = () => {
        // setQuery(query => ({ ...query, search }))
        setQuery(query => createQueryObject(query, { search }))
    }
    return (
        <div className="search">
            <input type="text" placeholder="search ..." value={search ? search : ''} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
            <button onClick={searchHandler}><ImSearch /></button>
        </div>
    )
}

export default SearchBox