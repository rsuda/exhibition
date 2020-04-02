import java.sql.DriverManager;

public class MyConnection implements MyProvider {
	
	static java.sql.Connection con=null;
	
	public static java.sql.Connection getCon() {
		try {
			Class.forName("com.mysql.jdbc.Driver");//com.mysql.jdbc.Driver
			con= DriverManager.getConnection(connUrl, username, pwd);
		}catch(Exception e) {
			System.out.println(e);
		}
		return con;
	}
}

