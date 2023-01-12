
export default class {
    constructor() {
        document.title = "Cafe FORE";
        console.log("contact");
        this.name='';

    }

    gmLoad() {
        console.log("window loaded");
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '#';
        document.body.appendChild(script);
        console.log("window loaded done");
        
    }
    

    test() {
        console.log("contact test");
    }

    getHtml() {  
        this.gmLoad();

        return `
            <section id="contact">
                <div class="contact_us">Contact us<br><br>
                    <div class="contact_adr">cafefore4400@gmail.com<br>
                        (470)263-6495
                    </div>
                </div>
                

                <div class='contact_email_form'>
                    <form id="emailForm" class="gform" method="POST" data-email="cafefore4400@gmail.com" 
                    action="#"
                    onsubmit="return handleFormSubmit(event)">
                        <div class="form-row">
                            <div class="contact_name_email">
                                <div class="form-row-nm-em">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="contact_lb">
                                            <label class="contact_box_lb">Name *<br></label></div>
                                            <input type="text" class="form-control" id="senderName" name="senderName" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row-nm-em">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="contact_lb">
                                            <label class="contact_box_lb">Email *<br></label>
                                            </div>
                                            <input type="text" class="form-control" id="senderEmail" name="senderEmail" required>
                                        </div>
                                    </div>
                                </div>
                            </div><br><br>
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="contact_lb">
                                            <label class="contact_box_lb">Message *<br></label>
                                            </div>
                                            <textarea class="form-control" id="message" name="message" rows="5" ></textarea>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="form-group m-0">
                                    <button id="btnSubmit" class="btn_submit">Send</button>
                                </div>                            
                        </div>                                       
                    </form>
                    
                </div>
                <div style="display: none;" class="thankyou_message">
                        <h2>Thank you!</h2>
                </div>
            </section>
            <section id="visit">
                <div class="visit_us">Visit us</div>
                
                <div id="googleMap"></div>
            </section>
            
            
            
        `
    }
   
    
}
