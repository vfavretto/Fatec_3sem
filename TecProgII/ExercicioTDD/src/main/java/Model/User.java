package Model;
public class User {
    
    private String user;
    private String senha;

    public User(String user, String senha) {
        this.user = user;
        this.senha = senha;
    }

    public String getUser() {
        return user;
    }

    public String getSenha() {
        return senha;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
}
