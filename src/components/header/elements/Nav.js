// Link
import { HashLink } from 'react-router-hash-link'
// config
import config from '@config/config.js'
// styles
import styled from 'styled-components'


// import global text data from data/textContent
const textContent = require(`@data/${config.appLang === 'EN' ? 'textСontentEN.json' : 'textСontentRU.json'}`)
const navList = textContent.navList

export default function Nav() {

    return (
        <NavStyled>
            <NavList>
                <NavEl className="header-nav-el">
                    <CustomLink to="#top" smooth>
                        {navList[0]}
                    </CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="#capabilities" smooth>
                        {navList[1]}
                    </CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="#device" smooth>
                        {navList[2]}
                    </CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="#practicalUsage" smooth>
                        {navList[3]}
                    </CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="#benefits" smooth>
                        {navList[4]}
                    </CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="#feedbackForm" smooth>
                        {navList[5]}
                    </CustomLink>
                </NavEl>
            </NavList>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    flex: 1;

    @media (max-width: 991px) {
        margin-top: 80px;
        flex: 0;
    }
`

const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 991px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const NavEl = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 10px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    height: 80px;

    &:before,
    &:after {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        border-bottom: 7px solid #091f2c;
        content: '';
        transition: all 0.3s ease;
    }
    &:hover {
        &:before,
        &:after {
            width: 60%;
            border-bottom: 7px solid #00b5d6;
        }
        &:after {
            transform: translateX(-98%);
        }
    }

    @media (max-width: 991px) {
        margin: 0;
        height: 40px;

        &:before,
        &:after {
            display: none;
        }
    }
`

const CustomLink = styled(HashLink)`
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 15px;

    @media (max-width: 1599px) {
        font-size: 13px;
    }

    @media (max-width: 1200px) {
        font-size: 11px;
    }

    @media (max-width: 991px) {
        color: #000;
    }
`
