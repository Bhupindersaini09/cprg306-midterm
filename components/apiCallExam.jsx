import React, { useState } from "react";

const APICallExam = () => {
  const passcode = "ehen2rfow";
  const [secretCode, setSecretCode] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const retrievedSecretCode = data.secretCode;
      setSecretCode(retrievedSecretCode);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-100 p-2 rounded-md border border-red-500"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="flex items-center justify-center mt-4">
          <p className="text-lg font-bold">Secret Code: {secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
