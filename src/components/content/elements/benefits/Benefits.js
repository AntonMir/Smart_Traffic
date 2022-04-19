import { useState } from 'react'
// components
import Text from '@benefits/elements/Text.js'
import Illustration from '@benefits/elements/Illustration.js'
// anim on scroll
import 'aos/dist/aos.css'
// styled
import styled from 'styled-components'

export default function Benefits() {

    // selected text/slide
    const [selectedColour, setSelectedColour] = useState('green') // red || green

    return (
        <BenefitsStyled
            data-aos='fade-up'
            data-aos-anchor-placement="top-center"
        >
            <Text
                selectedColour={selectedColour}
            />
            <Illustration
                collbackHeight={setSelectedColour}
                selectedColour={selectedColour}
            />
        </BenefitsStyled>
    )
}

const BenefitsStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 30px 0 100px;
    padding: 30px 0 20px;
    max-width: 1440px;

    @media (max-width: 991px) {
        // flex-direction: column;
        margin: 10px 0 0;
    }
`