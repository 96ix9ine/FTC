var modal = document.getElementById("registration");
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
  anime({
    targets: '.modal-content',
    scale: [0.7, 1],
    duration: 500,
    easing: 'easeInOutQuad'
  });
}

var buttons = document.querySelectorAll('.button-reg');
buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    openModal();
  });
});

span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
}