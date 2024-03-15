"use client";
import React, { useEffect, useState } from "react";

const InteractivityExam = ({ list }) => {
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState(word);

  useEffect(() => {
    setWord((prevName) => prevName.toUpperCase());
  }, []);

  const handleNameChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      {word.length > 2 && <div>{word}</div>}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-green-200">
            <label className="px-2">Enter a word</label>
            <input
              type="text"
              placeholder="Enter a word"
              value={word}
              onChange={handleNameChange}
              className="text-center"
            />
          </div>
          <div className="flex item-center justify-center py-2">
            <button
              className="bg-red-100 p-2 rounded-md border border-red-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {word === "show list" && (
        <div>
          {list.map((item, index) => (
            <div key={index}>{item.id}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractivityExam;
