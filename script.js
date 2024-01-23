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

document.addEventListener("DOMContentLoaded", function () {
  // event listener for listening to scroll
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
      if (isElementInViewport(card)) {
        card.classList.add('translateYAnimation');
      }
    });



    // Why BlockChain section
    var blockChainSvg = document.getElementsByClassName("blockchain-svg-container")[0];
    var WhyUsPoints = document.getElementsByClassName("mark-mark");
  
    if (isElementInViewport(blockChainSvg)) {
      // Adding appearing animation to blockchain svg 
      blockChainSvg.classList.add('translateYAnimation');
    }
    if (isElementInViewport(WhyUsPoints[0])) {
      // Adding appearing animation to "points of why Blockchain" ?
      for (const [idx, el] of [...WhyUsPoints].entries()) {
        if (idx > 2) return;
        el.classList.add('translatePoints')
      }
    }

    

    // Why AI section
    var whyAI = document.getElementsByClassName("home-heading05")[0];
    
    if (isElementInViewport(whyAI)) {
      // Adding appearing animation to "points of why AI" ?
      for (const [idx, el] of [...WhyUsPoints].entries()) {
        if (idx > 2) {
          el.classList.add('translatePoints')
        }
      }
    }



    // Our partners section
    var partners = document.querySelectorAll(".partners img");

    if (isElementInViewport(partners[0])) {
      // add rolling animation to our partners
      partners.forEach(el => {
        el.classList.add("partners-roll");
      })
    }



    // Our Team Section
    var ourTeams = document.getElementsByClassName("article-card");
    // var socialHandles = document.querySelectorAll(".article-card a");

    [...ourTeams].forEach(memberCard => {
        if (isElementInViewport(memberCard)) {
          // add appear animation particular team member 
          memberCard.classList.add("translateYAnimation");

          // socialHandles contains array of anchor tag 
          var socialHandles = memberCard.children[0].children[2].children;
          // console.log(socialHandles);

          // add animation to socialHandles of the particular team member
          [...socialHandles].forEach(el => {
            el.classList.add("translateSocials");
          });
        }
    })

  });
  
  // event listener for prevent displaying endpoint in the url and scrolling into the view of the section
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
});

