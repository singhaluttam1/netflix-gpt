import React from 'react'
import Login from './Login'
import Browse from './Browse'
import HelpCenter from './HelpCenter'
import { Routes, Route } from 'react-router-dom'
import ProfileEditForm from './Profile'
const Body = () => {
  return (
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/profiles" element={<ProfileEditForm />} />
      </Routes>
    </div>
  )
}

export default Body