import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Layout  from './pages/layout/Layout'
import Applicants from './pages/applicant/Applicants'
import ApplicantsList from './pages/applicantList/ApplicantList'
import ApplicantsOffer from './pages/applicantOffer/ApplicantOffer'
import Home from './pages/home/Home'
import ApplicantView from './pages/applicantView/ApplicantView'
import ApplicantSkill from './pages/applicantView/ApplicantSkill'
import OfferList from './pages/offer/OfferList'
import ViewApply from './pages/applicantView/ViewApply'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>

          <Route path="/home" element={<Home />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/applicantList" element={<ApplicantsList />}/>

          <Route path="/applicantList/viewApplicant/:idApplicant" element={<ApplicantView />} />
          <Route path="/applicantList/applicantSkill/:idApplicant" element={<ApplicantSkill />} />
          
          <Route path="/offerList" element={<OfferList />} />  

          <Route path="/applicantList/viewApplicant/:idApplicant/apply/:idApplicant" element={<ViewApply/>} />

        </Route>
      </Routes>
      </BrowserRouter>    
 
  </React.StrictMode>
)

