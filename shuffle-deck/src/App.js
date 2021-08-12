// import "./styles.css";
import {useState, useEffect} from 'react';

export default function App() {
  const suits = ["♠", "♡", "♢", "♣"];
  const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const deck = [];
  
  const [deckOfCards, setDeckOfCards] = useState(deck);
  const [hasShuffled, setHasShuffled] = useState(false);
  
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      deck.push({
        suit: suits[i],
        value: cards[j]
      });
    }
  }
  
  const shuffle = () => {
    console.log('Shuffling...');
    setDeckOfCards(deck.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    shuffle();
  }, [hasShuffled])

  return (
    <div>
      <section className="section">
        <button className="button" onClick={() => {
          hasShuffled === true ? setHasShuffled(false) : setHasShuffled(true)
        }}>
          Shuffle Deck
        </button>
      </section>
      <ol className="list">
        {deckOfCards.map(({ suit, value }) => (
          <li className="list__item" key={`${suit}-${value}`}>
            <div className="card">
              {suit} {value}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
