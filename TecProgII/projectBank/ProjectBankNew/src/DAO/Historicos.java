
package DAO;

public class Historicos {
    int idHis;
    String desHis;

    
    public Historicos(){
        
    }
    
    public int getIdHis() {
        return idHis;
    }

    public String getDesHis() {
        return desHis;
    }

    public void setIdHis(int idHis) {
        this.idHis = idHis;
    }

    public void setDesHis(String desHis) {
        this.desHis = desHis;
    }
    
    public String dadosSQLInsert(){
        String dadosHistorico;
        dadosHistorico = "'"
        + this.getIdHis()+ "','"
	+ this.getDesHis()+ "'";
        
        return dadosHistorico;
    }
    
}
