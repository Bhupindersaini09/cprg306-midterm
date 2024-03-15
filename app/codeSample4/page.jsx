"use client";

import InteractivityExam from "@/components/interactivityExam";

const CodeSample4 = () => {
  const myList = [
    { id: "1", name: "Cat" },
    { id: "2", name: "Dog" },
    { id: "3", name: "Chicken" },
    { id: "3", name: "Cow" },
  ];

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1 className="pb-2 text-blue-600">Code sample 4: Interactivity</h1>
      <p className="pb-2"></p>

      <div className="p-4">
        <InteractivityExam list={myList} />
      </div>
    </div>
  );
};

export default CodeSample4;
