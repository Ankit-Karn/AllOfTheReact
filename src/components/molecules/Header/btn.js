export default function Button(props){
    return(
        <>
        <button className={props.btnClass} onClick={props.onClick}>{props.text}</button>
        </>
    )
}