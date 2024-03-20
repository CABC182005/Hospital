package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.sena.HospitalSena.models.paciente;


	@Repository
	public interface IPaciente extends CrudRepository<paciente,String>{
	 
<<<<<<< HEAD
		@Query("SELECT p FROM paciente p WHERE p.primer_nombre_paciente LIKE %?1% OR p.segundo_nombre_paciente LIKE %?1% OR p.primer_apellido_paciente LIKE %?1% OR p.segundo_apellido_paciente LIKE %?1% OR p.doc_paciente LIKE %?1% ")
=======
		@Query("SELECT p FROM paciente p WHERE p.primer_nombre_paciente LIKE %?1% OR p.segundo_nombre_paciente LIKE %?1% OR p.doc_paciente LIKE %?1% ")
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31
		List<paciente> filtroPaciente(String filtro);
	
}


