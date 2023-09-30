import './users.css'

const UserSearch = ({ search, setsearch }) => {
  return (
    <form className='searchForm2' onSubmit={(e)=>{e.preventDefault()}}>
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Users'
        value={search}
        onChange={(e) => {setsearch(e.target.value)}}
      />
    </form>
  )
}

export default UserSearch
