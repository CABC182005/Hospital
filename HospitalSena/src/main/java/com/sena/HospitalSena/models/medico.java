package com.sena.HospitalSena.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity(name="medico")
public class medico {

	/*
	 * ID
	 * DOC
	 * PRI NOM
	 * SEG NOM
	 * PRI APE
	 * SEG APE
	 * CELULAR
	 * CORREO
	 * ESTADO HAB/DES
	 */
	
	
	@Id	
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(name="id_medico", nullable=false, length = 36)
	private String id_medico;
	
	@Column(name="doc_medico",nullable=false,length = 11)
	private String doc_medico;
	
	@Column(name="primer_nombre_medico",nullable=false,length = 20)
	private String primer_nombre_medico;
	
	@Column(name="segundo_nombre_medico",nullable=true,length = 20)
	private String segundo_nombre_medico;
	
	@Column(name="primer_apellido_medico",nullable=false,length = 20)
	private String primer_apellido_medico;
	
	@Column(name="segundo_apellido_medico",nullable=true,length = 20)
	private String segundo_apellido_medico;
	
	@Column(name="telefono_medico",nullable=false,length = 15)
	private String telefono_medico;
	
	@Column(name="correo_medico",nullable=false,length = 255)
	private String correo_medico;
	
	@Column(name="estado_medico",nullable=false,length = 40)
	private String estado_medico;

	public medico() {
		super();
	}

	public medico(String id_medico, String doc_medico, String primer_nombre_medico, String segundo_nombre_medico,
			String primer_apellido_medico, String segundo_apellido_medico, String telefono_medico, String correo_medico,
			String estado_medico) {
		super();
		this.id_medico = id_medico;
		this.doc_medico = doc_medico;
		this.primer_nombre_medico = primer_nombre_medico;
		this.segundo_nombre_medico = segundo_nombre_medico;
		this.primer_apellido_medico = primer_apellido_medico;
		this.segundo_apellido_medico = segundo_apellido_medico;
		this.telefono_medico = telefono_medico;
		this.correo_medico = correo_medico;
		this.estado_medico = estado_medico;
	}

	public String getId_medico() {
		return id_medico;
	}

	public void setId_medico(String id_medico) {
		this.id_medico = id_medico;
	}

	public String getDoc_medico() {
		return doc_medico;
	}

	public void setDoc_medico(String doc_medico) {
		this.doc_medico = doc_medico;
	}

	public String getPrimer_nombre_medico() {
		return primer_nombre_medico;
	}

	public void setPrimer_nombre_medico(String primer_nombre_medico) {
		this.primer_nombre_medico = primer_nombre_medico;
	}

	public String getSegundo_nombre_medico() {
		return segundo_nombre_medico;
	}

	public void setSegundo_nombre_medico(String segundo_nombre_medico) {
		this.segundo_nombre_medico = segundo_nombre_medico;
	}

	public String getPrimer_apellido_medico() {
		return primer_apellido_medico;
	}

	public void setPrimer_apellido_medico(String primer_apellido_medico) {
		this.primer_apellido_medico = primer_apellido_medico;
	}

	public String getSegundo_apellido_medico() {
		return segundo_apellido_medico;
	}

	public void setSegundo_apellido_medico(String segundo_apellido_medico) {
		this.segundo_apellido_medico = segundo_apellido_medico;
	}

	public String getTelefono_medico() {
		return telefono_medico;
	}

	public void setTelefono_medico(String telefono_medico) {
		this.telefono_medico = telefono_medico;
	}

	public String getCorreo_medico() {
		return correo_medico;
	}

	public void setCorreo_medico(String correo_medico) {
		this.correo_medico = correo_medico;
	}

	public String getEstado_medico() {
		return estado_medico;
	}

	public void setEstado_medico(String estado_medico) {
		this.estado_medico = estado_medico;
	}


}

