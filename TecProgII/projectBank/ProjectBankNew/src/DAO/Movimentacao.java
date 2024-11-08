
package DAO;

import java.util.Date;

public class Movimentacao {
    int numAge;
    int numCc;
    String dataMov;
    String numDocto;
    String DebitoCredito;
    int idHis;
    String complHis;
    int valor;
    int saldo;

    /*public movimentacao(int numAge, int numCc, Date dataMov, String numDocto, String DebitoCredito, int idHis, int valor) {
        this.numAge = numAge;
        this.numCc = numCc;
        this.dataMov = dataMov;
        this.numDocto = numDocto;
        this.DebitoCredito = DebitoCredito;
        this.idHis = idHis;
        this.valor = valor;
    }*/
    
    public Movimentacao(){
        
    }

    public int getNumAge() {
        return numAge;
    }

    public int getNumCc() {
        return numCc;
    }

    public String getDataMov() {
        return dataMov;
    }

    public String getNumDocto() {
        return numDocto;
    }

    public String getDebitoCredito() {
        return DebitoCredito;
    }

    public int getIdHis() {
        return idHis;
    }

    public String getComplHis() {
        return complHis;
    }

    public int getValor() {
        return valor;
    }

    public int getSaldo() {
        return saldo;
    }

    public void setNumAge(int numAge) {
        this.numAge = numAge;
    }

    public void setNumCc(int numCc) {
        this.numCc = numCc;
    }

    public void setDataMov(String dataMov) {
        this.dataMov = dataMov;
    }

    public void setNumDocto(String numDocto) {
        this.numDocto = numDocto;
    }

    public void setDebitoCredito(String DebitoCredito) {
        this.DebitoCredito = DebitoCredito;
    }

    public void setIdHis(int idHis) {
        this.idHis = idHis;
    }

    public void setComplHis(String complHis) {
        this.complHis = complHis;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }

    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }
    
        public String dadosSQLInsert(){
        String dadosMovimentacao;
        dadosMovimentacao = "'"
        + this.getNumAge()+ "','"
	+ this.getNumCc() + "','"
	+ this.getDataMov()+ "','"
	+ this.getNumDocto()+ "','"
	+ this.getDebitoCredito()+ "','"
	+ this.getIdHis()+ "','"
	+ this.getComplHis()+ "','"
	+ this.getValor()+ "','"
	+ this.getSaldo()+ "'";
        
        return dadosMovimentacao;
    }
}
