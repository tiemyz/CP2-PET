import React from "react";

export default function FormPet (props)  {
    return(
        <div>
            <form method="POST" onSubmit={props.adicionarDados}>
                <div>
                    <label>Nome</label>
                    <input name="nome" placeholder="Nome" value={props.novoPet.nome} onChange={props.capturaDados}/>
                </div>
                <div>
                <label>Idade</label>
                    <input name="idade" placeholder="Idade" value={props.novoPet.idade} onChange={props.capturaDados}/>
                </div>
                <div>    
                <label>Raça</label>
                    <input name="raça" placeholder="Raça" value={props.novoPet.raca} onChange={props.capturaDados}/>
                </div>
                <div>
                    <label>Tamanho</label>
                    <input name="tamanho" placeholder="Tamanho" value={props.novoPet.tamanho} onChange={props.capturaDados}/>
                </div>
                <div>
                    <label>Nome do dono</label>
                    <input name="nomedodono" placeholder="Nome do dono" value={props.novoPet.nomedodono} onChange={props.capturaDados}/>
                </div>
                <div>
                    <label>Telefone do dono</label>
                    <input name="telefonedodono" placeholder="Telefone do dono" value={props.novoPet.telefonedodono} onChange={props.capturaDados}/>
                </div>
                <div>
                    <label>Imagem do pet</label>
                    <input name="imagemdopet" placeholder="Imagem do pet" value={props.novoPet.imagemdopet} onChange={props.capturaDados}/>
                </div>
                <div>
                    <label>Observações</label>
                    <input name="observacoes" placeholder="Observações" value={props.novoPet.observacoes} onChange={props.capturaDados}/>
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}
