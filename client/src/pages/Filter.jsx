

function Filter({ filterValues, setFilterValues, onFilter }) {
   
    const handleChange = (e) => {
        const { name, value } = e.currentTarget
        const filtered = ({
            ...filterValues,
            [name]: value
        })
        setFilterValues(filtered)
        onFilter()
    }
    
return (
<>
<section name="filter">
    <label htmlFor="lyrics">Lyrics: </label>
        <input type="text" name="lyrics" id="lyrics" placeholder="Search Lyrics..." value={filterValues.lyrics} onChange={handleChange} /> 
    <br></br>
    <label htmlFor="bpm">Tempo: </label>
        <input type="text" name="bpm" id="bpm" placeholder="Search Tempo..." value={filterValues.bpm} onChange={handleChange} /> 
    <br></br>
    <label htmlFor="status">Status: </label>
       <select name="status" onChange={handleChange} value={filterValues.status}>
            <option defaultValue="all" disabled> Status </option>
            <option value="draft"> Draft </option>
       </select>
    
</section>
</>
)}

export default Filter