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
    <section class="HireYiiDeveloperBanner HireDevelopersBannerText">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <h1 class="MainSlideTitle">Hire Yii Developers</h1>
                    <div class="SubTitle">Hire yii programmers from the hub of talented developers to attain your development needs.</div>
                    <div class="HireDeveloperServiceesBx">
                        <ul>
                            <li>Quick & Agile </li>
                            <li>Cost Effective Solution</li>
                            <li>Varied Industry Experience</li>
                            <li>Transparency with client</li>
                        </ul>
                      
                    </div>
                    <div class="HireDevelopersBannerBtn">
                        <a href="javascript:void(0);" class="btn btn-primary">Hire Now!</a>
                        <a href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!" target="_blank">
                        <div class="WhatsappIcon">
                        <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                        <div class="coccoc-alo-ph-circle"></div>
                        <div class="coccoc-alo-ph-circle-fill"></div>
                        <div class="coccoc-alo-ph-img-circle"></div>
                        </div>
                        </div>
                        </a>
                    </div>
                </div>

                <div class="col-md-5">
                    <div class="HireDevelopersBannerLogo">
                        <div class="HireDevelopersMainImg">
                        <img src="./assets/img/yiiframework/yiiframework-banner-img.png" alt="Hire Yii Developer" />
                        </div>
                        <div class="PinkImgBx">
                        <img src="./assets/img/yiiframework/pink-box.png" alt="Hire Yii Developer" />
                        </div>
                        <div class="BlueImgBx">
                        <img src="./assets/img/yiiframework/blue-box.png" alt="Hire Yii Developer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="snop_animation"></div>            
       
</section>
        <section class="OurNewHirigSection">
    <div class="container">
        <div class="OurNewHirigModel">
            <div class="HireTopHaddind">
            <h2>Our <span>Hiring Model</span></h2>  
            </div>
            <div class="OurNewHirigModelMain">
            <div class="row">
            <div class="col-md-4 col-sm-4">
                <div class="OurNewHirigModelBx">
                    <i><img alt="app development" src="./assets/img/yiiframework/periodic-icon.png"></i>
                    <div class="title_heading_Main-new">Periodic Basis</div>
                </div></div>
            <div class="col-md-4 col-sm-4">
                <div class="OurNewHirigModelBx">
                    <i><img alt="app development" src="./assets/img/yiiframework/hourly-basis-icon.png"></i>
                    <div class="title_heading_Main-new">Hourly Basis</div>
                </div>
            </div>
            <div class="col-md-4 col-sm-4">
                <div class="OurNewHirigModelBx">
                    <i><img alt="app development" src="./assets/img/yiiframework/project-basis-icon.png"></i>
                    <div class="title_heading_Main-new">Project Basis</div>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div class="OurNewHirigModelBxSer">
            <div class="row">
                <div class="col-md-6">
                    <div class="OurNewHirigPhpYii">
                        <div class="HireTopHaddind">
                            <h2>Php yii <span>Developer</span></h2>
                        </div>
                        <div class="">
                            <p>Logicspice, one of the web development company offering cost effective solution to hire php yii developer for your project. Our team of dedicated yii 
                                framework developer has worked on multiple projects from small website to large enterprise websites. We offer advanced php yii solutions using the 
                                robust technology in yii development.</p>
                            <p>Our yii programmers are helping you throughout the development process. Our team is proficient to keep client satisfied in terms of quality, uniqueness 
                                and functionality. By Hiring Yii developers, you will have a great experience working in a collaborative environment to evolve the application best 
                                in its class.</p>
                            <p>You will get a skillful yii developer at logicspice for your yii php development needs. We always assure our clients for secure, cost effective, 
                                robust web and application development.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                <div class="OurNewHirigTechnicalBx">
                    <div class="HireTopHaddind">
                        <h2>Technical <span>expertise</span></h2>
                    </div>
                    <ul class="">
                        <li class="">Advance skills in <strong>corePHP</strong></li>
                        <li class="">Experience in <strong>yii framework</strong></li>
                        <li class="">Great understanding of <strong>MVC framework</strong></li>
                        <li class="">Experience with <strong>plugins development</strong></li>
                        <li class="">Knowledge of <strong>mysql database</strong></li>
                        <li class="">Works in open <strong>source technologies</strong></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
        <section class="NewHireCustomDeveloperSection">
    <div class="container">
        <div class="HireTopHaddind">
        <h2>Hire Us For Custom <span>Yii Framework Development</span></h2>
        </div>
        <div class="NewHireCustomDeveloperBx">
            <div class="row">
                <div class="col-md-6">
                    <ul class="">
                        <li class=""><i><img src="./assets/img/yiiframework/website-development-icon.png" alt="Website Development" /></i>
                            <div class="NewHireCustomTxt">
                                <h3>1. Website Development</h3>
                                <p>Get a fast process for your web development as compare to other MVC framework.</p>
                            </div>
                        </li>
                        <li class=""><i><img src="./assets/img/yiiframework/enterprise-icon.png" alt="Enterprise Web Application" /></i>
                           <div class="NewHireCustomTxt">
                                <h3>2. Enterprise Web Application</h3>
                                <p>Our yii programmers are experts in creating complex applications for any business.</p>
                            </div>
                        </li>
                        <li class=""><i><img src="./assets/img/yiiframework/ecommerce-Solution-icon.png" alt="eCommerce Solution" /></i>
                           <div class="NewHireCustomTxt">
                                <h3>3. eCommerce Solution</h3>
                                <p>Build your eCommerce store in open source php framework with lots of features.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul class="">
                        <li class=""><i><img src="./assets/img/yiiframework/Plugin-development-icon.png" alt="Plugin Development" /></i>
                            <div class="NewHireCustomTxt">
                                <h3>4. Plugin Development</h3>
                                <p>Get your own extension developed with open source php framework yii.</p>
                            </div>
                        </li>
                        <li class=""><i><img src="./assets/img/yiiframework/web-application-icon.png" alt="Web Application Development" /></i>
                            <div class="NewHireCustomTxt">
                                <h3>5. Web Application Development</h3>
                                <p>Get web application developed for your business with our yii developers.</p>
                            </div>
                        </li>
                        <li class=""><i><img src="./assets/img/yiiframework/migration-solution-icon.png" alt="Migration solution" /></i>
                            <div class="NewHireCustomTxt">
                                <h3>6. Migration solution</h3>
                                <p>It's easy to migrate between yii framework while using custom migration template.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
        <section class="HireDevelopersEasySteps">
    <div class="container">
        <div class="HireTopHaddind">
        <h2 class="">Hire Expert Yii Framework <span>Developer In 5 Easy Steps</span></h2>
        </div>
        <div class="HireEasySteps">
                <div class="HireEasyStepsBx">
                     <div class="HireEasyStepsBxBg">
                    <i><img alt="Raise Your Request" src="./assets/img/yiiframework/raise-request-icon.png"></i>
                    <h5>Raise Your <br>Request</h5>
                </div>
                    <div class="HireEasyStepsBorder"><img alt="Raise Your Request" src="./assets/img/yiiframework/step-box-border-down.png"></div>
                </div>
                <div class="HireEasyStepsBx">
                    <div class="HireEasyStepsBorder2"><img alt="Raise Your Request" src="./assets/img/yiiframework/step-box-border-up.png"></div>
                     <div class="HireEasyStepsBxBg">
                    <i><img alt="Discuss Your Requirement" src="./assets/img/yiiframework/discuss-requirement-icon.png"></i>
                    <h5>Discuss Your <br>Requirement</h5>
                </div>
                    
                </div>
                <div class="HireEasyStepsBx">
                     <div class="HireEasyStepsBxBg">
                    <i><img alt="Select Experts" src="./assets/img/yiiframework/select-experts-icon.png"></i>
                    <h5>Project <br>Documentation</h5>
                </div>
                    <div class="HireEasyStepsBorder"><img alt="Raise Your Request" src="./assets/img/yiiframework/step-box-border-down.png"></div>
                </div>
                <div class="HireEasyStepsBx">
                    <div class="HireEasyStepsBorder2"><img alt="Raise Your Request" src="./assets/img/yiiframework/step-box-border-up.png"></div>
                     <div class="HireEasyStepsBxBg">
                    <i><img alt="Finalize The Terms" src="./assets/img/yiiframework/finalize-icon.png"></i>
                    <h5>Finalize The <br>Terms</h5>
                </div>
                    
                </div>
                <div class="HireEasyStepsBx">
                <div class="HireEasyStepsBxBg">
                    <i><img alt="Assign and kick start" src="./assets/img/yiiframework/kick-start-icon.png"></i>
                    <h5>Assign and <br>kick start</h5>
                </div>
                    <div class="HireEasyStepsBorder"><img alt="Raise Your Request" src="./assets/img/yiiframework/step-box-border-down.png"></div>
                </div>
           

        </div>
        <div class="HireEasyStepsBtn">
            <a href="javascript:void(0);" class="btn btn-primary">Hire Now!</a>
        </div>
    </div>
</section>
       <section class="WhyHireFromSection">
    <div class="container">
        <h3 class="title_heading">Why hire from <img alt="Logicspice Mobile and Web development company" src="./assets/img/logo.png"></h3>
        <div class="WhyHireFromMainBx">
        <div class="row">
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Qualified, Experienced resources" src="./assets/img/hiredevelopers/experience_icon.png"></div>
                    <div class="WhyHireFromContent">Qualified, Experienced and certified resources</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Flexible Hiring Models - Logicspice" src="./assets/img/hiredevelopers/search_icon.png"></div>
                    <div class="WhyHireFromContent">Flexible Hiring Models</div>
                </div>
            </div>
            <?php if ($pageInfo['Hireexpert']['slug'] != 'hire-quality-analyst') { ?>
                <div class="col-md-3 col-sm-4">
                    <div class="WhyHireFromBx" data-aos="fade-up">
                        <div class="WhyHireFromImg"><img alt="Rapid and Effective development - logicspice" src="./assets/img/hiredevelopers/rapid_icon.png"></div>
                        <div class="WhyHireFromContent">Rapid yet Effective development
                        </div>
                    </div>
                </div>
            <?php } ?>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Monitor team’s performance" src="./assets/img/hiredevelopers/monitor_icon.png"></div>
                    <div class="WhyHireFromContent">Monitor team’s performance on regular basis</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Track Progress with Project Management" src="./assets/img/hiredevelopers/progress_icon.png"></div>
                    <div class="WhyHireFromContent">Track Progress with Project Management Tools</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Fast and easy communication" src="./assets/img/hiredevelopers/comunication_icon.png"></div>
                    <div class="WhyHireFromContent">Fast and easy communication
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Flexible Timing - Logicspice" src="./assets/img/hiredevelopers/timing_icon.png"></div>
                    <div class="WhyHireFromContent">Flexible Timing</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Cost-efficient development - logicspice" src="./assets/img/hiredevelopers/cost_icon.png"></div>
                    <div class="WhyHireFromContent">Cost-efficient</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Consistent Technical and Administrative support" src="./assets/img/hiredevelopers/technical_icon.png"></div>
                    <div class="WhyHireFromContent">Consistent Technical and Administrative support</div>
                </div>
            </div>
            <?php if ($pageInfo['Hireexpert']['slug'] != 'hire-quality-analyst') { ?>
                <div class="col-md-3 col-sm-4">
                    <div class="WhyHireFromBx" data-aos="fade-up">
                        <div class="WhyHireFromImg"><img alt="Highly Secured Development - Logicspice" src="./assets/img/hiredevelopers/highly_icon.png"></div>
                        <div class="WhyHireFromContent">Highly Secured Development Area</div>
                    </div>
                </div>
            <?php } ?>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Dependable supervision and execution" src="./assets/img/hiredevelopers/dependabe_icon.png"></div>
                    <div class="WhyHireFromContent">Dependable supervision and execution</div>
                </div>
            </div>
            <?php if ($pageInfo['Hireexpert']['slug'] != 'hire-quality-analyst') { ?>
                <div class="col-md-3 col-sm-4">
                    <div class="WhyHireFromBx" data-aos="fade-up">
                        <div class="WhyHireFromImg"><img alt="Optimized Coding - Logicspice" src="./assets/img/hiredevelopers/code_icon.png"></div>
                        <div class="WhyHireFromContent">Optimized Coding</div>
                    </div>
                </div>
            <?php } ?>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="deadlines developers" src="./assets/img/hiredevelopers/calendar_icon.png"></div>
                    <div class="WhyHireFromContent">We take deadlines very seriously
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Project confidentiality - Logicspice" src="./assets/img/hiredevelopers/nda_icon.png"></div>
                    <div class="WhyHireFromContent">100% confidentiality - strict NDA terms</div>
                </div>
            </div>
            <?php if ($pageInfo['Hireexpert']['slug'] != 'hire-quality-analyst') { ?>
                <div class="col-md-3 col-sm-4">
                    <div class="WhyHireFromBx" data-aos="fade-up">
                        <div class="WhyHireFromImg"><img alt="moneyback gurantee - Logicspice" src="./assets/img/hiredevelopers/technologies-back.png"></div>
                        <div class="WhyHireFromContent">Works on latest technologies</div>
                    </div>
                </div>
            <?php } ?>
            <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                    <div class="WhyHireFromImg"><img alt="Availability and scope of expansion - logicspice" src="./assets/img/hiredevelopers/scope_icon.png"></div>
                    <div class="WhyHireFromContent">Availability and scope of expansion</div>
                </div>
            </div>
        </div>
        </div>
    </div>    
</section>
<section class="BetterUnderstandSection">
    <div class="container">
        <h2>Let's Have A Quick Call To Better Understand <br><span>About Your Idea of Yii Application.</span></h2>
        <p>(Even if you have very short term requirement.)</p>
        <div class="requirment_btn">
            <a id="inquirenow" data-toggle="modal" data-target="#contactFix" class="btn btn-primary">CONTACT NOW</a>
        </div>

    </div>
</section>
  <section class="CustomerReviewsSections">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-4 col-lg-4">
                        <div class="CustomerReviewsImg"><img alt="customer-reviews" src="./assets/img/yiiframework/customer-reviews-img.jpg"></div>
                    </div>
                    <div class="col-xs-12 col-md-8 col-lg-8">
                        <div class="CustomerReviews">
                            <h2>Customer Reviews</h2>
                            <div class="YiiCustomerReviews">
                            <div class="CustomerReviewsMainBx">
                                <div class="CustomerReviewsBx">
                                <div class="CustomerReviewsBxImg">
                                    <img alt="customer-reviews" src="./assets/img/yiiframework/beat-img.jpg">
                                </div>
                                <div class="CustomerReviewsBxContent">
                                    <h3>Financial Web Application For Pensioners</h3>
                                    <p>I have purchased the service marketplace software and have constructed my own website. This was an easy task because of logicspice's free 
                                        installation and support. Keep up the good work. I will be back for more customization work  in the future.</p>
                                </div>
                                </div>
                                <div class="CustomerReviewsClient"><i><img alt="customer-reviews" src="./assets/img/yiiframework/purpal-star.png"></i><span>Beat B. Switzerland<i class="contry-flag"><img alt="customer-reviews" src="./assets/img/jobboard/switzerland_flag_img.png"></i></span></div>
                            </div>
                            <div class="CustomerReviewsMainBx">
                                <div class="CustomerReviewsBx">
                                    <div class="CustomerReviewsBxImg">
                                    <img alt="customer-reviews" src="./assets/img/yiiframework/tom-img.jpg">
                                </div>
                                <div class="CustomerReviewsBxContent">
                                    <h3>Build a Social Networking Website With Payment System</h3>
                                    <p>This is the best readymade solution I found for my business. Thanks for your great efforts, commitment and support while installing the software. 
                                        Your prompt service regarding a few minor issues was superb and great communication skills.</p>
                                </div>
                                </div>
                                <div class="CustomerReviewsClient"><i><img alt="customer-reviews" src="./assets/img/yiiframework/purpal-star.png"></i><span>Tom J. USA<i class="contry-flag"><img alt="customer-reviews" src="./assets/img/jobboard/usa_flag_img.png"></i></span></div>
                            </div>
                            <div class="CustomerReviewsMainBx">
                                <div class="CustomerReviewsBx">
                                    <div class="CustomerReviewsBxImg">
                                    <img alt="customer-reviews" src="./assets/img/yiiframework/burak-img.jpg">
                                </div>
                                <div class="CustomerReviewsBxContent">
                                    <h3>C2C Ecommerce Website About Fashion</h3>
                                    <p>Exactly the best team available online ! I have been working and communicating with a few companies over the internet and i didn't see a 
                                        single better company than logicspice. They are so skilled and professional. Their knowledge about coding is incredible. And they never say 
                                        "no" or "we can't" to any situation. Actually they are the best guys i have ever work with in my life. Their communication, kindness are so
                                        high level. Every step of my project, every progress of my project we need maybe 15 to 20 changes. And every time i wrote those needs to
                                        them, they did their work at most 1-2 days. Their speed and work quality is amazing ! Final word to those who wants to hire them: don't 
                                        think twice ! Literally they are the best team in this website. And also their work progress and milestones are literally clear as they 
                                        said. I am advising them to all of my friends and i will hire them again for sure !</p>
                                </div>
                                </div>
                                <div class="CustomerReviewsClient"><i><img alt="customer-reviews" src="./assets/img/yiiframework/purpal-star.png"></i><span>Burak Turkey<i class="contry-flag"><img alt="customer-reviews" src="./assets/img/jobboard/turkey-flag.png"></i></span></div>
                            </div>
                            
                            <div class="CustomerReviewsMainBx">
                                <div class="CustomerReviewsBx">
                                    <div class="CustomerReviewsBxImg">
                                    <img alt="customer-reviews" src="./assets/img/yiiframework/dmitry-img.jpg">
                                </div>
                                <div class="CustomerReviewsBxContent">
                                    <h3>Website + Mobile App (iOs&Android)</h3>
                                    <p>Manish was very cooperative and professional during the project. The team was great, the project was very complicated and they tried their best to complete it with the best diligence. I will definitely contact this company in the future for my project updates and would recommend to anyone who is looking for a good quality work.</p>
                                </div>
                                </div>
                                <div class="CustomerReviewsClient"><i><img alt="customer-reviews" src="./assets/img/yiiframework/purpal-star.png"></i><span>Dmitry Canada<i class="contry-flag"><img alt="customer-reviews" src="./assets/img/jobboard/canada-flag.png"></i></span></div>
                            </div>
                             <div class="CustomerReviewsMainBx">
                                <div class="CustomerReviewsBx">
                                    <div class="CustomerReviewsBxImg">
                                    <img alt="customer-reviews" src="./assets/img/yiiframework/sherif-img.jpg">
                                </div>
                                <div class="CustomerReviewsBxContent">
                                    <h3>Build a Website</h3>
                                    <p>Best project management experience/journey I had. Great team spirit, very flexible and understanding while maintaining time and budget target.Top tear professional communication and support.</p>
                                </div>
                                </div>
                                <div class="CustomerReviewsClient"><i><img alt="customer-reviews" src="./assets/img/yiiframework/purpal-star.png"></i><span>Sherif A. Dubai<i class="contry-flag"><img alt="customer-reviews" src="./assets/img/jobboard/dubai-flag.png"></i></span></div>
                            </div>
                            </div>
                             
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
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-cakephp-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire CakePHP Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/cakephp_img.png" alt="Hire CakePHP Developers" /></div>
<p><span>Hire dedicated, fulltime and freelance CakePHP programmers, who have a good mix of knowledge, skills &amp; experience.</span></p>
</div>
</div>
</a>
</div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-codeigniter-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire CodeIgniter Developer</h3>
<div class="other-project-logo"><img alt="Hire CodeIgniter Developer" src="./assets/img/hiredevelopers/codeigniter_img.png"></div>
<p><span>We have expert CodeIgniter web developers to work with your project at budget friendly rates.</span></p>
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
<div class="other-project-logo"><img alt="Hire Laravel Developer" src="./assets/img/hiredevelopers/laravel_img.png"></div>
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