import { css } from 'react-emotion';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  }
})

const Label = ({ input, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  }

  return (
    <span className={cssLabel}>
      {input.length ? input : "RENDER VALUE HERE"}
      <button type="button" onClick={handleClick}>⊗</button>
    </span>
  )
}

export default Label;