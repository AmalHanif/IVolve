import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="exampleModalCenter">
        {" "}
        tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {this.props.modalTitle}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group row ">
                  <label
                    htmlFor="inputName"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    Name
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputDescription"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    Location
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="inputLocation"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputBaseRole"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    Domin
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="inputBaseRole"
                      placeholder="Domin"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputBaseRole"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    Visibility
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect2"
                    >
                      <option>Public</option>
                      <option>Private</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputCurrency"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    Account
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect2"
                    >
                      <option>Master Account</option>
                      <option>sub-Account 1</option>
                      <option>sub-Account 2</option>
                      <option>sub-Account 3</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputBaseRole"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    Scale Priority
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="inputBaseRole"
                      placeholder="Scale Priority"
                    />
                  </div>
                </div>
                <p>Details</p>
                <hr />
                <div className="form-group row">
                  <label
                    htmlFor="inputCurrency"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    Region
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect2"
                    >
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputCurrency"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    Access Key
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect2"
                    >
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-form-label d-flex justify-content-end col-sm-4"
                    htmlFor="inlineFormInputGroupUsername2"
                  >
                    Secret Key
                  </label>
                  <div className="input-group col-sm-8">
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder={0.0}
                    />
                    <div className="input-group-prepend">
                      <div className="input-group-text">#</div>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputCurrency"
                    className=" col-sm-4 col-form-label d-flex justify-content-end"
                  />
                  <div className="custom-control custom-checkbox custom-control-center">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Import Existing Instance
                    </label>
                  </div>
                </div>
                <div className="row form-group">
                  <label
                    htmlFor="inputCurrency"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    USE VPC
                  </label>
                  <div className=" custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="customRadioInline1"
                      name="customRadioInline1"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline1"
                    >
                      EC2 Classic
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="customRadioInline2"
                      name="customRadioInline1"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline2"
                    >
                      VPC
                    </label>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputCurrency"
                    className="col-sm-4 col-form-label d-flex justify-content-end"
                  >
                    VPC
                  </label>
                  <div className="col-sm-8">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect2"
                    >
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
