document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.FAQ__container-general_info-accordion_button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const parentAccordion = button.parentElement;
      const isVisible = content.classList.contains('show');

      document.querySelectorAll('.FAQ__container-general_info-accordion').forEach(accordion => {
        accordion.style.display = 'flex';
        accordion.style.flexDirection = 'column'
        const accordionContent = accordion.querySelector('.FAQ__container_general_info-accordion_content');
        if (accordionContent) {
          accordionContent.classList.remove('show');
        }
      });

      if (!isVisible) {
        document.querySelectorAll('.FAQ__container-general_info-accordion').forEach(accordion => {
          if (accordion !== parentAccordion) {
            accordion.style.display = 'none';
          }
        });

        if (content) {
          content.classList.add('show');
        }
      }
    });
  });
});
