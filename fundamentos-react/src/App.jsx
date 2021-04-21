import './App.css';
import React from 'react';

import Card from './components/layout/Card'
import Mega from './components/mega/Mega'
import Contador from "./components/contador/Contador"
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';


export default function Aplication (){
    return(
        <div className= "App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
        <Card titulo="Mega">
            <Mega></Mega>
        </Card>

        <Card titulo="Contador">
            <Contador numeroInicial={0}></Contador>

        </Card>

        <Card titulo="Componente Controlado">
            <Input></Input>
        </Card>

        <Card titulo="Comunicação Indireta pai e filho">
            <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="Comunicação Direta pai e filho">
            <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="Renderização Condicional">
            <UsuarioInfo usuario ={{nome: 'Fernando'}}/>
            {/*<UsuarioInfo usuario ={{email: 'mar@co.com'}}/>*/}
        </Card>

        <Card titulo="Tabela de preços">
            <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="Repetição- produtos desafio">
            <ParOuImpar numero ={20}></ParOuImpar>
        </Card>

        <Card titulo="Repetição">
            <ListaAlunos></ListaAlunos>        
        </Card>

        <Card titulo="Família">
            <Familia sobrenome="Silva">
                <FamiliaMembro nome="Pedro"/>         
                <FamiliaMembro nome="Ana"/>
                <FamiliaMembro nome="Gustavo"/> 
            </Familia>
        </Card>

        <Card titulo="Desafio Aleatório">
            <Aleatorio min ={1} max={60}/>       
        </Card>

        <Card titulo="Fragmento">
            <Fragmento/>
        </Card>

        <Card titulo="Com Parâmetro">
            <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.3}/>
            <ComParametro titulo="Situação do aluno" aluno="Maria" nota={5.0}/>
        </Card>

        <Card titulo="Primeiro Componente" /*color="#588C73"-> Caso designar cor especifica no card*/>
            <Primeiro></Primeiro>
        </Card>


        </div>
       
    </div>

    );
}