export default class {
    constructor() {
        document.title = "Cafe FORE";
    }

    testHome() {
        console.log("test Home");
    }

    quickButton () {
        console.log("quick button querySelector");
        this.q_menu = document.querySelector('.q_menu');
    
    }
    quickBtnEventListener () {
        this.q_menu.addEventListener('click', (e)=> {
            console.log("quick button addEventListener");
            console.log(e.target);
        });
    }


    getHtml() {
        return `
            <div class="home_description">
                <h1>
                We are the world.
                <br>
                PEACE
                <br>
                LOVE
                <br>
                ...&<br> 
                Cafe FORE</h1>
            </div>

            <div class="q_btn_container">
                <button class="q_menu q_btn"><a href="/menu" data-link>MENU</a></button>
                <button class="q_order q_btn">ORDER</button>
                <button class="q_call q_btn">CALL</button>
            </div>
        `;
    }
}