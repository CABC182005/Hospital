package com.sena.HospitalSena.interfaceService;

import java.util.List;
import java.util.Optional;

import com.sena.HospitalSena.models.paciente;

public interface IPacienteService {
	
	public String save(paciente paciente);
	public List<paciente> findAll();
	public List<paciente> filtroPaciente(String filtro);
	public Optional<paciente> findOne(String id_paciente);
	public int delete(String id_paciente);
	
}


