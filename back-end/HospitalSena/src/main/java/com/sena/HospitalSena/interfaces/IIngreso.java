package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;



import org.springframework.data.jpa.repository.Query;
 
 
import org.springframework.data.repository.CrudRepository;
import com.sena.HospitalSena.models.ingreso;


@Repository
public interface IIngreso extends CrudRepository<ingreso,String>{

	@Query("SELECT i from ingreso i JOIN "
			
			+ "i.medico m"
			+ " JOIN i.paciente p "
			
			+ " WHERE p.id_paciente LIKE %?1% "
			+ " OR m.id_medico LIKE %?1% "
			
			+ " OR p.doc_paciente LIKE %?1% "
			+ " OR m.doc_medico LIKE %?1% "
			
			+ " OR p.primer_nombre_paciente LIKE %?1% "
			+ " OR m.primer_nombre_medico LIKE %?1% "
			
			+ " OR p.segundo_nombre_paciente LIKE %?1% "
			+ " OR m.segundo_nombre_medico LIKE %?1% "
			
			+ " OR p.primer_apellido_paciente LIKE %?1% "
			+ " OR m.primer_apellido_medico LIKE %?1% "
			
			+ " OR p.segundo_apellido_paciente LIKE %?1% "
			+ " OR m.segundo_apellido_medico LIKE %?1% "
			
<<<<<<< HEAD
=======
			+ " OR p.correo_paciente LIKE %?1% "
			+ " OR m.correo_medico LIKE %?1% "
			
			+ " OR p.telefono_paciente LIKE %?1% "
			+ " OR m.telefono_medico LIKE %?1% "
			
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31
			)
	List<ingreso> filtroIngreso(String filtro);
	
@Query("SELECT i FROM ingreso i WHERE i.fecha_ingreso = ?1"
			
			)
	List<ingreso> filtroFecha_ingre(Date fecha_ingre);
	
}
