const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Navigation Links
let navLinks = document.querySelectorAll("nav > a");
navLinks.forEach((ele, i) => ele.textContent = siteContent["nav"][`nav-item-${i+1}`]);

// CTA Section
let ctaH1 = document.querySelector(".cta h1");
ctaH1.textContent = siteContent["cta"]["h1"];
let ctaBtn = document.querySelector(".cta button");
ctaBtn.textContent = siteContent["cta"]["button"];
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content Section
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
let topContent = document.querySelectorAll(".main-content .text-content");
let featuresContent = topContent[0].children;
featuresContent[0].textContent = siteContent["main-content"]["features-h4"];
featuresContent[1].textContent = siteContent["main-content"]["features-content"];
let aboutContent = topContent[1].children;
aboutContent[0].textContent = siteContent["main-content"]["about-h4"];
aboutContent[1].textContent = siteContent["main-content"]["about-content"];
let servicesContent = topContent[2].children;
servicesContent[0].textContent = siteContent["main-content"]["services-h4"];
servicesContent[1].textContent = siteContent["main-content"]["services-content"];
let productContent = topContent[3].children;
productContent[0].textContent = siteContent["main-content"]["product-h4"];
productContent[1].textContent = siteContent["main-content"]["product-content"];
let visionContent = topContent[4].children;
visionContent[0].textContent = siteContent["main-content"]["vision-h4"];
visionContent[1].textContent = siteContent["main-content"]["vision-content"];


// Contact Section
let contact = document.querySelectorAll(".contact > *");
contact[0].textContent = siteContent["contact"]["contact-h4"];
contact[1].textContent = siteContent["contact"]["address"];
contact[2].textContent = siteContent["contact"]["phone"];
contact[3].textContent = siteContent["contact"]["email"];

// Footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];