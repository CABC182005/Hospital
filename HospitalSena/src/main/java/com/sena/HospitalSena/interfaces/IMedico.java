package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.sena.HospitalSena.models.medico;


@Repository
public interface IMedico extends CrudRepository<medico,String>{
	
	//?1 es la primera varibale
	@Query("select M FROM medico m WHERE m .primer_nombre_medico LIKE %?1%")
	List<medico> filtromedico(String filtro);
}

