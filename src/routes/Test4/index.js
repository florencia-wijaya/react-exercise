import DATA from './_data';

import Input from "./Input";
import Table from "./Table";
import { useState } from 'react';

const Test4 = () => {
  const [data, setData] = useState(DATA);

  const handleSearchChange = (search) => {
    // exact match
    if(search.length) {
      const filteredData = DATA.filter((d) => d.name === search);
      setData(filteredData);
    } else {
      setData(DATA);
    }
  }

  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input onSubmit={handleSearchChange}/>
      <div>
        <Table data={data}/>
      </div>
    </div>
  )
}

export default Test4;