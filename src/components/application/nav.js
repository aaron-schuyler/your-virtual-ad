import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Nav className='border-bottom'>
      <Nav.Item>
        <Link className='nav-link' to='/schedule'>Schedule</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-link' to='/payroll'>Payroll</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-link' to='/people'>People</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='nav-link' to='/resources'>Resources</Link>
      </Nav.Item>
    </Nav>
  )
}
