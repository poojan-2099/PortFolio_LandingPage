import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/poojan.patel.507027/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='mailto:patelpoojan2099@gmail.com'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/irrefutable_one/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/poojan-patel-9a729a1a5/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/poojan-2099'>
                            <i className='fa fa-github-square'></i>
                        </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello,I'M<span className='highlighted-text'>Poojan</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev💻",
                                1000,
                                "MERN Stack Dev👨‍💻",
                                1000,
                                "React Dev 🕹",
                                1000,
                                "A/V Associate 🖥",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>Knack of building applications with front anf back end operations.</span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                            {""}
                            Hire me{" "}
                    </button>
                    <a href='Poojan_Resume.pdf' download='Poojan Resume.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
