import React from 'react'
import './App.css';


interface IUserData {
  id: number
  first_name: string,
  last_name: string,
  email: string,
  gender: string
}

interface ITableProps {
  data: IUserData[]
}

export const Table: React.FC<ITableProps> = (props: ITableProps) => {
  return (
    <table className="body">
      <tbody className="table">
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {props.data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}