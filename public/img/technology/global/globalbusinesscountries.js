const { ref , inject} = Vue

export default{
    
    setup(){
      const injectedConstants = inject('MyConstants');
      
      return{
          injectedConstants
      }
    },
    
    template:`
    
    <section class="country_head">
    <div class="container">
        <span>Business Countries</span>
        <p>We Are Serving Globally</p>
    </div>
</section>

<section class="detail_country">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="produvtivity">
                    <h4>Our services in different countries and geographic areas to boost their </h4>
                    <span>BUSINESS PRODUCTIVITY</span>
                    <p>With more than 11 years of experience we have provided web & mobile app development services in every corner of the globe.</p>
                    <p>No matter where you are, 
                        There’s strong probability that we are providing services to the person or organization nearby you. </p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="place_country">
                    <a href="https://www.logicspice.com/usa/"><img alt="Web & App Development Services USA" src="./assets/img/globalbusinesscountries/USA.png"></a>
                    <h2>USA</h2>
                    <ul>
                        <li><a href="https://www.logicspice.com/usa/mobile-app-development-in-california/">California</a></li>
                        <li><a href="https://www.logicspice.com/usa/mobile-app-development-in-miami/">Miami</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#USA">More Cities</a></li>
                    </ul>
                </div>
                <div class="place_country">
                    <a href="https://www.logicspice.com/switzerland/"><img alt="App Development Services Switzerland" src="./assets/img/globalbusinesscountries/SW.png"></a>
                    <h2>Switzerland</h2>
                    <ul>
                        <li><a href="https://www.logicspice.com/switzerland/mobile-app-development-in-geneva/">Geneva</a></li>
                        <li><a href="https://www.logicspice.com/switzerland/mobile-app-development-in-zurich">Zürich</a></li>
                        <li><a href="#"  data-toggle="modal" data-target="#SW">More Cities</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="place_country">
                    <a href="https://www.logicspice.com/uae/"><img alt="Mobile App Development Services UAE" src="./assets/img/globalbusinesscountries/UAE.png"></a>
                    <h2>UAE</h2>
                    <ul>
                        <li><a href="https://www.logicspice.com/uae/mobile-app-development-in-dubai/">Dubai</a></li>
                        <li><a href="https://www.logicspice.com/uae/mobile-app-development-in-abu-dhabi">Abu Dhabi</a></li>
                        <li><a href="#"  data-toggle="modal" data-target="#UAE">More Cities</a></li>
                    </ul>
                </div>
                <div class="place_country">
                    <a href="https://www.logicspice.com/belgium/"><img alt="Mobile App Development Company Belgium" src="./assets/img/globalbusinesscountries/BELG.png"></a>
                    <h2>Belgium</h2>
                    <ul>
                        <li><a href="https://www.logicspice.com/belgium/mobile-app-development-in-brussels/">Brussels</a></li>
                        <li><a href="https://www.logicspice.com/belgium/mobile-app-development-in-flanders/">Flanders</a></li>
                        <li><a href="#"  data-toggle="modal" data-target="#belg">More Cities</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="place_country">
                    <a href="https://www.logicspice.com/australia/"><img alt="Web & Mobile App Development Company Australia" src="./assets/img/globalbusinesscountries/AU.png"></a>
                    <h2>Australia</h2>
                    <ul>
                        <li><a href="https://www.logicspice.com/australia/mobile-app-development-in-melbourne/">Melbourne</a></li>
                        <li><a href="https://www.logicspice.com/australia/mobile-app-development-in-sydney/">Sydney</a></li>

                    </ul>
                </div>
                <div class="place_country">
                    <a href="https://www.logicspice.com/uk/"><img alt="Web & Mobile App Development Services UK" src="./assets/img/globalbusinesscountries/UK.png"></a>
                    <h2>UK</h2>
                    <ul>
                        <li><a href="https://www.logicspice.com/uk/mobile-app-development-in-london/">London</a></li>
                        <li><a href="https://www.logicspice.com/uk/mobile-app-development-in-manchester/">Manchester</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="global_country">
    <div class="container">
        <h1>Web & Mobile App Development Services Globally</h1>
        <p>We at Logicspice have faced most of tough market challenges and has polished our skills by processing thousands of different tasks on different platforms. We have an 
            extensive experience of providing customized solutions to our clients. We don’t just help you in making your website live on the Internet and run, we also help you 
            with our hosting and SEO services and want to see your website to serve you well for the long haul. </p>
        <p>There are lots of domestic <strong>web development companies</strong> that offers leading edge solutions for different projects but the company like Logicspice is at the top in development 
            zone and offers the best affordable web designing solutions.</p>
        <p>If you are looking for any of web & <a href="https://www.logicspice.com/mobile-app-development"><strong>mobile app development services</strong></a>, we will be honored to hear from you. The team Logicspice is committed to provide best solutions at 
            the lowest cost with great designs. We have a strong customer base and serving web and mobile <strong>app development services globally</strong> including all major counties like <strong>USA,
            UK, UAE, Australia, India</strong>, Canada, Belgium, Switzerland, HongKong, Turkey, Ethiopia, Italy, Indonesia, Japan, China and many more.  </p>
    </div>
</section>

<section class="global_case_study">
    <div class="container">
        <h2>How We Are Serving Globally</h2>
        <p>We have been working with leading brands and companies, providing cutting-edge custom IT solutions for web and mobile platform.</p>
        <div class="row case_s owl-carousel">
            <div class="item-case">
                <div class="case-study-country">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs1.png">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs_logo1.png">
                    <p>Responsive Custom build Website for photographer quoting.</p>
                    <a href="https://www.logicspice.com/case-study/photographers247/">Case Study</a>
                </div>
            </div>
            <div class="item-case">
                <div class="case-study-country">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs2.png">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs_logo2.png">
                    <p>Custom build Website for Community for online tattoo</p>
                    <a href="https://www.logicspice.com/case-study/mytattooist/">Case Study</a>
                </div>
            </div>
            <div class="item-case">
                <div class="case-study-country">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs3.png">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs_logo3.png">
                    <p>Best coffee ordering app for iPhone & Android users.</p>
                    <a href="https://www.logicspice.com/case-study/beano-app/">Case Study</a>
                </div>
            </div>
            <div class="item-case">
                <div class="case-study-country">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs4.png">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs_logo4.png">
                    <p>Responsive Custom build Website for online coaching.</p>
                    <a href="https://www.logicspice.com/case-study/coursetakers/">Case Study</a>
                </div>
            </div>
            <div class="item-case">
                <div class="case-study-country">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs5.png">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs_logo5.png">
                    <p>Best schedule tracking app for iPhone & Android users.</p>
                    <a href="https://www.logicspice.com/case-study/utrack-app/">Case Study</a>
                </div>
            </div>
            <div class="item-case">
                <div class="case-study-country">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs6.png">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs_logo6.png">
                    <p>An interactive iPhone to play with aphorisms.</p>
                    <a href="https://www.logicspice.com/case-study/bestcit-app/">Case Study</a>
                </div>
            </div>
            <div class="item-case">
                <div class="case-study-country">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs7.png">
                    <img alt="" src="./assets/img/globalbusinesscountries/cs_logo7.png">
                    <p>Responsive Custom build Website for online coaching.</p>
                    <a href="https://www.logicspice.com/case-study/four-strokes/">Case Study</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="industries_country">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <img alt="" src="./assets/img/globalbusinesscountries/ind-girl.png">
            </div>
            <div class="col-sm-8">
                <h2>industries we have served</h2>
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat hotel">
                            <img alt="" src="./assets/img/globalbusinesscountries/hotels_icon.png">
                            <p><a href="https://www.logicspice.com/industries/Hotels-apps/">Hotels</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat transport">
                            <img alt="" src="./assets/img/globalbusinesscountries/transport_icon.png">
                            <p><a href="https://www.logicspice.com/industries/Transportation-apps/">Transportation</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat health">
                            <img alt="" src="./assets/img/globalbusinesscountries/health_icon.png">
                            <p><a href="https://www.logicspice.com/industries/health-care-apps/">Health Care</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat real">
                            <img alt="" src="./assets/img/globalbusinesscountries/real_icon.png">
                            <p><a href="https://www.logicspice.com/industries/commercial-and-residential-real-estate-apps/">Real Estate</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat service">
                            <img alt="" src="./assets/img/globalbusinesscountries/service_icon.png">
                            <p><a href="https://www.logicspice.com/industries/service-contractors-and-cleaning-companies-apps/">Service Contractors</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat goverment">
                            <img alt="" src="./assets/img/globalbusinesscountries/goverment_icon.png">
                            <p><a href="https://www.logicspice.com/industries/government-and-municipal-and-other-administrative-operations-apps/">Government Operations</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat school">
                            <img alt="" src="./assets/img/globalbusinesscountries/school_icon.png">
                            <p><a href="https://www.logicspice.com/industries/schools-and-education-apps/">Schools and Education</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat accounts">
                            <img alt="" src="./assets/img/globalbusinesscountries/accounts_icon.png">
                            <p><a href="https://www.logicspice.com/industries/accountants-and-financial-services-apps/">Accountants & Financial</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="ind_cat profassional">
                            <img alt="" src="./assets/img/globalbusinesscountries/profassional_icon.png">
                            <p><a href="https://www.logicspice.com/industries/professional-consultant-mobile-app-development/">Professional Consultants</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="testimonial_country">
    <div class="container">
        <h3>What Our Client Say About Us</h3>
        <div id="country_testimonial" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#country_testimonial" data-slide-to="0" class="active"></li>
                <li data-target="#country_testimonial" data-slide-to="1"></li>
                <li data-target="#country_testimonial" data-slide-to="2"></li>
                <li data-target="#country_testimonial" data-slide-to="3"></li>
                <li data-target="#country_testimonial" data-slide-to="4"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="./assets/img/globalbusinesscountries/kesepara.jpg" alt="Client" class="user-image" />                    
                    <div class="testi-text">“Exactly the best team available online ! I have been working and communicating with a few companies over the internet and i didn't see a single better company than logicspice. They are <a style="cursor:pointer;color:#31aae1;" class="show_data">More...</a>
                    <span class="hidendata" style="display: none;"> so skilled and professional.  Their knowledge about coding is incredible. And they never say "no" or "we can't" to any situation. Actually they are the best guys i have ever work with in my life. Their communication, kindness are so high level. Every step of my project, every progress of my project we need maybe 15 to 20 changes. And every time i wrote those needs to them, they did their work at most 1-2 days. Their speed and work quality is amazing ! Final word to those who wants to hire them: don't think twice ! Literally they are the best team in this website. And also their work progress and milestones are literally clear as they said. I am advising them to all of my friends and i will hire them again for sure !”</span></div>
                    <div class="userName">Burak</div>
                    <div class="userTitle">Turkey</div>
                </div>
                <div class="item">
                    <img src="./assets/img/globalbusinesscountries/dsherevk.jpg" alt="Client" class="user-image" />                    
                    <div class="testi-text">“Manish was very cooperative and professional during the project. The team was great, the project was very complicated and they tried their best to complete it with the best diligence. I
                                    <a style="cursor:pointer;color:#31aae1;" class="second_show">More...</a> <span class="second_slid" style="display: none;"> will definitely contact this company in the future for my project updates and would recommend to anyone who is looking for a good quality work.”</span></div>
                    <div class="userName">Dmitry</div>
                    <div class="userTitle">Canada</div>
                </div>
                <div class="item">
                    <img src="./assets/img/globalbusinesscountries/sabdeen.jpg" alt="Client" class="user-image" />                    
                    <div class="testi-text">“Best project management experience/journey I had. Great team spirit, very flexible and understanding while maintaining time and budget target.Top tear professional communication and support.”
                    </div>
                    <div class="userName">Sherif A.</div>
                    <div class="userTitle">Dubai</div>
                </div>
                <div class="item">
                    <img src="./assets/img/globalbusinesscountries/beatbuehlmann.jpg" alt="Client" class="user-image" />                    
                    <div class="testi-text">“Excellent work again from logicspice! They definitely put their best effort into the project along with very valuable inputs regarding possible enhancements of the web project. With logicspice
                                    <a style="cursor:pointer;color:#31aae1;" class="third_show">More...</a> <span class="third_slid" style="display: none;"> you don't just hire someone to execute your project specification but much more someone who helps you really make good and sophisticated web project. The communication is greate and feedback time very short. I really can't find anything to criticise and will definitely rehire soon as I'm very happy with their work. Thanks a lot to Manish and his team!”</span></div>
                    <div class="userName">Beat B.</div>
                    <div class="userTitle">Switzerland</div>
                </div>
                <div class="item">
                    <img src="./assets/img/globalbusinesscountries/tjulia1.jpg" alt="Client" class="user-image" />                    
                    <div class="testi-text">“I hired this team for a very complex project that involved handling many different types of users, payment options, and social network integration. Extremely timely and professional. Will use again!”</div>
                    <div class="userName">Tom J.</div>
                    <div class="userTitle">USA</div>
                </div>
            </div>

        </div>
    </div>
</section>


<section class="hire_exp">
    <div class="container">
        <h2>Hire Developers in 5 easy steps</h2>
        <ul class="hire-step">
            <li>
                <div class="hs1">
                    <img alt="" src="./assets/img/globalbusinesscountries/ryr.png">
                    <p>Raise Your Request</p>
                </div>
            </li>
            <li>
                <div class="hs1">
                    <img alt="" src="./assets/img/globalbusinesscountries/dyr.png">
                    <p>Discuss Your Requirment</p>
                </div>
            </li>
            <li>
                <div class="hs1">
                    <img alt="" src="./assets/img/globalbusinesscountries/select-expert.png">
                    <p>Select Experts</p>
                </div>
            </li>
            <li>
                <div class="hs1">
                    <img alt="" src="./assets/img/globalbusinesscountries/ftt.png">
                    <p>Finalize the Terms</p>
                </div>
            </li>
            <li>
                <div class="hs1">
                    <img alt="" src="./assets/img/globalbusinesscountries/asign.png">
                    <p>Assign and kick start</p>
                </div>
            </li>
        </ul>
        <div class="clearfix"></div>
        <br>
        <div class="btn-hire-coun">
            <a data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request To Hire Developer&quot;);
                        $(&quot;#contact_fr&quot;).val(&quot;Hire Developer&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-9292b238862a94c383a50f91-="">Hire Developer Now</a>
        </div>

    </div>
</section>


<div class="modal fade country-pop" id="USA" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">USA</h4>
            </div>
            <div class="modal-body">
                <ul>
                    <li><a href="https://www.logicspice.com/usa/mobile-app-development-in-california/"> California </a></li>
                    <li><a href="https://www.logicspice.com/usa/mobile-app-development-in-miami"> Miami </a></li>
                    <li><a href="https://www.logicspice.com/usa/mobile-app-development-in-florida"> Florida </a></li>
                    <li><a href="https://www.logicspice.com/usa/mobile-app-development-in-losangeles"> Los angeles </a></li>
                    <li><a href="https://www.logicspice.com/usa/mobile-app-development-in-newyork"> New york </a></li>
                    <li><a href="https://www.logicspice.com/usa/mobile-app-development-in-chicago"> Chicago </a></li> 
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade country-pop" id="UAE" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">UAE</h4>
            </div>
            <div class="modal-body">
                <ul>
                    <li><a href="https://www.logicspice.com/uae/mobile-app-development-in-dubai/"> Dubai </a></li>
                    <li><a href="https://www.logicspice.com/uae/mobile-app-development-in-abu-dhabi"> Abu Dhabi </a></li>
                    <li><a href="https://www.logicspice.com/uae/mobile-app-development-in-ajman"> Ajman </a></li>
                    <li><a href="https://www.logicspice.com/uae/mobile-app-development-in-al-ain"> Al Ain </a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade country-pop" id="SW" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Switzerland</h4>
            </div>
            <div class="modal-body">
                <ul>    
                    <li><a href="https://www.logicspice.com/switzerland/mobile-app-development-in-geneva/"> Geneva </a></li>
                    <li><a href="https://www.logicspice.com/switzerland/mobile-app-development-in-zurich"> Zürich </a></li>
                    <li><a href="https://www.logicspice.com/switzerland/mobile-app-development-in-basel"> Basel </a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade country-pop" id="belg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Belgium</h4>
            </div>
            <div class="modal-body">
                <ul>         
                    <li><a href="https://www.logicspice.com/belgium/mobile-app-development-in-brussels/"> Brussels </a></li>
                    <li><a href="https://www.logicspice.com/belgium/mobile-app-development-in-antwerp"> Antwerp </a></li>
                    <li><a href="https://www.logicspice.com/belgium/mobile-app-development-in-ghent"> Ghent </a></li>
                    <li><a href="https://www.logicspice.com/belgium/mobile-app-development-in-flanders"> Flanders </a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
    
    `
}