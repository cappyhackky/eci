import React from 'react'

const ConfirmVoteDetails = (props) => {
  const handleConfirm = ()=>{
    props.setConfirm(false)
  }
  return (
    <>
      <div className="row bg-white p-3 mx-auto">
        <div className="col-lg-3 text-center">
          <img className="rounded-circle shadow img-fluid" src={props.candidate.image} alt={props.candidate.name} />
        </div>
        <div className="d-flex flex-column text-start justify-content-center my-5 col-lg-9">
          <table className="table ">
            <tbody className="bg-tranparent">
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
      <table className="edit-table my-3 w-50 mx-auto">
        <tbody className="bg-tranparent">
          <tr>
            <td className="text-start fw-bold">Phase-1</td>
            <td>{props.candidate.vote_phase_1}</td>
          </tr>
          <tr>
            <td className="text-start fw-bold">Phase-2</td>
            <td>{props.candidate.vote_phase_2}</td>
          </tr>
          <tr>
            <td className="text-start fw-bold">Phase-3</td>
            <td>{props.candidate.vote_phase_3}</td>
          </tr>
          <tr>
            <td className="text-start fw-bold">Phase-4</td>
            <td>{props.candidate.vote_phase_4}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-end">
        <button type="button" className="btn btn-primary mt-3" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </>
  )
}

export default ConfirmVoteDetails