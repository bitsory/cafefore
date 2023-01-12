export default class {
    constructor() {
        document.title = "Cafe FORE";
    }

    
    getHtml() {
        console.log("about page");
     

        return `
            
            <h3 class="about_article">
            <div class="about_us">About us<br><br></div>
            We are a juice & snack bar right inside the LA Fitness East Cobb.<br>
            You can just feel free open the door come inside.<br><br>
            Enjoy our sort of Coffee, powerful supplment smoothie, Acai bowl, wellness shot 
            and Korean style snack & food K-Bop.<br><br>
            Order online or call now!!<br>
            
            </h3>     
                          
        `;
    }
}