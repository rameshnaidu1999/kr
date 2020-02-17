// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBehHUwx7rgUphhXENW-asecyqFIuoqHRg",
  authDomain: "ramesh-kasula.firebaseapp.com",
  databaseURL: "https://ramesh-kasula.firebaseio.com",
  projectId: "ramesh-kasula",
  storageBucket: "ramesh-kasula.appspot.com",
  messagingSenderId: "517651155640",
  appId: "1:517651155640:web:bf92edf2ca9327e729c24d",
  measurementId: "G-DF119JH70Y"
};
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, subject, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, subject, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      subject: subject,
      email:email,
      message:message
    });
  }