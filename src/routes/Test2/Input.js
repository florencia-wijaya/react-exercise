const Input = ({ value, onChange }) => {
  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  }

  return <input type="text" placeholder="input here" value={value} onChange={handleChange}/>
}

export default Input;
