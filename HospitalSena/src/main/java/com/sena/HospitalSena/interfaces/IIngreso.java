package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;
<<<<<<< HEAD
=======
import org.springframework.data.jpa.repository.Query;
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31
import org.springframework.data.repository.CrudRepository;
import com.sena.HospitalSena.models.ingreso;


@Repository
public interface IIngreso extends CrudRepository<ingreso,String>{
<<<<<<< HEAD

=======
	@Query(value = "SELECT COUNT(*) FROM ingresos WHERE id_paciente = :idPaciente AND cama = :cama AND estado = true", nativeQuery = true)
    Double contador(String cama, Long idPaciente);
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31
}
