package DAO;


public class Cliente {
    private long idCli;
    private String nomeCli;
    private String endeCli;
    private String numeCli;
    private String complCli;
    private String bairCli;
    private String cidaCli;
    private String ufCli;
    private String cepCli;
    private String foneCli;
    private String cpfCli;
    private String dataNasc;
    private String cnpjCli;

    // Construtor
    public Cliente(long idCli, String nomeCli, String endeCli, String numeCli, String complCli,
                   String bairCli, String cidaCli, String ufCli, String cepCli, String foneCli,
                   String cpfCli, String dataNasc, String cnpjCli) {
        this.idCli = idCli;
        this.nomeCli = nomeCli;
        this.endeCli = endeCli;
        this.numeCli = numeCli;
        this.complCli = complCli;
        this.bairCli = bairCli;
        this.cidaCli = cidaCli;
        this.ufCli = ufCli;
        this.cepCli = cepCli;
        this.foneCli = foneCli;
        this.cpfCli = cpfCli;
        this.dataNasc = dataNasc;
        this.cnpjCli = cnpjCli;
    }
    public Cliente (){
        
    }

    // Getters e Setters
    public long getIdCli() {
        return idCli;
    }

    public void setIdCli(long idCli) {
        this.idCli = idCli;
    }

    public String getNomeCli() {
        return nomeCli;
    }

    public void setNomeCli(String nomeCli) {
        this.nomeCli = nomeCli;
    }

    public String getEndeCli() {
        return endeCli;
    }

    public void setEndeCli(String endeCli) {
        this.endeCli = endeCli;
    }

    public String getNumeCli() {
        return numeCli;
    }

    public void setNumeCli(String numeCli) {
        this.numeCli = numeCli;
    }

    public String getComplCli() {
        return complCli;
    }

    public void setComplCli(String complCli) {
        this.complCli = complCli;
    }

    public String getBairCli() {
        return bairCli;
    }

    public void setBairCli(String bairCli) {
        this.bairCli = bairCli;
    }

    public String getCidaCli() {
        return cidaCli;
    }

    public void setCidaCli(String cidaCli) {
        this.cidaCli = cidaCli;
    }

    public String getUfCli() {
        return ufCli;
    }

    public void setUfCli(String ufCli) {
        this.ufCli = ufCli;
    }

    public String getCepCli() {
        return cepCli;
    }

    public void setCepCli(String cepCli) {
        this.cepCli = cepCli;
    }

    public String getFoneCli() {
        return foneCli;
    }

    public void setFoneCli(String foneCli) {
        this.foneCli = foneCli;
    }

    public String getCpfCli() {
        return cpfCli;
    }

    public void setCpfCli(String cpfCli) {
        this.cpfCli = cpfCli;
    }

    public String getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(String dataNasc) {
        this.dataNasc = dataNasc;
    }

    public String getCnpjCli() {
        return cnpjCli;
    }

    public void setCnpjCli(String cnpjCli) {
        this.cnpjCli = cnpjCli;
    }
}

