import React from 'react';
import Pet from '../Pet/Pet'
import { useState } from 'react';
import {DivListaPet} from '../../Style/styled'
import PetForm from '../FormPet/PetForm';

export default function PetState() {

    const [pet, setPet] = useState([])
    
    const [nPet, setNPet] = useState({nomePet: '', idadePet: '', racaPet: '', tamanhoPet: '', nomeDono: '', telefoneDono: '', imagemPet: '', observacoesPet: ''})

    const addDados = e =>{
        e.preventDefault()

        setNPet({nomePet: '', idadePet: '', racaPet: '', tamanhoPet: '', nomeDono: '', telefoneDono: '', imagemPet: '', observacoesPet: '',})
        setPet([...pet, nPet])
    }

    const captura = e=>{
        e.preventDefault()
        const {value, name} = e.target

        if(name === "nomePet"){
            setNPet({nomePet: value, idadePet: nPet.idadePet, racaPet: nPet.racaPet, 
            tamanhoPet: nPet.tamanhoPet, nomeDono: nPet.nomeDono, telefoneDono: nPet.telefoneDono, imagemPet: nPet.imagemPet, observacoesPet: nPet.observacoesPet})
        }else if(name === "idadePet"){
            setNPet({nomePet: nPet.nomePet, idadePet: value, racaPet: nPet.racaPet, 
                tamanhoPet: nPet.tamanhoPet, nomeDono: nPet.nomeDono, telefoneDono: nPet.telefoneDono, imagemPet: nPet.imagemPet, observacoesPet: nPet.observacoesPet})
        }else if(name === "racaPet"){
            setNPet({nomePet: nPet.nomePet, idadePet: nPet.idadePet, racaPet: value, 
                tamanhoPet: nPet.tamanhoPet, nomeDono: nPet.nomeDono, telefoneDono: nPet.telefoneDono, imagemPet: nPet.imagemPet, observacoesPet: nPet.observacoesPet})
        }else if(name === "tamanhoPet"){
            setNPet({nomePet: nPet.nomePet, idadePet: nPet.idadePet, racaPet: nPet.racaPet, 
                tamanhoPet: value, nomeDono: nPet.nomeDono, telefoneDono: nPet.telefoneDono, imagemPet: nPet.imagemPet, observacoesPet: nPet.observacoesPet})
        }else if(name === "nomeDono"){
            setNPet({nomePet: nPet.nomePet, idadePet: nPet.idadePet, racaPet: nPet.racaPet, 
                tamanhoPet: nPet.tamanhoPet, nomeDono: value, telefoneDono: nPet.telefoneDono, imagemPet: nPet.imagemPet, observacoesPet: nPet.observacoesPet})
        }else if(name === "telefoneDono"){
            setNPet({nomePet: nPet.nomePet, idadePet: nPet.idadePet, racaPet: nPet.racaPet, 
                tamanhoPet: nPet.tamanhoPet, nomeDono: nPet.nomeDono, telefoneDono: value, imagemPet: nPet.imagemPet, observacoesPet: nPet.observacoesPet})
        }else if(name === "imagemPet"){
            setNPet({nomePet: nPet.nomePet, idadePet: nPet.idadePet, racaPet: nPet.racaPet, 
                tamanhoPet: nPet.tamanhoPet, nomeDono: nPet.nomeDono, telefoneDono: nPet.telefoneDono, imagemPet: value, observacoesPet: nPet.observacoesPet})
        }else if(name === "observacoesPet"){
            setNPet({nomePet: nPet.nomePet, idadePet: nPet.idadePet, racaPet: nPet.racaPet, 
                tamanhoPet: nPet.tamanhoPet, nomeDono: nPet.nomeDono, telefoneDono: nPet.telefoneDono, imagemPet: nPet.imagemPet, observacoesPet: value})
        }
    }

    const removerPet = tar  =>{
        let lista = pet 
        lista = lista.filter((t) => t!== tar)
        setPet(lista)
    }

    return(
        <DivListaPet>
            <PetForm addDados={addDados} pet={nPet} digit={captura}/>
            {pet.map((tar,i) =>(
                <Pet
                key={i}
                nomePet={tar.nomePet}
                idadePet={tar.idadePet}
                racaPet={tar.racaPet}
                tamanhoPet={tar.tamanhoPet}
                nomeDono={tar.nomeDono}
                telefoneDono={tar.telefoneDono}
                imagemPet={tar.imagemPet}
                observacoesPet={tar.observacoesPet}
                remove = {removerPet.bind(this,tar)}
                />
            ))}
        </DivListaPet>
    )
}
