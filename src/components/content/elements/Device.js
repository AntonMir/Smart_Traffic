// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const text = textContent.device

export default function Device() {
    return (
        <DeviceStyled
            data-aos='fade-up'
            data-aos-anchor-placement="top-center"
        >
            <Text>
                <h1>{text[0].title}</h1>
                <p>{text[1].text}</p>
                <p>{text[2].text}</p>
                <p>{text[3].text}</p>
            </Text>

            <Illustration>
                <Img src="https://via.placeholder.com/550x300" alt="greeting" />
            </Illustration>
        </DeviceStyled>
    )
}

const DeviceStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 30px 0 100px;
    @media (max-width: 991px) {
        flex-direction: column;
        margin: 0;
    }
`

const Text = styled.div`
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
        margin: 0;
        padding: 0 2%;
        font-size: calc(1.4vw + 8px);
    
        @media (min-width: 1920px) {
            font-size: 35px;
            padding: 0 15px;
        }
        @media (max-width: 991px) {
            margin: 0 0 3px 0;
            font-size: calc(1.4vw + 12px);
        }
    }
    @media (max-width: 991px) {
        max-width: 100%;
        margin-bottom: 30px;
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