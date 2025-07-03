import { QuestionType } from "../types/QuestionsType";


export const QuestionQuiz: QuestionType[] = [
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
  },
  {
    question: "O que é o Virtual DOM no React?",
    correct: 0,
    answers: [
      { answer: "Uma representação leve da árvore de elementos do DOM real" },
      { answer: "Uma biblioteca de animação" },
      { answer: "Uma estrutura de banco de dados em memória" },
      { answer: "Uma ferramenta para otimização de desempenho de CSS" },
    ],
  },
  {
    question: "Como podemos atualizar o estado de um componente no React?",
    correct: 3,
    answers: [
      { answer: "Atribuindo diretamente um novo valor ao estado" },
      { answer: "Usando o hook useRef" },
      { answer: "Modificando as propriedades do componente" },
      { answer: "Usando a função setState ou useState" },
    ],
  },
  {
    question: "O que é uma Prop no React?",
    correct: 1,
    answers: [
      { answer: "Uma variável local dentro de um componente" },
      { answer: "Um parâmetro passado de um componente pai para um componente filho" },
      { answer: "Uma referência ao DOM" },
      { answer: "Uma função que altera o estado do componente" },
    ],
  },
  {
    question: "O que o React Router permite que você faça?",
    correct: 0,
    answers: [
      { answer: "Gerenciar a navegação entre diferentes páginas dentro de uma aplicação React" },
      { answer: "Gerenciar o estado global de um aplicativo React" },
      { answer: "Gerenciar requisições HTTP para a API" },
      { answer: "Estilizar componentes de forma dinâmica" },
    ],
  },
  {
    question: "O que é um hook no React?",
    correct: 1,
    answers: [
      { answer: "Uma função que interage diretamente com o DOM" },
      { answer: "Uma função que permite usar recursos como estado e ciclo de vida em componentes funcionais" },
      { answer: "Uma variável global compartilhada entre todos os componentes" },
      { answer: "Uma biblioteca de animações" },
    ],
  },
  {
    question: "O que é o Context API no React?",
    correct: 2,
    answers: [
      { answer: "Uma ferramenta para gerenciar as rotas dentro do aplicativo" },
      { answer: "Uma biblioteca para manipulação do DOM" },
      { answer: "Uma maneira de passar dados entre componentes sem precisar passar props manualmente" },
      { answer: "Uma API para interagir com o sistema de arquivos" },
    ],
  },
  {
    question: "O que é o hook useReducer?",
    correct: 1,
    answers: [
      { answer: "Uma alternativa ao useState para gerenciar estados mais complexos" },
      { answer: "Um hook para manipular o DOM diretamente" },
      { answer: "Um hook para gerenciar o ciclo de vida do componente" },
      { answer: "Uma ferramenta para otimizar o desempenho da renderização" },
    ],
  },
  {
    question: "Como você pode otimizar a performance de um componente no React?",
    correct: 0,
    answers: [
      { answer: "Usando memoização, como o React.memo ou useMemo" },
      { answer: "Reduzindo a quantidade de componentes no aplicativo" },
      { answer: "Evitar o uso de hooks dentro de componentes" },
      { answer: "Usando estados globais para todos os componentes" },
    ],
  },
];