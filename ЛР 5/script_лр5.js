function loadLanguages() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
            document.getElementById("data-container").innerHTML = JSON.parse(this.responseText).languages;
        } else {
            var error = this.statusText
        }
        }
    };
    xhttp.open("GET", "languages.txt", true);
    xhttp.send();
}
function loadStudents() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById("data-container").innerHTML = JSON.parse(this.responseText).students;
            } else {
                var error = this.statusText
            }
            }
        };
        xhttp.open("GET", "last_names.txt", true);
        xhttp.send();

}
