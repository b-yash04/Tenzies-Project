export default function Die(props){
    return(

        <button className = "die" style={{backgroundColor : props.isHeld ? "lightgreen" : ""}}>{props.value}</button>
    )
}