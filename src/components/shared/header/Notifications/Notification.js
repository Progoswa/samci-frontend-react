import React from "react";

const Notification = () => {
  return (
    <>
      <li className="dropdown dropdown-animated scale-left">
        <div
          className="avatar avatar-badge avatar-square"
          data-toggle="dropdown"
        >
          <a href="https://getbootstrap.com/docs/4.0/utilities/text/">
            <i className="anticon anticon-bell notification-badge"></i>
          </a>
          <span className="badge badge-indicator badge-danger">5</span>
        </div>

        <div className="dropdown-menu pop-notification">
          <div className="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center">
            <p className="text-dark font-weight-semibold m-b-0">
              <i className="anticon anticon-bell"></i>
              <span className="m-l-10">Notification</span>
            </p>
            <a
              className="btn-sm btn-default btn"
              href="https://getbootstrap.com/docs/4.0/utilities/text/"
            >
              <small>View All</small>
            </a>
          </div>
          <div className="relative">
            <div
              className="overflow-y-auto relative scrollable"
              style={{ maxHeight: "300px" }}
            >
              <a
                href="https://getbootstrap.com/docs/4.0/utilities/text/"
                className="dropdown-item d-block p-15 border-bottom"
              >
                <div className="d-flex">
                  <div className="avatar avatar-blue avatar-icon">
                    <i className="anticon anticon-mail"></i>
                  </div>
                  <div className="m-l-15">
                    <p className="m-b-0 text-dark">
                      You received a new message
                    </p>
                    <p className="m-b-0">
                      <small>8 min ago</small>
                    </p>
                  </div>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Notification;
