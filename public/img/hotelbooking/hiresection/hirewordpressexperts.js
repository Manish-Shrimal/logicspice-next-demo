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
                        <h1 class="slide_title">Hire WordPress Developer</h1>
                        <div class="subinstet">Hire dedicated wordpress developer from the hub of talented developers to attain your development needs.</div>
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
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire WordPress Developer" src="./assets/img/hiredevelopers/hire_wordpress_developer.png"></div></div>
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
                            <h2>Hire wordpress experts</h2>
                            <p><strong><i>Hire wordpress developers</i></strong>  &nbsp;from logicspice at cost effective rates who are experts in complex wordPress CMS programming. Our wordpress developers are enriched with amazing skills that enable which let them complex projects perfectly. Our wordpress programmers are updated with the latest version of wordpress, and capable of building a custom wordpress website.<br />
<br />
Hire <a href="https://www.logicspice.com/wordpress-web-development">wordpress website developer</a> from us to maximize strength of your business. Our developers are engaged in multiple web development projects and deliver highly reliable, efficient and quality results.<br />
<br />
We are the best WordPress development company to <strong><i>hire WordPress programmer in India</i></strong> for the last 18 + years, we also offer WordPress designers for hire. We follow the transparent work process to ensure our clients about their project completion within the desired time frame. We have successfully developed many projects, so hire us for Front-End and Back-End solutions.<br />
<br />
All WordPress developers are focused on achieving success in every web development project. <strong><i>Hire WordPress developers in India</i></strong> as long as you need them to get success in your business in this competitive edge.</p>                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Skills in HTML and CSS</span></li>
    <li class="list-group-item"><span>PHP and Javascript/span&gt;</span></li>
    <li class="list-group-item"><span>Greater database knowledge</span></li>
    <li class="list-group-item"><span>Expert in SQL</span></li>
    <li class="list-group-item"><span>Experience in wordpress plugin development</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <section class="new-custom-section">
            <div class="container">
                <h2>Hire WordPress developer in India for the following WordPress development solution</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-1" src="./assets/img/hiredevelopers/custom-icon1.png" /></i>
    <div class="custom-ser-txt">
    <h3>1. Wordpress web development</h3>
    <p>Get an amazing &amp; advanced e-Commerce solution for your business.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/custom-icon2.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. Wordpress shopping cart solution</h3>
    <p>Powerful, easy-to-use, secure, and fully functional shopping cart solution for your online store.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-3" src="./assets/img/hiredevelopers/custom-icon3.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. Wordpress plugin development</h3>
    <p>Build your own plugins and themes with the help of our WordPress developer.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/custom-icon4.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. Wordpress migration solutions</h3>
    <p>Effective plugins migrate with WordPress websites to add more functionality.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/custom-icon5.png" /></i>
    <div class="custom-ser-txt">
    <h3>5. Theme Design Integration</h3>
    <p>Building amazing customized wordpress themes to meet your business goals.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-6" src="./assets/img/hiredevelopers/custom-icon6.png" /></i>
    <div class="custom-ser-txt">
    <h3>6. Wordpress CMS development</h3>
    <p>Best wordpress CMS tools for providing amazing experience on mobile or web.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire expert wordpress developer in 5 easy steps</h2>
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
    <section class="portfolio_hire">
    <div class="container-fluid">
        <div id="hire-generic" class="owl-carousel slide" data-ride="carousel">
            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/uavvision.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Uav Vision</li>
                                        <li><b>Website URL:</b> http://www.uavvision.com/</li>
                                        <li><b>Framework:</b> WordPress</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> </li>
                                    </ul>

                                </div>
                            </div>
             
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/dagrella.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> Dagrella</li>
                                        <li><b>Website URL:</b> http://www.dagrella.com/</li>
                                        <li><b>Framework:</b> WordPress CMS (4.3)</li>
                                        <li><b>Language:</b> PHP-5, AJAX, Jquery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Law Firm Website</li>
                                    </ul>

                                </div>
                            </div>
             
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/aikinnebandy.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> AikinneBandy</li>
                                        <li><b>Website URL:</b> http://www.aikinnebandy.se/</li>
                                        <li><b>Framework:</b> WordPress CMS (4.3)</li>
                                        <li><b>Language:</b> PHP-5, AJAX, Jquery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Law Firm Website</li>
                                    </ul>

                                </div>
                            </div>
                    
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/nationalcleaninggroup--2-.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> National Cleaning Group</li>
                                        <li><b>Website URL:</b> http://nationalcleaninggroup.com.au/</li>
                                        <li><b>Framework:</b> Joomla</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Company/Informational Website</li>
                                    </ul>

                                </div>
                            </div>
                     
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/protroc.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> protroc</li>
                                        <li><b>Website URL:</b> http://protroc.com/</li>
                                        <li><b>Framework:</b> WordPress</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Classified Website</li>
                                    </ul>

                                </div>
                            </div>
                      
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/eco-fused.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> eco-fused</li>
                                        <li><b>Website URL:</b> http://www.eco-fused.com/</li>
                                        <li><b>Framework:</b> WordPress</li>
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
                                            <img src="./assets/img/hiredevelopers/dlraccountants--1-.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> documentservices</li>
                                        <li><b>Website URL:</b> http://www.documentservices.ca/</li>
                                        <li><b>Framework:</b> WordPress CMS (4.3)</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Document Services Website</li>
                                    </ul>

                                </div>
                            </div>
                    
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/keystagehistory.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> KeyStage History</li>
                                        <li><b>Website URL:</b> http://keystagehistory.co.uk/</li>
                                        <li><b>Framework:</b> WordPress</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Article Posting Website</li>
                                    </ul>

                                </div>
                            </div>
                      
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/amcsignpost.png" alt="Logicspice wordpress portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image" />                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> AMCS</li>
                                        <li><b>Website URL:</b> http://amcsignpost.net/</li>
                                        <li><b>Framework:</b> CMS – WordPress</li>
                                        <li><b>Language:</b> PHP5.3.x, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> The application that we are scoping simple informational website for “Australian Medical Cannabis Signpost�?. We have to develop the website (WordPress) in the WordPress latest stable version. </li>
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
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-magento-experts">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Magento Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/magento_img.png" alt="img" /></div>
<p><span>Hire certified, expert &amp; dedicated Magento developers for full time and hourly.</span></p>
</div>
</div>
</a></div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-cakephp-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire CakePHP Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/cakephp_img.png" alt="img" /></div>
<p><span>Hire dedicated, fulltime and freelance CakePHP programmers, who have a good mix of knowledge, skills &amp; experience.</span></p>
</div>
</div>
</a></div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-laravel-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Laravel Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/laravel_img.png" alt="img" /></div>
<p><span>Hire dedicated and expert laravel developers to develop high performance Laravel web applications.</span></p>
</div>
</div>
</a></div>
</div>
</div>            </div>
        </div>
    </section>
    `
    
}