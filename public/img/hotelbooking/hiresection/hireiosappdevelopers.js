const { createApp, ref , onMounted ,inject} = Vue;

import hiresection from '../elements/hiresection.js?nocash';

export default{
    
    components:{
        'app-hiresection':hiresection
    },
    
    setup(){
        const injectedConstants = inject('MyConstants');
        onMounted(() => {
            $('#hire-generic').owlCarousel({
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
            
        }) 
        return{
            injectedConstants
        }
    },
    
    template:`
    
        <section style="" class="hire_developer_back_iin otherhire_developer_back_iin">
        <div class="hire_developer_back_iin_mask new-developers-mask">
            <div class="container">
                <div class="row">
                     <div class="col-md-7 text-start">
                        <h1 class="slide_title">Hire iPhone App Developer</h1>
                        <div class="subinstet">Hire iOS app developer from the hub of talented developers for feature rich, interactive and secure iOS applications.</div>
                        <div class="developer-servicees-bx">
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Quick & Agile</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Cost Effective Solution</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Varied Industry Experience</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Transparency with client</span>
                            </div>
                        </div>
                        <div class="nt_cdl">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire iphone app developer&quot;);
                                        $(&quot;#contact_fr&quot;).val(&quot;Hire iPhone App Developer&quot;);
                               " id="" class="btn btn-primary" data-cf-modified-0c2ec2f01c437bbcc25d3bb1-="">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire iPhone App Developer" src="./assets/img/hiredevelopers/hire_ios_app_deve_loper.png"></div></div>
                </div>
            </div>
            <div class="snop_animation"></div>            
        </div>        
    </section>
    <section class="dev_flexibility new-hirig-section">
        <div class="container">
            <div class="new-hiring-div">
                <div class="title_heading">Hiring Model</div>  
                <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="inner-flex-new">
                        <i><img alt="app development" src="./assets/img/hiredevelopers/periodic-icon.png"></i>
                        <div class="title_heading_Main-new">Periodic Basis</div>
                    </div></div>
                <div class="col-md-4 col-sm-4">
                    <div class="inner-flex-new">
                        <i><img alt="app development" src="./assets/img/hiredevelopers/clock-icon.png"></i>
                        <div class="title_heading_Main-new">Hourly Basis</div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="inner-flex-new">
                        <i><img alt="app development" src="./assets/img/hiredevelopers/checklist.png"></i>
                        <div class="title_heading_Main-new">Project Basis</div>
                    </div>
                </div>
                </div>
            </div>
            <div class="hiring-sr">
                <div class="row">
                    <div class="col-md-6">
                        <div class="jumbotron">
                            <h2>Hire iOS developer </h2>
                            <p>Do you have an app idea? Our developers are skilled enough to develop your concept into a reality. Logicspice is an <a href="https://www.logicspice.com/ios-app-development">iPhone application development company</a> with a team of iOS experts which enables us to deliver comprehensive and robust mobile applications to the clients globally. We have a team of dedicated iphone developer with in-depth technical knowledge, renders scalable iOS mobile applications.<br />
<br />
Our dedicated iOS development process is designed in a way to ensure an excellent solution to the client so it can drive result to your business. Our development team is well-versed with latest technologies SDK, which enables to deliver complex applications also. <br />
<br />
Hire iPhone app developer for part-time or full time which suits your business requirement at affordable cost. Get the best iOS programmer from logicspice and get a quality result for your business.<br />
&nbsp;</p>                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Objective-C</span></li>
    <li class="list-group-item"><span>Swift 4.0 </span></li>
    <li class="list-group-item"><span>Apple&rsquo;s Xcode IDE</span></li>
    <li class="list-group-item"><span>Frameworks and APIs like foundation, UIKit</span></li>
    <li class="list-group-item"><span>UI and UX design experience</span></li>
    <li class="list-group-item"><span>Familiarity with iOS 9 and higher versions</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
            <section class="new-app-section">
            <div class="container">
                <h2 class="title_heading">
                    Hire iOS app developer for the following industries                </h2>
                <div class="aew-app-bxx">
                    <div class="row">
                        <div class="col-md-3 col-sm-4">
                            <div class="apps-bxa" data-aos="fade-up">
                                <div class="box_apps_top"><img alt="app development" src="./assets/img/hiredevelopers/business_networking.png"></div>
                                <div class="developer_app_content">Business networking apps</div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-4">
                            <div class="apps-bxa" data-aos="fade-up">
                                <div class="box_apps_top"><img alt="app development" src="./assets/img/hiredevelopers/audio.png"></div>
                                <div class="developer_app_content">Audio/Video streaming apps</div>
                            </div>
                        </div>


                        <div class="col-md-3 col-sm-4">
                            <div class="apps-bxa" data-aos="fade-up">
                                <div class="box_apps_top"><img alt="app development" src="./assets/img/hiredevelopers/travel-app.png"></div>
                                <div class="developer_app_content">Travel apps</div>
                            </div>
                        </div>


                        <div class="col-md-3 col-sm-4">
                            <div class="apps-bxa" data-aos="fade-up">
                                <div class="box_apps_top"><img alt="app development" src="./assets/img/hiredevelopers/education-app.png"></div>
                                <div class="developer_app_content">Education apps</div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-4">
                            <div class="apps-bxa" data-aos="fade-up">
                                <div class="box_apps_top"><img alt="app development" src="./assets/img/hiredevelopers/internet-app.png"></div>
                                <div class="developer_app_content">Internet apps</div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4">
                            <div class="apps-bxa" data-aos="fade-up">
                                <div class="box_apps_top"><img alt="app development" src="./assets/img/hiredevelopers/multimedia-app.png"></div>
                                <div class="developer_app_content">Multimedia apps</div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4">
                            <div class="apps-bxa" data-aos="fade-up">
                                <div class="box_apps_top"><img alt="app development" src="./assets/img/hiredevelopers/navigation_apps.png"></div>
                                <div class="developer_app_content">Mapping and navigation apps</div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4">
                            <div class="apps-bxa" data-aos="fade-up">
                                <div class="box_apps_top"><img alt="app development" src="./assets/img/hiredevelopers/healthcare-app.png"></div>
                                <div class="developer_app_content">Healthcare apps</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire best iPhone app developers in 5 easy steps</h2>
            <div class="step-row">

                <div class="col-md-2">
                    <div class="dev-steps">
                        <i><img alt="step-1" src="./assets/img/hiredevelopers/step-icon1.png"></i>
                        <h5>Raise Your Request</h5>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="dev-steps">
                        <i><img alt="step-2" src="./assets/img/hiredevelopers/step-icon2.png"></i>
                        <h5>Discuss Your Requirment</h5>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="dev-steps">
                        <i><img alt="step-3" src="./assets/img/hiredevelopers/step-icon3.png"></i>
                        <h5>Select Experts</h5>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="dev-steps">
                        <i><img alt="step-4" src="./assets/img/hiredevelopers/step-icon4.png"></i>
                        <h5>Finalize the Terms</h5>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="dev-steps last-step">
                        <i><img alt="step-5" src="https://www.logicspice.com/app/webroot/img/images/step-icon5.png"></i>
                        <h5>Assign and kick start</h5>
                    </div>
                </div>

            </div>
            <div class="step-but">
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire iphone app developer&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;hire iphone app developer&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-0c2ec2f01c437bbcc25d3bb1-="">Hire Now!</a>
            </div>
        </div>
    </section>
    <section class="portfolio_hire">
    <div class="container-fluid">
        <div id="hire-generic" class="owl-carousel slide" data-ride="carousel">
                                       
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/b1978_UUUga.jpg" alt="Logicspice iphone portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Uuuga</li>
                                        <li><b>Website URL:</b> https://itunes.apple.com/in/app/uuuga/id1235402695?mt=8</li>
                                        <li><b>Framework:</b> </li>
                                        <li><b>Language:</b> </li>
                                        <li><b>Database:</b> </li>
                                        <li><b>Server:</b> </li>
                                        <li><b>Overview:</b> </li>
                                    </ul>

                                </div>
                            </div>
               
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/21c14_Physical-EDGE.jpg" alt="Logicspice iphone portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Physical EDGE	</li>
                                        <li><b>Website URL:</b> https://itunes.apple.com/ca/app/physical-edge/id1222826539?mt=8</li>
                                        <li><b>Framework:</b> </li>
                                        <li><b>Language:</b> </li>
                                        <li><b>Database:</b> </li>
                                        <li><b>Server:</b> </li>
                                        <li><b>Overview:</b> </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                                   
           
        
    </div>
</section>



<app-hiresection></app-hiresection>



    <section class="latest_feature_product latest_feature_services">
        <div class="container">
            <h2 class="title_main">Other Popular Hire Developer</h2>
            <div class="other-product-box">
                <div class="row">
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-android-app-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Android App Developers</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/android_img.png" alt="Hire Android App Developers" /></div>
<p><span>Our Android experts ensure code is written in the most efficient way possible.</span></p>
</div>
</div>
</a></div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-hybrid-mobile-app-developer">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Hybrid App Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/hybrid_img.png" alt="Hire Hybrid App Developers" /></div>
<p><span>Hire top rated hybrid mobile app developers from logicspice for your next hybrid app development.</span></p>
</div>
</div>
</a></div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-cakephp-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire CakePHP Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/cakephp_img.png" alt="Hire CakePHP Developers" /></div>
<p><span>Hire dedicated, fulltime and freelance CakePHP programmers, who have a good mix of knowledge, skills &amp; experience.</span></p>
</div>
</div>
</a></div>
</div>
</div>            </div>
        </div>
    </section>
    
    `
    
}