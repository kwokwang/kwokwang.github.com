function submitForm(event) {
    event.preventDefault(); // prevent default form submission
    var form = event.target;
    var formData = new FormData(form); // create form data object
    var xhr = new XMLHttpRequest(); // create XHR object
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = xhr.responseText; // get response from server
          document.getElementById("result").innerHTML = response; // display response on page
        } else {
          console.error(xhr.statusText); // log any errors
        }
      }
    };
    xhr.open(form.method, form.action, true); // set up XHR request
    xhr.send(formData); // send form data to server
  }
  