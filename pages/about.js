export default class {
    constructor() {
        document.title = "Cafe FORE";
    }

    
    async getHtml() {
        
        return `
            
            <h3 class="about_article">
            <div class="about_us">About us<br><br></div>
            We are a snack & juice bar right inside the LA Fitness East Cobb.<br>
            You can just feel free open the door come inside.<br><br>
            Enjoy our sort of Coffee, powerful supplement smoothie, Acai bowl, wellness shot 
            and Korean style snack & food K-Bop.<br><br>
            Order online or call now!!<br>            
            </h3>
            <div class="about_video">
                <video autoplay muted loop class="aboutVideo">
                    <source src="/cafefore/images/about_video.mp4" type="video/mp4">
                </video>
            </div>     

            <div class="q_btn_container">
                <button type="button" class="q_menu q_btn">
                <a href="/menu" data-link style="color: white";>MENU</a></button>
                <button type="button" class="q_order q_btn">
                <a href="#" data-link style="color: white";>ORDER</a></button>
                <button type="button" class="q_call q_btn">
                <a href='tel:470-263-6495' style="color: white";>CALL</a></button>
            </div>   
                          
        `;
    }
}
