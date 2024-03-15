"use client";

import Portfolio from "@/components/portfolio";
import ListComponent from "@/components/listComponent";
import FormExam from "@/components/formExam";

const CodeSample2 = () => {
  const myList = ["Cat", "Dog", "Chicken", "Cow"];

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1>Code sample 2</h1>
      <FormExam list={myList} />
    </div>
  );
};

export default CodeSample2;
