<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Purchase</title>
</head>
<body>
<h1>Please select your size and finalize order, ${first}</h1>
<form action="PurchaseNav" method="post">
	<img alt="Error loading image" src="${image}" name="image" value="${image}">
	<label for="shirtsize">Choose a size:</label>
	<select name="size">
		<option value="xlarge">xlarge</option>
		<option value="large">large</option>
		<option value="medium">medium</option>
		<option value="small">small</option>
		<option value="xsmall">xsmall</option>
	</select>
	<button name="finalize_sale">Finalize sale</button>
</form>
</body>
</html>