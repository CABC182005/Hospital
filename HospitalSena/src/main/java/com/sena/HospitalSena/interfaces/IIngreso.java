package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.sena.HospitalSena.models.ingreso;


@Repository
public interface IIngreso extends CrudRepository<ingreso,String>{
	@Query(value = "SELECT COUNT(*) FROM ingresos WHERE id_paciente = :idPaciente AND cama = :cama AND estado = true", nativeQuery = true)
    Double contador(String cama, Long idPaciente);
}
