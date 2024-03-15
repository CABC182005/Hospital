package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.sena.HospitalSena.models.paciente;


	@Repository
	public interface IPaciente extends CrudRepository<paciente,String>{
	 
		@Query("SELECT p FROM paciente p WHERE p.primer_nombre_paciente LIKE %?1% OR p.segundo_nombre_paciente LIKE %?1% OR p.doc_paciente LIKE %?1% ")
		List<paciente> filtroPaciente(String filtro);
	
}


