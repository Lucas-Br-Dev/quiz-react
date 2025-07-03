"use client"

import { ResponseType } from "@/types/ResponsesType"

type Props = {
    responses: ResponseType[];
}

export const Results = ({ responses }: Props) => {

    const checkIcon = (check: boolean | null) => {
        if (check) {
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        } else {
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        }
    }

    return (
        <div className="p-4 bg-sky-950 rounded border border-gray-500 text-center max-w-80 md:min-w-md md:max-w-2xl" >
            <p className="text-2xl mb-4" >Resultados</p>
            {responses.map((item) => (
                <div className="flex items-center p-2 gap-4 mb-2 text-black md:text-xl bg-sky-400 rounded-xl border border-white" >
                    <div className="bg-sky-950 md:p-2 rounded-full" >{checkIcon(item.check)}</div>
                    <div className={`${item.check ? "bg-green-300" : "bg-red-300"} p-2 md:p-4 rounded-md w-full border border-white`} >
                        <div>{item.question}</div>
                        <div className="bg-white rounded-md" >{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>

    )
}