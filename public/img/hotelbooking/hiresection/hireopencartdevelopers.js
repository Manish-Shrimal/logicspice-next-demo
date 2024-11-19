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
    
        <section class="hire_developer_back_iin otherhire_developer_back_iin">
        <div class="hire_developer_back_iin_mask new-developers-mask">
            <div class="container">
                <div class="row">
                     <div class="col-md-7 text-start">
                        <h1 class="slide_title">Hire Opencart Developer</h1>
                        <div class="subinstet">Hire opencart programmer from the hub of dedicated developers to attain your development needs.</div>
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
                            <a href="javascript:void(0);" class="btn btn-primary">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary"> Chat with a Developer </a>
                        </div>
                    </div>
                  <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire iPhone App Developer" src="./assets/img/hiredevelopers/hire_opencart_developer.png"></div></div>
                </div>
            </div>        
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
                    </div>
                  </div>
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
                    <h2>Hire dedicated opencart developers</h2>
                    <p>Logicspice, team of expert developers specializes in opencart, an open source <a href="https://www.logicspice.com/php-programing">PHP based e-commerce 
                       solution</a>. Our company is undoubtedly good in providing best development services that will add five stars in your ecommerce site or store. From analysis, 
                       to development, our team of experienced opencart developers helps your for making your business more effective.<br>
                    <br>
                    We have dedicated Opencart programmer who will understand your requirement and work accordingly. Our Opencart experts are well qualified, trained and experienced 
                    who exactly know how to deal with clients and help them out. We will create best, effective and easy to use website that will help you standing in this competitive 
                    world and to gain better traffic with high profitability. <br>
                    <br>
                    Hire opencart developers from us who build amazing amazing websites and applications for outstanding results. <br>
                    &nbsp;</p>                      
                    </div>
                    </div>
                    <div class="col-md-6">
                    <h2>Technical expertise</h2>
                    <ul class="list-group">
                    <li class="list-group-item"><span>Expertise in PHP</span></li>
                    <li class="list-group-item"><span>Experience in Mysql</span></li>
                    <li class="list-group-item"><span>Knowledge of MVC framework</span></li>
                    <li class="list-group-item"><span>Skills in HTML and CSS</span></li>
                    <li class="list-group-item"><span>Experience in cakephp framework</span></li>
                    </ul>            
                    </div>
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
    <h3>1. Web development</h3>
    <p>Our skilled and expert opencart developer deliver wonderful websites for your business.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/custom-icon2.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. Opencart eCommerce solution</h3>
    <p>Top-notch solutions for your eCommerce websites with the help of our opencart developer.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-3" src="./assets/img/hiredevelopers/custom-icon3.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. CMS development</h3>
    <p>Take the help of our opencart expert for robust CMS solution on opencart framework.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/custom-icon4.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. Opencart migration solution</h3>
    <p>Easily migrate between opencart platforms by our dedicated opencart developers.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/custom-icon5.png" /></i>
    <div class="custom-ser-txt">
    <h3>5. Extension development</h3>
    <p>Powerful web application framework for the development of modular extension.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-6" src="./assets/img/hiredevelopers/custom-icon6.png" /></i>
    <div class="custom-ser-txt">
    <h3>6. Theme design & integration</h3>
    <p>Adorn your website with amazing themes and get them integrated with our opencart experts.</p>
    </div>
    </li>
</ul>
</div>
</div>                
</div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire expert opencart developer in 5 easy steps</h2>
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
                        <i><img alt="step-5" src="https://www.logicspice.com/app/webroot/img/images/step-icon5.png"></i>
                        <h5>Assign and kick start</h5>
                    </div>
                </div>
            </div>
            <div class="step-but">
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire iphone app developer&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;hire iphone app developer&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-0c2ec2f01c437bbcc25d3bb1-="">Hire Now!</a>
            </div>
        </div>
    </section>
        <section class="portfolio_hire">
    <div class="container-fluid">
        <div id="hire-generic" class="owl-carousel slide" data-ride="carousel">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="port_feat_img"><span>
                          <img src="./assets/img/hiredevelopers/Organic-Moringa.png" alt="organicmoringaaustralia"></span>
                          </div>
                          <div class="portimagesec_shadow"></div>
                      </div>
                      <div class="col-md-6">
                          <ul class="port_feat">
                              <li><b>Website  Name:</b> organicmoringaaustralia</li>
                              <li><b>Website  URL:</b> http://organicmoringaaustralia.com.au/</li>
                              <li><b>Framework:</b> PHP</li>
                              <li><b>Language:</b> PHP-5, AJAX, Jquery, Java scripts</li>
                              <li><b>Database:</b> MySQLI</li>
                              <li><b>Server:</b> MySQLI</li>
                              <li><b>Overview:</b> eCommerce Website</li>
                          </ul>
                      </div>
                  </div>
                <div class="row">
                      <div class="col-md-6">
                          <div class="port_feat_img"><span>
                          <img src="./assets/img/hiredevelopers/Ten-Seconds-Down-Music-Store.png" alt="TenSeconds"></span>
                          </div>
                          <div class="portimagesec_shadow"></div>
                      </div>
                      <div class="col-md-6">
                          <ul class="port_feat">
                              <li><b>Website  Name:</b> TenSeconds</li>
                              <li><b>Website  URL:</b> http://www.tenseconds.com.au/</li>
                              <li><b>Framework:</b> Opencart</li>
                              <li><b>Language:</b> PHP5, AJAX, jQuery, Java</li>
                              <li><b>Database:</b> MySQLI</li>
                              <li><b>Server:</b> MySQL</li>
                              <li><b>Overview:</b> N/A</li>
                          </ul>
                          
                      </div>
                  </div>
                <div class="row">
                      <div class="col-md-6">
                          <div class="port_feat_img"><span>
                          <img src="./assets/img/hiredevelopers/FishBone.png" alt="FishBone"></span>
                          </div>
                          <div class="portimagesec_shadow"></div>
                      </div>
                      <div class="col-md-6">
                          <ul class="port_feat">
                              <li><b>Website  Name:</b> FishBone</li>
                              <li><b>Website  URL:</b> http://www.skatefishbone.com/</li>
                              <li><b>Framework:</b> Opencart</li>
                              <li><b>Language:</b> PHP5, AJAX, jQuery, Java</li>
                              <li><b>Database:</b> MySQLI</li>
                              <li><b>Server:</b> MySQL</li>
                              <li><b>Overview:</b> N/A</li>
                          </ul>
            </div>
                
                
          </div>
           
    </div>
</div></section>
    



<app-hiresection></app-hiresection>



    <section class="latest_feature_product latest_feature_services">
        <div class="container">
            <h2 class="title_main">Other Popular Hire Developer</h2>
            <div class="other-product-box">
                <div class="row">
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
<div class="thumbnail">
<a title="View Detail" target="_black" href="https://www.logicspice.com/hire-magento-experts">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire Magento Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/magento_img.png" alt="img"></div>
<p><span>Hire certified, expert &amp; dedicated Magento developers for full time and hourly.</span></p>
</div>
</div>
</a>
</div>
</div>
<div class="col-sm-6 col-md-4">
<div class="thumbnail"><a title="View Detail" target="_black" href="https://www.logicspice.com/hire-cakephp-developers">
<div class="caption">
<div class="other-caption-bx">
<h3>Hire CakePHP Developer</h3>
<div class="other-project-logo"><img src="./assets/img/hiredevelopers/cakephp_img.png" alt="Hire CakePHP Developers" /></div>
<p><span>Hire dedicated, fulltime and freelance CakePHP programmers, who have a good mix of knowledge, skills &amp; experience.</span></p>
</div>
</div>
</a></div>
</div>
</div>            </div>
        </div>
    </section>
    
    `
    
}