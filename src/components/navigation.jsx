export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <span className='brand-logo'>
              <i className='fa fa-hexagon brand-icon'></i>
              <span className='brand-name'>Mobnox <span className='brand-highlight'>Innovations</span></span>
            </span>
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Why Us
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#industries' className='page-scroll'>
                Industries
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Case Studies
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Leadership
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll btn-nav-cta'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

