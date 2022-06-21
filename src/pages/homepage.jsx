import React from 'react';

import './homepage.styles.scss';
import picture from '../assets/images/kafui.jpg';

function Homepage() {
  return (
	<div className='about'>
		<h1>Hello, World! huh!!!</h1>
		<div className='about-items'>
			<img className='image' src={picture} alt='a piture of me' />
			<div>
				<p>
					Am Kafui, a Kumasi-based Software Engineer - Full Stack developer
					building applications for the Web and Mobile.
					I have managed to ganer some experience in commerce, fintech and
					recently healthtech industries respectively.
				</p>
				<p>
					This website is gonna house my project portfolios, document my journey and craft some articles based on things I know, I'm learning, what next for me, and how am getting there...
				</p>
			</div>
		</div>
	</div>
  )
}

export default Homepage