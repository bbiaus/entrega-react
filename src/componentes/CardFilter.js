import { useEffect, useState } from "react";

function CardFilter({ handleCategoryChange }) {
  const [isLoading, setIsLoading] = useState(false);

  const [categories, setCategories] = useState([]);

	const handleChange = (e) => {
		handleCategoryChange(e.target.value)
	}

  useEffect(() => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetch("../data.json")
          .then((resp) => resp.json())
          .then((data) => {
            const categorias = data.map((item) => item.categoria);
            const uniqueCategories = new Set(categorias);
            setCategories([...uniqueCategories]);
            setIsLoading(false);
          }),
      2000
    );
  }, []);

  return (
    <>
      <select defaultValue="" onChange={handleChange} >
        <option value="" disabled hidden>
          Choose here
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </>
  );
}

export default CardFilter;
