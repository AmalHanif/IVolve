import React from "react";
import Footer from "./Footer";
import Table from "./Table";
import ButtonTriggerModal from "./ButtonTriggerModal";
import Modal from "./Modal"


class Main extends React.Component {
  render() {
    return (
        <main id="content" className="content" role="main">
          {}
          
          <h1 className="page-title">
            Analytics
            <small>
              <small>Summarized company performance</small>
            </small>
          </h1>
          
          <div className="analytics">
            <div className="analytics-side">
              <div className="row">
                <div className="col-xl-3 col-md-6 mb-xlg">
                  <section className="widget mb-0 h-100">
                    <header>
                      <h4>Visits Today</h4>
                    </header>
                    <div className="widget-body">
                      <div className="d-flex justify-content-between align-items-center mb-lg">
                        <h2>4,332</h2>
                        <i className="la la-arrow-right text-success rotate-315" />
                      </div>
                      <div className="d-flex flex-wrap justify-content-between">
                        <div className="mt visit-element">
                          <h6>+830</h6>
                          <p className="text-muted mb-0 mr">
                            <small>Registrations</small>
                          </p>
                        </div>
                        <div className="mt visit-element">
                          <h6>0.5%</h6>
                          <p className="text-muted mb-0">
                            <small>Sign Out</small>
                          </p>
                        </div>
                        <div className="mt visit-element">
                          <h6>4.5%</h6>
                          <p className="text-muted mb-0 mr">
                            <small>Rate</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-xl-3 col-md-6 mb-xlg">
                  <section className="widget mb-0 h-100">
                    <header>
                      <h4>Revenue Breakdown</h4>
                    </header>
                    <div className="widget-body">
                      <div className="row">
                        <div
                          className="col-lg-7 col-md-6 col-xs-12"
                          id="flot-donut"
                          style={{
                            height: "100px"
                          }}
                        />
                        <div
                          className="col-lg-4 col-md-5"
                          id="flot-donut-legend"
                        />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-xl-3 col-md-6 mb-xlg">
                  <section className="widget mb-0 h-100">
                    <header>
                      <h4>App Perfomance</h4>
                    </header>
                    <div className="widget-body">
                      <p className="text-muted d-flex flex-wrap">
                        <small className="mr-lg d-flex align-items-center">
                          <span
                            className="circle bg-success text-success mr-xs"
                            style={{
                              fontSize: "4px"
                            }}
                          >
                            .
                          </span>
                          This Period
                        </small>
                        <small className="mr-lg d-flex align-items-center">
                          <span
                            className="circle bg-warning text-warning mr-xs"
                            style={{
                              fontSize: "4px"
                            }}
                          >
                            .
                          </span>
                          Last Period
                        </small>
                      </p>
                      <h6>SDK</h6>
                      <div
                        className="progress mb-xs"
                        style={{
                          height: "5px"
                        }}
                      >
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{
                            width: "60%"
                          }}
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div
                        className="progress"
                        style={{
                          height: "5px"
                        }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{
                            width: "30%"
                          }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h6 className="mt-sm">Integration</h6>
                      <div
                        className="progress mb-xs"
                        style={{
                          height: "5px"
                        }}
                      >
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{
                            width: "40%"
                          }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div
                        className="progress"
                        style={{
                          height: "5px"
                        }}
                      >
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{
                            width: "55%"
                          }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-xl-3 col-md-6 mb-xlg">
                  <section className="widget mb-0 h-100">
                    <header>
                      <h4>Server Overview</h4>
                    </header>
                    <div className="widget-body">
                      <div className="d-flex justify-content-between flex-wrap mb-sm">
                        <p className="width-150">
                          <small>60% / 37°С / 3.3 Ghz</small>
                        </p>
                        <div className="sparkline-wrapper">
                          <div id="sparkline" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap mb-sm">
                        <p className="width-150">
                          <small>54% / 31°С / 3.3 Ghz</small>
                        </p>
                        <div className="sparkline-wrapper">
                          <div id="sparkline-1" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap">
                        <p className="width-150">
                          <small>57% / 21°С / 3.3 Ghz</small>
                        </p>
                        <div className="sparkline-wrapper">
                          <div id="sparkline-2" />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-12">
                  <section className="widget mb-xlg">
                    <header className="row">
                      <h5 className="col-sm-5">
                        Daily <span className="fw-semi-bold">Line Chart</span>
                      </h5>
                      <div className="col-sm-7" id="main-chart-legend" />
                    </header>
                    <div className="widget-body">
                      <div
                        id="main-chart"
                        style={{
                          width: "100%",
                          height: "250px"
                        }}
                      />
                      <div className="chart-tooltip" id="main-chart-tooltip" />
                    </div>
                  </section>
                </div>
                <div className="col-sm-12 col-lg-6 col-xl-4 mb-xlg">
                  <section className="widget mb-0 h-100">
                    <header className="d-flex justify-content-between flex-wrap">
                      <h4 className="d-flex align-items-center pb-1 big-stat-title">
                        <span
                          className="circle bg-primary mr-sm"
                          style={{
                            fontSize: "6px"
                          }}
                        />
                        Statistic{" "}
                        <span className="fw-normal ml-xs">Light Blue</span>
                      </h4>
                      <select
                        className="selectpicker"
                        data-style="btn-gray"
                        data-width="auto"
                        tabIndex={-1}
                        id="simple-select"
                      >
                        <option className="dropdown-item" value={1}>
                          Weekly
                        </option>
                        <option className="dropdown-item" value={2}>
                          Daily
                        </option>
                        <option className="dropdown-item" value={3}>
                          Monthly
                        </option>
                      </select>
                    </header>
                    <div className="widget-body p-0">
                      <h4 className="fw-semi-bold ml-lg mb-lg">4,232</h4>
                      <div className="d-flex border-top">
                        <div className="w-50 border-right p-3 px-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6>+830</h6>
                            <i className="la la-arrow-right text-success rotate-315" />
                          </div>
                          <p className="text-muted mb-0 mr">
                            <small>Registrations</small>
                          </p>
                        </div>
                        <div className="w-50 p-3 px-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6>4.5%</h6>
                            <i className="la la-arrow-right text-danger rotate-45" />
                          </div>
                          <p className="text-muted mb-0 mr">
                            <small>Bounce Rate</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-sm-12 col-lg-6 col-xl-4 mb-xlg">
                  <section className="widget mb-0 h-100">
                    <header className="d-flex justify-content-between flex-wrap">
                      <h4 className="d-flex align-items-center pb-1 big-stat-title">
                        <span
                          className="circle bg-warning mr-sm"
                          style={{
                            fontSize: "6px"
                          }}
                        />
                        Statistic{" "}
                        <span className="fw-normal ml-xs">Sing App</span>
                      </h4>
                      <select
                        className="selectpicker"
                        data-style="btn-gray"
                        data-width="auto"
                        tabIndex={-1}
                        id="simple-select"
                      >
                        <option className="dropdown-item" value={1}>
                          Weekly
                        </option>
                        <option className="dropdown-item" value={2}>
                          Daily
                        </option>
                        <option className="dropdown-item" value={3}>
                          Monthly
                        </option>
                      </select>
                    </header>
                    <div className="widget-body p-0">
                      <h4 className="fw-semi-bold ml-lg mb-lg">754</h4>
                      <div className="d-flex border-top">
                        <div className="w-50 border-right p-3 px-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6>+30</h6>
                            <i className="la la-arrow-right text-success rotate-315" />
                          </div>
                          <p className="text-muted mb-0 mr">
                            <small>Registrations</small>
                          </p>
                        </div>
                        <div className="w-50 p-3 px-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6>2.5%</h6>
                            <i className="la la-arrow-right text-success rotate-315" />
                          </div>
                          <p className="text-muted mb-0 mr">
                            <small>Bounce Rate</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-sm-12 col-lg-6 col-xl-4 mb-xlg">
                  <section className="widget mb-0 h-100">
                    <header className="d-flex justify-content-between flex-wrap">
                      <h4 className="d-flex align-items-center pb-1 big-stat-title">
                        <span
                          className="circle bg-info mr-sm"
                          style={{
                            fontSize: "6px"
                          }}
                        />
                        Statistic <span className="fw-normal ml-xs">RNS</span>
                      </h4>
                      <select
                        className="selectpicker"
                        data-style="btn-gray"
                        data-width="auto"
                        tabIndex={-1}
                        id="simple-select"
                      >
                        <option className="dropdown-item" value={1}>
                          Weekly
                        </option>
                        <option className="dropdown-item" value={2}>
                          Daily
                        </option>
                        <option className="dropdown-item" value={3}>
                          Monthly
                        </option>
                      </select>
                    </header>
                    <div className="widget-body p-0">
                      <h4 className="fw-semi-bold ml-lg mb-lg">1,025</h4>
                      <div className="d-flex border-top">
                        <div className="w-50 border-right p-3 px-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6>+230</h6>
                            <i className="la la-arrow-right text-success rotate-315" />
                          </div>
                          <p className="text-muted mb-0 mr">
                            <small>Registrations</small>
                          </p>
                        </div>
                        <div className="w-50 p-3 px-4">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6>21.5%</h6>
                            <i className="la la-arrow-right text-danger rotate-45" />
                          </div>
                          <p className="text-muted mb-0 mr">
                            <small>Bounce Rate</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-12 mb-lg">
                  <section className="widget pb-0">
                   
                    <header>
                      <h4>
                        Support <strong>Requests</strong>
                      </h4>
                      <div className="widget-controls">
                        <a href="home">
                          <i className="glyphicon glyphicon-cog" />
                        </a>
                        <a href="home" data-widgster="close">
                          <i className="glyphicon glyphicon-remove" />
                        </a>
                      </div>
                    </header>
                    <div className="widget-body p-0 support table-wrapper">
                    <Table/>
                    
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="analytics-side">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-xl-12 last-side-element">
                  <section className="widget mb-xlg">
                    <div className="widget-body p-0">
                      <div id="events-calendar" />
                    </div>
                  </section>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-12 last-side-element">
                  <section className="widget pb-2 mb-xlg">
                    <header>
                      <h4>
                        Today's Tasks{" "}
                        <span className="badge badge-pill badge-success fw-normal pull-right mt-xs">
                          11
                        </span>
                      </h4>
                      <p className="text-primary mb-0">
                        <small className="tasks-stat" />
                      </p>
                    </header>
                    <div className="widget-body task-container">
                      <div className="task d-flex align-items-start">
                        <div className="form-check abc-checkbox abc-checkbox-success d-flex">
                          <input
                            className="form-check-input"
                            id="checkbox1"
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox1"
                          />
                        </div>
                        <div className="task-content">
                          <p className="text-muted mb-xs">
                            <small>Meeting</small>
                          </p>
                          <h6>Meeting with Andrew Piker</h6>
                          <p className="text-muted">
                            <small>9:00</small>
                          </p>
                        </div>
                      </div>
                      <div className="task d-flex align-items-start">
                        <div className="form-check abc-checkbox abc-checkbox-success d-flex">
                          <input
                            className="form-check-input"
                            id="checkbox2"
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox2"
                          />
                        </div>
                        <div className="task-content">
                          <p className="text-muted mb-xs">
                            <small>Call</small>
                          </p>
                          <h6>Call with HT Company</h6>
                          <p className="text-muted">
                            <small>12:00</small>
                          </p>
                        </div>
                      </div>
                      <div className="task d-flex align-items-start">
                        <div className="form-check abc-checkbox abc-checkbox-success d-flex">
                          <input
                            className="form-check-input"
                            id="checkbox3"
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox3"
                          />
                        </div>
                        <div className="task-content">
                          <p className="text-muted mb-xs">
                            <small>Meeting</small>
                          </p>
                          <h6>Meeting with Zoe Alison</h6>
                          <p className="text-muted">
                            <small>14:00</small>
                          </p>
                        </div>
                      </div>
                      <div className="task d-flex align-items-start">
                        <div className="form-check abc-checkbox abc-checkbox-success d-flex">
                          <input
                            className="form-check-input"
                            id="checkbox4"
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox4"
                          />
                        </div>
                        <div className="task-content">
                          <p className="text-muted mb-xs">
                            <small>Interview</small>
                          </p>
                          <h6>Interview with HR</h6>
                          <p className="text-muted">
                            <small>15:00</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="home"
                      className="btn btn-transparent w-100 text-center text-muted"
                      role="button"
                    >
                      See All <i className="la la-arrow-down" />
                    </a>
                  </section>
                </div>
                <div className="col-sm-12 col-md-6 col-xl-12 last-side-element">
                  <section className="widget">
                    <header>
                      <h4>
                        Notifications{" "}
                        <span className="badge badge-pill badge-success fw-normal pull-right mt-xs">
                          6
                        </span>
                      </h4>
                    </header>
                    <div className="widget-body w-100 notifications">
                      <div className="d-flex align-items-start">
                        <i className="la la-thumbs-up mr text-primary" />
                        <p>
                          Ken <span className="fw-semi-bold">accepts</span> your
                          invitation
                        </p>
                      </div>
                      <div className="d-flex w-100">
                        <i className="la la-file mr text-success" />
                        <p>Report from LT Company</p>
                      </div>
                      <div className="d-flex w-100">
                        <i className="la la-envelope mr text-danger" />
                        <p>
                          4 <span className="fw-semi-bold">Private</span> Mails
                        </p>
                      </div>
                      <div className="d-flex w-100">
                        <i className="la la-comment mr text-success" />
                        <p>
                          3 <span className="fw-semi-bold">Comments</span> to your
                          Post
                        </p>
                      </div>
                      <div className="d-flex w-100">
                        <i className="la la-cog mr text-light" />
                        <p>
                          New <span className="fw-semi-bold">Version</span> of RNS
                          app
                        </p>
                      </div>
                      <div className="d-flex w-100">
                        <i className="la la-bell mr text-info" />
                        <p>
                          15 <span className="fw-semi-bold">Notifications</span>{" "}
                          from Social Apps
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        
          <Footer />
          <ButtonTriggerModal label="Add"/>
          <Modal modalTitle="TITLE"/>
        </main>
    );
  }
}

export default Main;
