 import React from 'react' 
 export default function ComParametro(props){
     const status = props.nota >= 7 ? 'Aprovado': 'em Recuperação'
     //const notaInt = Math.ceil(props.nota) arredondar para numero inteiro
         return(
        <div>
            <h2>{props.Titulo}</h2>
            <p>
            <strong>{props.aluno}</strong> tem nota <strong>{props.nota}</strong> e está <strong>{status}</strong>
            </p>
        </div>
    )}