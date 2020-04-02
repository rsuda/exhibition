

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
		String userName = request.getParameter("username");
		String password = request.getParameter("password1");
		//String password = request.getParameter("password");
		String submit = request.getParameter("submit");
		CustomerDAO cd = new CustomerDAOImpl();
		Customer c = cd.getCustomer(userName, password);
		if(submit.equals("login") && c !=null && c.getName() != null)
		{
			request.setAttribute("message",  c.getName());
			request.getRequestDispatcher("member.jsp").forward(request,  response);
		}
		else if(submit.equals("register")) 
		{
			c.setName(request.getParameter("name"));
			c.setPassword(password);
			c.setUsername(userName);
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
