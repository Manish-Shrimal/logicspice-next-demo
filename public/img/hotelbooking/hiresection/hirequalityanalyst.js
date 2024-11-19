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
                        <h1 class="slide_title">Hire Quality Assurance Tester</h1>
                        <div class="subinstet">Hire expert quality assurance tester to make your website,software applications or mobile app bug free.</div>
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
                  <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire Android App Developers" src="./assets/img/hiredevelopers/quality-assurance.png"></div></div>
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
                            <h2>Hire Software Testers</h2>
                            <p>Being in the technical industry, everyone is well aware of the importance of product testing. Testing of the product is the valuable phase of the 
                               development cycle. The product without testing may be full of bugs which may not be usable for the customer end and client end also. The same applies 
                               on software or any other web and app development service. Hire QA analyst from logicspice to get your website developed in a professional manner.</p>            
                            <p>We are having a team of well experienced QA testers who performs testing, functional testing, compatibility testing, database problems, and migration 
                               solutions. You can opt out either manual testing service or automated testing service. Manual testing is all about testing the code thoroughly and 
                                 automation testing is done by running few scripts.</p>            
                            <p>Logicspice is full of resource for mobile application testing, website testing, web application testing, product testing or software testing. 
                                Hire quality analyst from logicspice who have in-depth understanding and proven knowledge in working on latest softwares in technology.</p>            
                               </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
                        <li class="list-group-item"><span>Bug tracking tools: Bugzilla, JIRA, Github </span></li>
                        <li class="list-group-item"><span>Understanding of most of the browsers</span></li>
                        <li class="list-group-item"><span>Experienced in SDLC & STLC</span></li>
                        <li class="list-group-item"><span>Great knowledge of web technologies</span></li>
                        <li class="list-group-item"><span>Experience in writing scripts for automated testing</span></li>
                        </ul>                    
                        </div>
                </div>
            </div>
        </div>
    </section>
            <section class="new-custom-section">
            <div class="container">
                <h2>Hire us for the following testing services</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-1" src="./assets/img/hiredevelopers/normal-testing.png" /></i>
    <div class="custom-ser-txt">
    <h3>1. General testing</h3>
    <p>System testing, compatibility testing, functional testing, Accessibility testing.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/domain-testing.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. Domain testing</h3>
    <p>Mobile testing, CRM testing, CMS testing.</p>
    </div>
    </li>
    
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/special-testing.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. Special testing</h3>
    <p>Web app testing, App Testing, Database testing.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/automation-testing.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. Automated testing</h3>
    <p>Model testing, Data driven testing, Load testing.</p>
    </div>
    </li>
    
</ul>
</div>
</div>                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire dedicated quality tester in 5 easy steps</h2>
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
    

<app-hiresection></app-hiresection>

<section class="latest_feature_product latest_feature_services">
        <div class="container">
            <h2 class="title_main">Other Popular Hire Developer</h2>
            <div class="other-product-box">
                <div class="row">
        <div class="col-sm-6 col-md-4">
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-cakephp-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire CakePHP Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/cakephp_img.png" alt="img"></div>
<p><span>Hire dedicated, fulltime and freelance CakePHP programmers, who have a good mix of knowledge, skills &amp; experience.</span></p>
</div>
</div>
</a>
</div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-wordpress-experts">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire WordPress Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/wordpress_img.png" alt="img"></div>
<p><span>Our expert Wordpress developers offers customized web development at low cost.</span></p>
</div>
</div>
</a>
</div>
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

        
</div>          
  </div>
        </div>
    </section>
    
    `
}