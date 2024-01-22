// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// event listener for listening to scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {


    // Navbar section
    var navbar = document.getElementsByClassName("navbar-navbar")[0];
    var navbarGetStarted = document.getElementsByClassName("navbar-get-started")[0];
    var navLinkWeb = document.getElementsByClassName("nav-link-web");
    var navLogo = document.getElementsByClassName("navbar-branding-logo")[0];
    
    if (window.scrollY > navbar.offsetTop) {
      navbar.classList.add("navbar-scroll");
      navbarGetStarted.classList.add("navbar-get-started-scroll");
      navLogo.setAttribute("src", "public/Branding/logo-dark.png");
      for (const el of navLinkWeb) {
        el.classList.add("nav-link-web-scroll");
      }
    }
    else {
      navbar.classList.remove("navbar-scroll");
      navbarGetStarted.classList.remove("navbar-get-started-scroll");
      navLogo.setAttribute("src", "public/Branding/logo-white.png");
      for (const el of navLinkWeb) {
        el.classList.remove("nav-link-web-scroll");
      }
    }



    // Home Features section
    var point1 = document.getElementsByClassName("home-feature")[0];
    var point3 = document.getElementsByClassName("home-feature2")[0];

    if (isElementInViewport(point1)) {
      // Add the class to trigger the animation
      point1.classList.add("feature-border-animate");
      point3.classList.add("feature-border-animate");
    }



    // Fake News Section
    var rollingDiv = document.getElementsByClassName("home-container1")[0];
    var imgLeft1 = document.getElementsByClassName("home-image02")[0];
    var imgLeft2 = document.getElementsByClassName("home-image03")[0];
    var imgLeft3 = document.getElementsByClassName("home-image04")[0];
    var imgRight1 = document.getElementsByClassName("home-image05")[0];
    
    if (isElementInViewport(imgLeft3)) {
      // Add the class to trigger the animation
      imgLeft1.classList.add("item-left1");
      imgLeft2.classList.add("item-right");
      imgLeft3.classList.add("item-left2");
      imgRight1.classList.add("vertical-animate");
      rollingDiv.classList.remove("no-display");
    }



    // Actual Features section
    var featureCards = document.getElementsByClassName("card-card");
    var featureDesc = document.getElementsByClassName("features-description")[0];
    
    if (isElementInViewport(featureDesc)) {
      featureDesc.classList.add('features-description-animate');
    }

    [...featureCards].forEach(card => {
      // console.log(card);
      if (isElementInViewport(card)) {
        card.classList.add('translateYAnimation');
      }
    });



    // Why BlockChain section
    var blockChainSvg = document.getElementsByClassName("blockchain-svg-container")[0];
    var WhyUsPoints = document.getElementsByClassName("mark-mark");
  
    if (isElementInViewport(blockChainSvg)) {
      // Add the class to trigger the animation
      blockChainSvg.classList.add('translateYAnimation');
    }
    if (isElementInViewport(WhyUsPoints[0])) {
      for (const [idx, el] of [...WhyUsPoints].entries()) {
        if (idx > 2) return;
        el.classList.add('translatePoints')
      }
    }

    

    // Why AI section
    var whyAI = document.getElementsByClassName("home-heading05")[0];
    
    if (isElementInViewport(whyAI)) {
      // Add the class to trigger the animation
      for (const [idx, el] of [...WhyUsPoints].entries()) {
        if (idx > 2) {
          el.classList.add('translatePoints')
        }
      }
    }



    // Our partners section
    var partners = document.querySelectorAll(".partners img");

    if (isElementInViewport(partners[0])) {
      partners.forEach(el => {
        el.classList.add("partners-roll");
      })
    }



    // Our Team Section
    var ourTeams = document.getElementsByClassName("home-cards1")[0];
    var socialHandles = document.querySelectorAll(".home-socials a");
    
    if (isElementInViewport(ourTeams)) {
      // Add the class to trigger the animation
      socialHandles.forEach(el => {
        el.classList.add("translateSocials");
      });
      ourTeams.classList.add('translateYAnimation')
    }

  });
});

