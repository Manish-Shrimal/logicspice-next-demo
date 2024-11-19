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
                        <h1 class="slide_title">Hire CodeIgniter Developer</h1>
                        <div class="subinstet">Hire codeigniter programmer from the hub of talented developers to attain your development needs.</div>
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
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire WordPress Developer" src="./assets/img/hiredevelopers/Hire_codeigniter_developer.png"></div></div>
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
<h2>Codeigniter developer for hire</h2>
<p>Codeigniter is a powerful application development framework to create full-featured web application which provides a rich set of libraries for commonly needed tasks with a simple interface and logical structure to access these libraries. Logicspice offers the most proficient and expert <a href="https://www.logicspice.com/codeigniter-development">codeigniter web developers</a> offering affordable, cost-effective solutions that best suit your project development requirements. <br>
<br>
Our dedicated codeigniter programmers have extensive knowledge in MVC pattern, they deliver highly effective and quality solution for your PHP development needs. After hiring our expert codeigniter developer, you get the neatly coded solution and extensive support from our codeigniter web developers.<br>
<br>
Logicspice is well known for its innovative and creative approach in codeigniter. Hire codeigniter developer from us and get outstanding results in the competitive market.</p>
</div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Understanding in codeigniter framework</span></li>
    <li class="list-group-item"><span>Skills in PHP & HTML5</span></li>
    <li class="list-group-item"><span>Expertise in AJAX & MySQL</span></li>
    <li class="list-group-item"><span>Experience in codeigniter extension development</span></li>
    <li class="list-group-item"><span>CorePHP skills</span></li>
    <li class="list-group-item"><span>Excellence in handling clients</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <section class="new-custom-section">
            <div class="container">
                <h2>Hire us for following codeigniter development solution</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-1" src="./assets/img/hiredevelopers/custom-icon1.png" /></i>
    <div class="custom-ser-txt">
    <h3>1. Codeigniter web development</h3>
    <p>Featured rich & result driven web development solution at affordable price.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/custom-icon2.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. Migration solution</h3>
    <p>Easily use your code to the another project through codeigniter migration to save money and time.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-3" src="./assets/img/hiredevelopers/custom-icon3.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. eCommerce solution</h3>
    <p>Get you eCommerce online store with flexible solution developed by our developers.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/custom-icon4.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. Custom module development</h3>
    <p>Develop modules which suits your business requirement best in application.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/custom-icon5.png" /></i>
    <div class="custom-ser-txt">
    <h3>5. Integrate 3rd party API</h3>
    <p>Our developers have experience in developing 3rd Party API for adding more functionality.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-6" src="./assets/img/hiredevelopers/custom-icon6.png" /></i>
    <div class="custom-ser-txt">
    <h3>6. Theme integration</h3>
    <p>Integrate theme in codeigniter with the help of our codeigniter programmer.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire expert codeigniter developer in 5 easy steps</h2>
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
                                            <img src="./assets/img/hiredevelopers/gloryfastboats--1-.png" alt="Logicspice codeigniter portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image">                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> GloryFastBoats</li>
                                        <li><b>Website URL:</b> http://www.gloryfastboats.com/</li>
                                        <li><b>Framework:</b> Codeigniter</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Boat Company Website</li>
                                    </ul>

                                </div>
                            </div>
                      
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/shjewellery.png" alt="Logicspice codeigniter portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image">                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> shjewellery</li>
                                        <li><b>Website URL:</b> http://www.shjewellery.com.au/</li>
                                        <li><b>Framework:</b> Codeigniter</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> Jewelry Website</li>
                                    </ul>

                                </div>
                            </div>
                       
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="port_feat_img"><span>
                                            <img src="./assets/img/hiredevelopers/entitymakers.png" alt="Logicspice codeigniter portfolio" class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image">                                        </span>
                                    </div>
                                    <div class="portimagesec_shadow"></div>
                                </div>
                                <div class="col-md-6">

                                    <ul class="port_feat">
                                        <li><b>Website Name:</b> EntityMakers</li>
                                        <li><b>Website URL:</b> http://www.entitymakers.com.au/</li>
                                        <li><b>Framework:</b> Codeigniter</li>
                                        <li><b>Language:</b> PHP5, AJAX, jQuery, Java scripts</li>
                                        <li><b>Database:</b> MySQL</li>
                                        <li><b>Server:</b> Apache</li>
                                        <li><b>Overview:</b> PDF generation Website</li>
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
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/laravel_img.png" alt="img" /></div>
<p><span>Hire dedicated and expert laravel developers to develop high performance Laravel web applications.</span></p>
</div>
</div>
</a>
</div>
</div>  

<div class="col-sm-6 col-md-4">
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-cakephp-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire CakePHP Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/cakephp_img.png" alt="img" /></div>
<p><span>Hire dedicated, fulltime and freelance CakePHP programmers, who have a good mix of knowledge, skills &amp; experience.</span></p>
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