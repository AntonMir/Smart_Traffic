// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const text = textContent.greeting


export default function Greeting() {
    return (
        <GreetingStyled>
            <Text
                data-aos='fade-right'
                data-aos-anchor-placement="top-center"
            >
                <h1>{text.title}</h1>
                <h3>{text.text}</h3>
            </Text>

            <Illustration
                data-aos='fade-left'
                data-aos-anchor-placement="top-center"
            >
                <Img src="https://via.placeholder.com/550x300" alt="greeting" />
            </Illustration>
        </GreetingStyled>
    )
}

const GreetingStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 50px 0 100px;

    @media (max-width: 991px) {
        flex-direction: column;
        margin: 30px 0 0 0;
    }
`

const Text = styled.div`
    max-width: 49%;
    & > h1 {
        font-size: calc(2vw + 20px);
        font-weight: bold;
        margin: 0 0 20px 0;
        color: #091f2c;
        max-width: 100%;
        
        @media screen and (min-width: 1920px) {
            font-size: 58.4px;
        }
    }
    & > h3 {
        margin: 0;
        color: #091f2c;
        font-size: calc(1.4vw + 8px);
    
        @media (min-width: 1920px) {
            font-size: 35px;
        }
        @media (max-width: 991px) {
            margin: 0 0 3px 0;
            font-size: calc(1.4vw + 12px);
        }
    }
    & > p {
        font-size: calc(0.3vw + 15px);
        max-width: 90%;
        margin: 0;
    }
    @media (max-width: 991px) {
        max-width: 100%;
        margin: 0 0 30px 0;
        & > p {
            max-width: 100%;
        }
    }
`

const Illustration = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 49%;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`

const Img = styled.img`
    width: 100%;
`