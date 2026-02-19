export const Industries = (props) => {
  return (
    <div id='industries' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Industries We Serve</h2>
          <p>
            Deep domain expertise across key industry verticals, delivering tailored solutions that address unique sector challenges and opportunities.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-4 col-sm-6'>
                  <div className='industry-card'>
                    <div className='industry-icon'>
                      <i className={d.icon}></i>
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
