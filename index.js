import Home from "./pages/Home.js";
import About from "./pages/about.js";
import Menu from "./pages/menu.js";
import Contact from "./pages/contact.js";
import NotFound from "./pages/NotFound.js";


const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_nav_list');
const icons = document.querySelector('.navbar_icons');
// const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');
const main_background = document.querySelector('.main_background');
const lorem = document.querySelector('.lorem');
const mainback1 = document.querySelector('.mainback1');
// const navbar_toggle = document.querySelector('.navbar_toggle');
// const footer = document.querySelector('.footer');
// const coffee_btn = document.querySelector('.coffee_button');
// const coffee_menu = document.querySelector('.coffee_menu');
const footer = document.querySelector('.footer');
const navbar_logo = document.querySelector('.navbar_logo');


toggleBtn.addEventListener('click', (e) => {
    menu.classList.toggle('on');
    icons.classList.toggle('on');
    // navbar.classList.toggle('on');
    main.classList.toggle('on');
    lorem.classList.toggle('on');
    footer.classList.toggle('on');
    // footer.classList.toggle('on');
    // navbar_toggle.classList.toggle('on');
    toggleBtn.classList.toggle('on');
    console.log("toggle");
    console.log(toggleBtn.classList);
    console.log(e);
});

// coffee_btn.addEventListener('click', ()=> {
//     coffee_menu.classList.toggle('on');

// });

console.log("index.js");

navbar_logo.addEventListener('click', () => {
    console.log("goto home");
    window.location.href = "http://127.0.0.1:5500/cafefore";
});



const router = async () => {
    const routes = [
        { path: "/cafefore/", view1: Home },
        { path: "/", view1: Home },
        { path: "/cafeFORE/", view1: Home },
        { path: "/cafeFORE/index.html", view1: Home },
        { path: "/about", view1: About },
        { path: "/menu", view1: Menu },
        { path: "/contact", view1: Contact },
    ];

    console.log("router");
    console.log(routes);

    const pageMatches = routes.map((route) => {
        return {
            route, // route: route
            isMatch: route.path === location.pathname,
            
        };
        
    });
    console.log("location.pathname", location.pathname);
    console.log(pageMatches);

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    console.log("match :", match);

    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector(".lorem").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view1();
        document.querySelector(".lorem").innerHTML = page.getHtml();
        // page.testHome();
        console.log(`page: ${JSON.stringify(page)}`);
        
        
        if(match.route.path == "/home" || match.route.path == "/" || match.route.path == "" || match.route.path == "/cafefore/" || match.route.path == "/cafeFORE/") {
            console.log(match.route.path);
            main_background.style.display = "flex";
            page.quickButton();
            page.quickBtnEventListener();
        
        }

        if(match.route.path == "/about" || match.route.path == "/menu" || match.route.path == "/contact") {
            console.log(match.route.path);
            main_background.style.display = "none";
        }

        if(match.route.path == "/menu") {
            
            page.menuSelector();
            page.menuEventListener();
        
        }

     

        if (menu.classList.length == 2) {

            console.log("length 2");
            console.log("toggle on");
            
            main.classList.toggle('on');
            menu.classList.toggle('on');
            icons.classList.toggle('on');
            footer.classList.toggle('on');
            toggleBtn.classList.toggle('on');
            console.log(`menu.classList.length: ${menu.classList.length}`);
        }
    }    
};

// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    
    document.body.addEventListener("click", (e) => {
        console.log(`index.js document.body.addEventListener(click, (e): ${JSON.stringify(e)}`);
        
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
    router();
});


