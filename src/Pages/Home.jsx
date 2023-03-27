import React from "react"
import { Carousel } from "react-bootstrap"

function Home() {
  return (
    <div className="container">
      <h1> Welcome to Happy Cake</h1>
      <div className="p-5 w-50">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\imgs\chihiro-cake.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>El viaje de Chihiro</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\imgs\hearthowlscastle-cake.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Corazón El castillo ambulante</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\imgs\howlscastle-cake.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>El castillo ambulante</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\imgs\kikis-cake.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Kiki</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\imgs\noface-cake.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Sin cara</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\imgs\ponyo-cake.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Ponyo</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\imgs\ponyoswim-cake.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Ponyo sirena</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\assets\imgs\totoro-cake.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Mi vecino Totoro</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
