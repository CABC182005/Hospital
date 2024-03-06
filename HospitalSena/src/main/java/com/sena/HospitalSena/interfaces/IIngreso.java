package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.sena.HospitalSena.models.ingreso;


@Repository
public interface IIngreso extends CrudRepository<ingreso,String>{

}
