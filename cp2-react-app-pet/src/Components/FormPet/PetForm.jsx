import React from "react";
import './cadastro.css'

export default function PetForm (props)  {

    return(
        
        <div class="form-cadastro">
            
            <form method="post" onSubmit={props.addDados}>
                <div>
                    <label>Nome do Pet: </label>
                    <input type="text" name="nomePet" placeholder="Informe o nome do Pet" value={props.pet.nomePet} onChange={props.digit} required/>
                </div>
                <div>
                <label>Idade do Pet: </label>
                    <input type="number" name="idadePet" placeholder="Informe a idade do pet" value={props.pet.idadePet} onChange={props.digit} required/>
                </div>
                <div>    
                <label>Raça do Pet: </label>
                    <input type="text" name="racaPet" placeholder="Informe a raça do pet" value={props.pet.racaPet} onChange={props.digit} required/>
                </div>
                <div>
                    <label>Tamanho-CM: </label>
                    <input type="number" name="tamanhoPet" placeholder="Informe o tamanho do pet" value={props.pet.tamanhoPet} onChange={props.digit} required/>
                </div>
                <div>
                    <label>Nome do dono: </label>
                    <input type="text" name="nomeDono" placeholder="Nome do dono" value={props.pet.nomeDono} onChange={props.digit} required/>
                </div>
                <div>
                    <label>Telefone do dono: </label>
                    <input type="text" name="telefoneDono" placeholder="Telefone do dono" value={props.pet.telefoneDono} onChange={props.digit} required/>
                </div>
                <div>
                    <label>Insira a foto do seu pet: </label>
                    <input type="file" name="imagemPet" value={props.pet.imagemPet} onChange={props.capturaDados}/>
                </div>
                <div>
                    <label>Observações: </label>
                    <textarea rows="10" type="text" name="observacoesPet" placeholder="Informe as observações" value={props.pet.observacoesPet} onChange={props.digit}/>
                </div>
                <button type="submit">Cadastrar Pet</button>
            </form>
        </div>
    )
}

