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
    <section class="country_header_secton india-img">
    <div class="country_header_secton_in">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="country_header_secton_mobile_screen">
                <div class="country_header_secton_mobile_screen_data">
                        <ul>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="Business Apps" src="./assets/img/globalpages/Business-Apps.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="mobile Apps" src="./assets/img/globalpages/mobile-Apps.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="Business Apps Development" src="./assets/img/globalpages/BusinesS-Apps-Development.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="Business App Development Service" src="./assets/img/globalpages/Business-Service.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="Business App Developers" src="./assets/img/globalpages/Business_Developers.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="app-development" src="./assets/img/globalpages/app-development.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="application developers" src="./assets/img/globalpages/application-developers.jpg">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="mobile apps" src="./assets/img/globalpages/mobile-apps-logicspice.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="app development services" src="./assets/img/globalpages/app-development-services.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="expert app developers" src="./assets/img/globalpages/expert-app-developers.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="android apps development" src="./assets/img/globalpages/android-apps-development.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="mobile apps development" src="./assets/img/globalpages/mobile-apps-development.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="affordable apps" src="./assets/img/globalpages/affordable-apps.png">
                                </div>
                            </li>
                            <li>
                                <div class="country_icon_screen">
                                    <img alt="mobile apps-logicspice" src="./assets/img/globalpages/apps-logicspice.png">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-center main-ind-text">
                <div class="country_header_secton_right_data1">Outstanding</div><div class="country_header_secton_right_data2">Business Apps</div>
                <div class="foradd">for</div><div class="country_header_secton_right_countryname">India</div>
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
                    <h1 class="mobileapp_devcountry_bx_left_title">Mobile App Development Company In <span>India</span></h1>
                    <p style="text-align: justify;">Logicspice is award winning mobile app development company in India offering mobile app  development service for android and iOS. Our team 
                of <a style="font-weight: bold; text-decoration: underline; color: blue;" href="https://www.logicspice.com/mobile-app-development">mobile app developers</a> is creative to give a head start to your mobile app business. Using advanced tools and latest technology, we deliver great mobile apps in 
                India which is highly customizable.</p>
                    <p style="text-align: justify;">With the team of professional designer & developer, we believe to give best mobile app development solution at your doorstep.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="mobileapp_devcountry_bx_right">
                    <img alt="Accountants and Financial Industry Apps" src="./assets/img/globalpages/country_stepwisemobileapp.png">
                </div>
            </div>
        </div>
    </div>
</section>
<section class="creativity">
    <div class="container">
        <h3 class="mobileapp_devcountry_bx_left_title">We Work With Essence of Creativity</h3>
        <p> Logicspice is a app development company providing customized web, android and iPhone app development solutions with best optimal designs and creativity throughout the 
            world including major cities of Belgium. App developed by logicspice help businesses to enhance their brand presence, trust, loyalty among the current 
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
                        <img alt="App Development Company" src="./assets/img/globalpages/icn_an.png">
                    </div>
                    <div class="app_shown_describe_bx_label">User Friendly<br> Layouts</div>
                </div>
                <div data-aos="fade-left" class="app_shown_describe_bx">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="App Development Company" src="./assets/img/globalpages/navigate_icon.png">
                    </div>
                    <div class="app_shown_describe_bx_label">Easy To<br> Navigate</div>
                </div>
                <div data-aos="fade-left" class="app_shown_describe_bx">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="App Development Services" src="./assets/img/globalpages/security_icon.png">
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
                                    <img alt="Mobile app development company" src="./assets/img/globalpages/raydaar_img.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="Mobile app development Services" src="./assets/img/globalpages/martgram.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="app development company" src="./assets/img/globalpages/localgenii.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="app development services" src="./assets/img/globalpages/klick.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="app development company Services" src="./assets/img/globalpages/tc.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="android/ iphone app development" src="./assets/img/globalpages/fubmle.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="expert app developers" src="./assets/img/globalpages/social_securitas.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="Mobile app development company" src="./assets/img/globalpages/sweepstakes.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="Mobile app development services" src="./assets/img/globalpages/bestcit.png">
                                </div>
                                <div class="SiteFriendyBx">
                                    <img alt="app development agency" src="./assets/img/globalpages/uuuga.png">
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
                        <img alt="app development" src="./assets/img/globalpages/icon_ac.png">
                    </div>
                    <div class="app_shown_describe_bx_label">Unique<br> Designs</div>
                </div>
                <div data-aos="fade-right" class="app_shown_describe_bx">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="mobile app development" src="./assets/img/globalpages/customiziable_app_icon.png">
                    </div>
                    <div class="app_shown_describe_bx_label">Customizable<br> App</div>
                </div>
                <div data-aos="fade-right" class="app_shown_describe_bxt">
                    <div class="app_shown_describe_bx_icn">
                        <img alt="mobile app development services" src="./assets/img/globalpages/userinterface_icon.png">
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
                            <div class="tab_contents_databx_left india">
                    <h2>Mobile App Developers</h2>
                    <p>Hire our team of mobile app developers in india for top apps. It is your choice to hire android app developers &amp; iphone app developers for full time, part time or fixed cost. We are loaded with expert mobile app developers in india. We deliver quality mobile app developed with customized development and unique designs.</p>
                    <p>Logicspice is offshore iPhone &amp; 
                        <a style="font-weight: bold; text-decoration: underline; color: blue;" href="https://www.logicspice.com/android-app-development">android app development company</a> 
                             in india specialized in mobile app development having 11+years experience in the same industry.</p>
                    <p>Our motto is not only developing a mobile app but to make sure that developed mobile apps are built with latest technologies that fulfill client goals. Logicspice
                        mobile app developers is always having a testing of app to deliver quality result.</p>
                    <p>We are making our clients happy and satisfied since 2006. Unique idea, mindful solution, client satisfaction, user satisfaction, cost effectiveness are the foundation for our success.</p>
                </div>
                        </div>
                        <div class="col-sm-5 content_area">
                            <div class="media">
                                <div class="media-left">
                                  <img alt="img" src="./assets/img/globalpages/setting_icon.png">
                                </div>
                                <div class="media-body">
                                  <div class="tabrightitle">
                                        <div class="rightssdsd">
                                            <h3>Turn Your Idea Into Reality</h3>
                                            <p>We design and develop mobile app which shows presence. Logicspice is a top notch <b>mobile app development company</b> which has been 
                                               serving clients for years. We have been listing as a top mobile app development company in india</p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            <div class="media">
                                <div class="media-left">
                                  <a href="#">
                                    <img alt="img" src="./assets/img/globalpages/code_icn.png">
                                  </a>
                                </div>
                                <div class="media-body">
                                  <div class="tabrightitle">
                                        <div class="rightssdsd">
                                            <h3>Why Logicspice Mobile App Development Service?</h3>
                                            <p>We have developed award winning mobile apps for top brands. Client satisfaction and reviews makes us successful business. We have 
                                               dedicated bunch of <b>android and iphone app developers </b> that are able to offer best solution for industry.</p>
                                        </div>
                                    </div>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
               <div class="costomer_tab tab-pane rj"  id="tab1" :class="WhyweneedTab">
                    <div class="tab_contents_databx_left content_left_bar">
                        <div class="rightssdsd">
                            <h3>Why Mobile App</h3>
                        </div>
                        <ul class="webvevtwo">
                            <li>Consistence Communication : Mobile apps allow you to control what is being said, to whom and when. It’s been easiest and fastest platform to 
                                communicate.</li>
                            <li>Increase Sales : A good mobile app has built in analytics so that you can track what’s working by users, salesperson, product and more.</li>
                            <li>Apps is top investment : The strategy of investing in a mobile app is worthy till now and will be in the future also. You got an earning source at an 
                                affordable price.</li>
                            <li>Add value to your customers : A mobile application arouses the interest in users about your business and enhance your brand value.</li>
                            <li>Increase Customer Engagement : A mobile application is the best way to increase customer engagement towards your business.</li>
                            <li>Stand out from the competition : Now spread your business globally and stand out from the crowd. Let make your brand its own identity by approaching 
                                through mobile app to its right audience.</li>
                        </ul>
                    </div>
                </div>
            </div>

          </div>
    </div>
</section>

<section class="sectionset_iosands">
    <div class="container">
        <div class="headings">
            <div class="title_heading">Hire Mobile App Developers in India</div>
            <p class="title_heading_sub">Let's take the first step now and get the results you are looking for!</p>
        </div>

        <div class="sectionset_iosands_col_bxx">

            <div class="sectionset_iosands_col_bxx_row">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="sectionset_iosands_col sectionset_iosands_colcon">
                            <div class="title_heading">iPhone App Development</div>
                            <div class="descectionset_iosands">Do you need the best iOS developer for your online business. Hire from our experienced mobile app development team in india 
                            who will not only develop the app, but deliver the app which will give momentum to your business. In the short span of time, we provide excellent and 
                            competitive app. Logicspice <b>iPhone app development team in india</b> consists of designer, developers, expert in balancing the client idea, app quality 
                            and efficient handling of technical deadlocks . iPhone Application Development has the potential to give businesses the edge via enhanced customer service 
                            and greater access to their target market. Let's get started with booming iPhone app development company, Logicspice and <b>hire developer iPhone app 
                                developers </b> that can offer end-to-end solutions with exceptional coding quality.</div>
                            <div class="more_btn"><a href="https://www.logicspice.com/hire-ios-app-developers/" class="btn btn-primary"><span>Hire iOS Developer</span></a></div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="sectionset_iosands_col sectionset_iosands_image">
                            <img alt="iphone app development Company" src="./assets/img/globalpages/iphone-app-development.png"></div>
                    </div>
                </div>
            </div>
            <div class="sectionset_iosands_col_bxx_row sectionset_iosands_col_bxx_row_Right">
                <div class="row">
                    <div class="col-sm-6 pull-right">
                        <div class="sectionset_iosands_col sectionset_iosands_colcon">
                            <div class="title_heading">Android App Development</div>
                            <div class="descectionset_iosands">We deliver highly productive and cost effective android applications. Logicspice have a huge team of experienced developers
                            who remain updated with buzz. We believe that mobile apps should not only be highly customized but actually provide a great user experience that users will
                            remember. Custom android app development not only let you reach to your customers also represent your business brand. Logicspice has delivered highly
                            scalable <b>android apps in india</b> for a variety of industries like transportation, Hotels, School and Education, Healthcare, Real Estate and many online
                            business startups. We build visually stunning, effective <b>android applications in india</b> for your smartphone. Visit our portfolio, case study and reviews
                            to build trust in us.</div>
                            <div class="more_btn"><a class="btn btn-primary" href="https://www.logicspice.com/hire-android-app-developers/"><span>Hire Android Developer</span></a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 pull-left">
                        <div class="sectionset_iosands_col sectionset_iosands_image">
                            <img alt="Android App Development Company" src="./assets/img/globalpages/android-app-development.png"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
    
    `
}