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
                        <h1 class="slide_title">Hire Magento Developer</h1>
                        <div class="subinstet">From the diversified pool of developers, hire Magento programmer that best suits your requirements in an effective manner. </div>
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
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire magento developer&quot;);
                                        $(&quot;#contact_fr&quot;).val(&quot;Hire Magento Developer&quot;);
                               " id="" class="btn btn-primary" data-cf-modified-cf37ab21af030f233c515b6d-="">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire Magento Developer" src="./assets/img/hiredevelopers/hire_magento_experts.png"></div></div>
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
                            <h2>Hire magento expert</h2>
                            <p>Logicspice offers a hub of talented magento ecommerce developers with vivid experience who are able to handle even the most complex requirements in a hassle-free manner. By working on a range of projects, our developers have garnered skills that best suits any requirement with the most advanced methodology for <a href="https://www.logicspice.com/magento-development">magento development</a>.<br />
<br />
Our proficient magento experts tend to participate proactively in the complete development process of either your new or existing Magento eCommerce store. With state-of-the-art technology involved, we ensure to deliver a solution that not only caters to your development needs, it also helps you in achieving the set goals in a much easier manner. <br />
<br />
Our team of dedicated magento developer is aware of the latest version of magento. We are able to deliver highly oriented solution for your e-Commerce store. <br />
&nbsp;</p>                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Multiple eCommerce integration</span></li>
    <li class="list-group-item"><span>Strong widget development skills</span></li>
    <li class="list-group-item"><span>Proficient in javascript</span></li>
    <li class="list-group-item"><span>Knowledge of CMS and MVC frameworks</span></li>
    <li class="list-group-item"><span>Custom theme development</span></li>
    <li class="list-group-item"><span>Knowledge of PSD and XHTML</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <section class="new-custom-section">
            <div class="container">
                <h2>Hire us for following magento development solution</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon1.png" alt="icon-1" /></i>
    <div class="custom-ser-txt">
    <h3>1. Custom solution</h3>
    <p>Get amazing customized development for your requirements with advanced technology backing it.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon2.png" alt="icon-2" /></i>
    <div class="custom-ser-txt">
    <h3>2. Magento shopping carts solution</h3>
    <p>Avail easy to use, highly functional and dynamics shopping cart solution for your eCommerce store.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon3.png" alt="icon-3" /></i>
    <div class="custom-ser-txt">
    <h3>3. Magento plugin development</h3>
    <p>Evolve your own plugin that can give an added boost to the site&rsquo;s functionality.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon4.png" alt="icon-4" /></i>
    <div class="custom-ser-txt">
    <h3>4. Magento CMS development</h3>
    <p>We provide a solution that offers improved experience to the users on any device.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon5.png" alt="icon-5" /></i>
    <div class="custom-ser-txt">
    <h3>5. Magento migration solutions</h3>
    <p>Proficient plugin tools that easily migrates for providing improved functionality to the site.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon6.png" alt="icon-6" /></i>
    <div class="custom-ser-txt">
    <h3>6. Theme design integration</h3>
    <p>Highly dynamic customized themes that create amazing impact on the visitors.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire magento experts in 5 easy steps</h2>
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
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire magento developer&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;hire magento developer&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-cf37ab21af030f233c515b6d-="">Hire Now!</a>
            </div>
        </div>
    </section>
    <section class="portfolio_hire">
    <div class="container-fluid">
        <div id="hire-generic" class="owl-carousel slide" data-ride="carousel">
           
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/regenepure.png" alt="Logicspice magento portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Regene Pure</li>
                                        <li><b>Website URL:</b> http://www.regenepure.com/</li>
                                        <li><b>Framework:</b> Magento</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> eCommerce Website</li>
                                    </ul>

                                </div>
                            </div>
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/biggerboatdistribution.png" alt="Logicspice magento portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Bigger Boat Distribution</li>
                                        <li><b>Website URL:</b> http://www.biggerboatdistribution.com/</li>
                                        <li><b>Framework:</b> Magento</li>
                                        <li><b>Language:</b> PHP-5, AJAX, Jquery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> eCommerce Website</li>
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
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-opencart-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Opencart Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/opencart-img.png" alt="img" /></div>
<p><span>Our dedicated Opencart experts ensure code is written in the most effective way possible.</span></p>
</div>
</div>
</a></div>
</div>
</div>            </div>
        </div>
    </section>
    
    `
    
}