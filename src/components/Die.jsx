export default function Die(props){
    return(

        <button onClick ={()=>props.hold(props.id)} className = "die" style={{backgroundColor : props.isHeld ? "lightgreen" : ""}}>{props.value}</button>
    )
}