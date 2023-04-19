import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Prizes from '../components/Prize/Prizes'
import Footer from '../components/Manage-the-home-page/Footer/Footer'
import About from '../components/Manage-the-home-page/About/About'
import Candidate from '../components/candidate/Candidate'
import Form_candidate from '../components/candidate/Form-candidate'
import Slide from '../components/Manage-the-home-page/Slide/Slide'
import Form_slide from '../components/Manage-the-home-page/Slide/Form-slide'
import Form_period from '../components/period_type/period/Form-period'
import Add_prize from '../components/Prize/Add-prize'
import Update_candidate from '../components/candidate/Update-candidate'
import Form_edit_period from '../components/period_type/period/Form-edit-period'
import Context_Index from '../components/Context/Index'
import Period from '../pages/Period/Period/Index'
import Form_Bill from '../components/Bill/Form.Bill'
import Form_Candidate_Bill from '../components/Bill/Form.candidate'
import Bill from '../pages/Bill/Index'
import Period_Multi from '../pages/Period/Period_Multi/Index'
import Form_period_multi from '../components/period_type/period_multi/Form-period_multi'
import Index_PDV from '../pages/City/Index'
import Index_User from '../pages/Users/Index'
import Index_Event from '../components/Manage-the-home-page/Event/Index'
import Form_Event from '../components/Manage-the-home-page/Event/Form.Event'
import Form_Edit_Event from '../components/Manage-the-home-page/Event/Form.edit.Event'
import Form_user from '../components/Users/Form.user'
import Form_Edit_User from '../components/Users/Form.Edit.user'

const Routers = () => {
  return (
    <div>
      <Routes>

        <Route path='/*' element={<Context_Index />} />

        {/* Footer  */}
        <Route path='/Footer' element={<Footer />} />

        {/* About  */}
        <Route path='/about' element={<About />} />

        {/* City  */}
        <Route path='/City' element={<Index_PDV />} />

        {/* user  */}
        <Route path='/user' element={<Index_User />} />
        <Route path='/add-user' element={<Form_user />} />
        <Route path='/edit-user' element={<Form_Edit_User />} />

        {/* prize  */}
        <Route path='/prize' element={<Prizes />} />
        <Route path='/add-prize' element={<Add_prize />} />

        {/* Candidate  */}
        <Route path='/Candidates_eligibility' element={<Candidate />} />
        <Route path='/add-candidate' element={<Form_candidate />} />
        <Route path='/update-candidate' element={<Update_candidate />} />

        {/* Slide  */}
        <Route path='/slider' element={<Slide />} />
        <Route path='/slider/add-slide' element={<Form_slide />} />

        {/* Period  */}
        <Route path='/period' element={<Period />} />
        <Route path='/add-period' element={<Form_period />} />
        <Route path='/period_multi' element={<Period_Multi />} />
        <Route path='/add-period-multi' element={<Form_period_multi />} />
        <Route path='/update-period' element={<Form_edit_period />} />

        {/* Bill  */}
        <Route path='/Bill' element={<Bill />} />
        <Route path='/add-bil' element={<Form_Bill />} />
        <Route path='/add-bill' element={<Form_Candidate_Bill />} />

        {/* Event */}
        <Route path='/event' element={<Index_Event />} />
        <Route path='/add-event' element={<Form_Event />} />
        <Route path='/edit-event' element={<Form_Edit_Event />} />

      </Routes>
    </div>
  )
}

export default Routers