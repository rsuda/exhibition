import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class CustomerDAOImpl implements CustomerDAO {

	static java.sql.Connection con;
	static PreparedStatement ps;
	@Override
	public int insertCustomer(Customer c) {
		int status = 0;
		try {
			con=MyConnection.getCon();
			ps=con.prepareStatement("insert into customers value(?,?,?,?,?)");
			ps.setString(1,  c.getFirstName());
			ps.setString(2, c.getLastName());
			ps.setString(3, c.getEmail());
			ps.setString(4, c.getAddress());
			ps.setString(5, c.getPassword());
			status=ps.executeUpdate();
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return status;
	}

	@Override
	public Customer getCustomer(String email, String password) {
		Customer c=new Customer();
		try {
			con=MyConnection.getCon();
			ps=con.prepareStatement("select * from customers where email=? and password=?");
			ps.setString(1, email);
			ps.setString(2, password);
			
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				c.setFirstName(rs.getString(1));
				c.setLastName(rs.getString(2));
				c.setEmail(rs.getString(3));
				c.setAddress(rs.getString(4));
				c.setPassword(rs.getString(5));
			}
			
		}catch(Exception e) {
			System.out.println(e);
		}
		return c;
	}

}
