import React from 'react'
import { NavLink } from 'react-router-dom'
import './pageCss/error.css'

const ErrorPage = () => {
  return (
    <>

      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin" />
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place? 
          <p>Let's go
            <NavLink to="/">
              home
            </NavLink>
            and try from there.
          </p>
        </div>
      </div>


    </>
  )
}

export default ErrorPage