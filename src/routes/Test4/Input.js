const Input = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.search.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="search" name="search"/>
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;