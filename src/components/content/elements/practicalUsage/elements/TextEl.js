// anim on scroll
import 'aos/dist/aos.css'
// styled
import styled from 'styled-components'


export default function TextEl(props) {

    const { selectedSection, element, index } = props

    return (
        <Li
            onMouseEnter={() => props.collbackHeight(index)}
        >
            <Title>
                <H2>
                    {element.title}
                    <Border style={selectedSection === index ? { opacity: 1 } : {}}></Border>
                </H2>
            </Title>
            <P>{element.text}</P>
        </Li>
    )
}

const Li = styled.div`
    letter-spacing: -0.04em;
    color: #274557;
    margin: 0 0 30px 0;
    padding: 0;
    cursor: pointer;

    @media (max-width: 991px) {
        margin: 0 0 20px 0;
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const H2 = styled.h2`
    padding: 0 0 10px 0;
    margin: 0;
    font-size: calc(1.4vw + 8px);

    @media (min-width: 1920px) {
        font-size: 35px;
    }

    @media (max-width: 991px) {
        margin: 0 0 3px 0;
        padding: 0;
        font-size: calc(1.4vw + 12px);
    }
`

const Border = styled.div`
    margin: 5px 0 0 0;
    height: 3px;
    background: linear-gradient(90deg, rgba(0, 181, 214, 0.95) 10%, rgba(255, 74, 30, 1) 80%);
    opacity: 0;
    border-radius: 10px;

    @media (max-width: 600px) {
        height: 2px;
    }
`

const P = styled.p`
    letter-spacing: -0.04em;
    margin: 0;
    font-size: calc(0.9vw + 9px);
    
    @media (min-width: 1920px) {
        font-size: 23.5px;
    }
`