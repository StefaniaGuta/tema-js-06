const insertInput = document.getElementById("validation-input");

const VALIDATION_CLASS = {
    valid: 'valid',
    invalid: 'invalid'
  };

insertInput.addEventListener('blur', e => {
    const expectedLength = parseInt(insertInput.getAttribute('data-length'));
    if (insertInput.value.length === expectedLength) {
        insertInput.classList.add(VALIDATION_CLASS.valid);
        insertInput.classList.remove(VALIDATION_CLASS.invalid);
      } else {
        insertInput.classList.add(VALIDATION_CLASS.invalid);
        insertInput.classList.remove(VALIDATION_CLASS.valid);
      }
    });