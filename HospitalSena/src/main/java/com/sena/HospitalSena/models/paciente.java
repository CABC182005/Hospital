package com.sena.HospitalSena.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity(name="paciente")
public class paciente {

	/*
	 * ID
	 * DOC
	 * PRI NOM
	 * SEG NOM
	 * PRI APE
	 * SEG APE
	 * CELULAR
	 * CORREO
	 * Nombre Persona de contacto (obligatorio)
     *  Teléfono persona de contacto (Obligatorio)
	 */
	
	
	@Id	
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(name="id_paciente", nullable=false, length = 36)
	private String id_paciente;
	
	@ManyToOne
	@JoinColumn(name="id_medico")
	private medico medico;
	
	@Column(name="doc_paciente",nullable=false,length = 11)
	private String doc_paciente;
	
	@Column(name="primer_nombre_paciente",nullable=false,length = 20)
	private String primer_nombre_paciente;
	
	@Column(name="segundo_nombre_paciente",nullable=true,length = 20)
	private String segundo_nombre_paciente;
	
	@Column(name="primer_apellido_paciente",nullable=false,length = 20)
	private String primer_apellido_paciente;
	
	@Column(name="segundo_apellido_medico",nullable=true,length = 20)
	private String segundo_apellido_paciente;
	
	@Column(name="telefono_paciente",nullable=false,length = 15)
	private String telefono_paciente;
	
	@Column(name="correo_paciente",nullable=false,length = 255)
	private String correo_paciente;
	
	@Column(name="nombre_percontac",nullable=false,length = 100)
	private String nombre_percontac;
	
	@Column(name="tel_percontac",nullable=false,length = 100)
	private String tel_percontac;

	public paciente() {
		super();
	}

	public paciente(String id_paciente, String doc_paciente, String primer_nombre_paciente,
			String segundo_nombre_paciente, String primer_apellido_paciente, String segundo_apellido_paciente,
			String telefono_paciente, String correo_paciente, String nombre_percontac, String tel_percontac) {
		super();
		this.id_paciente = id_paciente;
		this.doc_paciente = doc_paciente;
		this.primer_nombre_paciente = primer_nombre_paciente;
		this.segundo_nombre_paciente = segundo_nombre_paciente;
		this.primer_apellido_paciente = primer_apellido_paciente;
		this.segundo_apellido_paciente = segundo_apellido_paciente;
		this.telefono_paciente = telefono_paciente;
		this.correo_paciente = correo_paciente;
		this.nombre_percontac = nombre_percontac;
		this.tel_percontac = tel_percontac;
	}

	public String getId_paciente() {
		return id_paciente;
	}

	public void setId_paciente(String id_paciente) {
		this.id_paciente = id_paciente;
	}

	public String getDoc_paciente() {
		return doc_paciente;
	}

	public void setDoc_paciente(String doc_paciente) {
		this.doc_paciente = doc_paciente;
	}

	public String getPrimer_nombre_paciente() {
		return primer_nombre_paciente;
	}

	public void setPrimer_nombre_paciente(String primer_nombre_paciente) {
		this.primer_nombre_paciente = primer_nombre_paciente;
	}

	public String getSegundo_nombre_paciente() {
		return segundo_nombre_paciente;
	}

	public void setSegundo_nombre_paciente(String segundo_nombre_paciente) {
		this.segundo_nombre_paciente = segundo_nombre_paciente;
	}

	public String getPrimer_apellido_paciente() {
		return primer_apellido_paciente;
	}

	public void setPrimer_apellido_paciente(String primer_apellido_paciente) {
		this.primer_apellido_paciente = primer_apellido_paciente;
	}

	public String getSegundo_apellido_paciente() {
		return segundo_apellido_paciente;
	}

	public void setSegundo_apellido_paciente(String segundo_apellido_paciente) {
		this.segundo_apellido_paciente = segundo_apellido_paciente;
	}

	public String getTelefono_paciente() {
		return telefono_paciente;
	}

	public void setTelefono_paciente(String telefono_paciente) {
		this.telefono_paciente = telefono_paciente;
	}

	public String getCorreo_paciente() {
		return correo_paciente;
	}

	public void setCorreo_paciente(String correo_paciente) {
		this.correo_paciente = correo_paciente;
	}

	public String getNombre_percontac() {
		return nombre_percontac;
	}

	public void setNombre_percontac(String nombre_percontac) {
		this.nombre_percontac = nombre_percontac;
	}

	public String getTel_percontac() {
		return tel_percontac;
	}

	public void setTel_percontac(String tel_percontac) {
		this.tel_percontac = tel_percontac;
	}

	
}

