export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-md-offset-1 intro-text'>
                <div className='intro-badge'>
                  <i className='fa fa-star'></i> Trusted by 350+ Global Enterprises
                </div>
                <h1>
                  {props.data ? props.data.title : 'Mobnox Innovations'}
                </h1>
                <p className='intro-tagline'>Innovating Tomorrow, Today</p>
                <p className='intro-paragraph'>
                  {props.data ? props.data.paragraph : 'Loading...'}
                </p>
                <div className='intro-buttons'>
                  <a href='#services' className='btn btn-custom btn-lg page-scroll'>
                    Explore Services
                  </a>
                  <a href='#contact' className='btn btn-outline btn-lg page-scroll'>
                    Schedule Consultation
                  </a>
                  <a href='#portfolio' className='btn btn-text btn-lg page-scroll'>
                    View Case Studies <i className='fa fa-arrow-right'></i>
                  </a>
                </div>
                <div className='intro-trust'>
                  <div className='trust-item'>
                    <span className='trust-number'>15+</span>
                    <span className='trust-label'>Years Experience</span>
                  </div>
                  <div className='trust-divider'></div>
                  <div className='trust-item'>
                    <span className='trust-number'>1,200+</span>
                    <span className='trust-label'>Projects Delivered</span>
                  </div>
                  <div className='trust-divider'></div>
                  <div className='trust-item'>
                    <span className='trust-number'>30+</span>
                    <span className='trust-label'>Countries Served</span>
                  </div>
                  <div className='trust-divider'></div>
                  <div className='trust-item'>
                    <span className='trust-number'>98%</span>
                    <span className='trust-label'>Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

