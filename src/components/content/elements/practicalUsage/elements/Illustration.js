import { useRef, useEffect } from 'react'
//carousel
import Carousel from 'react-elastic-carousel'
// Img
// import Screen1 from '@assets/img/mainPage/advantages/Screen1.webp'
// import Screen2 from '@assets/img/mainPage/advantages/Screen2.webp'
// import Screen3 from '@assets/img/mainPage/advantages/Screen3.webp'
// styled
import styled from 'styled-components'

export default function Illustration(props) {

    const { selectedSection, carouselSpeed, autoPlay } = props

    // получаем нашу карусель
    let carouselRef = useRef()

    useEffect(() => {

        if (carouselRef.current && selectedSection !== carouselRef.current.state.activeIndex) {
            carouselRef.current.goTo(selectedSection)
        }
    }, [selectedSection])

    return (
        <CarouselWrapper>
            <Carousel
                ref={carouselRef}
                onChange={(currentItem, pageIndex) => {
                    if (pageIndex === 2 && autoPlay) {
                        setTimeout(() => {
                            carouselRef.current.goTo(0)
                        }, [carouselSpeed])
                    }
                    if (pageIndex !== selectedSection) {
                        props.collbackHeight(pageIndex)
                    }
                }}
                enableAutoPlay={autoPlay}
                autoPlaySpeed={carouselSpeed}
            >
                <Img src="https://via.placeholder.com/550x320" alt="screen" loading='lazy' />
                <Img src="https://via.placeholder.com/550x320" alt="screen" loading='lazy' />
                <Img src="https://via.placeholder.com/550x320" alt="screen" loading='lazy' />
            </Carousel>

            <ButtonsWrapper>
                <Btn
                    onClick={() => {
                        carouselRef.current.goTo(0)
                    }}
                    style={selectedSection === 0 ? { background: '#FF8764' } : {}}
                ></Btn>
                <Btn
                    onClick={() => {
                        carouselRef.current.goTo(1)
                    }}
                    style={selectedSection === 1 ? { background: '#FF8764' } : {}}
                ></Btn>
                <Btn
                    onClick={() => {
                        carouselRef.current.goTo(2)
                    }}
                    style={selectedSection === 2 ? { background: '#FF8764' } : {}}
                ></Btn>
            </ButtonsWrapper>
        </CarouselWrapper>
    )
}

const CarouselWrapper = styled.div`
    width: 50%;
    margin: auto 0;

    @media (max-width: 991px) {
        width: 100%;
    }
`

const Img = styled.img`
    height: auto;
    width: 100%;
    pointer-events: none;
    margin: 0 5px;
    padding: 0 5px;
    border-radius: 10px;
`

const ButtonsWrapper = styled.div`
    margin: calc(1vw + 20px) auto 0;
    max-width: 35%;
    display: flex;
    justify-content: space-between;

    @media (min-width: 1920px) {
        margin: 40px auto 0;
    }
`

const Btn = styled.div`
    width: 25%;
    height: 8px;
    border-radius: 10px;
    background-color: #ccc;
    cursor: pointer;
`