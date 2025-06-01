import rightArrow from '/assets/icons/arrow-right.svg';

function Hero() {
    return <section className='hero'>
        <h1>Gardening Journey<br>
        </br>Starts Here</h1>
        <p className='sub-title'>We are passionate about bringing nature closer to you.</p>

        <button className='filled-btn'>Explore More<img src={rightArrow} alt='arrow'/></button>
  </section>}

export default Hero;
