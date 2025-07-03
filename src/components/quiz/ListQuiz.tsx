"use client";

import { QuestionType } from "@/types/QuestionsType";
import { useState } from "react";
import { ResponseDataType } from "@/types/ResponseDataType";

type Props = {
    quizData: QuestionType;
    afterStage: () => void;
    handlefillResponse: (value: ResponseDataType) => void
}

export const ListQuiz = ({ quizData, afterStage, handlefillResponse }: Props) => {

    const [checkAnswer, setCheckAnswer] = useState<null | boolean>(null)
    const [indexActual, setIndexActual] = useState<null | number>(null)

    const checkQuestion = (key: number, value: string) => {
        let correct;
        setIndexActual(key)
        
        if (key === quizData.correct) {
            setCheckAnswer(true);
            correct = true
        } else {
            setCheckAnswer(false)
            correct = false
        }

        handlefillResponse({answer: value, check: correct})
        
        setTimeout(() => {
            setCheckAnswer(null)
            setIndexActual(null)
            afterStage()
        }, 1000)
    }

    return (
        <div className="bg-sky-950 rounded border border-white text-center min-w-68 max-w-80 md:min-w-md md:max-w-2xl" >
            <h1 className="p-1 md:p-4 bg-sky-400 text-black text-xl border-b-4 border-b-white" >{quizData.question}</h1>
            <div className="" >
                <ul className="text-xl text-black px-2" >
                    {quizData !== null &&
                        quizData.answers.map((item, index) => (

                            <li
                                onClick={(e) => (checkQuestion(index, e.currentTarget.innerText))}
                                className={`${indexActual === index ? checkAnswer ? "bg-green-300" : "bg-red-300" : "bg-sky-400"} border border-white rounded my-2 p-1 cursor-pointer hover:border-black`}
                                key={index}
                            >
                                {item.answer}
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div >
    )
}