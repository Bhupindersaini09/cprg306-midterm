import React from "react";

const ListComponent = ({ items }) => {
  return (
    <div className="">
      <h2>List Example:</h2>
      <div className="text-green-600">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComponent;
