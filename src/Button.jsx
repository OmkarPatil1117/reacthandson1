import "./Button.css"

const getDivData = () => {
    console.log("Hellpo world");
}

const Button = (props) => {
    return (
        <>
        <button id="button" onClick={getDivData()}> {props.value} </button>
        </>
    )
}

export default Button