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

const CashExpense = () => {
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
          <Row>
            <Col xs={12}></Col>
            <Card
              fluid
              style={{
                backgroundColor: "white",
                padding: "1.3%",
                margin: "0.3%",
              }}
            >
              <Form>
              <BreadCrumb title="CashExpense" pageTitle="CashExpensePage" />
                <Row>
                  <Col md={3} 
                  style={{
                    marginLeft: "55rem",
                  }}>
                    <FormGroup>
                      <Label for="financialYearCashExpense">Financial Year</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option selected>2020-2021</option>
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
                      <Label for="siteNameCashExpense">Site Name</Label>
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
                      <Label for="classCashExpense">Class</Label>
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
                      <Label for="dateCashExpense">Date</Label>
                      <Flatpickr
                        className="form-control"
                        id="datepicker-publish-input"
                        placeholder="Select date"
                        options={{
                          dateFormat: "d-m-Y",
                          defaultDate: ["2022-01-20"],
                        }}
                      />
                    </FormGroup>
                  </Col>

                  <Col md={5}>
                    <FormGroup>
                      <Label for="selectExpenseAccount">Select Expense Account</Label>
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
                      <Label for="amountCashExpense">Amount</Label>
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
                      <Label for="taxAccountCashExpense">Tax Account</Label>
                      <select
                        className="form-select form-select-md"
                        aria-label=".form-select-md example"
                        required
                      >
                        <option selected>[100-02-06-001] Cash in Hand</option>
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
                      <Label for="taxAmountCashExpense">Tax Amount</Label>
                      <Input
                        id="taxAmount"
                        name="taxAmount"
                        placeholder="Enter Tax Amount"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="netAmountCashExpense">Net Amount</Label>
                      <Input
                        id="netAmount"
                        name="netAmount"
                        placeholder="xx xxx xxx xxxx"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="remarksCashExpense">Remarks</Label>
                      <Input
                        id="remarks *"
                        name="remarks *"
                        placeholder="Enter Remarks"
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
            </Card>
          </Row>
          <Row className="mt-4">
            <Col lg={12}>
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardHeader>
                      <h4 className="card-title mb-6">Attachment File</h4>
                    </CardHeader>

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

export default CashExpense;
