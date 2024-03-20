package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.sena.HospitalSena.models.medico;


@Repository
public interface IMedico extends CrudRepository<medico,String>{
	
	//?1 es la primera variable
	@Query("SELECT m FROM medico m WHERE m.primer_nombre_medico LIKE %?1% OR m.segundo_nombre_medico LIKE %?1% OR  m.primer_apellido_medico LIKE %?1% OR  m.segundo_apellido_medico LIKE %?1% OR m.doc_medico LIKE %?1% OR m.estado_medico LIKE %?1%")
	List<medico> filtromedico(String filtro);
}

