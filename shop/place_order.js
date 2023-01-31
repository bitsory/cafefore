export default class {
    constructor(param) {
        document.title = "Cafe FORE";
        console.log("place order page");
        this.count = param;
        

    }

    test() {
        console.log("place order.js");
    }

    proceedSelector() {
        this.$proceed_order_btn = document.querySelector('.proceed_order_btn');    
        this.$no_proceed_order_btn = document.querySelector('.no_proceed_order_btn');
    }

    proceedEventListener () {
        this.$proceed_order_btn.addEventListener('click', (event)=> {
            window.location.href = "http://127.0.0.1:5500/cafefore/pages/order_confirm.html"
        });
        
        this.$no_proceed_order_btn.addEventListener('click', (event)=> {
            window.history.back();
        });


    }





    orderConfirm() {
        console.log("orderConfirm");
        window.location.href = "http://127.0.0.1:5500/cafefore/pages/order_confirm.html"
    }






    getHtml() {
        this.test();

        return `
        
        <h2>Your Order</h2>
        ${this.count}

        <h2>Would you like proceed your order?</h2>
        <button class='proceed_order_btn'>Go For It</button>
        <button class='no_proceed_order_btn'>No Thanks</button>
        
        `

    };
            
    





}
