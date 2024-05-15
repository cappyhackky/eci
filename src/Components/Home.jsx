import React, { useState } from 'react'
import Login from './Partials/Login'
import CandidateCard from './Partials/CandidateCard'
import CandidateTable from './Partials/CandidateTable'
import { FaIdCard } from 'react-icons/fa6'
import { BiTable } from 'react-icons/bi'
const Home = () => {
  const [cardView, setCardView] = useState(true);
  const [tableView, setTableView] = useState(false);
  const switchCardView = () => {
    setCardView(true);
    setTableView(false);
  }
  const switchTableView = () => {
    setCardView(false);
    setTableView(true);
  }
  return (
    <>
      <Login />
      <div className="bg-secondary bg-opacity-25">
      <div className="text-center bg-white p-2">
        <div className="h1 fw-bold">Poll Election to Lok Sabha 2024 : Trends & Results June 2024</div>
        <div className="h2">Uttrakhand Assembly Constituency  <span className="fw-bold text-navy">NAINITAL-UDHAM SINGH NAGAR (UTTARAKHAND)</span></div>
      </div>
      <div className='bg-green text-light m-0'>
        <div className='display-3 fw-light d-flex justify-content-end pe-3'>
          <span className="me-3" title="Constituency Wise Candidate View" onClick={switchCardView}> <FaIdCard /></span>
          <span title="Constituency Wise Table View" onClick={switchTableView}> <BiTable /> </span>
        </div>
      </div>
      {cardView && <CandidateCard />}
      {tableView && <CandidateTable />}
      </div>
    </>
  )
}

export default Home