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
            background: 'green',
            borderRadius: '50%',
            height: '3rem',
            width: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: '2rem',
            zIndex: 10
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
                transform: 'rotate(10deg)'
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
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '55%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '15%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '70%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '40%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '10%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '75%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '60%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '25%', marginLeft: '30%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '10%', marginLeft: '80%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '20%', marginLeft: '5%' }}
            />
            <img
              src={url('cloud')}
              style={{ display: 'block', width: '15%', marginLeft: '75%' }}
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
            <div className="card">
              <h2>The game</h2>
              <div>
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
                <p>
                  <b>
                    <i>Lost in Language</i>
                  </b>{' '}
                  is a side-scrolling game where the player needs to interact
                  and understand the language of aliens in order to progress.
                </p>
                <br />
                <br />
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
              <h2>The game</h2>
              <div>
                <img
                  src="/world.svg"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                  }}
                />
                <p>
                  <b>
                    <i>Lost in Language</i>
                  </b>{' '}
                  is a side-scrolling game where the player needs to interact
                  and understand the language of aliens.
                </p>
                <br />
                <br />
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
            <img src={url('clients-main')} style={{ width: '40%' }} />
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
            <img src={url('clients-main')} style={{ width: '40%' }} />
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
              <div>
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
                <p>
                  <b>
                    <i>Lost in Language</i>
                  </b>{' '}
                  is a side-scrolling game where the player needs to interact
                  and understand the language of aliens in order to progress.
                </p>
                <br />
                <br />
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
