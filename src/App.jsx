import { useState } from 'react';

const flashcardsItem = [
  {
    id: 2356,
    question: 'When was react created? Who created it?',
    answer: 'Created on 2011 by Facebook',
  },
  {
    id: 5113,
    question: 'Why React?',
    answer:
      'Flexibility, Developer Experience, Corporate Investment, Community Support, Performance, Testability',
  },
  {
    id: 1099,
    question: 'Is React a framework? What are examples of frameworks?',
    answer: 'React is a library. Angular and Ember are frameworks',
  },
  {
    id: 3300,
    question: 'Where React can be used?',
    answer:
      'Web Apps, Static Sites, Mobile Apps through React Native and Desktop Apps using Electron. "Learn once and use it everywhere"',
  },
  {
    id: 1025,
    question: 'Can React be rendered only in the Client Side?',
    answer:
      'No... can be rendered in the Server Side by using Next.js or Gatsby or Phenomic',
  },
  {
    id: 2544,
    question: 'What are React renderers?',
    answer:
      'Libs that renders React: react-dom, react-native, and react-vr. There are many others',
  },
];

export default function App() {
  const [selectedid, setSelectedId] = useState(0);
  return (
    <div>
      <h1 className='main-title'>ReactJS Flashcards by Aldy Rizky Putra</h1>
      <div className='container'>
        {flashcardsItem.map((item) => (
          <Card item={item} selectedid={selectedid} setSelectedId={setSelectedId}></Card>
        ))}
      </div>
    </div>
  );
}

function Card({ item, selectedid, setSelectedId }) {
  function selectCardId(id) {
    selectedid !== id ? setSelectedId(id) : setSelectedId(0);
  }
  return (
    <div
      className={selectedid !== item.id ? '' : 'selected'}
      onClick={() => selectCardId(item.id)}
      key={item.id}>
      <p>{selectedid !== item.id ? item.question : item.answer}</p>
    </div>
  );
}
