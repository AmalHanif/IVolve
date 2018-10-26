import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="page-controls navbar navbar-dashboard">
        <div className="container-fluid">
          {}
          <div className="navbar-header mr-md-3">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                {}
                <a
                  className="d-none d-lg-block nav-link"
                  id="nav-state-toggle"
                  href="/home"
                >
                  <i className="la la-bars" />
                </a>
                {}
                <a
                  className="d-lg-none nav-link"
                  id="nav-collapse-toggle"
                  href="/home"
                >
                  <span className="square square-lg bg-gray text-white d-md-none">
                    <i className="la la-bars" />
                  </span>
                  <i className="la la-bars d-none d-md-block" />
                </a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a href="/home" className="nav-link">
                  <i className="la la-refresh" />
                </a>
              </li>
              <li className="nav-item ml-n-xs d-none d-md-block">
                <a href="/home" className="nav-link">
                  <i className="la la-times" />
                </a>
              </li>
            </ul>
            {}
            <a className="navbar-brand d-md-none" href="index.html">
              <i className="fa fa-circle text-gray mr-n-sm" />
              <i className="fa fa-circle text-warning" />
                sing  <i className="fa fa-circle text-warning mr-n-sm" />
              <i className="fa fa-circle text-gray" />
            </a>
          </div>
          {}
          <div className="navbar-header mobile-hidden">
            {}
            <form className="navbar-form" role="search">
              <div className="form-group">
                <div className="input-group input-group-no-border">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search Dashboard"
                  />
                  <span className="input-group-append">
                    <span className="input-group-text">
                      <i className="la la-search" />
                    </span>
                  </span>
                </div>
              </div>
            </form>
            <ul className="nav navbar-nav float-right">
              <li className="dropdown nav-item">
                <a
                  href="/home"
                  role="button"
                  className="dropdown-toggle dropdown-toggle-notifications nav-link"
                  id="notifications-dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="thumb-sm avatar float-left">
                    <img
                      className="rounded-circle"
                      src="demo/img/people/a5.jpg"
                      alt="..."
                    />
                  </span>
                    Philip <strong>Smith</strong>

                  <span className="circle bg-warning fw-bold text-white">
                    15
                  </span>
                  <b className="caret" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right animated fadeInUp py-0"
                  aria-labelledby="notifications-dropdown-toggle"
                  id="notifications-dropdown-menu"
                >
                  <section className="card notifications">
                    <header className="card-header">
                      <div className="text-center mb-sm">
                        <strong>You have 13 notifications</strong>
                      </div>
                      <div
                        className="btn-group btn-group-sm btn-group-toggle"
                        id="notifications-toggle"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-default active">
                          {}
                          <input
                            type="radio"
                            defaultChecked
                            data-ajax-trigger="change"
                            data-ajax-load="demo/ajax/notifications.html"
                            data-ajax-target="/homenotifications-list"
                          />{" "}
                          Notifications
                        </label>
                        <label className="btn btn-default">
                          <input
                            type="radio"
                            data-ajax-trigger="change"
                            data-ajax-load="demo/ajax/messages.html"
                            data-ajax-target="/homenotifications-list"
                          />{" "}
                          Messages
                        </label>
                        <label className="btn btn-default">
                          <input
                            type="radio"
                            data-ajax-trigger="change"
                            data-ajax-load="demo/ajax/progress.html"
                            data-ajax-target="/homenotifications-list"
                          />{" "}
                          Progress
                        </label>
                      </div>
                    </header>
                    {}
                    <div
                      id="notifications-list"
                      className="list-group thin-scroll"
                    >
                      <div className="list-group-item">
                        <span className="thumb-sm float-left mr clearfix">
                          <img
                            className="rounded-circle"
                            src="demo/img/people/a3.jpg"
                            alt="..."
                          />
                        </span>
                        <p className="no-margin overflow-hidden">
                          1 new user just signed up! Check out
                          <a href="/home">Monica Smith</a>
                          's account.
                          <time className="help-block no-margin">
                            2 mins ago
                          </time>
                        </p>
                      </div>
                      <a className="list-group-item" href="/home">
                        <span className="thumb-sm float-left mr">
                          <i className="glyphicon glyphicon-upload fa-lg" />
                        </span>
                        <p className="text-ellipsis no-margin">
                          2.1.0-pre-alpha just released.{" "}
                        </p>
                        <time className="help-block no-margin">5h ago</time>
                      </a>
                      <a className="list-group-item" href="/home">
                        <span className="thumb-sm float-left mr">
                          <i className="fa fa-bolt fa-lg" />
                        </span>
                        <p className="text-ellipsis no-margin">
                          Server load limited.{" "}
                        </p>
                        <time className="help-block no-margin">7h ago</time>
                      </a>
                      <div className="list-group-item">
                        <span className="thumb-sm float-left mr clearfix">
                          <img
                            className="rounded-circle"
                            src="demo/img/people/a5.jpg"
                            alt="..."
                          />
                        </span>
                        <p className="no-margin overflow-hidden">
                          User <a href="/home">Jeff</a> registered
                          <button className="btn btn-xs btn-success">
                            Allow
                          </button>
                          <button className="btn btn-xs btn-danger">
                            Deny
                          </button>
                          <time className="help-block no-margin">12:18 AM</time>
                        </p>
                      </div>
                      <div className="list-group-item">
                        <span className="thumb-sm float-left mr">
                          <i className="fa fa-shield fa-lg" />
                        </span>
                        <p className="no-margin overflow-hidden">
                          Instructions for changing your Envato Account
                          password. Please check your account{" "}
                          <a href="/home">security page</a>.
                          <time className="help-block no-margin">12:18 AM</time>
                        </p>
                      </div>
                      <a className="list-group-item" href="/home">
                        <span className="thumb-sm float-left mr">
                          <span className="square bg-primary square-lg">
                            <i className="fa fa-facebook text-white" />
                          </span>
                        </span>
                        <p className="text-ellipsis no-margin">
                          New <strong>76</strong> facebook likes received.
                        </p>
                        <time className="help-block no-margin">
                          15 Apr 2014
                        </time>
                      </a>
                      <a className="list-group-item" href="/home">
                        <span className="thumb-sm float-left mr">
                          <span className="circle circle-lg bg-gray-dark">
                            <i className="fa fa-circle-o text-white" />
                          </span>
                        </span>
                        <p className="text-ellipsis no-margin">
                          Dark matter detected.
                        </p>
                        <time className="help-block no-margin">
                          15 Apr 2014
                        </time>
                      </a>
                    </div>
                    <footer className="card-footer text-sm">
                      {}
                      <button
                        className="btn-label btn-link float-right"
                        id="load-notifications-btn"
                        data-ajax-load="demo/ajax/notifications.php"
                        data-ajax-target="/homenotifications-list"
                        data-loading-text="<i class='la la-refresh fa-spin mr-xs'></i> Loading..."
                      >
                        <i className="la la-refresh" />
                      </button>
                      <span className="card-footer-text">
                        Synced at: 21 Apr 2014 18:36
                      </span>
                    </footer>
                  </section>
                </div>
              </li>
              <li className="dropdown nav-item">
                <a
                  href="/home"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="la la-cog" />
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <a className="dropdown-item" href="/home">
                      <i className="glyphicon glyphicon-user" />   My Account
                    </a>
                  </li>
                  <li className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="/home">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/home">
                      Inbox
                      <span className="badge badge-pill bg-danger animated bounceIn">
                        9
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item"  href="/home">
                      <i className="la la-sign-out" />   Log Out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
