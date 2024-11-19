"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Ourclient = () => {
  var settings = {
    nav: true,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <div class="media">
            <div class="media-left">
              <Image width={100} height={100}
                class="media-object"
                src="/img/globalbusinesscountries/kesepara.jpg"
                alt="..."
              />
            </div>
            <div class="media-body">
              <h4 class="media-heading">C2C Ecommerce Website About Fashion</h4>
              <p>
              &quot;Exactly the best team available online ! I have been working
                and communicating with a few companies over the internet and i
                didn&apos;t see a single better company than logicspice. They are{" "}
                <a class="show_data">More...</a>
                <span class="hidendata">
                  {" "}
                  so skilled and professional. Their knowledge about coding is
                  incredible. And they never say &quot;no&quot; or &quot;we can&apos;t&quot; to any
                  situation. Actually they are the best guys i have ever work
                  with in my life. Their communication, kindness are so high
                  level. Every step of my project, every progress of my project
                  we need maybe 15 to 20 changes. And every time i wrote those
                  needs to them, they did their work at most 1-2 days. Their
                  speed and work quality is amazing ! Final word to those who
                  wants to hire them: don&apos;t think twice ! Literally they are the
                  best team in this website. And also their work progress and
                  milestones are literally clear as they said. I am advising
                  them to all of my friends and i will hire them again for sure
                  !&quot;
                </span>
              </p>
              <div class="author_name">
                Burak <span>Turkey</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="media">
            <div class="media-left">
              <Image width={100} height={100}
                class="media-object"
                src="/img/globalbusinesscountries/dsherevk.jpg"
                alt="..."
              />
            </div>
            <div class="media-body">
              <h4 class="media-heading">
                Website + Mobile App (iOs&amp;Android)
              </h4>
              <p>
              &quot;Manish was very cooperative and professional during the
                project. The team was great, the project was very complicated
                and they tried their best to complete it with the best
                diligence. I <a class="show_data">More...</a>
                <span class="hidendata">
                  {" "}
                  will definitely contact this company in the future for my
                  project updates and would recommend to anyone who is looking
                  for a good quality work.&quot;
                </span>
              </p>
              <div class="author_name">
                Dmitry <span>Canada</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="media">
            <div class="media-left">
              <Image width={100} height={100}
                class="media-object"
                src="/img/globalbusinesscountries/sabdeen.jpg"
                alt="..."
              />
            </div>
            <div class="media-body">
              <h4 class="media-heading">Build a Website</h4>
              <p>
              &quot;Best project management experience/journey I had. Great team
                spirit, very flexible and understanding while maintaining time
                and budget target.Top tear professional communication and
                support.&quot;{" "}
              </p>
              <div class="author_name">
                Sherif A. <span>Dubai</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="media">
            <div class="media-left">
              <Image width={100} height={100}
                class="media-object"
                src="/img/globalbusinesscountries/beatbuehlmann.jpg"
                alt="..."
              />
            </div>
            <div class="media-body">
              <h4 class="media-heading">
                Financial Web Application For Pensioners
              </h4>
              <p>
                &quot;Excellent work again from logicspice! They definitely put their
                best effort into the project along with very valuable inputs
                regarding possible enhancements of the web project. With
                logicspice <a class="show_data">More...</a>
                <span class="hidendata">
                  {" "}
                  you don&apos;t just hire someone to execute your project
                  specification but much more someone who helps you really make
                  good and sophisticated web project. The communication is
                  greate and feedback time very short. I really can&apos;t find
                  anything to criticise and will definitely rehire soon as I&apos;m
                  very happy with their work. Thanks a lot to Manish and his
                  team!&quot;
                </span>
              </p>
              <div class="author_name">
                Beat B. <span>Switzerland</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="media">
            <div class="media-left">
              <Image width={100} height={100}
                class="media-object"
                src="/img/globalbusinesscountries/tjulia1.jpg"
                alt="..."
              />
            </div>
            <div class="media-body">
              <h4 class="media-heading">
                Build a Social Networking Website With Payment System
              </h4>
              <p>
                &quot;I hired this team for a very complex project that involved
                handling many different types of users, payment options, and
                social network integration. Extremely timely and professional.
                Will use again!&quot;{" "}
              </p>
              <div class="author_name">
                Tom J. <span>USA</span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Ourclient;






