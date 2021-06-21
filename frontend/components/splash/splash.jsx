import React from 'react'
// import Carousel from '@brainhubeu/react-carousel';
// import "@brainhubeu/react-carousel/lib/style.css";
import GridContainer from '../grid/grid_container';
import SearchContainer from '../search/search_container'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchSongs()
  }


  render(){
    const { openModal, songs } = this.props
    
    return (
      <div className="splash-page-whole">
        <div className="carousel-container">

        <CarouselProvider
        className="carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        height="inherit"
        totalSlides={2}
        isPlaying={true}
        >
          <Slider>
            <Slide index={0}><img className="landing-image" src={window.landingImageURL0}/></Slide>
            <Slide index={1}><img className="landing-image" src={window.landingImageURL1}/></Slide>
          </Slider>
        </CarouselProvider>
      </div>
      <div className="splash-under">
        <div className="splash-search">
          {/* <input id="splash-search-bar"
          type="search" 
          placeholder="Search for artists, bands, tracks, podcasts"/> */}
          <form className='splash-search-container'>
            <SearchContainer location='splash'/>
          </form>
          <span className="splash-or">or</span>
          <button 
          className="splash-btn" id="splash-upload" onClick={() => openModal('login')}>Upload your own</button>
        </div>
        <div className="splash-banner">
          <h1 className="hear-trending">Hear what's trending for free in the SoundBoard Community</h1>
          <div className="splash-trending">
            {songs ?  (<>
                <div className="grid-container">
                  {Object.keys(this.props.songs).map((key, i) =>{
                    if (i<8){
                      return <GridContainer key={i} songId={key}/>
                    }
                    })}
                </div>  
            
            </>): <></>}
          
          </div>
        </div>
        <div className="splash-grid-trending">
        </div>
        <div className="splash-mini-banner">
          <button className="splash-explore-btn">Explore trending playlists</button>
        </div>
        <img className="creator-splash" src={window.creatorSplash}/>
        <div className="splash-thanks">
          <h1>Thanks for listening. Now join in.</h1>
          <h2> Save tracks, follow artist and build playlists all for free.</h2>
          <button id="create-act" className="splash-btn"
          onClick={() => openModal('signup')}>Create account</button>
          <div className="have-act">
            <span>Already have an account?</span>
            <button className="splash-sign-in"
            onClick={() => openModal('login')}>Sign in</button>
          </div>
        </div>
      </div>
      </div>
    )
    
  }

};


export default Splash;