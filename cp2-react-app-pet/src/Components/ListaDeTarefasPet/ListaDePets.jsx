import React from 'react';
import Pet from '../Pet/Pet'
import { useState } from 'react';
import {DivLista} from '../../Style/styled'
import FormPet from '../FormPet/FormPet';

export default function ListaDePets() {
    
    const [pet, setPet] = useState([])

    const [nPet, setNPet] = useState({
        nome: '', idade: '', raca: '', tamanho: '', nomedodono: '', telefonedodono: '', imagemdopet: '', observacoes: ''  })

    const addPet = e =>{
        e.preventDefault()

        setNPet({nome: '', idade: '', raca: '', tamanho: '', nomedodono: '', telefonedodono: '', imagemdopet: '', observacoes: '',})
        setPet([...pet, nPet])
    }

    const captura = e=>{
        e.preventDefault()
        const {value, name} = e.target

        if(name === 'nome'){
            setNPet({'Nome':value,'Idade':nPet.idade, 'Raça':nPet.raca, 
            'Tamanho': nPet.tamanho, 'Nome do dono': nPet.nomedodono, 'Telefone do dono': nPet.telefonedodono, 
            'Imagem do pet': nPet.imagemdopet, 'Observações': nPet.observacoes})
        }else if(name === 'idade'){
            setNPet({'Nome':nPet.nome,'Idade':value, 'Raça':nPet.raca, 
            'Tamanho': nPet.tamanho, 'Nome do dono': nPet.nomedodono, 'Telefone do dono': nPet.telefonedodono, 
            'Imagem do pet': nPet.imagemdopet, 'Observações': nPet.observacoes})
        }else if(name === 'raca'){
            setNPet({'Nome':nPet.nome,'Idade':nPet.idade, 'Raça':value, 
            'Tamanho': nPet.tamanho, 'Nome do dono': nPet.nomedodono, 'Telefone do dono': nPet.telefonedodono, 
            'Imagem do pet': nPet.imagemdopet, 'Observações': nPet.observacoes})
        }else if(name === 'tamanho'){
            setNPet({'Nome':nPet.nome,'Idade':nPet.idade, 'Raça':nPet.raca, 
            'Tamanho': value, 'Nome do dono': nPet.nomedodono, 'Telefone do dono': nPet.telefonedodono, 
            'Imagem do pet': nPet.imagemdopet, 'Observações': nPet.observacoes})
        }else if(name === 'nomedodono'){
            setNPet({'Nome':nPet.nome,'Idade':nPet.idade, 'Raça':nPet.raca, 
            'Tamanho': nPet.tamanho, 'Nome do dono': value, 'Telefone do dono': nPet.telefonedodono, 
            'Imagem do pet': nPet.imagemdopet, 'Observações': nPet.observacoes})
        }else if(name === 'telefonedodono'){
            setNPet({'Nome':nPet.nome,'Idade':nPet.idade, 'Raça':nPet.raca, 
            'Tamanho': nPet.tamanho, 'Nome do dono': nPet.nomedodono, 'Telefone do dono': value, 
            'Imagem do pet': nPet.imagemdopet, 'Observações': nPet.observacoes})
        }else if(name === 'imagemdopet'){
            setNPet({'Nome':nPet.nome,'Idade':nPet.idade, 'Raça':nPet.raca, 
            'Tamanho': nPet.tamanho, 'Nome do dono': nPet.nomedodono, 'Telefone do dono': nPet.telefonedodono, 
            'Imagem do pet': value, 'Observações': nPet.observacoes})
        }else if(name === 'obsservacoes'){
            setNPet({'Nome':nPet.nome,'Idade':nPet.idade, 'Raça':nPet.raca, 
            'Tamanho': nPet.tamanho, 'Nome do dono': nPet.nomedodono, 'Telefone do dono': nPet.telefonedodono, 
            'Imagem do pet': nPet.imagemdopet, 'Observações': value})
        }
    }

    const removerPet = tar  =>{
        let lista = pet 
        lista = lista.filter((t) => t!== tar)
        setPet(lista)
    }

    return(
        <DivLista>
            <FormPet addPet={addPet} pet={nPet} digit={captura}
             capturaDados={captura}
             adicionarDados={addPet}
             novoPet={nPet}
            />
           
            
            {pet.map((tar,i) =>(
                <Pet
                key={i}
                nome={tar.nome}
                idade={tar.idade}
                raca={tar.raca}
                tamanho={tar.tamanho}
                nomedodono={tar.nomedodono}
                telefonedodono={tar.telefonedodono}
                imagemdopet={tar.imagemdopet}
                observacoes={tar.observacoes}
                remove = {removerPet.bind(this,tar)}
                />
            ))}
        </DivLista>
    )
    }