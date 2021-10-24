import { useRef, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Link from 'next/link'
// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`

export default function App() {
  const parallax = useRef()
  return (
    <>
      <Link href="https://www.idxpo.se/2021/">
        <a
          style={{
            left: '2rem',
            position: 'fixed',
            top: '2rem',
            zIndex: 10
          }}
        >
          <img src="/idx.svg" height="40px" />
        </a>
      </Link>
      <Link href="/game">
        <a
          style={{
            right: '2rem',
            background: 'radial-gradient(lightgreen, green)',
            borderRadius: '50%',
            height: '4rem',
            width: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: '2rem',
            zIndex: 10,
            fontSize: '1.4rem'
          }}
        >
          PLAY
        </a>
      </Link>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#05000a'
        }}
      >
        <Parallax ref={parallax} pages={6}>
          <ParallaxLayer
            offset={0}
            factor={6}
            style={{
              backgroundImage:
                'linear-gradient( to bottom, #16022f60 10%, #710f8a46 25%,  #e5a984 40%, #bd43c81a 50%, #710f8a46 60%, #16022f60 80%)'
            }}
          />
          <ParallaxLayer
            offset={3}
            speed={1}
            style={{ backgroundColor: '#62c2ff1c' }}
          />
          <ParallaxLayer
            offset={4}
            speed={1}
            style={{ backgroundColor: '#710f8a46' }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            factor={6}
            style={{
              backgroundImage: `url('/stars.png')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'repeat',
              transform: 'scale(1.5)'
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              backgroundImage: `url('/stars.png')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'repeat',
              height: '220vh',
              opacity: 0.8,
              transform: 'scale(.8)'
            }}
          />

          <ParallaxLayer
            offset={1.05}
            speed={-0.5}
            style={{ pointerEvents: 'none' }}
          >
            <img
              src="/bus.gif"
              style={{
                width: '50vmin',
                marginLeft: '4%',
                transform: 'rotate(5deg)'
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <main>
              <header>
                <h1>Lost in language</h1>
                <div></div>
              </header>
              <p style={{ fontWeight: 'bold' }}>
                A game about the challenges of language barriers
              </p>
            </main>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.1}
            speed={-0.1}
            style={{ pointerEvents: 'none' }}
          >
            <img
              src="/planet.png"
              style={{ display: 'block', width: '30vmin', marginLeft: '80%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src="/signs/walk.svg"
              style={{
                display: 'block',
                width: '20%',
                marginLeft: '55%',
                filter: 'invert(1)'
              }}
            />
            <img
              src="/signs/ugly.svg"
              style={{
                display: 'block',
                width: '10%',
                marginLeft: '15%',
                filter: 'invert(1)'
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src="/signs/there.svg"
              style={{
                display: 'block',
                width: '20%',
                marginLeft: '70%',
                filter: 'invert(1)'
              }}
            />
            <img
              src="/signs/special.svg"
              style={{
                display: 'block',
                width: '20%',
                marginLeft: '40%',
                filter: 'invert(1)'
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src="/signs/table.svg"
              style={{
                display: 'block',
                width: '10%',
                marginLeft: '10%',
                filter: 'invert(1)'
              }}
            />
            <img
              src="/signs/sleep.svg"
              style={{
                display: 'block',
                width: '20%',
                marginLeft: '75%',
                filter: 'invert(1)'
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src="/signs/puke.svg"
              style={{
                display: 'block',
                width: '20%',
                marginLeft: '60%',
                filter: 'invert(1)'
              }}
            />
            <img
              src="/signs/pharmacy.svg"
              style={{
                display: 'block',
                width: '15%',
                marginLeft: '10%',
                filter: 'invert(1)'
              }}
            />
            <img
              src="/signs/pasta.svg"
              style={{
                display: 'block',
                width: '10%',
                marginLeft: '80%',
                filter: 'invert(1)'
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src="/signs/orange.svg"
              style={{
                display: 'block',
                width: '20%',
                marginLeft: '5%',
                filter: 'invert(1)'
              }}
            />
            <img
              src="/signs/hospital.svg"
              style={{
                display: 'block',
                width: '15%',
                marginLeft: '75%',
                filter: 'invert(1)'
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4.3} speed={0.4}>
            <img
              src="/poster1.png"
              style={{ display: 'block', width: '20%', marginLeft: '5%' }}
            />
          </ParallaxLayer>
          <ParallaxLayer offset={4.5} speed={0.3}>
            <img
              src="/poster2.png"
              style={{ display: 'block', width: '15%', marginLeft: '75%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="card" style={{ marginTop: 100 }}>
              <h2>The game</h2>

              <div style={{ flexDirection: 'row' }}>
                <img
                  src="/walking.gif"
                  width="200px"
                  style={{
                    position: 'absolute',
                    left: '-20px'
                  }}
                />
                <p style={{ paddingLeft: 100 }}>
                  <b>
                    <i>Lost in Language</i>
                  </b>{' '}
                  is a side-scrolling game where the player needs to interact
                  and understand the language of aliens in order to progress.
                </p>
              </div>
              <br />

              <div style={{ flexDirection: 'row' }}>
                <span>
                  With the help of a <i>translomat</i> the player can collect
                  and translate the unknown symbols.
                </span>
                <img
                  src="/translomat.png"
                  height="100px"
                  style={{ marginTop: -10 }}
                />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(3)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div className="card">
              <h2>Purpose</h2>
              <div>
                <p>
                  The aim is to paint a picture of the hardships that comes with
                  communicating in foreign environments.
                </p>
                <br />
                <p>
                  By forcing the player to engage in conversations they can
                  barely understand, we hope to bring awareness specficially to
                  challenges that international students face on a daily basis.
                </p>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => parallax.current.scrollTo(4)}
          >
            <div className="card">
              <h2>Ingredients</h2>
              <div>
                <p>
                  The game was made with Scratch and contains a bunch of custom
                  made assets and animations.
                </p>
                <br />
                <div
                  style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}
                >
                  <img src="/buildings.png" height="100px" />{' '}
                  <img src="/env.png" height="100px" />{' '}
                  <img src="/translomat.png" height="100px" />
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => parallax.current.scrollTo(5)}
          >
            <h2>Exhibition</h2>
            <p style={{ maxWidth: '50vw', textAlign: 'center' }}>
              At the end of the project there was an exhibition. An arcade
              machine was made along with some posters.
            </p>
            <br />

            <img
              src="/arcade.jpg"
              style={{
                maxWidth: '50vw',
                maxHeight: '60vh',
                borderRadius: '20px'
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => parallax.current.scrollTo(0)}
          >
            <div className="card card-transparent">
              <h2>Thanks for coming by!</h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  fontSize: '.8rem',
                  gap: 10
                }}
              >
                <div>
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      background: `url('/planet.png')`,
                      backgroundSize: 'contain',
                      borderRadius: '50%'
                    }}
                  ></div>
                  Emmanuel Brorsson
                </div>
                <div>
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      background: `url('/planet.png')`,
                      backgroundSize: 'contain',
                      borderRadius: '50%'
                    }}
                  ></div>
                  Amos Cappellaro
                </div>
                <div>
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      background: `url('/planet.png')`,
                      backgroundSize: 'contain',
                      borderRadius: '50%'
                    }}
                  ></div>
                  Svend Geerthsen
                </div>
                <div>
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      background: `url('/planet.png')`,
                      backgroundSize: 'contain',
                      borderRadius: '50%'
                    }}
                  ></div>
                  Oskar Lyrstrand
                </div>
                <div>
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      background: `url('/planet.png')`,
                      backgroundSize: 'contain',
                      borderRadius: '50%'
                    }}
                  ></div>
                  Mattias Nilsson
                </div>
                <div>
                  <div
                    style={{
                      height: 100,
                      width: 100,
                      background: `url('/planet.png')`,
                      backgroundSize: 'contain',
                      borderRadius: '50%'
                    }}
                  ></div>
                  Joel Sörensson
                </div>
              </div>
              <img
                src="/happy-alien.gif"
                height="130px"
                style={{
                  right: '-40px',
                  position: 'absolute',
                  bottom: '-40px',
                  transform: 'rotate(-20deg)'
                }}
              />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
