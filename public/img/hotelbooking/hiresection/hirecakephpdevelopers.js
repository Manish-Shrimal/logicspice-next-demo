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
                        <h1 class="slide_title">Hire CakePHP Developer</h1>
                        <div class="subinstet">Hire expert freelance cakephp developers from the hub of talented developers to attain your development needs.</div>
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
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire CakePHP Developer" src="./assets/img/hiredevelopers/hire_cakephp_developer.png"></div></div>
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
                            <h2>Hire CakePHP programmer</h2>
                            <p><b>Are you looking for a solution in cakePHP?</b> Then, you are at right place. Logicspice is a leading <a href="https://www.logicspice.com/cakephp-development">cakePHP development company</a> with talented developers serving the industry over        years. We are equipped with cakephp developers who serves client as per their project requirement with cakephp web development, CMS development.</p>
<p>Being an open source PHP framework that makes your web application better which would not only make the web portals or applications unique but also minimize the development cost &amp; code as well. Our CakePHP developers &amp; designer work together to develop end-to-end solution while using well-equipped development infrastructure to maintain the best of CakePHP industry standards. We have successfully delivered cakePHP projects to number of businesses globally.</p>
<p>You can hire cakephp programmer which suits your requirement best. We provide comprehensive options to select from the talented hub of developers. We ensure to deliver cakephp        project in the given time and budget. Hire cakephp developers from logicspice for result driven solution.</p>                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Advance knowledge Of CakePHP framework</span></li>
    <li class="list-group-item"><span>Knowledge of MVC architecture</span></li>
    <li class="list-group-item"><span>Knowledge of javaScript &amp; jQuery</span></li>
    <li class="list-group-item"><span>Concept of oops</span></li>
    <li class="list-group-item"><span>Knowledge of MySQL database</span></li>
    <li class="list-group-item"><span>Programming skills in PHP5 and HTML5</span></li>
    <li class="list-group-item"><span>Strong knowledge of CakePHP and its extensive feature set</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <section class="new-custom-section">
            <div class="container">
                <h2>Hire us for following custom CakePHP solutions</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-1" src="./assets/img/hiredevelopers/custom-icon1.png" /></i>
    <div class="custom-ser-txt">
    <h3>1. Web development</h3>
    <p>Affordable and result driven cakephp development solutions to help your business to grow.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/custom-icon2.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. Shopping cart solution</h3>
    <p>Get unique &amp; excellent shopping cart solution using the cakePHP rapid development process.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-3" src="./assets/img/hiredevelopers/custom-icon3.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. CMS development</h3>
    <p>Affordable and result driven cakephp development solutions to help your business to grow.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/custom-icon4.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. Plugin development</h3>
    <p>Get technical expert for cakephp plugin development while allowing hierarchical, role based, simple authorization.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/custom-icon5.png" /></i>
    <div class="custom-ser-txt">
    <h3>5. Application development</h3>
    <p>Get highest quality application with the help of ORM and MVC from our cakephp expert developers.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-6" src="./assets/img/hiredevelopers/custom-icon6.png" /></i>
    <div class="custom-ser-txt">
    <h3>6. Social networking solution</h3>
    <p>We offer social integration into web applications from single API which can interface with multiple social networks.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire expert cake php developer in 5 easy steps</h2>
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
                                            
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/6e72e_teacherpublisher.png" alt="Logicspice cakephp portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Teacher Publisher</li>
                                        <li><b>Website URL:</b> http://teacherpublisher.com/</li>
                                        <li><b>Framework:</b> CakePHP</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Teacher Publisher Website</li>
                                    </ul>

                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/a544f_altijdbon.png" alt="Logicspice cakephp portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Altijdbon</li>
                                        <li><b>Website URL:</b> https://www.altijdbon.nl/</li>
                                        <li><b>Framework:</b> CakePHP</li>
                                        <li><b>Language:</b> PHP-5, AJAX, Jquery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Marketplace Site</li>
                                    </ul>

                                </div>
                            </div>
                       
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/a4221_uloan.png" alt="Logicspice cakephp portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> uLoan</li>
                                        <li><b>Website URL:</b> http://www.uloan.club/</li>
                                        <li><b>Framework:</b> CakePHP</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> ooleys is a Job portal, it facilitates perfect platform for Recruiter to find the correct candidate for their company and candidate can also search for the jobs within different categories over the site. Recruiter will be able to post the job over the web</li>
                                    </ul>

                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/6b36c_locumsite.png" alt="Logicspice cakephp portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> LocumSite</li>
                                        <li><b>Website URL:</b> http://www.locumsite.co.uk/</li>
                                        <li><b>Framework:</b> CakePHP</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Doctors/Medical Website</li>
                                    </ul>

                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/694ce_your-pansion.png" alt="Logicspice cakephp portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> YourPension</li>
                                        <li><b>Website URL:</b> http://www.yourpension.ch/</li>
                                        <li><b>Framework:</b> CakePHP</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> The motto of "Pension Plan Management" web solution is to provide online viewing portfolio that will be offered by administrator that would be a User Centric, User Oriented and would be easy to navigate and use. The objective of the proposed web solution </li>
                                    </ul>

                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/3f714_shopbook.png" alt="Logicspice cakephp portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Shopbook</li>
                                        <li><b>Website URL:</b> https://www.shopbook.co.za/</li>
                                        <li><b>Framework:</b> CakePHP</li>
                                        <li><b>Language:</b> PHP5.3.x, AJAX, jQuery, Java scripts, Codeigniter, XML</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> This website facilitates a shoppers to do shopping by choosing products as per the selected categories/store/vendors/brands, add products into a shopping cart and securely make payment for the products. The website/app will basically be an online shopping</li>
                                    </ul>

                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            
                                            <img src="https://www.logicspice.com/app/webroot/files/portfolio/full/90037_Iancooking-808px.png" alt="Logicspice cakephp portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> iamcooking</li>
                                        <li><b>Website URL:</b> https://www.iamcooking.co.za/</li>
                                        <li><b>Framework:</b> CakePHP</li>
                                        <li><b>Language:</b> PHP5.3.x, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Iamcooking that we are scoping will serves as Online Food Ordering Website using custom framework (PHP) that will facilitate a shoppers to do place order by choosing items as per the selected categories/store/chef, add products into a shopping cart and se</li>
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
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-quality-analyst">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Quality Assurance Tester</h3>
<div class="other-project-logo"><img src="https://www.logicspice.com/img/images/services_img/qa-img.png" alt="img" /></div>
<p><span>Hire expert quality assurance tester to make your website,software applications or mobile app bug free.</span></p>
</div>
</div>
</a></div>
</div>
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