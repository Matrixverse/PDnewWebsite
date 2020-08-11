<script>
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
  document.getElementById("navbarnew").style.top = "0px";
  } else {
  document.getElementById("navbarnew").style.top = "-200px";
  }
}
</script>
