import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/login'

export default function PublicContainer() {
  return (
    <>
        <Routes>
            <Route exact path="/login" element={<Login />} />
        </Routes>
    </>
  )
}
