function checkUniqueId() {
  var uniqueId = document.getElementById("uniqueID").value;
  var gdriveLink = "";
  if (uniqueId === "1ZPGS82IU9XZ6WT7") {
    gdriveLink = "https://drive.google.com/drive/folders/1Yg1ATn27BaL4U1QZ3irAQMmCPqOYbeMr";
  } else if (uniqueId === "VPVNH0FYFG7FUADZ") {
    gdriveLink = "https://drive.google.com/drive/u/1/folders/1IJECHliPuDZ1AoQSSqtHeJyiNVwxOP7c";
  }

  if (gdriveLink !== "") {
    var element = window.open(gdriveLink);
  } else {
    alert("First, you need to purchase the BG-Safelink script to generate your unique-ID.");
  }
}
