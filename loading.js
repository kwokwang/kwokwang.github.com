
// <li><a id="address-page"href="address.html">Address</a></li>
//<li><a id="help-page" href="help.html">Hjälp</a></li>
//<li><a id="contact-page"href="kontakt.html">Kontakt</a></li>

const loadingScreen = document.getElementById('overlay');
      const goToPageButton = document.getElementById('home-page');
      const goToPageButton2 = document.getElementById('menu-page');
      const goToPageButton3 = document.getElementById('address-page');
      const goToPageButton4 = document.getElementById('help-page');
      const goToPageButton5 = document.getElementById('contact-page');



      
      goToPageButton.addEventListener('click', () => {
        // Show loading screen
        loadingScreen.style.display = 'block';
        
        // Go to new page
        window.location.href = 'kwFontPage.html';
      });
      
      window.addEventListener('load', () => {
        // Hide loading screen
        loadingScreen.style.display = 'none';
      });
      goToPageButton2.addEventListener('click', () => {
        // Show loading screen
        loadingScreen.style.display = 'block';
        
        // Go to new page
        window.location.href = 'menu.html';
      });
      
      window.addEventListener('load', () => {
        // Hide loading screen
        loadingScreen.style.display = 'none';
      });
      goToPageButton3.addEventListener('click', () => {
        // Show loading screen
        loadingScreen.style.display = 'block';
        
        // Go to new page
        window.location.href = 'address.html';
      });
      
      window.addEventListener('load', () => {
        // Hide loading screen
        loadingScreen.style.display = 'none';
      });
      goToPageButton4.addEventListener('click', () => {
        // Show loading screen
        loadingScreen.style.display = 'block';
        
        // Go to new page
        window.location.href = 'help.html';
      });
      
      window.addEventListener('load', () => {
        // Hide loading screen
        loadingScreen.style.display = 'none';
      });
      goToPageButton5.addEventListener('click', () => {
        // Show loading screen
        loadingScreen.style.display = 'block';
        
        // Go to new page
        window.location.href = 'contact.html';
      });
      
      window.addEventListener('load', () => {
        // Hide loading screen
        loadingScreen.style.display = 'none';
      });



