// JavaScript to control the modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("button-reg")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// Когда пользователь кликает по кнопке, открываем модальное окно
btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Добавляем класс для предотвращения прокрутки
  }
  
  // Когда пользователь кликает на <span> (x), закрываем модальное окно
  span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Удаляем класс для разрешения прокрутки
  }
  
  // Когда пользователь кликает где-то за пределами модального окна, закрываем его
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open"); // Удаляем класс для разрешения прокрутки
    }
  }

