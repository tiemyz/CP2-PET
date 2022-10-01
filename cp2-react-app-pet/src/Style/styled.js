import styled from 'styled-components'

export const DivListaPet = styled.div`
    width: 100%;
    min-height: 85vh;
    background-color: #e0bcdd;
    padding: 50px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
`

export const DivTarefaPet = styled.div`       
    background-color : #f0ddee;
    padding: 2vh 2vw;
    text-align:center;
    width:30vw;
    height:35vh;
    border-radius: 20px;
    h2,p{
            padding-bottom:1vh
        }
    button{
            position: absolute; top: 10px; right: 10px;
    }
`