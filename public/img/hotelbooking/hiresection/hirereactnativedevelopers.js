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
                        <h1 class="slide_title">Hire React Native Developers</h1>
                        <div class="subinstet">Hire React Native Developers to transform your ideas into mobile apps. Simple, efficient, and tailored to your needs.</div>
                        <div class="developer-servicees-bx">
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Fast & Efficient</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Cost-Effective Solutions</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Diverse Industry Expertise</span>
                            </div>
                            <div class="developer-servicees">
                                <i class="fa fa-check" aria-hidden="true"></i>
                                <span>Clear Communication with Clients</span>
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
                            <h2>Hire a React Native Expert</h2>
                            <p>We assist enterprises in scaling by aligning with them to offer expert and devoted React Native experts. Hire Expert React Native developers from 
                               Logicspice, known for their extensive experience and profound knowledge.</p>
                            <p>React Native is an exceptional framework designed for crafting seamless mobile applications. So, if you're thinking of utilizing the React Native 
                               framework for your mobile application, we can connect you with the most dedicated React Native experts.</p>
                            <p>Our freelance React Native developers boast years of experience, and it's undeniable that we stand as one of the elite React Native service providers 
in the market. We possess comprehensive expertise in mobile app development, ensuring the creation of user-friendly, modern, and cross-platform applications.</p>
                           
                     </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Technical expertise</h2>
                        <ul class="list-group">
    <li class="list-group-item"><span>Mastery in JavaScript & JSX.</span></li>
    <li class="list-group-item"><span>In-depth React Native knowledge.</span></li>
    <li class="list-group-item"><span>Experience with e-Commerce & chat apps.</span></li>
    <li class="list-group-item"><span>Front-end & back-end skills.</span></li>
    <li class="list-group-item"><span>Mobile Database Optimization</span></li>
    <li class="list-group-item"><span>Cross-device compatibility mastery.</span></li>
</ul>                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="new-custom-section">
            <div class="container">
                <h2>Hire dedicated React Native developers for custom mobile app development</h2>
                <div class="custom-solution-bx">
                    <div class="row">
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-1" src="./assets/img/hiredevelopers/custom-icon1.png" /></i>
    <div class="custom-ser-txt">
    <h3>1. E-Commerce App Development</h3>
    <p>Achieve scalable and user-friendly mobile solutions for your eCommerce venture with our React Native experts.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-2" src="./assets/img/hiredevelopers/custom-icon2.png" /></i>
    <div class="custom-ser-txt">
    <h3>2. App Migration Solutions</h3>
    <p>Our dedicated React Native developers ensure smooth app migration, bringing the best practices into play.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-3" src="./assets/img/hiredevelopers/custom-icon3.png" /></i>
    <div class="custom-ser-txt">
    <h3>3. CMS App Solutions</h3>
    <p>Cost-effective and performance-oriented mobile CMS solutions tailored to boost your business growth.</p>
    </div>
    </li>
</ul>
</div>
<div class="col-md-6">
<ul class="list-group">
    <li class="list-group-item"><i><img alt="icon-4" src="./assets/img/hiredevelopers/custom-icon4.png" /></i>
    <div class="custom-ser-txt">
    <h3>4. Social Networking Apps</h3>
    <p>Enhance digital connections through comprehensive mobile social networking apps crafted by our specialists.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-5" src="./assets/img/hiredevelopers/custom-icon5.png" /></i>
    <div class="custom-ser-txt">
    <h3>5. Theme Design & Integration</h3>
    <p>Seamlessly integrate captivating themes and designs in your app with our skilled developers' support.</p>
    </div>
    </li>
    <li class="list-group-item"><i><img alt="icon-6" src="./assets/img/hiredevelopers/custom-icon6.png" /></i>
    <div class="custom-ser-txt">
    <h3>6. App Extension Development</h3>
    <p>Expand your app's capabilities as our team stands ready to assist in developing and integrating extensions.</p>
    </div>
    </li>
</ul>
</div>
</div>                </div>
            </div>
        </section>
      
        <section class="dev_step_solution">
        <div class="container">
        <h2 class="title_heading">Hire React Native Developers in 5 easy steps.</h2>
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
                          headerTitle="What is React Native used for in mobile app development?"
                          collapseId="flush-collapse1"
                        >
                            <p>React Native is a framework that allows developers to create native mobile apps using JavaScript for iOS and Android platforms.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Why should I choose Logicspice's React Native developers?"
                          collapseId="flush-collapse2"
                        >
                          <p>Logicspice offers experienced React Native developers who are experts in crafting efficient, cross-platform mobile apps tailored to your needs.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="How does React Native compare to traditional native development?"
                          collapseId="flush-collapse3"
                        >
                         <p>React Native allows for faster development with code reuse across iOS and Android. In contrast, traditional native development requires separate codebases for each platform.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="How do you ensure the security and confidentiality of my app idea?"
                          collapseId="flush-collapse4"
                        >
                          <p>At Logicspice, client confidentiality is our priority. We sign non-disclosure agreements (NDAs) with all our clients, ensuring your app idea and data remain secure and confidential.</p>
                        </MDBAccordionItem>
                        
                        <MDBAccordionItem
                          headerTitle="Can I hire a developer for both short-term and long-term projects?"
                          collapseId="flush-collapse5"
                        >
                         <p>Absolutely! Whether you have a brief requirement or a long project, We offer flexible hiring models to cater to short-term and long-term development needs.</p>
                        </MDBAccordionItem>
                        
                        
                                                
                        
                    </MDBAccordion>
                </div>
                </div>
            </div>
        </div>
    </section>
    `
    
}