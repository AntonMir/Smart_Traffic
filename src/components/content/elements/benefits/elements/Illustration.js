// Img
import greenTrafficLight from '@assets/img/content/benefits/green-traffic-light.webp'
import redTrafficLight from '@assets/img/content/benefits/red-traffic-light.webp'
// styled
import styled from 'styled-components'

export default function Illustration(props) {

    const { selectedColour } = props

    function changeColour() {
        props.collbackHeight(selectedColour === "green" ? "red" : "green")
    }

    return (
        <IllustrationStyled>
            <ImgWrapper onClick={changeColour}>
                <Img
                    src={selectedColour === "green" ? greenTrafficLight : redTrafficLight}
                    alt="screen"
                    loading='lazy'
                />
            </ImgWrapper>
        </IllustrationStyled>
    )
}

const IllustrationStyled = styled.div`
    display: flex;
    width: 30%;
    margin: auto 0;
`

const ImgWrapper = styled.div`
    margin: 0 auto;
`

const Img = styled.img`
    height: auto;
    width: 100%;
    max-width: calc(10vw + 60px);
    border-radius: 10px;
    user-select: none;

    @media (min-width: 1920px) {
        max-width: 250px;
    }
   
`