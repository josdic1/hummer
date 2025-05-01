import React from 'react'

function Filter({ filterValues, setFilterValues, onClearFilter }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.currentTarget
    const filtered = {
      ...filterValues,
      [name]: type === 'checkbox' ? checked : value
    }
    setFilterValues(filtered)
  }

  return (
    <section className="filter">
      <div className="filter__group">
        <label className="filter__label" htmlFor="lyrics">Lyrics:</label>
        <input
          type="text"
          className="filter__input filter__input--text"
          name="lyrics"
          id="lyrics"
          placeholder="Search Lyrics..."
          value={filterValues.lyrics}
          onChange={handleChange}
        />
      </div>

      <div className="filter__group">
        <label className="filter__label" htmlFor="bpm">Tempo:</label>
        <input
          type="text"
          className="filter__input filter__input--text"
          name="bpm"
          id="bpm"
          placeholder="Search Tempo..."
          value={filterValues.bpm}
          onChange={handleChange}
        />
      </div>

      <div className="filter__group">
        <label className="filter__label" htmlFor="status">Status:</label>
        <select
          className="filter__input filter__input--select"
          name="status"
          id="status"
          value={filterValues.status}
          onChange={handleChange}
        >
          <option value="all">Status...</option>
          <option value="draft">Draft</option>
          <option value="new">New</option>
          <option value="working">Working</option>
          <option value="vaulted">Vaulted</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div className="filter__group filter__checkbox-group">
        <label className="filter__label" htmlFor="favorite">★ Only:</label>
        <input
          className="filter__input filter__input--checkbox"
          type="checkbox"
          id="favorite"
          name="favorite"
          checked={filterValues.favorite}
          onChange={handleChange}
        />
      </div>

      <div className="filter__buttons">
        <button
          className="filter__button filter__button--reset"
          type="button"
          onClick={onClearFilter}
        >
          Reset Filter
        </button>
      </div>
    </section>
  )
}

export default Filter
