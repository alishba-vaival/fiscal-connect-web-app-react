import React, { useState, useCallback } from "react";
import DeleteModal from "../../Components/Common/DeleteModal";
import { Link } from 'react-router-dom';
import approved from '../../assets/images/figma/approved.svg';
import unApproved from '../../assets/images/figma/unapproved.svg';
import edit from '../../assets/images/figma/edit.svg';
import trash from '../../assets/images/figma/trash.svg';
import attachment from '../../assets/images/figma/attachment.svg';
import paymentprocess from '../../assets/images/figma/paymentprocess 1.svg';
import user1 from '../../assets/images/users/avatar-1.jpg';
import user2 from '../../assets/images/users/avatar-2.jpg';
import user3 from '../../assets/images/users/avatar-3.jpg';
import user4 from '../../assets/images/users/avatar-4.jpg';
import user5 from '../../assets/images/users/avatar-5.jpg';
import user6 from '../../assets/images/users/avatar-6.jpg'; 
import { FaCheck, FaEye } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
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

import upload from "../../assets/images/figma/upload.svg";

import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// import { useFormik } from "formik";

import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Box,
  // Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Autocomplete
} from "@mui/material";
import { Span } from "../../Components/Typography"; 
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { createFilterOptions } from "@mui/material/Autocomplete";

const AutoComplete = styled(Autocomplete)(() => ({ width: 300, marginBottom: "16px" }));

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
  
}));

const suggestions = [
  { label: "class1" },
  { label: "class2" },
  { label: "Class 3" } 
];

const classes = [
  {
    value: 'class1',
    label: 'class1',
  },
  {
    value: 'class2',
    label: 'class2',
  },
  {
    value: 'class3',
    label: 'class3',
  },
  {
    value: 'class4',
    label: 'class4',
  },
];
const expenseAccount = [
  {
    value: 'expense1',
    label: 'expense1',
  },
  {
    value: 'expense2',
    label: 'expense2',
  },
  {
    value: 'expense3',
    label: 'expense3',
  },
  {
    value: 'expense4',
    label: 'expense4',
  },
];
const Views = () => {
  document.title = "Fiscal Connect | Vaival Solutions";

  const [selectedFiles, setselectedFiles] = useState([]);
  const [files, setFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
  * Formats the size
  */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);
  }
  const [viewAttachmentModal, setAttachmentModal] = useState(false);
  function attachmentModal() {
    setAttachmentModal(!viewAttachmentModal);
  }

  const [deleteModal, setDeleteModal] = useState(false);
  const onClickDelete = (contact) => {
    setDeleteModal(true);
  };

  const [modal_togFirst, setmodal_togFirst] = useState(false);
  function tog_togFirst() {
    setmodal_togFirst(!modal_togFirst);
  }

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

  const [state, setState] = useState({ date: new Date() });
 

  const [classEditVoucher, setClassEditVoucher] = useState("");
  const [expenseEditVoucher, setExpenseEditVoucher] = useState("");
  const [chequeEditVoucher, setChequeEditVoucher] = useState("");
  const [remarksEditVoucher, setRemarksEditVoucher] = useState("");
  const [amountEditVoucher, setAmountEditVoucher] = useState("");
  const [taxRateEditVoucher, setTaxRateEditVoucher] = useState("");
  const [taxAmountEditVoucher, setTaxAmountEditVoucher] = useState("");
  const [netAmountEditVoucher, setNetAmountEditVoucher] = useState("");

  const handleSubmit = (event) => {
    console.log("submitted");
    console.log(event);
    console.log(state);
  };
  

  // const handleChange = (event) => {
  //   event.persist();
  //   setState({ ...state, [event.target.name]: event.target.value });
  // };

  // const handleDateChange = (date) => setState({ ...state, date });

 

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
            <Card>
              <CardBody>
                <Form action="#">
                  <Row className="justify-content-end">
                    <Col md={3}>
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
                        <Label for="siteNameViews">
                          Site Name<span className="text-danger"> *</span>
                        </Label>
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
                        <Label for="dateToViews">
                          Date From<span className="text-danger"> *</span>
                        </Label>
                        <div className="input-group">
                          <Flatpickr
                            className="form-control dash-filter-picker"
                            placeholder="Select date"
                            options={{
                              dateFormat: "d-m-Y",
                              defaultDate: ["2022-01-20"],
                            }}
                          />
                          <div className="input-group-text bg-primary border-primary text-white">
                            <i className="ri-calendar-2-line"></i>
                          </div>
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="dateToViews">
                          Date To<span className="text-danger"> *</span>
                        </Label>
                        <div className="input-group">
                          <Flatpickr
                            className="form-control dash-filter-picker"
                            placeholder="Select date"
                            options={{
                              dateFormat: "d-m-Y",
                              defaultDate: ["2022-01-20"],
                            }}
                          />
                          <div className="input-group-text bg-primary border-primary text-white">
                            <i className="ri-calendar-2-line"></i>
                          </div>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="classViews">Upload Type</Label>
                        <select
                          className="form-select form-select-md"
                          aria-label=".form-select-md example"
                          required
                        >
                          <option defaultValue="0">All</option>
                          <option defaultValue="1">Test 1 Type</option>
                          <option defaultValue="2">Test 2 Type</option>
                          <option defaultValue="3">Test 3 Type</option>
                        </select>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="classViews">Prepared By</Label>
                        <select
                          className="form-select form-select-md"
                          aria-label=".form-select-md example"
                          required
                        >
                          <option defaultValue="0">All</option>
                          <option defaultValue="1">Test 1</option>
                          <option defaultValue="2">Test 2</option>
                          <option defaultValue="3">Test 3</option>
                        </select>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Label for="classViews">Status</Label>
                        <select
                          className="form-select form-select-md"
                          aria-label=".form-select-md example"
                          required
                        >
                          <option defaultValue="0">Pending</option>
                          <option defaultValue="1">Approved</option>
                          <option defaultValue="2">Unapproved</option>
                          <option defaultValue="3">Rejected</option>
                        </select>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className=" mb-3"></Row>
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
                    <img src={gridIcon} alt="gridIcon" style={{ marginLeft: "10px" }} />
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
                    <img src={pdfIcon} alt="pdfIcon" style={{ marginLeft: "10px" }} />
                  </Button>
                  <Row className=" mb-3"></Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
          <Row>
            <Col lg={12}>
              <Card className="ribbon-box border shadow-none">
                <CardBody>
                  <div id="customerList">
                    <Row className="mb-4">
                      <Col className="">
                        <div className="mb-3">
                          <div className="ribbon ribbon-primary ribbon-shape">View Daily Work</div>
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
                            <th data-sort="customer_name">Sr#</th>
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
                                        className="btn btn-soft-primary btn-sm dropdown"
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
                                            <img src={edit} alt="editIcon" /></i>{" "}
                                          Edit
                                        </DropdownItem>
                                        <DropdownItem
                                          className="dropdown-item remove-item-btn"
                                          onClick={() => { onClickDelete(); }}
                                        >
                                          <i className="align-bottom me-2">
                                            <img src={trash} alt="editIcon" />  </i>{" "}
                                          Delete
                                        </DropdownItem>
                                        <DropdownItem className="dropdown-item"
                                          onClick={() => tog_togFirst()}
                                        >
                                          <i className="align-bottom me-2">
                                            <img src={attachment} alt="editIcon" /> </i>{" "}
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
                                        className="btn btn-soft-primary btn-sm dropdown"
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
                                            <img src={edit} alt="editIcon" /></i>{" "}
                                          Edit
                                        </DropdownItem>
                                        <DropdownItem
                                          className="dropdown-item remove-item-btn"
                                          onClick={() => { onClickDelete(); }}
                                        >
                                          <i className="align-bottom me-2">
                                            <img src={trash} alt="editIcon" />  </i>{" "}
                                          Delete
                                        </DropdownItem>
                                        <DropdownItem className="dropdown-item"
                                          onClick={() => tog_togFirst()}
                                        >
                                          <i className="align-bottom me-2">
                                            <img src={attachment} alt="editIcon" /> </i>{" "}
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
                                        className="btn btn-soft-primary btn-sm dropdown"
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
                                            <img src={edit} alt="editIcon" /></i>{" "}
                                          Edit
                                        </DropdownItem>
                                        <DropdownItem
                                          className="dropdown-item remove-item-btn"
                                          onClick={() => { onClickDelete(); }}
                                        >
                                          <i className="align-bottom me-2">
                                            <img src={trash} alt="editIcon" />  </i>{" "}
                                          Delete
                                        </DropdownItem>
                                        <DropdownItem className="dropdown-item"
                                          onClick={() => tog_togFirst()}
                                        >
                                          <i className="align-bottom me-2">
                                            <img src={attachment} alt="editIcon" /> </i>{" "}
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
      <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered size="lg">
        <ModalHeader className="bg-light p-3" toggle={() => { tog_list(); }} close={<img src={unApproved} alt="pdfIcon" onClick={() => { setmodal_list(false) }} style={{ cursor: 'pointer' }} />}>  Edits voucher </ModalHeader>

        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
          <ModalBody>
            <Row>
            <Col md={6}>
              <TextField
                  id="outlined-select-currency"
                  select
                  label="Class" 
                  size="small" 
                  value={classEditVoucher}
                  onChange= {(e) => setClassEditVoucher(e.target.value)}
                >
                  {classes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>

             
              <Col md={6}>
              {/* <InputLabel shrink htmlFor="bootstrap-input">
                    Select Expense Account
                  </InputLabel> */}
              <TextField
                  id="outlined-select-currency"
                  select
                  label="Select Expense Account" 
                  size="small"  
                  value={expenseEditVoucher}
                  onChange={(e) => setExpenseEditVoucher(e.target.value)}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                >
                  {expenseAccount.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>

              <Col md={6}>
                <TextField
                  type="text"
                  name="chequeEditVoucher,"
                  label="Cheque No#"
                  id="chequeEditVoucher,"
                  value={chequeEditVoucher}
                  onChange={(e) => setChequeEditVoucher(e.target.value)}
                  size="small" 
                />
              </Col>

              <Col md={6}>
                <TextField
                  type="text"
                  name="remarksEditVoucher,"
                  label="Remarks"
                  id="remarksEditVoucher,"
                  value={remarksEditVoucher}
                  onChange={(e) => setRemarksEditVoucher(e.target.value)}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  size="small" 
                />
              </Col>
              <Col md={6}>
                <TextField
                  type="text"
                  name="amountEditVoucher,"
                  label="Amount"
                  id="amountEditVoucher,"
                  value={amountEditVoucher}
                  onChange={(e) => setAmountEditVoucher(e.target.value)}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                  size="small" 
                />
              </Col>
            <Col md={6}>
              <TextField
                  id="outlined-select-currency"
                  select
                  label="Select Tax Rate" 
                  size="small" 
                  value={taxRateEditVoucher}
                  onChange={(e) => setTaxRateEditVoucher(e.target.value)}
                >
                  {classes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Col>
                <Col md={6}>
                <TextField
                  type="text"
                  name="taxAmountEditVoucher,,"
                  label="Tax Amount "
                  id="taxAmountEditVoucher,,"
                  value={taxAmountEditVoucher}
                  onChange={(e) => setTaxAmountEditVoucher(e.target.value)}
                  size="small" 
                />
              </Col>
              <Col md={6}>
                <TextField
                  type="text"
                  name="netAmountEditVoucher, "
                  label="Net Amount "
                  id="netAmountEditVoucher, "
                  value={netAmountEditVoucher}
                  onChange={(e) => setNetAmountEditVoucher(e.target.value)} 
                  size="small" 
                />
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
              type="submit"
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
                  style={{ marginLeft: "10px", height: '20px' }} />
              </Button>
              </div>  
          </ModalFooter>
        </ValidatorForm>
      </Modal>

      {/* Add Modal */}
      <Modal isOpen={viewAttachmentModal} toggle={() => { attachmentModal(); }} size="lg" centered >
        <ModalHeader className="bg-light p-3" close={<img src={unApproved} alt="pdfIcon" onClick={() => { setAttachmentModal(false); }} style={{ cursor: 'pointer' }} />}> Add & Upload Attachment(s) </ModalHeader>
        <form className="tablelist-form">
          <ModalBody>
            <Row className="mt-4">
              <Col lg={12}>
                <Row>
                  <Col lg={12}>
                    <Card >
                      <CardBody>
                        <Row>
                          <p className="text-muted"></p>
                          <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={true}
                            maxFiles={6}
                            name="files"
                            className="filepond filepond-input-multiple"
                          />
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <div className="hstack gap-2 justify-content-end">
              <Button
                onClick={() => { setAttachmentModal(false); }}
                style={{
                  background: "transparent",
                  borderRadius: "50px",
                  padding: "5px 23px",
                  border: "1px solid #FF5652",
                  color: "#FF5652",
                }}
              >
                Close
                <img src={unApproved} alt="pdfIcon"
                  style={{ marginLeft: "10px", }} />
              </Button>
              <Button
                onClick={() => { tog_togFirst(); setAttachmentModal(false); }}
                style={{
                  float: "right",
                  background: "transparent",
                  color: "#0A85FF",
                  borderRadius: "50px",
                  padding: "5px 23px",
                  border: "1px solid #00CCCC",
                }}
              >
                View Attachments <FaEye />
              </Button>
              <Button
                style={{
                  float: "right",
                  background: "transparent",
                  color: "#0A85FF",
                  borderRadius: "50px",
                  padding: "5px 23px",
                  border: "1px solid #00CCCC",
                }}
              >
                Upload <FaCloudUploadAlt />
              </Button>
            </div>
          </ModalFooter>
        </form>
      </Modal>


      <Modal
        isOpen={modal_togFirst}
        toggle={() => { tog_togFirst(); }}
        id="firstmodal"
        centered
      >
        <ModalHeader className="bg-light p-3" close={<img src={unApproved} alt="pdfIcon" onClick={() => { setmodal_togFirst(false); }} style={{ cursor: 'pointer' }} />}>View Attachment</ModalHeader>

        <ModalBody className="text-center">
          <div className="">
            <Row>
              <Col xs={6} md={4}>
                <img src={user1} alt="user1" style={{ width: '100%', margin: '5px' }} />
              </Col>
              <Col xs={6} md={4}>
                <img src={user2} alt="user2" style={{ width: '100%', margin: '5px' }} />
              </Col>
              <Col xs={6} md={4}>
                <img src={user3} alt="user3" style={{ width: '100%', margin: '5px' }} />
              </Col>
              <Col xs={6} md={4}>
                <img src={user4} alt="user4" style={{ width: '100%', margin: '5px' }} />
              </Col>
              <Col xs={6} md={4}>
                <img src={user5} alt="user5" style={{ width: '100%', margin: '5px' }} />
              </Col>
              <Col xs={6} md={4}>
                <img src={user6} alt="user6" style={{ width: '100%', margin: '5px' }} />
              </Col>
            </Row>

          </div>
        </ModalBody>
        <ModalFooter>
          <div className="hstack gap-2 justify-content-end">
            <Button
              onClick={() => { tog_togFirst(false); }}
              style={{
                background: "transparent",
                borderRadius: "50px",
                padding: "5px 23px",
                border: "1px solid #FF5652",
                color: "#FF5652",
              }}
            >
              Close
              <img src={unApproved} alt="pdfIcon"
                style={{ marginLeft: "10px", }} />
            </Button>
            <Button
              onClick={() => { attachmentModal(); tog_togFirst(false); }}
              style={{
                float: "right",
                background: "transparent",
                color: "#0A85FF",
                borderRadius: "50px",
                padding: "5px 23px",
                border: "1px solid #00CCCC",
              }}
            >
              ADD <IoMdAddCircleOutline />
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Views;
