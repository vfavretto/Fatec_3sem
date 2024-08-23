package Controller;

import Model.User;

public class Controller {
    
    User usuario;
    
     public void regisUser(String user, String senha) {
        usuario = new User(user, senha);
    }

    public boolean validaLogin(String user, String senha) {
        if (user.equals(usuario.getUser()) && senha.equals(usuario.getSenha())) {
            return true;
        } else {
            return false;
        }
    }

}
