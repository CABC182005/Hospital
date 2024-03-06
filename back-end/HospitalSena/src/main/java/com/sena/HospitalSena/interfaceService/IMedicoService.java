package com.sena.HospitalSena.interfaceService;

import java.util.List;
import java.util.Optional;

import com.sena.HospitalSena.models.medico;

public interface IMedicoService {
	
	public String save(medico medico);
	public List<medico> findAll();
	public List<medico> filtromedico(String filtro);
	public Optional<medico> findOne(String id_medico);
	public int delete(String id_medico);
	
}


