"use client";

import Link from "next/link";

const Welcome = () => {
  return (
    <div className="p-2 text-black bg-white">
      <h2 className="text-3xl text-center pb-4">
        Welcome to the webdev2 mid term examination{" "}
      </h2>
      <p className="text-red-700 text-lg pb-2">Instructions</p>
      <p className="pb-2">
        1. Congratulations on successfully cloning this repo. This application
        contains code, data and errors that are necessary for you to complet
        this midterm.
      </p>
      <p className="pb-2">
        2. All the code samples below are related to questions found in D2L in
        the course shell. You are to answer all questions in that shell and
        submit in D2L.
      </p>
      <p className="pb-2">
        3. Once you are done with exam, create a new repository in your github
        called exactly "cprg306-midterm". Push this repo to that repository
        before the time elapses.
      </p>
      <p className="pb-2">
        4. Don't forget to submit your work in D2L because that is where exam
        will be graded. Not submitting in D2L will result in the loss of most
        marks.
      </p>
      <p className="text-red-700 text-lg pb-2">Questions</p>
      <div className="border border-gray-300">
        <div className="p-2">
          <p className="font-semibold">Code sample 1: Tailwind</p>
          <p>
            Click on this{" "}
            <Link className="text-red-500" href="/codeSample1">
              link{" "}
            </Link>
            to go to this code sample 1.
          </p>
        </div>
        <div className="p-2">
          <p className="font-semibold">Code sample 2: Forms</p>
          <p>
            Click on this{" "}
            <Link className="text-red-500" href="/codeSample2">
              link{" "}
            </Link>
            to go to this code sample 2.
          </p>
        </div>
        <div className="p-2">
          <p className="font-semibold">Code sample 3: Making API calls</p>
          <p>
            Click on this{" "}
            <Link className="text-red-500" href="/codeSample3">
              link{" "}
            </Link>
            to go to this code sample 3.
          </p>
        </div>
        <div className="p-2">
          <p className="font-semibold">Code sample 4: Interactivity</p>
          <p>
            Click on this{" "}
            <Link className="text-red-500" href="/codeSample4">
              link{" "}
            </Link>
            to go to this code sample 4.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
