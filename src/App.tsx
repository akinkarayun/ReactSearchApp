import { useState } from 'react';
import './App.css';
import { Table } from './Table';
import { Users } from './user'

interface IUserData {
  id: number
  first_name: string,
  last_name: string,
  email: string,
  gender: string
}

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const searchFilter = (data: IUserData[]) => {
    return data.filter((item) =>
      item.first_name.toLowerCase().includes(searchQuery) ||
      item.last_name.toLowerCase().includes(searchQuery) ||
      item.email.toLowerCase().includes(searchQuery))

  }
  return (
    <div className="App">
      <input type={"text"} placeholder={"Search..."}
        className="searchInput" onChange={e => setSearchQuery(e.target.value)} />
      <Table data={searchFilter(Users)} />
    </div>
  );
}

export default App;
