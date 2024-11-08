
package DAO;

public class Agencia {
    int numAge;
    String nomeAge;
    String endeAge;
    String numeAge;
    String complAge;
    String BairAre;
    String CidaAge;
    String ufAge;
    String cepAge;
    String foneAge;

   /* public agencias(int numAge, String nomeAge, String endeAge, String CidaAge, String ufAge, String cepAge) {
        this.numAge = numAge;
        this.nomeAge = nomeAge;
        this.endeAge = endeAge;
        this.CidaAge = CidaAge;
        this.ufAge = ufAge;
        this.cepAge = cepAge;
    }*/
    
    public Agencia(){
        
    }
    

    public void setNumAge(int numAge) {
        this.numAge = numAge;
    }

    public void setNomeAge(String nomeAge) {
        this.nomeAge = nomeAge;
    }

    public void setEndeAge(String endeAge) {
        this.endeAge = endeAge;
    }

    public void setNumeAge(String numeAge) {
        this.numeAge = numeAge;
    }

    public void setComplAge(String complAge) {
        this.complAge = complAge;
    }

    public void setBairAre(String BairAre) {
        this.BairAre = BairAre;
    }

    public void setCidaAge(String CidaAge) {
        this.CidaAge = CidaAge;
    }

    public void setUfAge(String ufAge) {
        this.ufAge = ufAge;
    }

    public void setCepAge(String cepAge) {
        this.cepAge = cepAge;
    }

    public void setFoneAge(String foneAge) {
        this.foneAge = foneAge;
    }

    public int getNumAge() {
        return numAge;
    }

    public String getNomeAge() {
        return nomeAge;
    }

    public String getEndeAge() {
        return endeAge;
    }

    public String getNumeAge() {
        return numeAge;
    }

    public String getComplAge() {
        return complAge;
    }

    public String getBairAre() {
        return BairAre;
    }

    public String getCidaAge() {
        return CidaAge;
    }

    public String getUfAge() {
        return ufAge;
    }

    public String getCepAge() {
        return cepAge;
    }

    public String getFoneAge() {
        return foneAge;
    }
    
    public String dadosSQLInsert(){
        String dadosAgencia;
        dadosAgencia = "'"
        + this.getNumAge()+ "','"
	+ this.getNomeAge()+ "','"
	+ this.getEndeAge()+ "','"
	+ this.getNumeAge()+ "','"
	+ this.getComplAge()+ "','"
	+ this.getBairAre()+ "','"
	+ this.getCidaAge()+ "','"
	+ this.getUfAge()+ "','"
	+ this.getCepAge()+ "','"
	+ this.getFoneAge()+ "'";
        
        return dadosAgencia;
    }
    
}
