package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.sena.HospitalSena.models.paciente;


@Repository
public interface IPaciente extends CrudRepository<paciente,String>{

}


