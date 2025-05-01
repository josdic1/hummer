


function Form({ onClick, onChange, onSubmit, formData, buttonText }) {
 

    return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:  </label>
        <input type="text" id="title" onChange={onChange} value={formData.title} placeholder="Idea Title..." /><br></br>
        <label htmlFor="bpm">Tempo:  </label>
        <input type="text" id="bpm" onChange={onChange} value={formData.bpm} placeholder="Idea Tempo..." /><br></br>
        <label htmlFor="status">Status:  </label>
        <input type="text" id="status" onChange={onChange} value={formData.status} placeholder="Status..." /><br></br>
        <label htmlFor="lyrics">Lyrics:  </label>
        <input type="text" id="lyrics" onChange={onChange} value={formData.lyrics} placeholder="Lyrics..." /><br></br>
        <label htmlFor="link">Audio:  </label>
        <input type="url" id="link" onChange={onChange} value={formData.link} placeholder="Link to Audio..." /><br></br>
        <div>
            <button type='submit' name='submit'> {buttonText} </button>
            <button type='button' onClick={onClick} name='clear'> Clear </button>
            <button type='button' onClick={onClick} name='cancel'> Cancel </button>
        </div>
      </form>
    </>
    )}

    export default Form

