const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>

      <tbody>
        {data.map((d) => {
          return(
            <tr key={d.address}>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.address}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;