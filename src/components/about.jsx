export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive about-img" alt="Mobnox Innovations - Global Consulting" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Mobnox Innovations</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}><i className="fa fa-check-circle"></i> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}><i className="fa fa-check-circle"></i> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              <div className="about-partners">
                <p className="partners-title">Certified Technology Partners</p>
                <div className="partner-badges">
                  <span className="partner-badge"><i className="fa fa-cloud"></i> AWS</span>
                  <span className="partner-badge"><i className="fa fa-windows"></i> Microsoft</span>
                  <span className="partner-badge"><i className="fa fa-google"></i> Google Cloud</span>
                  <span className="partner-badge"><i className="fa fa-database"></i> SAP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

