$(function () {
  function writeToFile(emial){
    count = 0;
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("/emails.txt", 8, false, 0);
    fh.WriteLine('Email Address '+' : '+email);
    fh.Close();
  }
$('#subscribe').click(function(e){
  e.preventDefault();
  var email = $('#email-area').val();
  writeToFile(email);
});
});
