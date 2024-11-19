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
                        <h1 class="slide_title">Hire PHP Developer</h1>
                        <div class="subinstet">Hire PHP web developer from the hub of talented developers to attain your development needs.</div>
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
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire cakephp developer&quot;);
                                        $(&quot;#contact_fr&quot;).val(&quot;Hire CakePHP Developer&quot;);
                               " id="" class="btn btn-primary" data-cf-modified-b019f661a95ce92d70e5c367-="">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire CakePHP Developer" src="./assets/img/hiredevelopers/hire_php_developer.png"></div></div>
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
                            <h2>Hire PHP programmer</h2>
                            <p style="text-align: justify;">Are you looking to hire PHP expert hand for your custom web application development? Or looking for a highly professional offshore <a href="https://www.logicspice.com/php-development">PHP development company</a> at a low cost? Then, Logicspice is the perfect place to opt out of the solution for custom mobile-friendly PHP web application development. We offer proficient &amp; dedicated PHP developers who have expert-level knowledge and experience of working on different projects, related to diversified industries and with many PHP frameworks like Laravel, CakePHP, Codeigniter, Yii, etc. With hands-on experience in many complex PHP web development projects, we believe in delivering the work with quality, security, and sustainability.<br>
<br>
Our expert PHP developers have extensive knowledge about every technical feature and the latest PHP versions. We care about our clients, so our programmer understands your PHP web development need and create innovative web applications within your time-frame and budget. <br>
<br>
The primary goal of our dedicated PHP programmers is giving accomplish work for the client by satisfying their needs. By hiring PHP developers from Logicspice, you will get a high level of stability &amp; functionality with the best PHP web development in this competitive market.<br>
<br>
Logicspice with the Glorious experience of working over state-of-the-art Projects of numerous industries namely Restaurants, Logistics, health care, Finance, etc serving customers across the globe. <strong>Hire PHP developer in India</strong> for your project to get a competitive advantage for your project and make your project a huge success. We have the best PHP programmers available for hire, whether you're in the USA, UK, Australia, or other European countries, ensuring top-notch expertise and quality for your project. <br>
<br>
The reason we are among the best companies to solve PHP requirements is because of our highly skilled dedicated PHP Programmers, having in-depth knowledge in their field which gives us a competitive edge in today's cut-throat competition.  <strong><i>Hire dedicated php programmers</i></strong>from us as we are having the best pool of talented php web developers to handle the job-related responsibility to the best of their ability without compromising on the quality of work.</p>          
   </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Skills in PHP & HTML5, CSS3</span></li>
    <li class="list-group-item"><span>Experience in working with MySQL</span></li>
    <li class="list-group-item"><span>Advanced knowledge of AJAX</span></li>
    <li class="list-group-item"><span>Experience in plug-ins implementation</span></li>
    <li class="list-group-item"><span>Proficient in JQuery, JavaScript & Bootstrap</span></li>
    <li class="list-group-item"><span>Understanding accessibility and security compliance</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <section class="new-custom-section">
            <div class="container">
                <h2>Hire dedicated PHP developers in India for the following PHP web development solution</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-1" src="./assets/img/hiredevelopers/custom-icon1.png" /></i>
    <div class="custom-ser-txt">
    <h3>1. Web applications</h3>
    <p>Our developers maintain the project from scratch, handle the PHP web applications, and deliver quality results.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/custom-icon2.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. e-Commerce solution</h3>
    <p>Increase your online sales by giving amazing user experience with the help of our developers.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-3" src="./assets/img/hiredevelopers/custom-icon3.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. Website development</h3>
    <p>We utilize our proficiency and experience in delivering the result driven solutions.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/custom-icon4.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. CMS solution</h3>
    <p>We provide elegant and effective CMS solutions as per your business requirements.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/custom-icon5.png" /></i>
    <div class="custom-ser-txt">
    <h3>5. Social networking app</h3>
    <p>Get social media apps with great effectiveness with our innovative PHP web developers.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-6" src="./assets/img/hiredevelopers/custom-icon6.png" /></i>
    <div class="custom-ser-txt">
    <h3>6. Enterprise applications</h3>
    <p>We are providing business apps using the latest PHP version to offer the best solutions.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire dedicated PHP developer in 5 easy steps</h2>
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
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire cakephp developer&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;hire cakephp developer&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-b019f661a95ce92d70e5c367-="">Hire Now!</a>
            </div>
        </div>
    </section>
        <section class="portfolio_hire">
    <div class="container-fluid">
       <div id="hire-generic" class="owl-carousel slide">
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/ahmadkadi.png" alt="Logicspice php portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image">                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> AhmadKadi</li>
                                        <li><b>Website URL:</b> http://ahmadkadi.com/</li>
                                        <li><b>Framework:</b> php</li>
                                        <li><b>Language:</b> PHP AJAX, jQuery, Java scripts,</li>
                                        <li><b>Database:</b> Mysql</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> AhmadKadi is a responsive portfolio where users can view portfolio by checking over the artist (admin) name from the landing page. They will then be able to view list of pictures listed over the site in both the landscape and portrait mode. Users will als</li>
                                    </ul>

                                </div>
                            </div>
                      
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/sattvicsagesolutions.png" alt="Logicspice php portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image">                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Satvicsage</li>
                                        <li><b>Website URL:</b> http://www.sattvicsagesolutions.com/</li>
                                        <li><b>Framework:</b> Saas</li>
                                        <li><b>Language:</b> PHP5.3.x, AJAX, jQuery, Java scripts, XML</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b>  "Sattvic Sage Solutions" is a SaaS system which will serve as an attractive medium for clinics to manage their clients and their details. Customers will be able to login and can manage their accounts, branches and staff details with their roles over SaaS</li>
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
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-laravel-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Laravel Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/laravel_img.png" alt="img"></div>
<p><span>Hire dedicated and expert laravel developers to develop high performance Laravel web applications.</span></p>
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
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-wordpress-experts">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire WordPress Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/wordpress_img.png" alt="img" /></div>
<p><span>Our expert Wordpress developers offer customized web development at low cost.</span></p>
</div>
</div>
</a></div>
</div>
</div>            </div>
        </div>
    </section>
    
    `
    
}