import React, { useEffect } from 'react'
// routes
import { BrowserRouter as Router } from 'react-router-dom'
// components
import Header from '@components/header/Header.js'
import Content from '@components/content/Content.js'
import Footer from '@components/footer/Footer.js'
// anim on scroll
import Aos from 'aos';
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'
import 'materialize-css'

export default function App() {

    useEffect(() => {
        // Animation in Scroll settings
        Aos.init({
            disable: true,
            // disable: [ phone, tablet, mobile],
            duration: 1000,
            offset: 300,
            delay: 0,
            once: true,
        });
    }, [])

    return (
        <Router>
            <AppStyled>
                <Header />
                <AppContentWrapper>
                    <Content />
                </AppContentWrapper>
                <Footer />
            </AppStyled>
        </Router>
    );

}

const AppStyled = styled.div`
`

const AppContentWrapper = styled.div`
    min-height: 1100px;
`