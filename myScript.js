function myFunction() {
    var name = document.getElementById('fname').value;
    var age = document.getElementById('age').value;
    var strand = document.getElementById('strand').value;
    document.getElementById("demo").innerHTML = "Name: " + name +"<br>Age: " + age + "<br>Strand: " + strand;
}