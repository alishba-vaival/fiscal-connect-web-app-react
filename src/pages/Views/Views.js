import React, { useState,useCallback } from "react";
import DeleteModal from "../../Components/Common/DeleteModal";
import { Link } from 'react-router-dom';
import approved from '../../assets/images/figma/approved.svg';
import unApproved from '../../assets/images/figma/unapproved.svg';
import edit from '../../assets/images/figma/edit.svg';
import trash from '../../assets/images/figma/trash.svg';
import attachment from '../../assets/images/figma/attachment.svg';
import paymentprocess from '../../assets/images/figma/paymentprocess 1.svg';
import {
  Col,
  Container,
  Row,
  Label,
  Input,
  FormGroup,
  Button,
  Form,
  CardBody,
  CardHeader,
  Card,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import gridIcon from "../../assets/images/figma/grid.svg";
import pdfIcon from "../../assets/images/figma/pdf.svg";

import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../Components/Common/BreadCrumb";

// import { useFormik } from "formik";

const Views = () => {
  document.title = "Fiscal Connect | Vaival Solutions";

  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);
  }

  const [deleteModal, setDeleteModal] = useState(false);
  const onClickDelete = (contact) => {
    setDeleteModal(true);
  };

    // Delete Multiple
    const [selectedCheckBoxDelete, setSelectedCheckBoxDelete] = useState([]);
    const [isMultiDeleteButton, setIsMultiDeleteButton] = useState(false); 

    // Checked All
    const checkedAll = useCallback(() => {
      const checkall = document.getElementById("checkBoxAll");
      const ele = document.querySelectorAll(".viewCheckBox");
  
      if (checkall.checked) {
        ele.forEach((ele) => {
          ele.checked = true;
        });
      } else {
        ele.forEach((ele) => {
          ele.checked = false;
        });
      } 
    }, []);

  const deleteCheckbox = () => {
    const ele = document.querySelectorAll(".viewCheckBox:checked");
    ele.length > 0 ? setIsMultiDeleteButton(true) : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(ele);
  };
  /**
   * Formik
   */

  // const formik = useFormik ({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     selectedFiles: null,
  //   },
  //   onSubmit: (values) => {
  //     setFiles(values.selectedFiles);
  //   },
  // });

  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onCloseClick={() => setDeleteModal(false)}
        />
        <Container fluid>
        <BreadCrumb title="Views" pageTitle="ViewsPage" />
          <Row> 
          <Col lg={12}>
            <Card   >
              <CardBody>
              <Form>
              
                <Row>
                  <Col
                    md={3}
                    style={{
                      marginLeft: "55rem",
                    }}
                  >
                    <FormGroup>
                      <Label for="financialYearViews">Financial Year</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option defaultValue>2020-2021</option>
                        <option defaultValue="1">2021-2022</option>
                        <option defaultValue="2">2023-2024</option>
                        <option defaultValue="3">2024-2025</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="siteNameViews">Site Name<span className="text-danger">*</span></Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option defaultValue="0">Head Office</option>
                        <option defaultValue="1">Test 1 Office</option>
                        <option defaultValue="2">Test 2 Office</option>
                        <option defaultValue="3">Test 3 Office</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="classViews">Class</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option defaultValue="0">Lahore</option>
                        <option defaultValue="1">Test 1 City</option>
                        <option defaultValue="2">Test 2 City</option>
                        <option defaultValue="3">Test 3 City</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="dateViews">Date</Label>
                      <div className="input-group">

                        <Flatpickr
                          className="form-control dash-filter-picker"
                          placeholder="Select date"
                          options={{
                            dateFormat: "d-m-Y",
                            defaultDate: ["2022-01-20"],
                          }}
                        />
                        <div className="input-group-text bg-primary border-primary text-white"><i className="ri-calendar-2-line"></i></div>

                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="remarksViews">Remarks<span className="text-danger">*</span></Label>
                      <Input
                        id="remarks *"
                        name="remarks *"
                        placeholder="Enter Remarks"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="amountViews">Amount<span className="text-danger">*</span></Label>
                      <Input
                        id="amount"
                        name="amount"
                        placeholder="Enter Amount"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Button
                  style={{
                    background: "transparent",
                    borderRadius: "50px",
                    padding: "5px 15px",
                    border: "1px solid #0080FF",
                    margin: "10px",
                    color: "#0080FF",
                  }}
                >
                  View Receipt
                  <img src={gridIcon} alt="gridIcon"
                    style={{ marginLeft: "10px" }} />
                </Button>
                <Button
                  style={{
                    background: "transparent",
                    borderRadius: "50px",
                    padding: "5px 25px",
                    border: "1px solid #FF5652",
                    color: "#FF5652",
                  }}
                >
                  Pdf View
                  <img src={pdfIcon} alt="pdfIcon"
                  style={{ marginLeft: "10px" }} />
                </Button>
              </Form> 
            </CardBody>
              </Card>
              </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card className="ribbon-box border shadow-none  ">

                <CardBody>
                  <div id="customerList">
                    <Row className="g-4 mb-3">
                      <Col className="">
                        <div>
                          <div className="mb-3">
                            <div className="ribbon ribbon-primary ribbon-shape">View Daily Work</div>
                          </div>
                        </div>
                      </Col>
                      <Col className="col-sm">
                        <div className="d-flex justify-content-sm-end">
                          <div>
                            <Button
                              style={{
                                background: "transparent",
                                borderRadius: "50px",
                                padding: "5px 25px",
                                border: "1px solid #0080FF",
                                marginRight: "10px",
                                color: "#0080FF",
                              }}
                            >
                             Approved
                              <img src={approved} alt="gridIcon"
                                style={{ marginLeft: "10px" }} />
                            </Button>
                            <Button
                              style={{
                                background: "transparent",
                                borderRadius: "50px",
                                padding: "5px 15px",
                                border: "1px solid #FF5652",
                                color: "#FF5652",
                              }}
                            >
                              Un-Approved
                              <img src={unApproved} alt="pdfIcon"
                                 style={{ marginLeft: "10px" }} />
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="table-responsive table-card mt-3 mb-1">
                      <table className="table align-middle table-nowrap" id="customerTable">
                        <thead className="table-light">
                          <tr> 
                            <th   data-sort="customer_name">Sr#</th>
                            <th className="sort" data-sort="email">Doc.#</th>
                            <th className="sort" data-sort="phone">Class</th>
                            <th className="sort" data-sort="phone">Expense Head</th>
                            <th className="sort" data-sort="date">Date</th>
                            <th className="sort" data-sort="status">User</th>
                            <th className="sort" data-sort="action">Site</th> 
                            <th data-sort="phone">Amount</th>
                            <th className="sort" data-sort="date">Status</th>
                            <th className="sort" data-sort="status">Options</th>
                            <th scope="col" style={{ width: "50px" }}>
                                                            <div className="form-check">
                                                                <input className="form-check-input  " type="checkbox" id="checkBoxAll" value="option" onClick={() => checkedAll()} />
                                                            </div>
                                                        </th> 
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          <tr> 
                            <td className="customer_name">1</td>
                            <td className="email">CASH-7135</td>
                            <td className="phone">PROJECT 1</td>
                            <td className="date">[600-01-17-0001] ACCOUNTANCY CHARGES</td>
                            <td className="customer_name">15-09-2024</td>
                            <td className="email">demo@vs.com</td>
                            <td className="phone">LAHORE</td>
                            <td className="date">1,000</td>
                            <td className="status"><span className="badge badge-soft-success text-uppercase">DRAFTED</span></td>
                            <td>
                              <div className="d-flex gap-2">
                                <ul className="list-inline hstack gap-2 mb-0">

                                  <li className="list-inline-item">
                                    <UncontrolledDropdown>
                                      <DropdownToggle
                                        href="#"
                                        className="btn btn-soft-secondary btn-sm dropdown"
                                        tag="button"
                                      >
                                        <i className="ri-more-fill align-middle"></i>
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-end"> 
                                        <DropdownItem
                                          className="dropdown-item edit-item-btn"
                                          onClick={() => { tog_list(); }}
                                        >
                                          <i className="align-bottom me-2">
                                          <img src={edit} alt="editIcon"/></i>{" "}
                                          Edit
                                        </DropdownItem>
                                        <DropdownItem
                                          className="dropdown-item remove-item-btn"
                                          onClick={() => { onClickDelete(); }}
                                        >
                                          <i className="align-bottom me-2">
                                          <img src={trash} alt="editIcon"/>  </i>{" "}
                                          Delete
                                        </DropdownItem>
                                        <DropdownItem className="dropdown-item" href="#"
                                        >
                                          <i className="align-bottom me-2">
                                        <img src={attachment} alt="editIcon"/> </i>{" "}
                                          View Attachment
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input viewCheckBox" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                          </tr>
                          <tr> 
                            <td className="customer_name">2</td>
                            <td className="email">CASH-7135</td>
                            <td className="phone">PROJECT 1</td>
                            <td className="date">[600-01-17-0001] ACCOUNTANCY CHARGES</td>
                            <td className="customer_name">15-09-2024</td>
                            <td className="email">demo@vs.com</td>
                            <td className="phone">LAHORE</td>
                            <td className="date">1,000</td>
                            <td className="status"><span className="badge badge-soft-success text-uppercase">DRAFTED</span></td>
                            <td>
                              <div className="d-flex gap-2">
                                <ul className="list-inline hstack gap-2 mb-0">

                                  <li className="list-inline-item">
                                    <UncontrolledDropdown>
                                      <DropdownToggle
                                        href="#"
                                        className="btn btn-soft-secondary btn-sm dropdown"
                                        tag="button"
                                      >
                                        <i className="ri-more-fill align-middle"></i>
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-end"> 
                                        <DropdownItem
                                          className="dropdown-item edit-item-btn"
                                          onClick={() => { tog_list(); }}
                                        >
                                          <i className="align-bottom me-2">
                                          <img src={edit} alt="editIcon"/></i>{" "}
                                          Edit
                                        </DropdownItem>
                                        <DropdownItem
                                          className="dropdown-item remove-item-btn"
                                          onClick={() => { onClickDelete(); }}
                                        >
                                          <i className="align-bottom me-2">
                                          <img src={trash} alt="editIcon"/>  </i>{" "}
                                          Delete
                                        </DropdownItem>
                                        <DropdownItem className="dropdown-item" href="#"
                                        >
                                          <i className="align-bottom me-2">
                                        <img src={attachment} alt="editIcon"/> </i>{" "}
                                          View Attachment
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input viewCheckBox" type="checkbox" name="chk_child" value="option1" />
                                                            </div>
                                                        </th>
                          </tr>
                          <tr> 
                            <td className="customer_name">3</td>
                            <td className="email">CASH-7135</td>
                            <td className="phone">PROJECT 1</td>
                            <td className="date">[600-01-17-0001] ACCOUNTANCY CHARGES</td>
                            <td className="customer_name">15-09-2024</td>
                            <td className="email">demo@vs.com</td>
                            <td className="phone">LAHORE</td>
                            <td className="date">1,000</td>
                            <td className="status"><span className="badge badge-soft-success text-uppercase">DRAFTED</span></td>
                            <td>
                              <div className="d-flex gap-2">
                                <ul className="list-inline hstack gap-2 mb-0">

                                  <li className="list-inline-item">
                                    <UncontrolledDropdown>
                                      <DropdownToggle
                                        href="#"
                                        className="btn btn-soft-secondary btn-sm dropdown"
                                        tag="button"
                                      >
                                        <i className="ri-more-fill align-middle"></i>
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-menu-end"> 
                                        <DropdownItem
                                          className="dropdown-item edit-item-btn"
                                          onClick={() => { tog_list(); }}
                                        >
                                          <i className="align-bottom me-2">
                                          <img src={edit} alt="editIcon"/></i>{" "}
                                          Edit
                                        </DropdownItem>
                                        <DropdownItem
                                          className="dropdown-item remove-item-btn"
                                          onClick={() => { onClickDelete(); }}
                                        >
                                          <i className="align-bottom me-2">
                                          <img src={trash} alt="editIcon"/>  </i>{" "}
                                          Delete
                                        </DropdownItem>
                                        <DropdownItem className="dropdown-item" href="#"
                                        >
                                          <i className="align-bottom me-2">
                                        <img src={attachment} alt="editIcon"/> </i>{" "}
                                          View Attachment
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <th scope="row">
                                                            <div className="form-check">
                                                                <input className="form-check-input viewCheckBox" type="checkbox" name="chk_child" value="option1" onChange={() => deleteCheckbox()} />
                                                            </div>
                                                        </th>
                          </tr>
                        </tbody>
                      </table>
                      <div className="noresult" style={{ display: "none" }}>
                        <div className="text-center">
                          <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop"
                            colors="primary:#121331,secondary:#08a88a" style={{ width: "75px", height: "75px" }}>
                          </lord-icon>
                          <h5 className="mt-2">Sorry! No Result Found</h5>
                          <p className="text-muted mb-0">We've searched more than 150+ Orders We did not find any
                            orders for you search.</p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <div className="pagination-wrap hstack gap-2">
                        <Link className="page-item pagination-prev disabled" to="#">
                          Previous
                        </Link>
                        <ul className="pagination listjs-pagination mb-0"></ul>
                        <Link className="page-item pagination-next" to="#">
                          Next
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>

      {/* Add Modal */}
      <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
        <ModalHeader className="bg-light p-3" toggle={() => { tog_list(); }} close={<img src={unApproved} alt="pdfIcon"  onClick={() => setmodal_list(false)} style={{ cursor:'pointer'}} />}>  Edits voucher </ModalHeader>
        <form className="tablelist-form">
          <ModalBody>
          <Row>
          <Col md={6}>
          <FormGroup>
        
                      <Label for="classViews">Class</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option defaultValue="0">Lahore</option>
                        <option defaultValue="1">Test 1 City</option>
                        <option defaultValue="2">Test 2 City</option>
                        <option defaultValue="3">Test 3 City</option>
                      </select>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                      <Label for="classViews">Select Expense Account <span className="text-danger">*</span></Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option defaultValue="0">Lahore</option>
                        <option defaultValue="1">Test 1 City</option>
                        <option defaultValue="2">Test 2 City</option>
                        <option defaultValue="3">Test 3 City</option>
                      </select>
                    </FormGroup>
                    </Col>
</Row>
<Row>
          <Col md={6}>
                    <FormGroup>
                      <Label for="amountViews">Cheque No#</Label>
                      <Input
                        id="amount"
                        name="amount"
                        placeholder="Enter Amount"
                      />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                      <Label for="remarksViews">Remarks</Label>
                      <Input
                        id="remarks *"
                        name="remarks *"
                        placeholder="Enter Remarks"
                      />
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={6}>
                    <FormGroup>
                      <Label for="remarksViews">Amount <span className="text-danger">*</span></Label>
                      <Input
                        id="remarks *"
                        name="remarks *"
                        placeholder="Enter Remarks"
                      />
                    </FormGroup>
                    </Col>


          <Col md={6}> 
                    <FormGroup>
                      <Label for="classViews">Select Tax Rate</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option defaultValue="0">Lahore</option>
                        <option defaultValue="1">Test 1 City</option>
                        <option defaultValue="2">Test 2 City</option>
                        <option defaultValue="3">Test 3 City</option>
                      </select>
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={6}> 
                    <FormGroup>
                      <Label for="amountViews">Tax Amount</Label>
                      <Input
                        id="amount"
                        name="amount"
                        placeholder="Enter Amount"
                      />
                    </FormGroup>
                    </Col>
                    <Col md={6}> 
                    <FormGroup>
                      <Label for="amountViews">Net Amount</Label>
                      <Input
                        id="amount"
                        name="amount"
                        placeholder="Enter Amount"
                      />
                    </FormGroup>  
                    </Col>
                    </Row>
          </ModalBody>
          <ModalFooter>
            <div className="hstack gap-2 justify-content-end">
            <Button
            onClick={() => setmodal_list(false)}
                  style={{
                    background: "transparent",
                    borderRadius: "50px",
                    padding: "5px 25px",
                    border: "1px solid #FF5652",
                    color: "#FF5652",
                  }}
                >
                  Close
                  <img src={unApproved} alt="pdfIcon"
                  style={{ marginLeft: "10px", }} />
                </Button>
              <Button
                  style={{
                    background: "transparent",
                    borderRadius: "50px",
                    padding: "5px 25px",
                    border: "1px solid #0080FF",
                    margin: "10px",
                    color: "#0080FF",
                  }}
                >
                 Update
                  <img src={paymentprocess} alt="gridIcon"
                    style={{ marginLeft: "10px", height:'20px' }} />
                </Button>
              {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
            </div>
          </ModalFooter>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default Views;
