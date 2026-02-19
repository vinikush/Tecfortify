export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>What Our Clients Say</h2>
          <p>Trusted by industry leaders worldwide — hear directly from the executives who chose Mobnox Innovations.</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-rating'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                    </div>
                    <div className='testimonial-footer'>
                      <div className='testimonial-image'>
                        {' '}
                        <img src={d.img} alt={d.name} />{' '}
                      </div>
                      <div className='testimonial-meta'>
                        <strong>{d.name}</strong>
                        <span>{d.company}</span>
                      </div>
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

