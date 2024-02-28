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
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const CashExpense = () => {
  document.title = "CRM | Vaival Solutions";

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
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="CashExpense" pageTitle="CashExpensePage" />
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
                <Row>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="exampleEmail">Site Name</Label>
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
                      <Label for="exampleEmail">Class</Label>
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
                  <Col md={6}>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleAddress">Address</Label>
                  <Input
                    id="exampleAddress"
                    name="address"
                    placeholder="1234 Main St"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">Address 2</Label>
                  <Input
                    id="exampleAddress2"
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                  />
                </FormGroup>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">City</Label>
                      <Input id="exampleCity" name="city" />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">State</Label>
                      <Input id="exampleState" name="state" />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">Zip</Label>
                      <Input id="exampleZip" name="zip" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup check>
                  <Input id="exampleCheck" name="check" type="checkbox" />
                  <Label check for="exampleCheck">
                    Check me out
                  </Label>
                </FormGroup>
                <Button>Sign in</Button>
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
                      <p className="text-muted">
                        
                      </p>
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
