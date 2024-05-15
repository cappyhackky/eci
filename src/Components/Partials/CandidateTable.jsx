import React from 'react'
import candidates from './Candidate.js'

const CandidateTable = () => {
  return (
    <>
      <div className="m-2 my-3 table-container bg-white">
        <table className="shadow candidate-table">
          <thead>
            <tr className='table-padding'>
              <th>Sno.</th>
              <th>Candidate</th>
              <th>Party</th>
              {/* <th>Address</th> */}
              <th>Phase 1</th>
              <th>Phase 2</th>
              <th>Phase 3</th>
              <th>Phase 4</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => ( candidate.id == 0 ? null :
              <tr key={candidate.id} className='table-padding'>
                <td>{candidate.id}</td>
                <td>
                  <div className="text-center">
                    <img className="img-fluid candidate-img rounded-circle border" src={candidate.image} alt="avatar" />
                    <div className='fw-bold'>
                      <span>{candidate.name}</span>
                     </div>
                  </div>
                </td>
                <td>{candidate.party}</td>
                {/* <td>{candidate.address}</td> */}
                <td>{candidate.vote_phase_1}</td>
                <td>{candidate.vote_phase_2}</td>
                <td>{candidate.vote_phase_3}</td>
                <td>{candidate.vote_phase_4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CandidateTable