const { createApp, ref , onMounted ,inject} = Vue;

import hiresection from '../elements/hiresection.js?nocash';

export default{
    
    components:{
        'app-hiresection':hiresection
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
                        <h1 class="slide_title">Hire Hybrid App Developer</h1>
                        <div class="subinstet">Flexible hybrid app development service from the hub of talented developers for smart, responsive and adaptive applications.</div>
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
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire wordpress developer&quot;);
                                        $(&quot;#contact_fr&quot;).val(&quot;Hire WordPress Developer&quot;);
                               " id="" class="btn btn-primary" data-cf-modified-949a7b4c82dc726a6db240c6-="">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire WordPress Developer" src="./assets/img/hiredevelopers/hire_hybrid_app_developer.png"></div></div>
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
<h2>Hire hybrid mobile app developers</h2>
<p>Being a leading <a href="https://www.logicspice.com/hybrid-app-development">hybrid app development company</a>, Logicspice offers feature-rich and innovative hybrid apps that deliver outstanding results to your business. When you hire mobile app developers in India from our team, you gain access to a group of hybrid expert app developers well-versed in the latest frameworks such as PhoneGap, Titanium, Sencha, and Ionic. The developer at Logicspice leverages all mobile platforms to build a cross-channel mobility solution.<br>
<br>
Hybrid apps are developed with HTML5, CSS3, and JavaScript, which reduce the development time, cost and complexity. Our hybrid developers have expertise in the above-mentioned skills with in-depth knowledge of web technologies and hybrid frameworks. <br>
<br>
We offer a flexible model to the clients. You can hire app developers in India on periodic or hourly basis, which suits business requirements best.</p>
</div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Swift</span></li>
    <li class="list-group-item"><span>jQuery mobile</span></li>
    <li class="list-group-item"><span>PhoneGap</span></li>
    <li class="list-group-item"><span>React native</span></li>
    <li class="list-group-item"><span>Sencha touch</span></li>
    <li class="list-group-item"><span>Ionic</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    
         <section class="new-app-section">
            <div class="container">
                <h2 class="title_heading">Hybrid app developers for hire in India </h2>
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
            <h2 class="title_heading">Hire dedicated Angularjs developer in 5 easy steps</h2>
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
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire wordpress developer&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;hire wordpress developer&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-949a7b4c82dc726a6db240c6-="">Hire Now!</a>
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
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-angular-js-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire AngularJS Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/angular-img.png" alt="img"></div>
<p><span>Hire our expert AngularJS developers to build fast, responsive and scalable web applications.</span></p>
</div>
</div>
</a>
</div>
</div>
        <div class="col-sm-6 col-md-4">
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-node-js-experts">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Node.JS developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/nodejs-img.png" alt="img"></div>
<p><span>Hire Node.js developers and programmers for best NodeJS eCommerce solutions development.</span></p>
</div>
</div>
</a>
</div>
</div>
        <div class="col-sm-6 col-md-4">
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-laravel-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Laravel Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/laravel_img.png" alt="img" /></div>
<p><span>Hire dedicated and expert laravel developers to develop high performance Laravel web applications.</span></p>
</div>
</div>
</a>
</div>
</div>  



        

</div>            </div>
        </div>
    </section>
    `
    
}