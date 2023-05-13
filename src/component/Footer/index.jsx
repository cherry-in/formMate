import React, { useState } from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <div className='mt-auto p-5 text-white bg-primary d-flex flex-column'>
      <h3 className='text-white'>계약라이터</h3>
      <table>
        <tbody>
          <tr>
            <td>BE</td>
            <td>김채린</td>
          </tr>
          <tr>
            <td>FE</td>
            <td>김채린</td>
          </tr>
          <tr>
            <td>DESIGN</td>
            <td>김채린</td>
          </tr>
        </tbody>
      </table>
      <div className='mt-3'>@Corp. All rights reserved.</div>
    </div>
  )
}

export default Footer;