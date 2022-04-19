import { useState } from 'react'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const text = textContent.capabilities

const visible = {
    height: 'auto',
    opacity: 1
}

const hidden = {
    height: '0',
    opacity: 0
}

export default function Capabilities() {
    const [target, setTarget] = useState('sensor') // ble, car, dataChannel

    return (
        <CapabilitiesStyled
            data-aos='fade-up'
            data-aos-anchor-placement="top-center"
        >
            <Text>
                <Title>{text[0].title}</Title>
                <List>
                    <li
                        onMouseOver={() => { setTarget('sensor') }}
                    >
                        <h2>{text[1].title}</h2>
                        <div style={target === 'sensor' ? visible : hidden}>
                            <p>{text[1].text}</p>
                        </div>
                    </li>
                    <li
                        onMouseOver={() => { setTarget('ble') }}
                    >
                        <h2>{text[2].title}</h2>
                        <div style={target === 'ble' ? visible : hidden}>
                            <p>{text[2].text}</p>
                        </div>

                    </li>
                    <li
                        onMouseOver={() => { setTarget('car') }}
                    >
                        <h2>{text[3].title}</h2>
                        <div style={target === 'car' ? visible : hidden}>
                            <p>{text[3].text}</p>
                        </div>

                    </li>
                    <li
                        onMouseOver={() => { setTarget('dataChannel') }}
                    >
                        <h2>{text[4].title}</h2>
                        <div style={target === 'dataChannel' ? visible : hidden}>
                            <p>{text[4].text}</p>
                        </div>

                    </li>
                </List>
            </Text>
            <Illustration>
                <Img src="https://via.placeholder.com/550x300" alt="Possibilities" />
            </Illustration>
        </CapabilitiesStyled >
    )
}

const CapabilitiesStyled = styled.div`
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
    max-width: 45%;
    @media (max-width: 991px) {
        max-width: 100%;
    } 
`

const Title = styled.h1`
    font-size: calc(2vw + 20px);
    font-weight: bold;
    margin: 0 0 20px 0;
    color: #091f2c;
    max-width: 100%;

    @media screen and (min-width: 1920px) {
        font-size: 58.4px;
    }
`

const List = styled.ul`
    margin: 0;
    > li {
        font-size: calc(0.3vw + 15px);
        color: #091f2c;
        margin: 0 0 10px 0;
        padding: 0 2%;

        > h2 {
            margin: 0;
            border-bottom: 2px rgba(0, 0, 0, 0) solid;
            cursor: pointer;
            font-size: calc(1.4vw + 8px);
    
            @media (min-width: 1920px) {
                font-size: 35px;
            }
            @media (max-width: 991px) {
                margin: 0 0 3px 0;
                font-size: calc(1.4vw + 12px);
            }
        }

        > div {
            overflow: hidden;
            transition: opacity 0.3s ease 0s;  
        }

        & > div > p {
            margin: 10px 0;
            font-size: calc(0.9vw + 9px);
    
            @media (min-width: 1920px) {
                font-size: 23.5px;
            }
        }

        @media (min-width: 1920px) {
            padding: 0 15px;
        }
        
    }

    > li:hover {
        > h2 {
            display: inline-block;
            border-bottom: 2px #000 solid;
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
        margin: 40px 0 0 0;
    }
`

const Img = styled.img`
    width: 100%;
`