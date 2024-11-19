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
                    <div class="col-md-7 text-left">
                        <h1 class="slide_title">Drupal</h1>
                        <div class="subinstet">Build your dream website with our expert and affordable Drupal developers</div>
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
                            <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to drupal&quot;);
                                        $(&quot;#contact_fr&quot;).val(&quot;Drupal&quot;);
                               " id="" class="btn btn-primary" data-cf-modified-198e32e4ee835b47831a3bb5-="">Hire Now!</a>

                            <a href="javascript:$zopim.livechat.window.show();" class="btn btn-primary">
                                Chat with a Developer
                            </a>
                        </div>
                    </div>
                                        <div class="col-md-5"><div class="cack_logo_img"><img alt="Drupal" src="https://www.logicspice.com/app/webroot/files/pages/full/82caa_drupal_hire_bg.png"></div></div>
                </div>
            </div>
            <div class="snop_animation"></div>            
        </div>        
    </section>
    <section class="dev_flexibility new-hirig-section">
        <div class="container">
            <div class="new-hiring-div">
                <div class="title_heading">Hiring Model</div>  
                <div class="col-md-4 col-sm-4">
                    <div class="inner-flex-new">
                        <i><img alt="app development" src="https://www.logicspice.com/app/webroot/img/images/periodic-icon.png"></i>
                        <div class="title_heading_Main-new">Periodic Basis</div>
                    </div></div>
                <div class="col-md-4 col-sm-4">
                    <div class="inner-flex-new">
                        <i><img alt="app development" src="https://www.logicspice.com/app/webroot/img/images/clock-icon.png"></i>
                        <div class="title_heading_Main-new">Hourly Basis</div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="inner-flex-new">
                        <i><img alt="app development" src="https://www.logicspice.com/app/webroot/img/images/checklist.png"></i>
                        <div class="title_heading_Main-new">Project Basis</div>
                    </div>
                </div>
            </div>
            <div class="hiring-sr">
                <div class="row">
                    <div class="col-md-6">
                        <div class="jumbotron">
                            <h2>SENIOR DEVELOPER </h2>
                            <p>Logicspice is leading Drupal solution provider for various business requirements for the past 6+ years. Having worked with clients across the world, our senior developers have gained an immense experience working on development projects based on Drupal. Our professional and committed <strong>Drupal developers</strong> are available for hire at Logicspice. Hire Drupal Experts from Logicspice to work on your projects. The Drupal Development solutions from Logicspice are versatile in nature and the developers are skilled in all the treading concepts of Drupal.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>TEAM LEAD (Drupal Development)</h2>
                        <p>The team leaders who manage our Drupal team have a long experience in handling the projects assigned to the team. They help the team whenever they need support and provide a timeline for every project so that the clients receives timely feedback about the project and it is completed on time. The <strong>Drupal team leads</strong> provide assurance and promise to deliver the best Drupal solutions to the customer. It is their job to manage the team members and the tasks/projects that are assigned to them.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        <section class="new-custom-section">
            <div class="container">
                <h2></h2>
                <div class="custom-solution-bx">
                                    </div>
            </div>
        </section>
        <section class="dev_step_solution">
        <div class="container">
            <h2 class="title_heading"></h2>
            <div class="step-row">

                <div class="col-md-2">
                    <div class="dev-steps">
                        <i><img alt="step-1" src="https://www.logicspice.com/app/webroot/img/images/step-icon1.png"></i>
                        <h5>Raise Your Request</h5>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="dev-steps">
                        <i><img alt="step-2" src="https://www.logicspice.com/app/webroot/img/images/step-icon2.png"></i>
                        <h5>Discuss Your Requirment</h5>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="dev-steps">
                        <i><img alt="step-3" src="https://www.logicspice.com/app/webroot/img/images/step-icon3.png"></i>
                        <h5>Select Experts</h5>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="dev-steps">
                        <i><img alt="step-4" src="https://www.logicspice.com/app/webroot/img/images/step-icon4.png"></i>
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
                <a href="javascript:void(0);" data-toggle="modal" data-target="#popup_sc_product" onclick="if (!window.__cfRLUnblockHandlers) return false; $(&quot;#update_frm&quot;).html(&quot;Request to drupal&quot;);
                            $(&quot;#contact_fr&quot;).val(&quot;drupal&quot;);
                   " id="" class="btn btn-primary" data-cf-modified-198e32e4ee835b47831a3bb5-="">Hire Now!</a>
            </div>
        </div>
    </section>
    

    <app-hiresection></app-hiresection>
    

    
    
    `
    
}