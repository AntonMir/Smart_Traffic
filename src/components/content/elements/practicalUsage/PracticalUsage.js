import { useState } from 'react'
// components
import Text from '@practicalUsage/elements/Text.js'
import Illustration from '@practicalUsage/elements/Illustration.js'
// anim on scroll
import 'aos/dist/aos.css'
// styled
import styled from 'styled-components'
import './cariusel.css'

export default function PracticalUsage() {

    // selected text/slide
    const [selectedSection, setSelectedSection] = useState(0)

    // autoplay slider
    const [autoPlay, setAutoPlay] = useState(true)
    const carouselSpeed = 4000

    function autoPlayOff() {
        setAutoPlay(false)
    }

    function autoPlayOn() {
        setAutoPlay(true)
    }

    return (
        <PracticalUsageStyled
            onMouseEnter={autoPlayOff}
            onMouseLeave={autoPlayOn}
            data-aos='fade-up'
            data-aos-anchor-placement="top-center"
        >
            <Text
                collbackHeight={setSelectedSection}
                selectedSection={selectedSection}
            />
            <Illustration
                autoPlay={autoPlay}
                collbackHeight={setSelectedSection}
                selectedSection={selectedSection}
                carouselSpeed={carouselSpeed}
            />
        </PracticalUsageStyled>
    )
}

const PracticalUsageStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px 0 100px;
    max-width: 1440px;

    @media (max-width: 991px) {
        flex-direction: column;
        margin: 0;
    }
`