export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Comprehensive technology consulting services designed to accelerate your digital transformation and drive measurable business outcomes.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6'>
                  <div className='service-card'>
                    <i className={d.icon}></i>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                      <a href='#contact' className='service-link page-scroll'>
                        Learn More <i className='fa fa-arrow-right'></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

