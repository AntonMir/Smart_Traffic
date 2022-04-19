// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const navList = textContent.navList


export default function Nav() {

    return (
        <NavStyled>
            <CustomLink to="#top" smooth>
                {navList[0]}
            </CustomLink>
            <CustomLink to="#capabilities" smooth>
                {navList[1]}
            </CustomLink>
            <CustomLink to="#device" smooth>
                {navList[2]}
            </CustomLink>
            <CustomLink to="#practicalUsage" smooth>
                {navList[3]}
            </CustomLink>
            <CustomLink to="#benefits" smooth>
                {navList[4]}
            </CustomLink>
            <CustomLink to="#feedbackForm" smooth>
                {navList[5]}
            </CustomLink>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (max-width: 450px) {
        margin-bottom: 50px;
    }
`

const CustomLink = styled(HashLink)`
    color: #ccc;
    font-size: calc(0.3vw + 14px);
    cursor: pointer;

    line-height: 38px;
    letter-spacing: -0.02em;

    @media (min-width: 1920px) {
        font-size: 18px;
    }
`
