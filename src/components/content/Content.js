import React from 'react'
// components
import Greeting from '@content/elements/Greeting.js'
import Capabilities from '@content/elements/Capabilities.js'
import Device from '@content/elements/Device.js'
import PracticalUsage from '@content/elements/practicalUsage/PracticalUsage.js'
import Benefits from '@content/elements/benefits/Benefits.js'
import FeedbackForm from '@content/elements/feedbackForm/FeedbackForm.js'
// style
import styled from 'styled-components'


export default function Content() {

    return (
        <ContentStyled>
            {/* <Anchor id="smarttraffic" /> */}
            <Greeting />
            <Anchor id="capabilities" />
            <Capabilities />
            <Anchor id="device" />
            <Device />
            <Anchor id="practicalUsage" />
            <PracticalUsage />
            <Anchor id="benefits" />
            <Benefits />
            <Anchor id="feedbackForm" />
            <FeedbackForm />
        </ContentStyled>
    );

}

const ContentStyled = styled.div`
    margin: 0 auto;
    padding: 0;
    max-width: 1440px;
    @media (max-width: 1600px) {
        max-width: 1140px;
    }
    @media (max-width: 1200px) {
        max-width: 960px;
        padding: 0 2%;
    }
    @media (max-width: 991px) {
        max-width: 750px;
    }
    @media (max-width: 800px) {
        padding: 0 8%;
    }
`

const Anchor = styled.div`
    height: 80px;
    // background-color: red; 

    @media (max-width: 991px) {
        height: 70px;
    }
    @media (max-width: 800px) {
        height: 65px;
    }
`