import React, { useState, useEffect } from 'react';
import skill1 from '../images/img-1.png';
import skill2 from '../images/img-2.png';
import skill3 from '../images/img-3.png';
import skill4 from '../images/img-4.png';
import skill5 from '../images/img-5.png';
import skill6 from '../images/img-6.png';
import skill7 from '../images/img-7.png';
import skill8 from '../images/img-8.png';
import queIcon from '../images/que_icon.svg';

const cardImages = [
  { id: 1, image: skill1 },
  { id: 2, image: skill2 },
  { id: 3, image: skill3 },
  { id: 4, image: skill4 },
  { id: 5, image: skill5 },
  { id: 6, image: skill6 },
  { id: 7, image: skill7 },
  { id: 8, image: skill8 },
];

function Skills() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matched, setMatched] = useState(0);
  const [disableDeck, setDisableDeck] = useState(false);
  const [firstMatch, setFirstMatch] = useState(false); 
  
  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = [
      ...cardImages,
      ...cardImages, 
    ]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        id: index,
        flipped: false,
      }));

    setCards(shuffledCards);
    setMatched(0);
    setFirstMatch(false); 
  };

  const flipCard = (index) => {
    if (disableDeck || cards[index].flipped) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    setFlippedCards((prev) => [...prev, index]);

    if (flippedCards.length === 1) {
      setDisableDeck(true);
      checkForMatch(flippedCards[0], index);
    }
  };

  const checkForMatch = (index1, index2) => {
    if (cards[index1].image === cards[index2].image) {
      setMatched(matched + 1);

      if (matched === 0) {
        setFirstMatch(true);
      }

      if (matched + 1 === cardImages.length) {
        setDisableDeck(false);
      }
      resetFlippedCards();
    } else {
      setTimeout(() => {
        const newCards = [...cards];
        newCards[index1].flipped = false;
        newCards[index2].flipped = false;
        setCards(newCards);
        resetFlippedCards();
      }, 1000);
    }
  };

  const resetFlippedCards = () => {
    setFlippedCards([]);
    setDisableDeck(false);
  };

  const resolveGame = () => {
    const newCards = cards.map((card) => ({ ...card, flipped: true }));
    setCards(newCards);
  };

  return (
    <div className="skills section" id="skills">
      <div className="content">
      <h2>{'// Skills'}</h2>
        <p>
          Want to test your memory? Let's play a card game and see if we're a good fit!
          Turn over the cards to see my skills – each matching pair shows you the
          programming languages I use. Can you find them all?
        </p>
      </div>
      <div className="skills-game">
        <div className="wrapper">
          <ul className="cards">
            {cards.map((card, index) => (
              <li
                key={index}
                className={`card ${card.flipped ? 'flip' : ''}`}
                onClick={() => flipCard(index)}
              >
                <div className="view front-view">
                  <img src={queIcon} alt="que icon" />
                </div>
                <div className="view back-view">
                  <img src={card.image} alt="card-img" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="resolve-game-section">
          {firstMatch && (
            <span className="resolve-game-copy">
              Ready for a shortcut? Looks like you're making great progress! If you're feeling curious
              (or just want a little help), click the button to reveal all my skills at once. But if
              you're up for the challenge, keep going and see if you can match them all on your own!
            </span>
          )}
          <button
            className="resolve-game"
            onClick={resolveGame}
            style={{ display: firstMatch ? 'block' : 'none' }}
          >
            Resolve Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
