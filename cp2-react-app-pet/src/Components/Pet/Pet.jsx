import React from 'react';
import {DivTarefaPet} from '../../Style/styled'
import {FaTrashAlt as X} from "react-icons/fa";
import './pets.css'

export default function Pet(props) {

    return(
        
        <DivTarefaPet>
            <div class="info-pet">
                <p>Nome do Pet: {props.nomePet}</p>
                <p>Idade: {props.idadePet}</p>
                <p>Raça: {props.racaPet}</p>
                <p>Tamanho: {props.tamanhoPet}</p>
                <p>Nome do dono: {props.nomeDono}</p>
                <p>Telefone do dono: {props.telefoneDono}</p>
                <p>Imagem do pet : {props.imagemdopet}</p>
                <p>Observações : {props.observacoesPet}</p>
                <button onClick={props.remove}><X/></button>
            </div>
        </DivTarefaPet>
    )
}

