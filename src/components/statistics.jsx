import { useState, useEffect, useRef } from 'react'

const CountUp = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const startTime = performance.now()
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export const Statistics = (props) => {
  return (
    <div id='statistics'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Our Impact in Numbers</h2>
          <p>Delivering measurable results across industries and geographies</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-md-4 col-sm-6 col-xs-12'>
                  <div className='stat-card text-center'>
                    <i className={d.icon}></i>
                    <div className='stat-number'>
                      <CountUp end={d.value} suffix={d.suffix} />
                    </div>
                    <div className='stat-title'>{d.title}</div>
                  </div>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
