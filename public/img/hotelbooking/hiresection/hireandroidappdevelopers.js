const { createApp, ref , onMounted ,inject} = Vue;
import hiresection from '../elements/hiresection.js?nocash';
export default{
    
    components:{
        'app-hiresection':hiresection
    },
     methods:{
        openmodelcontactus(){
            $('#contactModel').click();
        }  
    },
    
    setup(){
        const injectedConstants = inject('MyConstants');
        
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
                        <h1 class="slide_title">Hire Android App Developers</h1>
                        <div class="subinstet">Hire dedicated android developers from the hub of talented developers to attain your development needs.</div>
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
                       <a href="javascript:void(0);" @click="openmodelcontactus()"  class="btn btn-primary" >Hire Now!</a>
                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                  <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire Android App Developers" src="./assets/img/hiredevelopers/hire_android_programmers.png"></div></div>
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
                            <h2>Hire android developer</h2>
                            <p>We are an Android-friendly development house offering the opportunity to hire dedicated android app developers to build apps for your business. 
                               Our team of android programmers have expertise in developing top android apps for small, medium and large business globally. We are continuously 
                               progressing in<a href="https://www.logicspice.com/android-app-development"> android apps development</a> for past years with a team of dedicated 
                               developers&nbsp; towards their skills.<br /><br />
                               We keep ourselves updated with the latest technologies so we can meet the client&rsquo;s requirements and deliver high-quality apps. We are one of 
                               the emerging platforms that provides amazing Android apps in the market <br /><br />
                               Hire Android app developer in India and other countries on hourly/monthly or fixed price. You get amazing technical support, a quality analyst, a 
                               project manager, and an innovative Android app that maximizes your profit to an optimal level. <br />
                               Let&rsquo;s come forward and hire <strong><i>android app programmer</i></strong> who can convert your ideas into mobile apps.</p>            
                               </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
                        <li class="list-group-item"><span>Java/J2ME</span></li>
                        <li class="list-group-item"><span>C++</span></li>
                        <li class="list-group-item"><span>SQL Lite</span></li>
                        <li class="list-group-item"><span>Linux</span></li>
                        <li class="list-group-item"><span>Android SDK</span></li>
                        <li class="list-group-item"><span>APIs</span></li>
                        </ul>                    
                        </div>
                </div>
            </div>
        </div>
    </section>
            <section class="new-app-section">
            <div class="container">
                <h2 class="title_heading">Hire Android app developers in India for the following industry                </h2>
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
            <h2 class="title_heading">Hire android app programmers in 5 easy steps</h2>
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
                        <i><img alt="step-5" src="./assets/img/hiredevelopers/step-icon5.png"></i>
                        <h5>Assign and kick start</h5>
                    </div>
                </div>

            </div>
            <div class="step-but">
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire android app developers&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;hire android app developers&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-8740836cfdffaf7243343c16-="">Hire Now!</a>
            </div>
        </div>
    </section>
    <section class="portfolio_hire">
    <div class="container-fluid">
        <div id="hire-generic" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                            </div>
            <a class="left carousel-control" href="#hire-generic" role="button" data-slide="prev">
                <span class="fa fa-angle-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#hire-generic" role="button" data-slide="next">
                <span class="fa fa-angle-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
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
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-ios-app-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire iPhone App Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/iPhone_img.png" alt="iPhone" /></div>
<p><span>Our experienced iOS app developers are best for custom iOS application development.</span></p>
</div>
</div>
</a></div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-laravel-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Laravel Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/laravel_img.png" alt="laravel" /></div>
<p><span>Hire dedicated and expert laravel developers to develop high performance Laravel web applications.</span></p>
</div>
</div>
</a></div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-hybrid-mobile-app-developer">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Hybrid App Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/hybrid_img.png" alt="Hire Hybrid App Developer" /></div>
<p><span>Hire top rated hybrid mobile app developers from logicspice for your next hybrid app development.</span></p>
</div>
</div>
</a></div>
</div>
</div>          
  </div>
        </div>
    </section>
    
    `
}