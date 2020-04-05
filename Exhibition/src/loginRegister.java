

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class loginRegister
 */
@WebServlet("/loginRegister")
public class loginRegister extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public loginRegister() {
        super();
        
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String firstName = request.getParameter("firstname");
		String lastname = request.getParameter("lastname");
		String email = request.getParameter("email");
		String address = request.getParameter("address");
		String password = request.getParameter("password1");
		//String password = request.getParameter("password");
		String submit = request.getParameter("submit");
		CustomerDAO cd = new CustomerDAOImpl();
		Customer c = cd.getCustomer(email, password);
		if(submit.equals("login") && c !=null && c.getFirstName() != null)
		{
			request.setAttribute("firstname",  c.getFirstName());
			request.setAttribute("lastname",  c.getLastName());
			request.setAttribute("email",  c.getEmail());
			request.setAttribute("address",  c.getPassword());
			request.setAttribute("password",  c.getPassword());
			request.getRequestDispatcher("home.jsp").forward(request,  response);
		}
		else if(submit.equals("register")) 
		{
			c.setFirstName(firstName);
			c.setLastName(lastname);
			c.setEmail(email);
			c.setAddress(address);
			c.setPassword(password);
			cd.insertCustomer(c);
			request.setAttribute("successMessage", "Registration complete, please login!");
			request.getRequestDispatcher("login.jsp").forward(request,  response);
		}
		else
		{
			request.setAttribute("message", "Data not found, please register!");
			request.getRequestDispatcher("login.jsp").forward(request,  response);
		}
	}

}
