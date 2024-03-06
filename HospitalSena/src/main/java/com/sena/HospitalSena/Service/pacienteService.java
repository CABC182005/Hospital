package com.sena.HospitalSena.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.HospitalSena.interfaceService.IPacienteService;
import com.sena.HospitalSena.interfaces.IPaciente;
import com.sena.HospitalSena.models.paciente;


@Service
public class pacienteService implements IPacienteService{
	@Autowired
	private IPaciente data;

	@Override
	public String save(paciente paciente) {
		data.save(paciente);
		return paciente.getId_paciente();
	}

	@Override
	public List<paciente> findAll() {
		List<paciente> listaPaciente=(List<paciente>) data.findAll();
		return listaPaciente;
	}

	@Override
	public Optional<paciente> findOne(String id_paciente) {
		Optional<paciente> paciente=data.findById(id_paciente);
		return paciente;

	}

	@Override
	public int delete(String id_paciente) {
		data.deleteById(id_paciente);
		return 1;

	}
}



