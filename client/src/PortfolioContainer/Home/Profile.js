import React from 'react'

export default function Profile() {
  return (
    <div classsName='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href="https://www.facebook.com/profile.php?id=100015248027613">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="https://github.com/zehsantoss">
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a href="https://www.instagram.com/zehsantoss/?hl=en">
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-prot%C3%A1sio-aabaab227/">
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5564993138737&text=Adiciona aí!">
                        <i className='fa fa-whatsapp'></i>
                    </a>
                </div>

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">José</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1></h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

