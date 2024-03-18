import React, {useState} from "react"

import Scooby from "./MainImagens/scooby.png"
import Ben10 from "./MainImagens/ben10.png"
import Looney from "./MainImagens/looney.png"
import Gumball from "./MainImagens/gumball.png"
import Meninas from "./MainImagens/meninas.png"
import TomEJerry from "./MainImagens/tomejerry.png"


import Programacao from "../Programacao/Programacao.jsx"

import * as S from "./MainStyle"

function Main() {

    const [galeria, setGaleria] = useState([
        Gumball, Meninas, TomEJerry
    ])

    return (
        <S.MainStyle>

            <S.StyledSection>
                <img src={Scooby} alt="Scooby" />
                <img src={Ben10} alt="Ben10" />
                <img src={Looney} alt="Looney" />
            </S.StyledSection>


            <S.StyledSection2>
                {galeria.map((item) => (
                    <img src={item} alt="" />
                ))}

            </S.StyledSection2>

<Programacao />


        </S.MainStyle>
    )
}

export default Main