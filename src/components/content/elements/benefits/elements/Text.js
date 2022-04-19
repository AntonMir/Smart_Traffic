// import { useState, useEffect } from 'react'
// config
import config from '@config/config.js'
// anim on scroll
import 'aos/dist/aos.css'
// styled
import styled from 'styled-components'

// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const textBenefits = textContent.benefits


export default function Text(props) {

    const { selectedColour } = props

    if (selectedColour === 'green') {
        return (
            <TextStyled>
                <h1>{textBenefits.title}</h1>
                <p>{textBenefits.greenLight[0]}</p>
                <p>{textBenefits.greenLight[1]}</p>
                <p>{textBenefits.greenLight[2]}</p>
            </TextStyled>
        )
    }

    return (
        <TextStyled>
            <h1>{textBenefits.title}</h1>
            <p>{textBenefits.redLight[0]}</p>
            <p>{textBenefits.redLight[1]}</p>
            <p>{textBenefits.redLight[2]}</p>
        </TextStyled>
    )


}

const TextStyled = styled.div`
    width: 70%; 

    & > h1 {
        font-weight: bold;
        margin: 0 0 20px 0;
        color: #091f2c;
        max-width: 100%;
        font-size: calc(2vw + 10px);

        @media (min-width: 1920px) {
            font-size: 48px;
        }
        @media (max-width: 991px) {
            margin: 0 0 10px 0;
            font-size: calc(2vw + 20px);
        }
    }
    
    & > p {
        margin: 30px 0;
        padding: 0 2%;
        font-size: calc(1.6vw + 4px);
    
        @media (min-width: 1920px) {
            font-size: 35px;
        }
        @media (max-width: 991px) {
            font-size: calc(1.6vw + 3px);
            margin: 20px 0;
        }

        @media (max-width: 340px) {
            font-size: calc(1.4vw + 3px);
            margin: 20px 0;
        }
    }
`