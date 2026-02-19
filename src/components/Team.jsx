export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Our Leadership Team</h2>
          <p>
            Seasoned industry veterans with decades of combined experience driving digital transformation for global enterprises.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt={d.name} className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <div className='team-social'>
                        <a href='#' aria-label='LinkedIn'><i className='fa fa-linkedin'></i></a>
                        <a href='#' aria-label='Twitter'><i className='fa fa-twitter'></i></a>
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

