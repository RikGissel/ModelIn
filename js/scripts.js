// Force page to top on load
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  onbeforeunload = function () {
      scrollTo(0, 0);
  };
}

// Show and remove success message after 5 seconds
function showMessage() {
    document.getElementById('success-message').style.display = "flex";
}

function removeMessage()
    {
        setTimeout(function(){
      document.getElementById('success-message').style.display = "none";
    }
    , 5000); 
    }

    // Initialize AOS cdn
    AOS.init();