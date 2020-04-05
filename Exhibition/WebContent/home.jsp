<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home</title>
</head>
<body>
	<h3>Welcome ${lastname}</h3>
	<input type = "text" name = "firstname2" value = "${firstname}" hidden = "hidden"></input>
	<h3 id = firstname>${firstname}</h3>
	<div class="topnav">
		<a class="active" href="#home">Home</a> <a href="#news">News</a> <a
			href="#contact">Contact</a> <a href="#about">About</a>
	</div>
	<form action="HomeNav" method="post">
	<table border = "1"
		style="background-color: rgb(255, 153, 102); margin-left: auto; margin-right: auto;">
		<tr>
			<td><b>White shirt</b><button name = "product" value = "webimages/white.png"><img alt="" src="webimages/white.png"></button></td>
			<td><b>Blue shirt</b><button name = "product" value = "webimages/blue.png"><img alt="" src="webimages/blue.png"></button></td>
			<td><b>Green shirt</b><button name = "product" value = "webimages/green.png"><img alt="" src="webimages/green.png">></button></td>
		</tr>
		<tr>
			<td><b>Grey shirt</b><button name = "product" value = "webimages/grey.png"><img alt="" src="webimages/grey.png"></button></td>
			<td><b>Yellow shirt</b><button name = "product" value = "webimages/yellow.png"><img alt="" src="webimages/yellow.png"></button></td>
			<td><b>Purple shirt</b><button name = "product" value = "webimages/purple.png"><img alt="" src="webimages/purple.png"></button></td>
		</tr>
	</table>
	</form>

</body>
</html>