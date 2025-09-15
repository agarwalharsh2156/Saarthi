import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthCard } from '../components/AuthCard'

export const Auth = () => {
  const navigate = useNavigate()
  const onSuccess = () => navigate('/menu')
  return <AuthCard onSuccess={onSuccess} />
}
