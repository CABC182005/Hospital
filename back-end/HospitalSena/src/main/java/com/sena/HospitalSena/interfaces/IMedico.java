package com.sena.HospitalSena.interfaces;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.sena.HospitalSena.models.medico;


@Repository
public interface IMedico extends CrudRepository<medico,String>{

}

