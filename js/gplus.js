/*
 * Triggered when the user accepts the the sign in, cancels, or closes the
 * authorization dialog.
 */
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;
  $('#email').val(profile.getEmail());
  $('#gplus').val(profile.getId());
  $('#gp_name').val(profile.getName());
  $('#f2').addClass("show a");
  $('#gplustoken').val(id_token);
  $('#submit').prop("disabled", false);
}
