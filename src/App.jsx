import Die from "./components/Die.jsx"
import { nanoid } from 'nanoid';
import {useState} from "react"
import Confetti from 'react-confetti'

export default function App(){
         function hold(id) {
  setDice(prev =>
    prev.map(item =>
      item.id === id ? { ...item, isHeld: !item.isHeld } : item
    )
  );
}
 function reset(){
    setDice(prev => prev.map(item => ({...item, isHeld : false , value :Math.ceil(Math.random() * 6)})))
 }

        function allNewDice(){
            const result = [];
                for (let i = 0; i < 10; i++) {
                    const obj = {
                     value : Math.floor(Math.random() * 6) + 1,
                     isHeld : false,
                     id : nanoid()
                    }

                    result.push(obj);
                }
            return result
            }
            const generatedNumbers = allNewDice();
            
          const [diceArr, setDice] = useState(generatedNumbers)
         function handleClick(){
           setDice(prev => prev.map(die => die.isHeld ? die : {...die, value :Math.floor(Math.random() * 6) + 1} ))
         }
         const diceElements = diceArr.map((item)=>{
                return <Die hold = {hold}
                         id = {item.id} 
                         key = {item.id} 
                         value = {item.value} 
                         isHeld = {item.isHeld}/>
            })
 let gameWon = diceArr.every(die => die.isHeld) && 
        diceArr.every(die => die.value === diceArr[0].value)
 
    return (
        <main>
               {gameWon && <Confetti/> }
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <section className="dice">
                {diceElements}
            </section>
             <button onClick = {gameWon? reset : handleClick} className="roll">{gameWon ? "New Game" : "Roll"}</button>
        </main>
        
    )
}