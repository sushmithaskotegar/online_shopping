import React from 'react'
import './HomePage.style.scss'
function Homepage() {
    return (
        <div className='homepage'>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>



                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>


                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">Shop now</span>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Homepage
