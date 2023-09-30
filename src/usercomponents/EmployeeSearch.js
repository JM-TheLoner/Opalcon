import './employees.css'

const EmployeeSearch = ({ search, setsearch }) => {
  return (
    <form className='searchForm1' onSubmit={(e)=>{e.preventDefault()}}>
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Employees'
        value={search}
        onChange={(e) => {setsearch(e.target.value)}}
      />
    </form>
  )
}

export default EmployeeSearch