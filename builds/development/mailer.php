<?php
    // Get the form fields, removes html tags and whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    $subject  = $_POST['subject'];
    // Check the data.
    if (empty($name) || empty($subject) || empty($message) || empty($subject) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location:index.php?success=error#contact");
        exit;
    }
    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "tony.hongq@gmail.com";

    // Set the email subject.
    $title = "New contact from $name - subject: $subject";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Subject: $subject\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    mail($recipient, $title, $email_content, $email_headers);
    
    // Redirect to the index.html page with success code
    header("Location: index.php?success=valid#contact");

?>