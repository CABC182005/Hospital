package com.sena.HospitalSena.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.HospitalSena.interfaceService.IMedicoService;
import com.sena.HospitalSena.interfaces.IMedico;
import com.sena.HospitalSena.models.medico;


@Service
public class medicoService implements IMedicoService{
	@Autowired
	private IMedico data;

	@Override
	public String save(medico medico) {
		data.save(medico);
		return medico.getId_medico();
	}

	@Override
	public List<medico> findAll() {
		List<medico> listaMedico=(List<medico>) data.findAll();
		return listaMedico;
	}
	
	@Override
	public List<medico> filtromedico(String filtro) {
		List<medico> listaMedico=data.filtromedico(filtro);
		return listaMedico;
	}
	
	@Override
	public Optional<medico> findOne(String id_medico) {
		Optional<medico> medico=data.findById(id_medico);
		return medico;

	}

	@Override
	public int delete(String id_medico) {
		// TODO Auto-generated method stub
		return 0;
	}
}


