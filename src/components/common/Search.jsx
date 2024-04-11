import { MdSearch } from 'react-icons/md'

function Search({ handleSearchText }) {
  return (
    <div className='search'>
        <MdSearch className='search-icon' size="1.3em" color='white'/>
        <input onChange={(e) => handleSearchText(e.target.value)} type="search" placeholder='type to search...'/>    
    </div>
  )
}

export default Search