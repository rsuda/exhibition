<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register</title>
</head>
<body>
	<form action="loginRegister" method="post">
		<table
			style="background-color: rgb(255, 153, 102); margin-left: auto; margin-right: auto;">
			<tr align = "center">
				<td align = "center"><h3 style="color: black">REGISTRATION PAGE</h3></td>
			</tr>
			<tr>
				<td>Email</td>
				<td><input type="text" name="email"></td>
			</tr>
			<tr>
				<td>First Name</td>
				<td><input type="text" name="firstname"></td>
			</tr>
			<tr>
				<td>Last Name</td>
				<td><input type="text" name="lastname"></td>
			</tr>
			<tr>
				<td>Address</td>
				<td><input type="text" name="address"></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" name="password1"></td>
			</tr>
			<tr>
				<td>Retype Password</td>
				<td><input type="password" name="password2"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" name="submit" value="register"></td>
				<td><a href="login.jsp">Login</a></td>
			</tr>
		</table>
	</form>
</body>
</html>