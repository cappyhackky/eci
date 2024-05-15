import React from 'react';

const CandidateModal = (props) => {
    const handleModalClose = ()=>{
        props.setShowModal(false)
    }
    const handleModalSubmit = ()=>{
        props.setShowModal(false)
    }
    return (
        <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" style={{ display: props.showModal ? 'block' : 'none' }} data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Candidate Details</h5>
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={props.candidate.image} alt={props.candidate.name} className="edit-candidate-img rounded-circle shadow border border-5" />
                        <div className="d-flex flex-column text-start justify-content-center my-5">
                            <table className="edit-table">
                                <tbody>
                                    <tr>
                                        <td className="text-start fw-bold">Candidate</td>
                                        <td>{props.candidate.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start fw-bold">Party</td>
                                        <td>{props.candidate.party}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start fw-bold">Address</td>
                                        <td>{props.candidate.address}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleModalSubmit}>Submmit</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleModalClose}>Close</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateModal;
