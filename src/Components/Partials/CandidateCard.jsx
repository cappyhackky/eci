import React from 'react'
import candidates from './Candidate.js'

const CandidateCard = () => {
  return (
    <>
      <div>
        <div className="row ps-5 mx-auto">
          {candidates.map(candidate => ( candidate.id == 0 ? null :
            <div className='col-12 col-md-6 col-lg-4 img-container' key={candidate.id}>
              <img className="shadow img-content rounded-circle bg-light border border-5 border-top-0 border-bottom-0 border-end-0 border-danger p-2" src={candidate.image} alt="" />
              <div className="d-flex align-items-center m-4 shadow bg-light">
                <div className="candidate-info d-flex flex-column w-100 rounded-left">
                  <div className="d-flex h5 fw-bold py-3 bg-info bg-opacity-25 justify-content-between p-3 ps-5 rounded-bottom rounded-left">
                    <span className="">Status</span>
                    <span className="">Votes</span>
                  </div>
                  <div className="m-2 ms-5 ps-5">
                    <p className="text-uppercase fw-bold h5">{candidate.name}</p>
                    <p className="fw-bold text-success">{candidate.party}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CandidateCard