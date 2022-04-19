// components
import TextEl from '@practicalUsage/elements/TextEl.js'
// config
import config from '@config/config.js'
// anim on scroll
import 'aos/dist/aos.css'
// styled
import styled from 'styled-components'

// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const text = textContent.practicalUsage

export default function Text(props) {

    const { selectedSection } = props

    return (
        <TextStyled>
            <H1>
                {text.title}
            </H1>
            <Ul>
                {text.elements.map((element, index) => {
                    return (
                        <TextEl
                            selectedSection={selectedSection}
                            element={element}
                            key={index}
                            index={index}
                            collbackHeight={props.collbackHeight}
                        />
                    )
                })}
            </Ul>
        </TextStyled>
    )
}

const TextStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 991px) {
        width: 100%;
    }
`

const H1 = styled.h1`
    font-size: calc(2vw + 10px);
    margin: 0 0 40px 0;
    font-weight: bold;
    line-height: 80px;
    color: #091f2c;

    @media (min-width: 1920px) {
        font-size: 48px;
    }

    @media (max-width: 991px) {
        margin: 0 0 10px 0;
        padding: 0;
        font-size: calc(1.5vw + 18px);
    }

    @media (max-width: 400px) {
        font-size: calc(1.3vw + 15px);
    }
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 2vw 10px;

    @media (min-width: 1920px) {
        margin: 0 35px 10px;
    }
`