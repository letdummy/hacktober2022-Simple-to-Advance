<!DOCTYPE HTML>
<html>

<body bgcolor="87ceeb">
    <center>
        <h2>Simple Library Management System</h2>
    </center>
    <br>

    <?php
    include("DBConnection.php");

    $search = $_REQUEST["search"];

    $query = "select ISBN,Title,Author,Edition,Publication from book_info where title like '%$search%'"; //search with a book name in the table book_info
    $result = mysqli_query($db, $query);

    if (mysqli_num_rows($result) > 0) if (mysqli_num_rows($result) > 0) {
    ?>

        <table border="2" align="center" cellpadding="5" cellspacing="5">
            <tr>
                <th> ISBN </th>
                <th> Title </th>
                <th> Author </th>
                <th> Edition </th>
                <th> Publication </th>
            </tr>

            <?php while ($row = mysqli_fetch_assoc($result)) {
            ?>
                <tr>
                    <td><?php echo $row["ISBN"]; ?> </td>
                    <td><?php echo $row["Title"]; ?> </td>
                    <td><?php echo $row["Author"]; ?> </td>
                    <td><?php echo $row["Edition"]; ?> </td>
                    <td><?php echo $row["Publication"]; ?> </td>
                </tr>
        <?php
            }
        } else
            echo "<center>No books were found in the library by the name $search </center>";
        ?>
        </table>
</body>

</html>