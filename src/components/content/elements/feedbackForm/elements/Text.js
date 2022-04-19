// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const text = textContent.feedbackForm

export default function Text() {

    return (
        <TextStyled>
            <H1>{text[0].title}</H1>
            <P>{text[0].text}</P>
        </TextStyled>
    )
}

const TextStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 70%;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`

const H1 = styled.h1`
    font-size: calc(2vw + 10px);
    margin: 0 0 40px 0;
    font-weight: bold;
    color: #091f2c;

    // &:first-letter {
    //     background: #4bcbe4;
    //     padding: 4px 1px 4px 12px;
    //     margin: 0 -1px 0 0;
    // }

    @media (min-width: 1920px) {
        font-size: 48px;
    }

    @media (max-width: 991px) {
        margin: 0 0 10px 0;
        font-size: calc(2vw + 20px);
    }
`

const P = styled.p`
    font-size: calc(0.9vw + 9px);
    margin: 0 2vw 10px;
    letter-spacing: -0.04em;
    color: #274557;

    @media (min-width: 1920px) {
        font-size: 26px;
        margin: 0 35px 10px;
    }

    @media (max-width: 991px) {
        max-width: 100%;
        margin: 0 2vw 0;
    }
`
