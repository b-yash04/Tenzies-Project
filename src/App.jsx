import Die from "./components/Die.jsx"
import { nanoid } from 'nanoid';
import {useState} from "react"
export default function App(){
    
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
           setDice(prev => allNewDice())
         }
         const diceElements = diceArr.map((item)=>{
                return <Die key = {item.id} value = {item.value} isHeld = {item.isHeld}/>
            })
 
    return (
        <main>
            <section className="dice">
                {diceElements}
            </section>
             <button onClick = {handleClick} className="roll">Roll</button>
        </main>
        
    )
}