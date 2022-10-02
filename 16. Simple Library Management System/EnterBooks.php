<!DOCTYPE HTML>
<html>

<!--
    Copy all files to PHP server and execute.
    http://localhost/EnterBooks.php
-->

<body bgcolor="87ceeb">
    <center>
        <h2>Simple Library Management System</h2>
    </center>
    <!--Once the form is submitted, all the form data is forwarded to InsertBooks.php -->
    <form action="InsertBooks.php" method="post">

        <table border="2" align="center" cellpadding="5" cellspacing="5">
            <tr>
                <td> Enter the ISBN :</td>
                <td> <input type="text" name="isbn" size="44"> </td>
            </tr>
            <tr>
                <td> Enter the Title :</td>
                <td> <input type="text" name="title" size="44"> </td>
            </tr>
            <tr>
                <td> Enter the Author :</td>
                <td> <input type="text" name="author" size="44"> </td>
            </tr>
            <tr>
                <td> Enter the Edition :</td>
                <td> <input type="text" name="edition" size="44"> </td>
            </tr>
            <tr>
                <td> Enter the Publication: </td>
                <td> <input type="text" name="publication" size="44"> </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="submit" value="submit">
                    <input type="reset" value="Reset">
                </td>
            </tr>
        </table>
    </form>
</body>

</html>