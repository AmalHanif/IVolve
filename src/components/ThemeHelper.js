import React from "react";

class ThemeHelper extends React.Component {
  render() {
    return (
      <div className="theme-helper">
        <section className="widget theme-helper-content">
          <header className="theme-helper-header d-flex p-0">
            <div className="theme-helper-toggler">
              <div className="theme-helper-spinner bg-warning text-white">
                <i className="la la-cog" />
                <i className="la la-cog fs-smaller" />
              </div>
            </div>
            <h6>Configuration</h6>
          </header>
          <div className="widget-body mt-3">
            <div className="mt-4">
              <a
                href="https://flatlogic.com/dashboards/sing-app-html5"
                
                role="button"
                className="btn btn-warning btn-rounded-f btn-block fs-mini text-white"
              >
                Purchase
              </a>
              <a
                href="http://demo.flatlogic.com/sing-app/html-bs4/"
                
                role="button"
                className="btn btn-danger btn-rounded-f btn-block fs-mini"
              >
                Go FULL Version
              </a>
              <a
                href="http://demo.flatlogic.com/sing-app/documentation/"
                
                role="button"
                className="btn btn-secondary btn-rounded-f btn-block fs-mini"
              >
                Documentation
              </a>
            </div>
            <div className="d-flex justify-content-between mt-lg">
              <a
                role="button"
                
                href="https://flatlogic.com/contact"
                className="btn btn-outline-default btn-rounded-f fs-mini text-muted"
              >
                <i className="glyphicon glyphicon-headphones mr-xs" />
                Support
              </a>
              <a
                role="button"
                
                href="https://github.com/flatlogic/sing-app"
                className="btn btn-outline-default btn-rounded-f fs-mini text-muted"
              >
                <i className="fa fa-github mr-xs" />
                Github
              </a>
            </div>
            <div className="mt-lg d-flex flex-column align-items-center theme-sharing">
              <span className="fs-sm">Thank you for sharing!</span>
              <div className="d-flex justify-content-center text-light mt-2">
                <a
                  
                  href="https://twitter.com/intent/tweet?text=Admin%20dashboard%20template%20built%20with%20NodeJS,%20React%20and%20Bootstrap%204!&url=https://demo.flatlogic.com/sing-app/html-bs4/&via=flatlogic"
                >
                  <i className="fa fa-twitter pr-1" />
                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://demo.flatlogic.com/sing-app/html-bs4/"
                  
                >
                  <i className="fa fa-facebook pl-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ThemeHelper;
