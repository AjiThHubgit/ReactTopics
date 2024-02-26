import React from 'react';
import Header from '../Components/Header';
import {resJson} from '../utils/constant';

export default function About() {
  return (
    <div>
        <Header data={resJson} />
        <div>About</div>
    </div>
  )
}
