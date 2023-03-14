import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    
    <div>
        
        <div style={{
            backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg")',
            backgroundPosition:"center center"
        }} className='home-topdiv'>
            <div className="banner-fade-more" />
            <div style={{position:"absolute"}}>
                <h1 className='home-font'>Unlimited movies, TV shows and more.</h1>
                <p className='second-font'>Watch anywhere. Cancel anytime.</p>
                <p style={{marginTop: "30px"}} className='second-font'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='home-input' >
                    <input type="text" placeholder='Email Address' />
                    <Link to="/home" ><button>Get Started</button></Link>
                </div>
                

            </div>
        </div>
        
    </div>
    
  )
}

export default Home