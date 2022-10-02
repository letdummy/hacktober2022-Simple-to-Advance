<!DOCTYPE HTML>
<html>

<body bgcolor="87ceeb">
    <center>
        <h2>Simple Library Management System</h2>
    </center>
    <br>

    <?php
    include("DBConnection.php");

    $isbn = $_POST["isbn"];
    $title = $_POST["title"];
    $author = $_POST["author"];
    $edition = $_POST["edition"];
    $publication = $_POST["publication"];

    $query = "insert into book_info(isbn,title,author,edition,publication) values('$isbn','$title','$author','$edition','$publication')"; //Insert query to add book details into the book_info table
    $result = mysqli_query($db, $query);
    ?>
    <h3> Book information has been inserted successfully </h3>

    <a href="SearchBooks.php"> To search for the book information click here </a>

</body>

</html>