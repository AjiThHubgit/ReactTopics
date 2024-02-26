import React from 'react'
import Header from '../Components/Header';
import {resJson} from '../utils/constant';

export default function Home() {
  return (
    <div>
        <Header data={resJson} />
        <div>Home</div>
    </div>
  )
}
