import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./FooterComponent.scss"
import "../MediaQueries/MediaQueries.scss"

const FooterComponent = () => {
  return (
    <footer>
        <div className="container-footer">
            <div className="footer-hero">
                <div className="footer-img">
                    <img src="/assets/img/logo-footer.png" alt=""/>
                </div>
            </div>
        </div>
    </footer>
  ) 
}

export default FooterComponent