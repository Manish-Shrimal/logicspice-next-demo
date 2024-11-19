import React from "react";

const ClientSide = () => {
  return (
    <section className="client-side">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-xs-6">
            <i className="cs_icon cs_icon1"></i>
            <div className="number-client">1286</div>
            <p>Satisfied Clients</p>
          </div>
          <div className="col-sm-3 col-xs-6">
            <i className="cs_icon cs_icon2"></i>
            <div className="number-client">1844</div>
            <p>Projects</p>
          </div>
          <div className="col-sm-3 col-xs-6">
            <i className="cs_icon cs_icon3"></i>
            <div className="number-client">327</div>
            <p>Mobile Apps</p>
          </div>
          <div className="col-sm-3 col-xs-6">
            <i className="cs_icon cs_icon4"></i>
            <div className="number-client">1082</div>
            <p>Likes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSide;
