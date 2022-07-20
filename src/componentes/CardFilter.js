function CardFilter({ handleCategoryChange }) {

  const categories = [
		"Todo",
		"Audio",
		"Controles",
		"Portátiles",
		"Monitores"
	]

	const handleChange = (e) => {
		handleCategoryChange(e.target.value)
	}

  return (
    <>
      <select defaultValue="Todo" onChange={handleChange} >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </>
  );
}

export default CardFilter;
