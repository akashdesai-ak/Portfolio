<?php
if(isset($_POST['submit'])){
    $to = "aakashdesai.ak@gmail.com";
    $name = $_POST['name'];
    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From : $from";

    mail($to,$subject,$message,$headers);
    echo "Mail Sent Successfully..";
}else{
    echo "Something went wrong.";
}
?>
