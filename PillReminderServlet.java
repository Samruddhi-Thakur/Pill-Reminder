import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

/**
 * This Java Servlet handles the backend logic for saving and 
 * retrieving pill reminders.
 */
@WebServlet(name = "PillReminderServlet", value = "/pill-reminder")
public class PillReminderServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 1. Get data from the frontend (from your add.html form)
        String pillName = request.getParameter("pillName");
        String time = request.getParameter("time");

        // 2. Simple logic: Print to server console (In a real app, save to Database here)
        System.out.println("Reminder Set: " + pillName + " at " + time);

        // 3. Send a response back to your website
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h3>Reminder for " + pillName + " saved successfully!</h3>");
        out.println("<a href='index.html'>Go Back</a>");
        out.println("</body></html>");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // This would handle fetching the list of pills
        response.getWriter().println("Java Backend is Running.");
    }
}
