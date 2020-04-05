<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
</head>
<body>
	<form action="loginRegister" method="post">
		<table
			style="background-color: rgb(255, 153, 102); margin-left: auto; margin-right: auto;">
			<tr>
				<td><h3>${message}</h3>
					<h3>${successMessage}</h3></td>
				<td><h3 style="color: black">LOGIN PAGE</h3></td>
				<td></td>
			</tr>
			<tr>
				<td>Email</td>
				<td><input type="text" name="email"></td>
			</tr>
			<tr>
				<td>Password</td>
				<td><input type="password" name="password1"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" name="submit" value="login"></td>
				<td><a href="register.jsp">Registration</a></td>
			</tr>
		</table>
	</form>
</body>
</html>