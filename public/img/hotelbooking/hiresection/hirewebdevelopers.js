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
                        <h1 class="slide_title">Hire Web Developer</h1>
                        <div class="subinstet">Hire website developer from the hub of talented web developers to attain your development needs.</div>
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
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire web developer&quot;);
                                        $(&quot;#contact_fr&quot;).val(&quot;Hire Web Developer&quot;);
                               " id="" class="btn btn-primary" data-cf-modified-09c3de21fe9af53f8a4f414c-="">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Hire Web Developer" src="./assets/img/hiredevelopers/development.png"></div></div>
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
                            <h2>Hire professional web developers</h2>
                            <p>Whether you&rsquo;re a service provider, artist or a having a small business, for a growth in this competitive market, you must have a strong web presence and for that, you need a web programmer. Logicspice is a team of web developers, experienced in every web development technique, delivering best end-to-end <a href="https://www.logicspice.com/web-development">web development solutions</a>. At our company, we offer you the opportunity to hire web developers from India who possess the expertise and experience to take your projects to the next level. <br />
<br />
Hire dedicated web developers for featured rich and advanced web applications. You can hire Indian web developers who suit your development on various timing schedules like hourly basis, full-time, or part-time. We collaborate with you, understand each and every requirement, goals and deliver high-quality solutions. Our dedicated developers ensure you deliver user-friendly and search engine-friendly website development which will help in your business boost.<br />
<br />
Our web developers are well aware of the latest web development technologies and trends to deliver proficient service. Hire web programmers in India from Logicspice who are experienced in multiple areas in eCommerce, CMS, back end, and front end development.<br />
&nbsp;</p>                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Widget development</span></li>
    <li class="list-group-item"><span>Framework knowledge</span></li>
    <li class="list-group-item"><span>Custom CMS themes</span></li>
    <li class="list-group-item"><span>CMS customizations and plugin development</span></li>
    <li class="list-group-item"><span>HTML5, CSS3, PHP</span></li>
    <li class="list-group-item"><span>Back end development</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <section class="new-custom-section">
            <div class="container">
                <h2>Services offered by our dedicated web developers </h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon1.png" alt="icon-1" /></i>
    <div class="custom-ser-txt">
    <h3>1. CMS development</h3>
    <p>Manage your website in more better way with the help of our CMS developers.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon2.png" alt="icon-2" /></i>
    <div class="custom-ser-txt">
    <h3>2. e-Commerce web development</h3>
    <p>Get your online eCommerce website developed on frameworks like Magento.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon3.png" alt="icon-3" /></i>
    <div class="custom-ser-txt">
    <h3>3. Open source development</h3>
    <p>Website development of your preferred open source includes WordPress, Magento, CakePHP, and Laravel.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon4.png" alt="icon-4" /></i>
    <div class="custom-ser-txt">
    <h3>4. Plugin development</h3>
    <p>Custom plugin development for giving easy access to use your website.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon5.png" alt="icon-5" /></i>
    <div class="custom-ser-txt">
    <h3>5. Social networking</h3>
    <p>Build social networking website or applications with the help of our web developers.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img src="./assets/img/hiredevelopers/custom-icon6.png" alt="icon-6" /></i>
    <div class="custom-ser-txt">
    <h3>6. Third party integrations</h3>
    <p>Integrated any third-party tool with your website to add more functionality.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading">Hire web developers in India in 5 easy steps</h2>
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
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to hire web developer&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;hire web developer&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-09c3de21fe9af53f8a4f414c-="">Hire Now!</a>
            </div>
        </div>
    </section>
    
    <app-hiresection></app-hiresection>
    
    `
    
}