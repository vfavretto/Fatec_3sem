
package DAO;

public class Usuarios {
    String id;
    String senha;
    int numAge;
    int numCc;
    
    public Usuarios(){
        
    }

    public String getId() {
        return id;
    }

    public String getSenha() {
        return senha;
    }

    public int getNumAge() {
        return numAge;
    }

    public int getNumCc() {
        return numCc;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setNumAge(int numAge) {
        this.numAge = numAge;
    }

    public void setNumCc(int numCc) {
        this.numCc = numCc;
    }
    
    public String dadosSQLInsert(){
        String dadosClientes;
        dadosClientes = "'"
        + this.getId()+ "','"
	+ this.getSenha()+ "','"
	+ this.getNumAge()+ "','"
	+ this.getNumCc()+ "'";
        
        return dadosClientes;
    }
}
