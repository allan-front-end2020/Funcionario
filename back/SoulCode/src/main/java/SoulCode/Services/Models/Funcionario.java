package SoulCode.Services.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Funcionario {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idFuncionario;
	
	@Column  (nullable = false, length = 100)
	private String nome;
	
	@Column  (nullable = false, length = 150, unique = true)
	private String email;
	
	@Column  (nullable = true )
	private String foto;
	
	
	
	//GET/SET
	public Integer getIdFuncionario() {
		return idFuncionario;
	}
	public void setIdFuncionario(Integer idFuncionario) {
		this.idFuncionario = idFuncionario;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	
	
	
	
}
