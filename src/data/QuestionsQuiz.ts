import { QuestionType } from "../types/QuestionsType";


export const QuestionQuiz:QuestionType[] = [
    {
        question: "O que é o React?",
        correct: 0,
        answers: [
          { answer: "Uma biblioteca JavaScript para construir interfaces de usuário" },
          { answer: "Um framework para back-end" },
          { answer: "Uma linguagem de programação" },
          { answer: "Um sistema operacional" },
        ]
      },
      {
        question: "O que é um componente no React?",
        correct: 2,
        answers: [
          { answer: "Um tipo de variável" },
          { answer: "Um método de ciclo de vida" },
          { answer: "Uma função ou classe que retorna JSX" },
          { answer: "Um hook especial" },
        ]
      },
      {
        question: "Para que serve o useState?",
        correct: 1,
        answers: [
          { answer: "Para fazer chamadas de API" },
          { answer: "Para criar e gerenciar estados dentro de um componente" },
          { answer: "Para definir rotas" },
          { answer: "Para aplicar estilos" },
        ]
      },
      {
        question: "O que é JSX?",
        correct: 0,
        answers: [
          { answer: "Uma extensão de sintaxe que permite escrever HTML dentro do JavaScript" },
          { answer: "Um tipo de componente especial" },
          { answer: "Um hook avançado" },
          { answer: "Uma biblioteca de roteamento" },
        ]
      },
      {
        question: "Qual hook é usado para efeitos colaterais, como chamadas de API?",
        correct: 2,
        answers: [
          { answer: "useState" },
          { answer: "useRef" },
          { answer: "useEffect" },
          { answer: "useCallback" },
        ]
      }
];
