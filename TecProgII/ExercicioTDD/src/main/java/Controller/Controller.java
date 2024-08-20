
package Controller;
import Model.User;
public class Controller {
    public boolean validaLogin(String user, String senha) {
        if(user == User.getUser()) {
            
            return true;
        }
        return false;
    }
}
