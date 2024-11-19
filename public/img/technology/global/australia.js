const { ref , onMounted , inject} = Vue

export default{
    methods:{
        opendiv(tab){
            if(tab == "tab1"){
                this.MobileappTab = 'active'
                this.WhyweneedTab = 'hide'
                
            }else if(tab == "tab2"){
                this.MobileappTab = 'hide'
                this.WhyweneedTab = 'active'
                
            }
        },
        
    },
    setup(){
      const injectedConstants = inject('MyConstants');
      const MobileappTab = ref('active');
      const WhyweneedTab = ref('hide');
      onMounted(() => {
            $('#carousel-example-generic').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                autoplayTimeout: 5000,
                smartSpeed: 500,
                slideSpeed: 3000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
            
            $(".owl-prev").html('<i class="fa fa-angle-left"></i>');
            $(".owl-next").html('<i class="fa fa-angle-right"></i>');
            $('#myCarousel_splash').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 500,
                slideSpeed: 3000,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
            
            $(".owl-prev").html('<i class="fa fa-angle-left"></i>');
            $(".owl-next").html('<i class="fa fa-angle-right"></i>');
        }) 
      return{
          MobileappTab,
          WhyweneedTab,
          injectedConstants
      }
    },
    
    template:`
    <section class="country_header_secton aust">
    <div class="country_header_secton_in">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="country_header_secton_mobile_screen">
                <div class="country_header_secton_mobile_screen_data">
                        <ul>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="Business Apps" src="./../assets/img/globalpages/Business-Apps.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="mobile Apps" src="./../assets/img/globalpages/mobile-Apps.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="Business Apps Development" src="./../assets/img/globalpages/BusinesS-Apps-Development.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="Business App Development Service" src="./../assets/img/globalpages/Business-Service.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="Business App Developers" src="./../assets/img/globalpages/Business_Developers.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="app-development" src="./../assets/img/globalpages/app-development.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="application developers" src="./../assets/img/globalpages/application-developers.jpg">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="mobile apps" src="./../assets/img/globalpages/mobile-apps-logicspice.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="app development services" src="./../assets/img/globalpages/app-development-services.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="expert app developers" src="./../assets/img/globalpages/expert-app-developers.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="android apps development" src="./../assets/img/globalpages/android-apps-development.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="mobile apps development" src="./../assets/img/globalpages/mobile-apps-development.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="affordable apps" src="./../assets/img/globalpages/affordable-apps.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="mobile apps-logicspice" src="./../assets/img/globalpages/apps-logicspice.png">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-center main-ind-text">
                <div class="country_header_secton_right_data1">Outstanding</div><div class="country_header_secton_right_data2">Business Apps</div>
                <div class="foradd">for</div><div class="country_header_secton_right_countryname">AUSTRALIA</div>
                <div class="country_header_secton_right_data3">Enhance Your Business With Innovative Mobile Apps</div>
                <div class="portfolio_button_center">
                <div id="inquirenow" class="portfolio_button"> <a data-toggle="modal" data-target="#contactFix" class="btn btn-primary"><span>Enquire Now</span></a></div>
                </div>
            </div>
            
        </div>
            </div>
    </div>
    </div>
</section>

<section class="mobileapp_devcountry_bx">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="mobileapp_devcountry_bx_left">
                    <h1 class="mobileapp_devcountry_bx_left_title">Mobile App Development Company In <span>AUSTRALIA</span></h1>
                    <p style="text-align: justify;">Logicspice is a leading mobile app development company offering web & mobile app development services in Australia. We follow the different technology, It begins with understanding the actual requirement of clients. The process starts with designing and development and end till the launch. We do the testing with high quality standard software. We have a expert developers who are having years of experience to convert your imagination into a a powerful app or website for you and all your customers.</p>
                    <p style="text-align: justify;">We are one the most proficient app development company in creating user friendly apps for all the major platforms. We utilize advanced technology in the development process and deliver great user experience. We have the skills and experience to create both iOS and Android App.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mobileapp_devcountry_bx_right">
                    <img alt="Accountants and Financial Industry Apps" src="./../assets/img/globalpages/country_stepwisemobileapp.png">
                </div>
            </div>
        </div>
    </div>
</section>
<section class="creativity">
    <div class="container">
        <h3 class="mobileapp_devcountry_bx_left_title">We Work With Essence of Creativity</h3>
        <p> Logicspice is a app development company providing customized web, android and iPhone app development solutions with best optimal designs and creativity throughout the 
            world including major cities of Australia. App developed by logicspice help businesses to enhance their brand presence, trust, loyalty among the current 
            and prospective users in the global market. </p>
    </div>
</section>
<section>

<section class="app_shown_describe">
    <div class="container">
    <div class="row">
        <div class="col-sm-4">
            <div class="app_shown_describe_left">
                <div data-aos="fade-left" class="app_shown_describe_bx">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="App Development Company" src="./../assets/img/globalpages/icn_an.png">
                    </div>
                    <div class="app_shown_describe_bx_label">User Friendly<br> Layouts</div>
                </div>
                <div data-aos="fade-left" class="app_shown_describe_bx">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="App Development Company" src="./../assets/img/globalpages/navigate_icon.png">
                    </div>
                    <div class="app_shown_describe_bx_label">Easy To<br> Navigate</div>
                </div>
                <div data-aos="fade-left" class="app_shown_describe_bx">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="App Development Services" src="./../assets/img/globalpages/security_icon.png">
                    </div>
                    <div class="app_shown_describe_bx_label">Highly Secured<br> App</div>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="app_shown_describe_center"> 
                <div class="app_shown_describe_center_mob">
                    <div class="app_shown_describe_center_mob_screen">
                          <div id="myCarousel_splash" class="owl-carousel GlobalpagesSlider slide">
                            
                                <div class="SiteFriendyBx">
                                    <img alt="Mobile app development company" src="./../assets/img/globalpages/raydaar_img.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="Mobile app development Services" src="./../assets/img/globalpages/martgram.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="app development company" src="./../assets/img/globalpages/localgenii.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="app development services" src="./../assets/img/globalpages/klick.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="app development company Services" src="./../assets/img/globalpages/tc.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="android/ iphone app development" src="./../assets/img/globalpages/fubmle.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="expert app developers" src="./../assets/img/globalpages/social_securitas.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="Mobile app development company" src="./../assets/img/globalpages/sweepstakes.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="Mobile app development services" src="./../assets/img/globalpages/bestcit.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="app development agency" src="./../assets/img/globalpages/uuuga.png">
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="app_shown_describe_right">
                <div data-aos="fade-right" class="app_shown_describe_bx">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="app development" src="./../assets/img/globalpages/icon_ac.png">
                    </div>
                    <div class="app_shown_describe_bx_label">Unique<br> Designs</div>
                </div>
                <div data-aos="fade-right" class="app_shown_describe_bx">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="mobile app development" src="./../assets/img/globalpages/customiziable_app_icon.png">
                    </div>
                    <div class="app_shown_describe_bx_label">Customizable<br> App</div>
                </div>
                <div data-aos="fade-right" class="app_shown_describe_bxt">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="mobile app development services" src="./../assets/img/globalpages/userinterface_icon.png">
                    </div>
                    <div class="app_shown_describe_bx_label">Simple Attractive UI<br> Interface</div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>

<section class="app_bottom_shwn_bs">
    <div class="container">
        <div>
            <ul class="nav nav-tabs" role="tablist">
              <li id="tab1_li" class=" ddlj" :class=" MobileappTab == 'active' ?'active':'' " @click="opendiv('tab1')"><a href="javascript:void(0)">About Mobile App</a></li>
              <li id="tab2_li" class=" ddlj" :class=" WhyweneedTab == 'active' ?'active':'' "  @click="opendiv('tab2')"><a href="javascript:void(0)">Why We Need</a></li>
               
            </ul>

            <div class="tab-content">
        <div class="costomer_tab tab-pane rj"  id="tab1" :class="MobileappTab">
        
                    <div class="row">
                        <div class="col-sm-7 content_area">
                            <div class="tab_contents_databx_left">
                                <div class="tabrightitle">
                                <h3>Be Straightforward And Loyal About Your App</h3>
                                </div>
                                <p>An mobile app just not an app, It is an another way that connect users to your business worldwide. We provide such dynamic app designs and user-friendly interface that helps you to increase your operational efficiency, productivity and customer engagement through Mobile Applications.An innovative mobile idea involves more than a mobile friendly website and is an essential part of marketing strategy now a days. Any business should be straight forward and honest about their business app. Every business app has a different approach according to the business industry.</p>
                                <p>At Logicspice we has expert android app developers and Iphone app developers to provide best mobile solution for both android and Iphones.</p>
                                <p>We provide such dynamic app designs and user-friendly interface that helps you to increase your operational efficiency, productivity and customer engagement through Mobile Applications.</p>
                            </div>
                        </div>
                        <div class="col-sm-5 content_area">
                            <div class="media">
                                <div class="media-left">
                                  <img alt="img" src="./../assets/img/globalpages/setting_icon.png">
                                </div>
                                <div class="media-body">
                                  <div class="tabrightitle">
                                        <div class="rightssdsd">
                                            <h3>Minimum Sustainable Functionality</h3>
                                            <p>Any app should include key features, relevant content and an attractive UI that elevate it beyond a repackaged website. The navigation of a website should be easy to understand</p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            <div class="media">
                                <div class="media-left">
                                  <a href="#">
                                    <img alt="img" src="./../assets/img/globalpages/code_icn.png">
                                  </a>
                                </div>
                                <div class="media-body">
                                  <div class="tabrightitle">
                                        <div class="rightssdsd">
                                            <h3>Why Logicspice App Development Services</h3>
                                            <p>Stuck that how to choose an affordable and best app development company ? We have a lot to show you about our stability. Visit our portfolios and case studies, testimonials and they will shows trust for us. We have dedicated bunch of android and iphone app developers that are able to offer best solution for niche industry.</p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
                <div class="costomer_tab tab-pane rj"  id="tab1" :class="WhyweneedTab">
                    <div class="tab_contents_databx_left content_left_bar">
                        <p>There are many benefits of having an mobile application for your business. Here are the some key points that why a business should have an mobile app &ndash;</p>
                        <p>&nbsp;</p>
                        <ul class="webvevtwo">
                            <li><b>Increase Customer Engagement &ndash; </b>A mobile application is the best way to increase customer engagement towards your business.</li>
                            <li><b>Improve Client Retention &ndash; </b> A mobile app make your business user friendly and attract users to get connect your business from anywhere.</li>
                            <li><b>Be visible to customers anytime, anywhere &ndash; </b>Now move your business beyond it’s limit through an mobile app. Make your business easy to accessible in an small device across the world.</li>
                            <li><b>Add value to your customers &ndash;</b> A mobile application arouse the interest in users about your business and enhance your brand value.</li>
                            <li><b>Increase brand awareness and recognition &ndash; </b>In this online market trend, every business need an digital presence and a brand recognition. A mobile application is the best way to reach major audience.</li>
                            <li><b>Stand out from the competition &ndash; </b>Now spread your business globally and stand out from crowd. Let make your brand its own identity by approaching through mobile app to its right audience.</li>
                        </ul>
                    </div>
                </div>
            </div>

          </div>
    </div>
</section>

<section class="acquainted">
            <div class="container">
                <h3 class="mobileapp_devcountry_bx_left_title">We Have Served Our Clients In Australia</h3>
                <p>Being acquainted with latest technology & standard tools we have delivered thousands of web & mobile application to our clients in Australia and have a team of expert app 
                    developers who can serve you for any complex project or any new concepts. Check out our client project portfolio .. </p>
                <div id="carousel-example-generic" class="owl-carousel GlobalpagesSlider slide">


                    <!-- Wrapper for slides -->
                  
                        <div class="ClientSlideBx">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="./../assets/img/globalpages/amcsignpost.jpg" alt="..." class="img-thumbnail">
                                </div>
                                <div class="col-md-8">
                                    <h4>AMCS</h4>
                                    <p>AMCS The application that we are scoping simple informational website for "Australian Medical Cannabis Signpost". We have to develop the website (WordPress) in the 
                                        WordPress latest stable version. In this website users can navigate to the home page with containing 4 different tabs in header and navigation in sub-nodes (in 
                                        right side of page), text and footer section over website. <a href="https://www.logicspice.com/case-study/amcs" target="_blank">Read More..</a></p>
                                </div>
                            </div>
                            <div class="testimonial-country">
                                <div class="slide">
                                    <div class="right_side_testi">
                                        <div class="quotes_img">
                                            <a href="/"><img src="./../assets/img/globalpages/quotes.png" alt=""></a>
                                        </div>  
                                        <div class="cilent_text">Superb stuff. And I'm probably not the easiest client. Would definitely work with the team again.</div>    
                                        <div class="cilent_name">
                                            <span><strong class="flag"><img src="./../assets/img/globalpages/AU.png" alt="AU"></strong> Ian Dunmore</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ClientSlideBx">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="./../assets/img/globalpages/onedbed.png" alt="..." class="img-thumbnail">
                                </div>
                                <div class="col-md-8">
                                    <h4>One Bed</h4>
                                    <p>"Onebed" serves the mattress purchasing service. We have redeveloped the existing website(WordPress) in the WordPress latest stable version. This eCommerce website 
                                        serves the marketing of the mattresses where users can choose any variant that they want,from the options of the mattress's variants and can place an order for it
                                        by filling the mandatory details over checkout page <a href="https://www.logicspice.com/case-study/onebed" target="_blank">Read More..</a></p>

                                </div>
                            </div>
                            <div class="testimonial-country">
                                <div class="slide">
                                    <div class="right_side_testi">
                                        <div class="quotes_img">
                                            <a href="/"><img src="./../assets/img/globalpages/quotes.png" alt=""></a>
                                        </div>  
                                        <div class="cilent_text">
                                            I had a truly excellent experience working with LogicSpice. Everything from start to finish was perfect. They have fantastic communication, we a well 
                                            defined scope of work and exceptional work ethic. I've finally found my lifelong developer that I will use for many projects to come. Manish and his 
                                            team are truly experts. There's no project too big or too small that they cannot do. I really have to thank you from the bottom of my heart for making 
                                            my dreams come true Manish. Thank you, and your team. :)
                                        </div>    
                                        <div class="cilent_name">
                                            <span><strong class="flag"><img src="./../assets/img/globalpages/AU.png"></strong> Dylan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ClientSlideBx">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="./../assets/img/globalpages/EmergencyService.png" alt="..." class="img-thumbnail">
                                </div>
                                <div class="col-md-8">
                                    <h4>Emergency Service</h4>
                                    <p>Emergency Service Website that will facilitate the customer to view the advertisements related to emergency services over the website. This emergency services site 
                                        is an attractive medium through which customers will be able to view advertisements over the site listed under different regions. Customers over the site will be 
                                        able to search for advertisements using keywords or <a href="https://www.logicspice.com/case-study/emergencyservice/" target="_blank">Read More..</a></p>
                                </div>
                            </div>
                            <div class="testimonial-country">
                                <div class="slide">
                                    <div class="right_side_testi">
                                        <div class="quotes_img">
                                            <a href="/"><img src="./../assets/img/globalpages/quotes.png" alt=""></a>
                                        </div>  
                                        <div class="cilent_text">
                                            Fabulous people to deal with, professional, courteous this is the second time i have used them and we will definitely use them again 
                                            and recommend them to others.
                                        </div>    
                                        <div class="cilent_name">
                                            <span><strong class="flag"><img src="./../assets/img/globalpages/AU.png"></strong> Mr. Rafish </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ClientSlideBx">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="./../assets/img/globalpages/uloan.jpg" alt="..." class="img-thumbnail">
                                </div>
                                <div class="col-md-8">
                                    <h4>U Loan Club</h4>
                                    <p>uLoan website facilitates Borrower to fills Loan Application by providing financial information. uLoan will use that information to assess the borrowers loan 
                                        request. This may include uploading documents like PDF, Doc and images.uLoan has chosen us for our ability to develop complex websites and providing efficient
                                        solutions with logical approach to the requirements <a href="https://www.logicspice.com/case-study/uloan/" target="_blank">Read More..</a></p>
                                </div>
                            </div>
                            <div class="testimonial-country">
                                <div class="slide">
                                    <div class="right_side_testi">
                                        <div class="quotes_img">
                                            <a href="/"><img src="./../assets/img/globalpages/quotes.png" alt=""></a>
                                        </div>  
                                        <div class="cilent_text">
                                            I've used freelancer a few times now. logicspice surpassed my expectations. They continued to communicate and work with my to ensure the 
                                            project was a success. Nice world".
                                        </div>  
                                        <div class="cilent_name">
                                            <span><strong class="flag"><img src="./../assets/img/globalpages/AU.png"></strong> Graham Gordon </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>


            </div>
        </section>

<section class="sectionset_iosands">
    <div class="container">
        <div class="headings">
            <div class="title_heading">This Is How We Can <span>Help</span> You</div>
            <p class="title_heading_sub">Let's take the first step now and get the results you are looking for!</p>
        </div>

        <div class="sectionset_iosands_col_bxx">

            <div class="sectionset_iosands_col_bxx_row">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="sectionset_iosands_col sectionset_iosands_colcon">
                            <div class="title_heading">iPhone App Development</div>
                            <div class="descectionset_iosands">Hiring a mobile app development company is not a final step towards getting a user-friendly business app. Let's get started with booming iPhone app development company, Logicspice and hire iPhone app developers that can offer end-to-end solutions with exceptional coding quality to get fresh &amp; innovative business apps. Our dedicated iPhone app developers will just not develop your business app but also show keen interest in understanding your business requirement. Access our company portfolio, client's reference and case studies to know that how logicspice is continuously serving in iphone app development industry. Developing an app is just not about only coding, It's about making the app more functional, attractive and user friendly to get more user attentions.</div>
                            <div class="more_btn"><a href="https://www.logicspice.com/hire-ios-app-developers/" class="btn btn-primary"><span>Hire iOS Developer</span></a></div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="sectionset_iosands_col sectionset_iosands_image">
                            <img alt="iphone app development Company" src="./../assets/img/globalpages/iphone-app-development.png"></div>
                    </div>
                </div>
            </div>
            <div class="sectionset_iosands_col_bxx_row sectionset_iosands_col_bxx_row_Right">
                <div class="row">
                    <div class="col-sm-6 pull-right">
                        <div class="sectionset_iosands_col sectionset_iosands_colcon">
                            <div class="title_heading">Android App Development</div>
                            <div class="descectionset_iosands">Let discuss what you need in your business app with our dedicated team of android app developers. Hire android app developers to stand in android app market with astounding and attractive business apps for android phone. We at logicspice ensure that our clients are getting full exposure with android mobile apps that we have developed for them. The team of expert android app developers at logicspice provide seamless integration &amp; customization in android app development and has developed apps that are fully supported with all android versions. Logicspice has delivered highly scalable android apps for variety of industries like transportation, Hotels, School and Education, Health Care, Real Estate and many online business start-ups.</div>
                            <div class="more_btn"><a class="btn btn-primary" href="https://www.logicspice.com/hire-android-app-developers/"><span>Hire Android Developer</span></a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 pull-left">
                        <div class="sectionset_iosands_col sectionset_iosands_image">
                            <img alt="Android App Development Company" src="./../assets/img/globalpages/android-app-development.png"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<section class="advantages-country">
    <div class="container">
        <h2>Advantages of mobile app development with Logicspice</h2>
        <div class="detail-advant">
        <div class="row">
            <div class="col-md-6 left-detail-advant"> <strong> Detailed Research & analysis of your app requirements</strong></div>
        </div>
        <div class="row">
            <div class="col-md-6 right-detail-advant ms-auto"> <strong>Worked on latest technology & standard tools</strong></div>
        </div>
        <div class="row">
            <div class="col-md-6 left-detail-advant"> <strong>Highly experienced developers with extreme coding quality</strong></div>
        </div>
        <div class="row">
            <div class="col-md-6 right-detail-advant ms-auto"> <strong>100% confidentiality - strict NDA terms </strong></div>
        </div>
        <div class="row">
            <div class="col-md-6 left-detail-advant"> <strong>Continuous evaluation of development</strong> </div>
        </div>
        </div>
    </div>
</section>
</section>
    
    `
    
}