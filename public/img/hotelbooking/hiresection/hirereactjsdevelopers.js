const { createApp, ref , onMounted ,inject} = Vue;

import hiresection from '../elements/hiresection.js?nocash';

export default{
    
    components:{
         MDBAccordion : mdb.MDBAccordion,
        MDBAccordionItem : mdb.MDBAccordionItem,
        MDBBtn: mdb.MDBBtn, 
        MDBModal: mdb.MDBModal,
        MDBModalBody: mdb.MDBModalBody,
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
                        <h1 class="slide_title">Hire ReactJS Developers</h1>
                        <div class="subinstet">Start your web development journey with the expertise of ReactJS developers. Seamless, efficient, and tailored specifically for your unique needs.</div>
                        <div class="developer-servicees-bx">
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Efficient Development</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Cost Effective Solution</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Broad Industry Knowledge</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Transparent Client Interaction</span>
                            </div>
                        </div>
                        <div class="nt_cdl">
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to zencart&quot;);
                                        $(&quot;#contact_fr&quot;).val(&quot;Zencart&quot;);
                               " id="" class="btn btn-primary" data-cf-modified-352c6b94033bf74652c236c0-="">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Zencart" src="./assets/img/hiredevelopers/react-icon.png"></div></div>
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
                            <h2>Hire ReactJS Expert</h2>
                            <p>Businesses aiming for unparalleled digital growth need only specialists' expertise. We support businesses to grow by connecting them with top-tier 
ReactJS Experts. Choosing ReactJS is a strategic decision, given its capacity to deliver dynamic web solutions.</p>
                            <p>ReactJS stands as a superior framework geared towards designing immersive web experiences. If you're considering using the ReactJS ecosystem for 
your web interface, we're here to introduce you to the ReactJS experts.</p>
                            <p>Our ReactJS developers have years of experience, making us a trusted name in ReactJS development. We understand web development deeply, ensuring 
we build user-friendly, modern, and responsive websites for you.</p>
                           
                     </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Proficiency in JavaScript & JSX.</span></li>
    <li class="list-group-item"><span>Deep-seated ReactJS insights.</span></li>
    <li class="list-group-item"><span>Proven experience with e-commerce & web portals.</span></li>
    <li class="list-group-item"><span>Command over front end & back-end development.</span></li>
    <li class="list-group-item"><span>Web Database Streamlining.</span></li>
    <li class="list-group-item"><span>Mastery over responsive web design.</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="new-custom-section">
            <div class="container">
                <h2>Hire dedicated ReactJS developers for custom web development</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-1" src="./assets/img/hiredevelopers/custom-icon1.png" /></i>
    <div class="custom-ser-txt">
    <h3>1. E-Commerce Web Development</h3>
    <p>Rely on our ReactJS experts to craft dynamic and efficient online shopping platforms.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/custom-icon2.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. Web Migration Solutions</h3>
    <p>Our ReactJS specialists guarantee seamless website migrations with the latest best practices.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-3" src="./assets/img/hiredevelopers/custom-icon3.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. CMS Web Solutions</h3>
    <p>Optimized, cost-effective web CMS solutions crafted to grow your business forward.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/custom-icon4.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. Social Networking Websites</h3>
    <p>Boost online interactions with premium web-based social platforms crafted by ReactJS Experts.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/custom-icon5.png" /></i>
    <div class="custom-ser-txt">
    <h3>5. Theme Design & Integration</h3>
    <p>Integrate stunning themes and layouts into your website, backed by our best ReactJS developers.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-6" src="./assets/img/hiredevelopers/custom-icon6.png" /></i>
    <div class="custom-ser-txt">
    <h3>6. Web Extension Development</h3>
    <p>Strengthen the website's functionality with additional features and tools carefully designed by our ReactJS experts.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
      
        <section class="dev_step_solution">
        <div class="container">
        <h2 class="title_heading">Hire ReactJS Developers in 5 streamlined steps.</h2>
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
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to zencart&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;zencart&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-352c6b94033bf74652c236c0-="">Hire Now!</a>
            </div>
        </div>
    </section>
    
    <app-hiresection></app-hiresection>
    <section class="ecommerce_faq_section NewFaqDesignSection">
        <div class="container">
            <div class="row">
                <div class=" row ecommerce__Quick_FAQ">
                <div class="col-md-5">
                    <h4 class="title_main">Frequently <br>Asked Questions</h4>
                    <div class="FaqImgBx"><img src="./assets/img/laraveldevelopment/FaqLaravelImg.png" alt="laravel web development"></div>
                </div>
                    <div class="col-md-7">
                    
                        <MDBAccordion v-model="activeItem" borderless>
                        <MDBAccordionItem
                          headerTitle="Why is ReactJS used in web development?"
                          collapseId="flush-collapse1"
                        >
                            <p>ReactJS allows developers to craft dynamic user interfaces for web applications with reusable components.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Why should I hire ReactJS developers from Logicspice?"
                          collapseId="flush-collapse2"
                        >
                          <p>Logicspice's ReactJS developers are experienced professionals known for creating efficient, responsive web apps tailored for your enterprise.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="How does ReactJS differ from other frontend libraries/frameworks?"
                          collapseId="flush-collapse3"
                        >
                         <p>ReactJS emphasizes component-based architecture, facilitating faster development and easier maintenance compared to traditional frameworks.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="How do you ensure my project's confidentiality?"
                          collapseId="flush-collapse4"
                        >
                          <p>At Logicspice, client confidentiality is our priority. We're committed to ensuring your project's confidentiality via NDAs etc.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Can I hire developers for varied project durations?"
                          collapseId="flush-collapse5"
                        >
                         <p>Indeed! Be it a short-term task or a long-drawn project, Logicspice has flexible hiring models to suit all needs.</p>
                        </MDBAccordionItem>
                        
                        
                                                
                        
                    </MDBAccordion>
                </div>
                </div>
            </div>
        </div>
    </section>
    `
    
}