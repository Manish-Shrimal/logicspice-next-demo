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
                        <h1 class="slide_title">Hire Node.JS Developer </h1>
                        <div class="subinstet">Hire node.js experts from the hub of talented developers to attain your development needs.</div>
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
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire node.js developer &quot;);
                                        $(&quot;#contact_fr&quot;).val(&quot;Hire Node.JS Developer &quot;);
                               " id="" class="btn btn-primary" data-cf-modified-8b1b85e99955f6c23e0a9859-="">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire Node.JS Developer " src="./assets/img/hiredevelopers/node_js.png"></div></div>
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
                            <h2>Hire node.js programmer</h2>
                            <p style="text-align: justify;">Logicspice offers a wide range of node.js application development services which let you create highly effective, scalable websites and applications. We have a large pool of node.js developer who keep themselves updated with the latest technology and updates in node.js. Our team of Node.js experts delivers results oriented and creative development service to the clients.</p>
<p style="text-align: justify;">Node JS written in javascript can work on any OS. This is why every big brand like Linkedin are using node.js for creating web applications. With our node.js developer, you get the complete control over your project and get the project delivered according to your requirements.</p>
<p style="text-align: justify;">Hire node.js developer from us and get completely transparent process, high quality coding at competitive price. Our developers have worked on various aspects of resources and technology which assure to deliver the best output.</p>                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Understanding of front end development Technologies</span></li>
    <li class="list-group-item"><span>Good Knowledge of node.js framework</span></li>
    <li class="list-group-item"><span>Proficiency in Restful APIs</span></li>
    <li class="list-group-item"><span>HTML5 &amp; CSS3</span></li>
    <li class="list-group-item"><span>Familiar with MVC framework</span></li>
    <li class="list-group-item"><span>Good Grasp of Asynchronous Programming</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <section class="new-custom-section">
            <div class="container">
                <h2>Hire us for following custom node.js solutions</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-1" src="./assets/img/hiredevelopers/custom-icon1.png" /></i>
    <div class="custom-ser-txt">
    <h3>1. API Development &amp; Integration</h3>
    <p>Our dedicated node.js developers are proficient in developing API&rsquo;s for web application.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/custom-icon5.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. Enterprise Solution</h3>
    <p>We develop business apps which surely help your business expand and grow exponentially.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-3" src="./assets/img/hiredevelopers/custom-icon3.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. Upgradation &amp; Migration</h3>
    <p>Easily get migrated PHP and CGI to Node.js to improve its security, speed, and reliability.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/custom-icon4.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. Plug-ins Development</h3>
    <p>Our freelance node js have expertise in developing plug-ins and module development solutions.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/custom-icon2.png" /></i>
    <div class="custom-ser-txt">
    <h3>5. Custom Web Application Development</h3>
    <p>Hire node.js experts who develop custom web apps which meets your business requirement.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-6" src="./assets/img/hiredevelopers/custom-icon6.png" /></i>
    <div class="custom-ser-txt">
    <h3>6. Security Enhancement</h3>
    <p>We are aware of the protecting the user data and ensure that the web application is secured by the latest firewall.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire expert node.js developer in 5 easy steps</h2>
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
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire node.js developer &quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;hire node.js developer &quot;);
                   " id="" class="btn btn-primary" data-cf-modified-8b1b85e99955f6c23e0a9859-="">Hire Now!</a>
            </div>
        </div>
    </section>
    <section class="portfolio_hire">
    <div class="container-fluid">
        <div id="hire-generic" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                                        <div class="item active">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/treasureMap--1-.png" alt="Logicspice note js portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Treasure Map</li>
                                        <li><b>Website URL:</b> https://itunes.apple.com/in/app/treasuremap-club/id1294993934?mt=8</li>
                                        <li><b>Framework:</b> Node</li>
                                        <li><b>Language:</b> </li>
                                        <li><b>Database:</b> </li>
                                        <li><b>Server:</b> </li>
                                        <li><b>Overview:</b> </li>
                                    </ul>

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
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-angular-js-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire AngularJS Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/angular-img.png" alt="img" /></div>
<p><span>Hire our expert AngularJS developers to build fast, responsive and scalable web applications.</span></p>
</div>
</div>
</a></div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-php-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire PHP Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/php-img.png" alt="img" /></div>
<p><span>Hire dedicated and full time remote PHP programmers who will mould your idea into digital blueprints.</span></p>
</div>
</div>
</a></div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-quality-analyst">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Quality Assurance Tester</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/qa-img.png" alt="img" /></div>
<p><span>Hire expert quality assurance tester to make your website,software applications or mobile app bug free.</span></p>
</div>
</div>
</a></div>
</div>
</div>            </div>
        </div>
    </section>
    
    `
    
}