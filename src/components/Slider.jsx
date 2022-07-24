import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f7f7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    opacity: 0.5;
    transition: 0.8s all ease-in-out;
    &:hover{
        opacity: 1;
    }
    z-index: 2;
`

const ArrowLeft = styled.span`
    font-size: 20px;
    font-weight: 900;
    color: gray;
`

const ArrowRight = styled.span`
    font-size: 20px;
    font-weight: 900;
    color: gray;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease-in-out;
    transform: translateX(${props=>props.index * -100}vw);
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props=>props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Img = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Btn = styled.button`
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid gray;
    cursor: pointer;
`

const Slider = () => {

    const [index,setIndex] = useState(0)

    const handleClick = d => {
        d === "l" 
        ? setIndex(index>0 ? index-1 : 2)
        : setIndex(index<2 ? index+1 : 0)
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("l")}>
            <ArrowLeft>&lt;</ArrowLeft>
        </Arrow>
        <Wrapper index={index}>
            <Slide bg="#f5fafd">
                <ImgContainer>
                    <Img src="/assets/img/air.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Air Max</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore possimus.</Desc>
                    <Btn>SHOW NOW</Btn>
                </InfoContainer>
            </Slide>
            <Slide bg="#fcf1ed">
                <ImgContainer>
                    <Img src="/assets/img/blazer.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Blazer</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore possimus.</Desc>
                    <Btn>SHOW NOW</Btn>
                </InfoContainer>
            </Slide>
            <Slide bg="#fbf0f4">
                <ImgContainer>
                    <Img src="/assets/img/air.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Jordan</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore possimus.</Desc>
                    <Btn>SHOW NOW</Btn>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("r")}>
            <ArrowRight>&gt;</ArrowRight>
        </Arrow>
    </Container>
  )
}

export default Slider
