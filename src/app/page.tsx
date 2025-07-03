"use client"

import { Quiz } from "@/components/quiz/Quiz";
import { QuestionQuiz } from "@/data/QuestionsQuiz";
import { useState } from "react";

const page = () => {

  const [showQuiz, setShowQuiz] = useState(false)
  return (
    <div className="flex items-center justify-center min-h-svh bg-gradient-to-br from-gray-95  0 to-sky-900 " >
      {showQuiz &&
        <Quiz QuestionQuiz={QuestionQuiz} />
      }
      {!showQuiz && 
        <button onClick={() => setShowQuiz(!showQuiz)} className="p-4 text-black font-bold bg-sky-500 rounded-md" >Clique para começar</button>
      }
    </div>
  );
}

export default page