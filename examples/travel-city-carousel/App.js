import React from 'react'
import styled from 'styled-components'
import Carousel from '../../dist/bundle'
import cities from './cities.json'

const Container = styled.div`
  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
`

const Row = styled.div`
  max-width: 1200px;
  margin: 50px auto;
`

const City = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 220px;
  line-height: 220px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 7px;
  box-shadow: 0 0 2px 0 #666;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 5px 0px #666;
  }
`

const Code = styled.pre`
  max-width: 1200px;
  margin: 15px auto;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
`

const Reference = styled.div`
  margin: 50px auto;
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid #666;

  img {
    width: 100%;
  }
`

const App = () => (
  <Container>
    <Row>
      <h1
        css={`
          text-align: center;
        `}
      >
        TOP DESTINATIONS
      </h1>
      <Carousel cols={4} rows={2} gap={6}>
        {cities.map((city, i) => (
          <Carousel.Item key={i}>
            <City img={city.img}>{city.name}</City>
          </Carousel.Item>
        ))}
      </Carousel>
    </Row>
    <Code>{`<Carousel cols={4} rows={2} gap={6}>
  {cities.map((city, i) => (
    <Carousel.Item key={i}>
      <City img={city.img}>{city.name}</City>
    </Carousel.Item>
  ))}
</Carousel>`}</Code>
    <Reference>
      <h2 align="center">
        Travel city carousel on{' '}
        <a
          href="https://www.klook.com/en-US/"
          target="_blank"
          rel="noreferrer noopener"
        >
          KLOOK
        </a>
      </h2>
      <a href="https://i.imgur.com/wapEMm5.png" rel="noreferrer noopener">
        <img src="https://i.imgur.com/wapEMm5.png" />
      </a>
    </Reference>
  </Container>
)

export default App
