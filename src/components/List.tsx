import React from "react";
import { IState } from "../App";

interface ListProps {
  people: IState["people"];
}

const List: React.FC<ListProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li className="List" key={person.name}>
        <div className="List-header">
          <img className="List-img" src={person.img} alt="" />
          <h2>{person.name}</h2>
          <p>{person.age}</p>
          <p className="List-note">{person.note}</p>
        </div>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

export default List;
