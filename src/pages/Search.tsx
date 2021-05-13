import React from 'react'
interface Props{
    searchValue:any
    setSearchValue:any
}
const Search:React.FC <Props> = ({searchValue, setSearchValue}) => {
    return (
        <div className="flex">
        <div className="search">
          <div className='search__wrapper'>
            <input  value ={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)}  type="text" placeholder="Search . . ." />
          </div>
          </div>
        </div>
    )
}

export default Search
