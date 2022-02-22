function generate() {
    let id = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
      document.getElementById("uniqueID").value = id();
    }
function myfunc() {
    window.location.reload();
}