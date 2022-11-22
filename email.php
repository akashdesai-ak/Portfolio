<?php
if (isset($_POST['submit'])) {

  $Name = $_POST['name'];
  $Email = $_POST['email'];
  $Subject = $_POST['subject'];
  $Msg = $_POST['message'];

  if (empty($Name) || empty($Email) || empty($Subject) || empty($Msg)) {
    header('location: index.php?error ');
  } else {
    $to = "aakashdesai.ak@gmail.com";

    if (mail($to, $Subject, $Msg, $Email)) {

      header('location: index.php?success');
    }
  }
}
else{
  header('location: index.php');
}
