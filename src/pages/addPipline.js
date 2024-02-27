import { useState } from "react";
import { Modal, ModalBody, Button } from "reactstrap";

function PiplineModal({ modalType, modalStatus, modalSize }) {

    const [isModalClose, setIsModalClose] = useState(modalStatus);

    return (
        <Modal isOpen={isModalClose} className={modalSize}>
            <div className="modal-header">
                <h5 className="modal-title">Add Pipline</h5>
                <Button type="button" aria-label="Close" className="btn-close" onClick={()=>setIsModalClose(false)}></Button>
            </div>
            <ModalBody>
                <form method="POST" action="#">
                    <div className="row row-cols-lg-auto g-3 align-items-center">
                        <input type="hidden" name="transactionType" value={modalType} />
                        <div className="col-10 flex-1">
                            <div className="mb-3">
                                <label htmlFor="piplineName" className="form-label visually-hidden">Pipline</label>
                                <input type="text" className="form-control" id="piplineName" placeholder="Enter the pipline" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="mb-3">
                                <Button type="submit" color="primary" > + Add</Button>
                            </div>
                        </div>
                    </div>
                </form>

            </ModalBody>
        </Modal>
    )
}

export { PiplineModal }