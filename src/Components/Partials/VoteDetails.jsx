import React, { useState } from 'react'
import candidates from './Candidate'

const VoteDetails = (props) => {
  const [candidateId, setCandidateId] = useState(0);
  const handleSave = () => {
    props.setConfirm(true)
    props.setCandidate(candidates[candidateId])
  }
  return (
    <>
      <div className="col-md-6 text-center">
        <img src={candidates[candidateId].image} alt={candidates[candidateId].name ?? "Name"} className="edit-candidate-img rounded-circle shadow border border-5" />
        <div className="d-flex flex-column text-start justify-content-center my-5">
          <table className="edit-table">
            <tbody>
              <tr>
                <td className="text-start fw-bold">Candidate</td>
                <td>{candidates[candidateId].name}</td>
              </tr>
              <tr>
                <td className="text-start fw-bold">Party</td>
                <td>{candidates[candidateId].party}</td>
              </tr>
              <tr>
                <td className="text-start fw-bold">Address</td>
                <td>{candidates[candidateId].address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center align -items-center">
        <form className="w-75 py-5 w-100">
          <div className="form-floating mb-3">
            <select id="candidate" className="form-control" placeholder="Choose..." value={candidateId} onChange={(e) => { setCandidateId(e.target.value) }}>
              {
                candidates.map(candidate => (
                  <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
                ))
              }
            </select>
            <label htmlFor="candidate">Select Candidate</label>
          </div>
          <div className="row g-0">
            <div className="col-lg-2 col-12 py-2">
              <input className="form-control border-0 bg-transparent fw-bold" value="Phase 1" />
            </div>
            <div className="col-lg-5 gx-1">
              <div className="form -floating mb-3">
                <input type="text" className="form-control py-2" id="evm-votes" placeholder="EVM Votes" disabled={candidateId == 0} />
                {/* <label htmlFor="evm-votes">EVM Votes</label> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="form -floating">
                <input type="text" className="form-control py-2" id="postal-votes" placeholder="Postal Votes" disabled={candidateId == 0} />
                {/* <label htmlFor="postal-votes">Postal Votes</label> */}
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-2 col-12 py-2">
              <input className="form-control border-0 bg-transparent fw-bold" value="Phase 2" />
            </div>
            <div className="col-lg-5 gx-1">
              <div className="form -floating mb-3">
                <input type="text" className="form-control py-2" id="evm-votes" placeholder="EVM Votes" disabled={candidateId == 0} />
                {/* <label htmlFor="evm-votes">EVM Votes</label> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="form -floating">
                <input type="text" className="form-control py-2" id="postal-votes" placeholder="Postal Votes" disabled={candidateId == 0} />
                {/* <label htmlFor="postal-votes">Postal Votes</label> */}
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-2 col-12 py-2">
              <input className="form-control border-0 bg-transparent fw-bold" value="Phase 3" />
            </div>
            <div className="col-lg-5 gx-1">
              <div className="form -floating mb-3">
                <input type="text" className="form-control py-2" id="evm-votes" placeholder="EVM Votes" disabled={candidateId == 0} />
                {/* <label htmlFor="evm-votes">EVM Votes</label> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="form -floating">
                <input type="text" className="form-control py-2" id="postal-votes" placeholder="Postal Votes" disabled={candidateId == 0} />
                {/* <label htmlFor="postal-votes">Postal Votes</label> */}
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-2 col-12 py-2">
              <input className="form-control border-0 bg-transparent fw-bold" value="Phase 4" />
            </div>
            <div className="col-lg-5 gx-1">
              <div className="form -floating mb-3">
                <input type="text" className="form-control py-2" id="evm-votes" placeholder="EVM Votes" disabled={candidateId == 0} />
                {/* <label htmlFor="evm-votes">EVM Votes</label> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="form -floating">
                <input type="text" className="form-control py-2" id="postal-votes" placeholder="Postal Votes" disabled={candidateId == 0} />
                {/* <label htmlFor="postal-votes">Postal Votes</label> */}
              </div>
            </div>
          </div>

        </form>
      </div>
      <div className="text-end">
        <button type="button" className="btn btn-primary mt-3" onClick={handleSave} disabled={candidateId == 0}>
          Save Changes
        </button>
      </div>
    </>
  )
}

export default VoteDetails