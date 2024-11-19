import Link from 'next/link'
import React from 'react'

const HireExpert = () => {
  return (
    <section className="hire-expert-home">
        <div className="container">
          <div className="headings">
            <h2>HIRE DEVELOPER MINDS FOR DIFFERENT PLATFORM</h2>
            <p>
              Hire developers &amp; programmers from logicspice. Our technical
              experts and skilled developers offer you quite a huge range of
              services in Web, iPhone and Android development.
            </p>
          </div>
          <ul className="hiring-list">
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-reactjs-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon reactjs-icon"></span>
                  </span>
                </span>
                <strong>Hire ReactJS Developers</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-ios-app-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon apple-icon"></span>
                  </span>
                </span>
                <strong>Hire iOS App Developer</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-web-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon web-icon"></span>
                  </span>
                </span>
                <strong>Hire Web Developer</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-node-js-experts">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon cake-icon"></span>
                  </span>
                </span>
                <strong>Hire Node.JS Developer</strong>
              </Link>
            </li>

            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-laravel-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon lara-icon"></span>
                  </span>
                </span>
                <strong>Hire Laravel Developer</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-react-native-developers">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon react-native-icon"></span>
                  </span>
                </span>
                <strong>Hire React Native Developers</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-hybrid-mobile-app-developer">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon mag-icon"></span>
                  </span>
                </span>
                <strong>Hire Hybrid App Developer</strong>
              </Link>
            </li>
            <li data-aos="fade-left" class="aos-init aos-animate">
              <Link href="/hire-wordpress-experts">
                <span className="home-hire-icon">
                  <span className="bg">
                    <span className="icon word-icon"></span>
                  </span>
                </span>
                <strong>Hire Wordpress Developer</strong>
              </Link>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default HireExpert
