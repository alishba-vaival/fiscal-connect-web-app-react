import React, { useState } from "react";
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
} from "reactstrap";
import { FaCheck } from "react-icons/fa";
import attachment from "../../assets/images/figma/attachment.svg";
import upload from "../../assets/images/figma/upload.svg";

import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// import { useFormik } from "formik";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const BankExpense = () => {
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

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="BankExpense" pageTitle="BankExpense" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="siteNameBankExpense">
                            Site Name<span className="text-danger"> *</span>
                          </Label>
                          <select
                            className="form-select form-select-md"
                            aria-label=".form-select-md example"
                            required
                          >
                            <option selected>Head Office</option>
                            <option defaultValue="1">Test 1 Office</option>
                            <option defaultValue="2">Test 2 Office</option>
                            <option defaultValue="3">Test 3 Office</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="classBankExpense">Class</Label>
                          <select
                            className="form-select form-select-md"
                            aria-label=".form-select-md example"
                            required
                          >
                            <option selected>Lahore</option>
                            <option defaultValue="1">Test 1 City</option>
                            <option defaultValue="2">Test 2 City</option>
                            <option defaultValue="3">Test 3 City</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="dateBankExpense">Date</Label>
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
                      <Col md={5}>
                        <FormGroup>
                          <Label for="selectExpenseAccount">
                            Select Expense Account
                            <span className="text-danger"> *</span>
                          </Label>
                          <select
                            className="form-select form-select-md"
                            aria-label=".form-select-md example"
                            required
                          >
                            <option selected>
                              100-02-06-001 (Inventery Consumed)
                            </option>
                            <option defaultValue="1">
                              100-02-06-002 (Amount Consumed)
                            </option>
                            <option defaultValue="2">
                              100-02-06-003 (Expense Consumed)
                            </option>
                            <option defaultValue="3">
                              100-02-06-004 (Stock Consumed)
                            </option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="amountBankExpense">
                            Amount<span className="text-danger"> *</span>
                          </Label>
                          <Input
                            id="amount"
                            name="amount"
                            placeholder="Enter Amount"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={5}>
                        <FormGroup>
                          <Label for="taxAccountBankExpense">Tax Account</Label>
                          <select
                            className="form-select form-select-md"
                            aria-label=".form-select-md example"
                            required
                          >
                            <option selected>
                              [100-02-06-001] Cash in Hand
                            </option>
                            <option defaultValue="1">
                              [100-02-06-002] Cash in Bank
                            </option>
                            <option defaultValue="2">
                              [100-02-06-003] Cash in House
                            </option>
                            <option defaultValue="3">
                              [100-02-06-004] No Cash
                            </option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="taxAmountBankExpense">Tax Amount</Label>
                          <Input
                            id="taxAmount"
                            name="taxAmount"
                            placeholder="Enter Tax Amount"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="netAmountBankExpense">Net Amount</Label>
                          <Input
                            id="netAmount"
                            name="netAmount"
                            placeholder="xx xxx xxx xxxx"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={5}>
                        <FormGroup>
                          <Label for="remarksBankExpense">
                            Remarks<span className="text-danger"> *</span>
                          </Label>
                          <Input
                            id="remarks"
                            name="remarks"
                            placeholder="Enter Remarks"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={3}>
                        <FormGroup>
                          <Label for="chequeBankExpense">Cheque No</Label>
                          <Input
                            id="cheque"
                            name="cheque"
                            placeholder="Enter Cheque"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
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
                      Save <FaCheck />
                    </Button>
                    <Button
                      style={{
                        float: "right",
                        background: "transparent",
                        borderRadius: "50px",
                        padding: "5px 23px",
                        border: "1px solid #00CCCC",
                      }}
                    >
                      <img src={upload} alt="uploadIcon" />
                    </Button>
                    <Button
                      style={{
                        float: "right",
                        background: "transparent",
                        borderRadius: "50px",
                        padding: "5px 23px",
                        border: "1px solid #00CCCC",
                      }}
                    >
                      <img src={attachment} alt="attachmentIcon" />
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={12}>
              <Row>
                <Col lg={12}>
                  <Card className="ribbon-box border shadow-none ">
                    <Row className="g-4 mb-3">
                      <Col className="">
                        <div>
                          <div className="mb-3">
                            <div className="ribbon ribbon-primary ribbon-shape">
                              Attachment File
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <CardBody>
                      <p className="text-muted"></p>
                      <FilePond
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={true}
                        maxFiles={6}
                        name="files"
                        className="filepond filepond-input-multiple"
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BankExpense;
