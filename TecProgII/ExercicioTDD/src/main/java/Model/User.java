package Model;
public class User {

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
    private String user = "adm";
    private String senha = "123";
}
