package com.sena.HospitalSena.interfaceService;

import java.util.List;
import java.util.Optional;

import com.sena.HospitalSena.models.ingreso;

public interface IIngresoService {
	
	public String save(ingreso ingreso);
	public List<ingreso> findAll();
	public Optional<ingreso> findOne(String id_ingreso);
	public int delete(String id_ingreso);
	
}

