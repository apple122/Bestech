import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Page/About'
import Candidate from '../Page/Candidate'
import Event_Show from '../Page/Event-visitor/Event_Show'
import Event_banner from '../Page/Event_banner'
import Lucky_winners from '../Page/Lucky_winners'
import RanDOM from '../Page/RanDOM'
import Visitor_home from '../Page/Visitor_home'

export default function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Visitor_home />} />
        <Route path='/*' element={<Visitor_home />} />
        <Route path='/Event/:page' element={<Event_Show />} />
        <Route path='/Radom' element={<RanDOM />} />
        <Route path='/Candidate' element={<Candidate />} />
        <Route path='/About' element={<About />} />
        <Route path='/Lucky_winners' element={<Lucky_winners />} />
        <Route path='/Event' element={<Event_banner />} />
    </Routes>
  )
}
