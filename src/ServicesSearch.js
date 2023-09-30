import './services.css'

const ServicesSearch = ({ search, setsearch }) => {
  return (
    <form className='searchForm' onSubmit={(e)=>{e.preventDefault()}}>
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Services'
        value={search}
        onChange={(e) => {setsearch(e.target.value)}}
      />
    </form>
  )
}

export default ServicesSearch