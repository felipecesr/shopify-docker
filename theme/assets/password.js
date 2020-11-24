// =require label/modals.js

$(function() {
  var $loginModal = $('#LoginModal');

  if (!$loginModal.length) {
    return;
  }

  var passwordModal = new window.Modals('LoginModal', 'login-modal', {
    focusOnOpen: '#Password'
  });

  // Open modal if errors exist
  if ($loginModal.find('.errors').length) {
    passwordModal.open();
  }
});
