import React from 'react';
import './index.css';
import { ListItem } from '../../types';

interface ListProps {
  title: string;
  items: ListItem[];
}

const List: React.FC<ListProps> = ({ title }: ListProps): JSX.Element => {
  return (
    <div className="List">
      <h1>{ title }</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

export default List;