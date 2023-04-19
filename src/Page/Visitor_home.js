import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Activities from './Event-visitor/Activities'
import Carousel from './Event-visitor/Carousel'
import User_page from './Event-visitor/User-page'

export default function Visitor_home() {

  return (
    <>
      <Carousel />
      <User_page />
      <Activities />
    </>
  )
}
