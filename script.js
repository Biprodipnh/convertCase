function upper() {
    let input = document.getElementById("txt").value;
    let output = input.toUpperCase();
    document.getElementById("op").innerHTML = output;
}

function lower() {
    let input = document.getElementById("txt").value;
    let output = input.toLowerCase();
    document.getElementById("op").innerHTML = output;
}

function toCamelCase() {
    let input = document.getElementById("txt").value;
    return input.replace(/\b[a-z]/g, function (match) {
      return match.toUpperCase();
    }).replace(/\s+/g, '');
  }