import React, { useState } from 'react'
import VoteDetails from './Partials/VoteDetails'
import ConfirmVoteDetails from './Partials/ConfirmVoteDetails'

const OperatorDB = () => {
  const [confirm, setConfirm] = useState(false);
  const [candidate, setCandidate] = useState({});
  return (
    <>
      <div className="container row mx-auto  m-5 p-5 bg-warning bg-opacity-25 rounded shadow">
      {!(confirm) && (
        <VoteDetails
          setConfirm={setConfirm}
          setCandidate={setCandidate}
        />)
      }
      {confirm && (
        <ConfirmVoteDetails
          setConfirm={setConfirm}
          candidate = {candidate}
        />)
      }
    </div >
    </>
  )
}

export default OperatorDB