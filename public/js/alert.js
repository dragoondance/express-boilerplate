/* eslint-disable */
export const hideAlert = () => {
  const el = document.querySelector('.alert').remove();
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, message) => {
  hideAlert();
  const markup = `<div class="alert alert--${type}">${message}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterBegin', markup);
  window.setTimeout(() => {
    hideAlert();
  }, 5000);
};
