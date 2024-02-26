import React from 'react';
import Header from '../Components/Header';
import { resJson } from '../utils/constant';
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <Header data={resJson} />
      <div>Contact</div>
      <button onClick={() => navigate('/')}>Go To Home 🏡</button>
    </div>
  )
}