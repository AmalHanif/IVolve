import React from "react";
import 'bootstrap/dist/js/bootstrap.js'

class Sidebar extends React.Component {
  render() {
    return (
      <nav id="sidebar" className="sidebar" role="navigation">
        {}
        <div className="js-sidebar-content">
          <header className="logo d-none d-md-block">
            <a href="https://demo.flatlogic.com/sing-app/">
              <span className="text-warning">sing</span> app
            </a>
          </header>
          {}
          <div className="sidebar-status d-md-none">
            <a href="/home " className="dropdown-toggle" data-toggle="dropdown">
              <span className="thumb-sm avatar float-right">
                <img
                  className="rounded-circle"
                  src="demo/img/people/a5.jpg"
                  alt="..."
                />
              </span>
              {}
              <span className="circle bg-warning fw-bold text-gray-dark">
                13
              </span>
                Philip <strong>Smith</strong>
              <b className="caret" />
            </a>
            {}
          </div>
          {}
          <ul className="sidebar-nav">
            <li className=" active ">
              {}
              <a href="index.html">
                <span className="icon">
                  <i className="fi flaticon-home" />
                </span>
                Dashboard
              </a>
            </li>
          </ul>
          <ul className="sidebar-nav">
            <li className=" active ">
              {}
              <a
                className="collapsed"
                href="#sidebar_ui_provisioning"
                data-toggle="collapse"
                data-parent="#sidebar"
              >
                <span className="icon">
                  <i className="fi flaticon-layers" />
                </span>
                Provisioning
                <i className="toggle fa fa-angle-down" />
              </a>
              <ul id="sidebar_ui_provisioning" className="collapse ">
                <li>
                  <a href="provisioning/instances.html">instances</a>
                </li>
                <li>
                  <a href="provisioning/apps.html">Apps</a>
                </li>
                <li>
                  <a href="provisioning/templates.html">Templates</a>
                </li>
                <li>
                  <a href="provisioning/automation.html">Automation</a>
                </li>
                <li>
                  <a href="provisioning/library.html">Library</a>
                </li>
                <li>
                  <a href="provisioning/virtual_image.html">virtual_image</a>
                </li>
                <li>
                  <a href="provisioning/migration.html">Migration</a>
                </li>
                <li>
                  <a href="provisioning/deployments.html">Deployments</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="sidebar-nav">
            <li className="active">
              <a
                className="collapsed"
                href="#sidebar_ui_infrastructure"
                data-toggle="collapse"
                data-parent="#sidebar"
              >
                <span className="icon">
                  <i className="fi flaticon-layers" />
                </span>
                Infastruture
                <i className="toggle fa fa-angle-down" />
              </a>
              <ul id="sidebar_ui_infrastructure" className="collapse ">
                <li>
                  <a href="infrastructure/clouds.html">clouds</a>
                </li>
                <li>
                  <a href="infrastructure/hosts.html">hosts</a>
                </li>
                <li>
                  <a href="infrastructure/virtual_machines.html">
                    virtual_machines
                  </a>
                </li>
                <li>
                  <a href="infrastructure/networks.html">networks</a>
                </li>
                <li>
                  <a href="infrastructure/datastores.html">datastores</a>
                </li>
                <li>
                  <a href="infrastructure/resource_pools.html">
                    resource_pools
                  </a>
                </li>
                <li>
                  <a href="infrastructure/virtual_image_templates.html">
                    virtual_image_templates
                  </a>
                </li>
                <li>
                  <a href="infrastructure/pricing.html">pricing</a>
                </li>
                <li>
                  <a href="infrastructure/policies.html">policies</a>
                </li>
                <li>
                  <a href="infrastructure/workflows.html">workflows</a>
                </li>
                <li>
                  <a href="infrastructure/roles.html">roles</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="sidebar-nav">
            <li className=" active ">
              {}
              <a href="index.html">
                <span className="icon">
                  <i className="fi flaticon-home" />
                </span>
                BackUps
              </a>
            </li>
          </ul>
          <ul className="sidebar-nav">
            <li className=" active ">
              {}
              <a href="index.html">
                <span className="icon">
                  <i className="fi flaticon-home" />
                </span>
                Logs
              </a>
            </li>
          </ul>
          <ul className="sidebar-nav">
            <li className=" active ">
              {}
              <a href="index.html">
                <span className="icon">
                  <i className="fi flaticon-home" />
                </span>
                Monitoring
              </a>
            </li>
          </ul>
          <ul className="sidebar-nav">
            <li className=" active ">
              {}
              <a href="index.html">
                <span className="icon">
                  <i className="fi flaticon-home" />
                </span>
                Report
              </a>
            </li>
          </ul>
          <ul className="sidebar-nav">
            <li className="active">
              <a
                className="collapsed"
                href="#sidebar_ui_admin"
                data-toggle="collapse"
                data-parent="#sidebar"
              >
                <span className="icon">
                  <i className="fi flaticon-users" />
                </span>
                Admin
                <i className="toggle fa fa-angle-down" />
              </a>
              <ul id="sidebar_ui_admin" className="collapse ">
                <li>
                  <a href="admin/accounts.html">Accounts</a>
                </li>
                <li>
                  <a href="admin/servicePlans.html">Service Plans</a>
                </li>
                <li>
                  <a href="admin/roles.html">Roles</a>
                </li>
                <li>
                  <a href="admin/users.html">Users</a>
                </li>
                <li>
                  <a href="admin/integration.html">Integration</a>
                </li>
                <li>
                  <a href="admin/provisioning.html">Provisioning</a>
                </li>
                <li>
                  <a href="admin/monitoring.html">Monitoring</a>
                </li>
                <li>
                  <a href="admin/backUps.html">BackUps</a>
                </li>
                <li>
                  <a href="admin/logs.html">Logs</a>
                </li>
                <li>
                  <a href="admin/setting.html">Setting</a>
                </li>
              </ul>
            </li>
          </ul>
          {}
          <h5 className="sidebar-nav-title">
            Template{" "}
            <a className="action-link" href="/home ">
              <i className="glyphicon glyphicon-refresh" />
            </a>
          </h5>
          <ul className="sidebar-nav">
            <li>
              {}
              <a href="typography.html">
                <span className="icon">
                  <i className="fi flaticon-controls" />
                </span>
                Typography
              </a>
            </li>
            <li>
              {}
              <a href="tables.html">
                <span className="icon">
                  <i className="fi flaticon-equal-1" />
                </span>
                Tables
              </a>
            </li>
            <li>
              {}
              <a href="notifications.html">
                <span className="icon">
                  <i className="fi flaticon-alarm" />
                </span>
                Notifications
              </a>
            </li>
          </ul>
          <h5 className="sidebar-nav-title">
            Labels{" "}
            <a className="action-link" href="/home ">
              <i className="glyphicon glyphicon-plus" />
            </a>
          </h5>
          {}
          <ul className="sidebar-labels">
            <li>
              <a href="/home ">
                {}
                <i className="fa fa-circle text-warning mr-xs" />
                <span className="label-name">My Recent</span>
              </a>
            </li>
            <li>
              <a href="/home ">
                <i className="fa fa-circle text-gray mr-xs" />
                <span className="label-name">Starred</span>
              </a>
            </li>
            <li>
              <a href="/home ">
                <i className="fa fa-circle text-danger mr-xs" />
                <span className="label-name">Background</span>
              </a>
            </li>
          </ul>
          <h5 className="sidebar-nav-title">Projects</h5>
          {}
          <div className="sidebar-alerts">
            <div className="alert">
              <a
                href="/home "
                className="close"
                data-dismiss="alert"
                aria-hidden="true"
              >
                ×
              </a>
              <span className="fw-normal">Sales Report</span> <br />
              <div className="progress progress-xs mt-2">
                <div
                  className="progress-bar progress-bar-gray-light"
                  role="progressbar"
                  style={{
                    width: "16%"
                  }}
                  aria-valuenow={16}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <small>Calculating x-axis bias... 65%</small>
            </div>
            <div className="alert">
              <a
                href="/home "
                className="close"
                data-dismiss="alert"
                aria-hidden="true"
              >
                ×
              </a>
              <span className="fw-normal">Personal Responsibility</span> <br />
              <div className="progress progress-xs mt-2">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{
                    width: "23%"
                  }}
                  aria-valuenow={23}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <small>Provide required notes</small>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
