import React from 'react';
import {DivTarefa} from '../../Style/styled'
import {FaTrashAlt as X} from "react-icons/fa";

export default function Pet(props) {
    return(
        <DivTarefa>
                <p><b>Nome :</b> {props.nome}</p>
                <p><b>Idade :</b> {props.idade}</p>
                <p><b>Raça :</b> {props.raca}</p>
                <p><b>Tamanho :</b> {props.tamanho}</p>
                <p><b>Nome do dono :</b> {props.nomedodono}</p>
                <p><b>Telefone do dono :</b> {props.telefonedodono}</p>
                <p><b>Imagem do pet :</b> {props.imagemdopet}</p>
                <p><b>Observações :</b> {props.observacoes}</p>
                <button onClick={props.remove}><X/></button>
        </DivTarefa>
    )
}

