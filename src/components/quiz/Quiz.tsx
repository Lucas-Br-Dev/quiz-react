"use client";

import { ListQuiz } from "./ListQuiz"
import { useState } from "react";
import { Results } from "./Results";
import { ResponseType } from "@/types/ResponsesType";
import { ResponseDataType } from "@/types/ResponseDataType";
import { QuestionType } from "@/types/QuestionsType";

type Props = {
    QuestionQuiz: QuestionType[]
}

let responses: ResponseType[] = [];

export const Quiz = ({QuestionQuiz}: Props) => {

    const [currentStage, setCurrentStage] = useState(0)
    const [showResult, setShowResult] = useState(false)


    const fillResponse = ({ answer, check }: ResponseDataType) => {
        const responseActual = {
            question: QuestionQuiz[currentStage].question,
            answer: answer,
            check: check
        }
        responses.push(responseActual)
    }

    const afterStage = () => {
        if (currentStage + 1 === QuestionQuiz.length) {
            setShowResult(true)
        } else {
            setCurrentStage(currentStage + 1)
        }
    }

    return (
        <div className="overflow-y-auto  container mx-auto flex flex-col justify-center items-center" >
            <h1 className="text-3xl mb-6" >Quiz sobre React</h1>
            {!showResult &&
                <div className="text-center" >
                    <ListQuiz quizData={QuestionQuiz[currentStage]} afterStage={afterStage} handlefillResponse={fillResponse} />
                    <p className="pt-2" >{currentStage} de {QuestionQuiz.length} perguntas</p>
                </div>

            }
            {showResult &&
                <div className="mb-6" >
                    <Results responses={responses} />
                </div>
            }
        </div>
    )
}