import { useState } from "react";

function Titulo({nome, paragrafo, cor}){

    const[texto, setTexto] = useState("Hi, I'm ")
    const[inputText, setInputText] = useState("");
    const[inputName, setInputName] = useState(nome ? nome : "Yuki S.")

    // let nome = "Yuki S.";
    const urlimg = "https://avatars.githubusercontent.com/u/137214190?v=4";

    function changeText(){
        setTexto(inputText);
    }
    function changeName(){
        setInputName(inputText);
    }

    return(
        <div>
            <h1 style={{color : cor}}>{texto}- {inputName}</h1>
            <img width={300} src={urlimg}/><br />
            <input value={inputText} onChange={(e) => {setInputText(e.target.value)}} type="text" />
            <button onClick={changeText}>mudarTexto</button>

            <input value={inputName} onChange={(e) => {setInputName(e.target.value)}} type="text" />
            <button onClick={changeName}>mudarNome</button>
            {paragrafo ?
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, optio dolore possimus eum quisquam assumenda ipsum, quod vel numquam ab adipisci aspernatur illum corporis ipsa accusantium cupiditate sunt provident porro.</p>
                :
                <p></p>
            }

        </div>
    )
}

export default Titulo