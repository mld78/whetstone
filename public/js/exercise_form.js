var counter = 1;
var limit = 5;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Test " + (counter + 1) + "<input class='form-control' type='text' name='tests' id='test'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}
