
package DAO;

import java.util.Date;

public class Cliente {
    int idCli;
    String nomeCli;
    String endeCli;
    String numeCli;
    String complCli;
    String bairCli;
    String cidaCli;
    String ufCli;
    String cepCli;
    String foneCli;
    String cpfCli;
    String dataNasc;
    String cnpjCli;

    /*public clientes(int idCli, String nomeCli, String endeCli, String cidaCli, String ufCli, String cepCli) {
        this.idCli = idCli;
        this.nomeCli = nomeCli;
        this.endeCli = endeCli;
        this.cidaCli = cidaCli;
        this.ufCli = ufCli;
        this.cepCli = cepCli;
    }*/
    
    public Cliente (){
        
    }
    

    public void setIdCli(int idCli) {
        this.idCli = idCli;
    }

    public void setNomeCli(String nomeCli) {
        this.nomeCli = nomeCli;
    }

    public void setEndeCli(String endeCli) {
        this.endeCli = endeCli;
    }

    public void setNumeCli(String numeCli) {
        this.numeCli = numeCli;
    }

    public void setComplCli(String complCli) {
        this.complCli = complCli;
    }

    public void setBairCli(String bairCli) {
        this.bairCli = bairCli;
    }

    public void setCidaCli(String cidaCli) {
        this.cidaCli = cidaCli;
    }

    public void setUfCli(String ufCli) {
        this.ufCli = ufCli;
    }

    public void setCepCli(String cepCli) {
        this.cepCli = cepCli;
    }

    public void setFoneCli(String foneCli) {
        this.foneCli = foneCli;
    }

    public void setCpfCli(String cpfCli) {
        this.cpfCli = cpfCli;
    }

    public void setDataNasc(String dataNasc) {
        this.dataNasc = dataNasc;
    }

    public void setCnpjCli(String cnpjCli) {
        this.cnpjCli = cnpjCli;
    }

    
    public int getIdCli() {
        return idCli;
    }

    public String getNomeCli() {
        return nomeCli;
    }

    public String getEndeCli() {
        return endeCli;
    }

    public String getNumeCli() {
        return numeCli;
    }

    public String getComplCli() {
        return complCli;
    }

    public String getBairCli() {
        return bairCli;
    }

    public String getCidaCli() {
        return cidaCli;
    }

    public String getUfCli() {
        return ufCli;
    }

    public String getCepCli() {
        return cepCli;
    }

    public String getFoneCli() {
        return foneCli;
    }

    public String getCpfCli() {
        return cpfCli;
    }

    public String getDataNasc() {
        return dataNasc;
    }

    public String getCnpjCli() {
        return cnpjCli;
    }
    
    public String dadosSQLInsert(){
        String dadosClientes;
        dadosClientes = "'"
        + this.getIdCli() + "','"
	+ this.getNomeCli() + "','"
	+ this.getEndeCli() + "','"
	+ this.getNumeCli() + "','"
	+ this.getComplCli() + "','"
	+ this.getBairCli()  + "','"
	+ this.getCidaCli() + "','"
	+ this.getUfCli() + "','"
	+ this.getCepCli() + "','"
	+ this.getFoneCli() + "','"
	+ this.getCpfCli() + "','"
	+ this.getDataNasc() + "','"
	+ this.getCnpjCli() + "'";
        
        return dadosClientes;
    }
    
    
}
