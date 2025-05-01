import React from 'react'


function Form({ onClick, onChange, onSubmit, formData, onFileChange, buttonText }) {


  return (
    <>
      <form onSubmit={onSubmit} className="form">
      <div className="form__group">
        <label className="form__label" htmlFor="title">Title:</label>
        <input className="form__input form__input--text" id="title" value={formData.title} onChange={onChange} />
</div>
<div className="form__group">
        <label className="form__label" htmlFor="bpm">Tempo:</label>
        <input className="form__input form__input--text" id="bpm" value={formData.bpm} onChange={onChange} />
        </div>
        <div className="form__group">
        <label className="form__label" htmlFor="status">Status:</label>
        <select className="form__input form__input--select" id="status" value={formData.status} onChange={onChange}>
          <option value="draft">Draft</option>
          <option value="new">New</option>
          <option value="working">Working</option>
          <option value="vault">Vault</option>
          <option value="archive">Archive</option>
        </select>
</div>
<div className="form__group">
        <label className="form__label" htmlFor="lyrics">Lyrics:</label>
        <input className="form__input" id="lyrics" value={formData.lyrics} onChange={onChange} />
        </div>
        <div className="form__group">
        <label className="form__label" htmlFor="audio">Upload Audio:</label>
<input
  type="file"
  id="audio"
  name="audio"
  accept="audio/*"
  onChange={onFileChange}
  className="form__input form__input--file"
/>
</div>

        <div className="form__buttons">
          <button className="form__button form__button--submit" type="submit">{buttonText}</button>
          <button className="form__button form__button--clear" type="button" name="clear" onClick={onClick}>Clear</button>
          <button className="form__button form__button--cancel" type="button" name="cancel" onClick={onClick}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default Form

