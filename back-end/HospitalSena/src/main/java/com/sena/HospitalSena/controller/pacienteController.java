package com.sena.HospitalSena.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.HospitalSena.interfaceService.IPacienteService;
import com.sena.HospitalSena.models.paciente;


@RequestMapping("/api/hospital/paciente")
@RestController
@CrossOrigin
public class pacienteController {
	
	@Autowired
	private IPacienteService pacienteService;
	
	@PostMapping("/")
	public ResponseEntity<Object> save(@ModelAttribute("paciente") paciente paciente){	
		pacienteService.save(paciente);
		return new ResponseEntity<>(paciente,HttpStatus.OK);

	}

<<<<<<< HEAD
	@GetMapping("/")
	public ResponseEntity<Object> findAll(){
		var ListaPaciente=pacienteService.findAll();
		return new ResponseEntity<>(ListaPaciente,HttpStatus.OK);
	}
	
=======
>>>>>>> b4efc45593dd7d486ff885d5a5ae47cb0ccb9e31
	@GetMapping("/busqueda/{filtro}")
	public ResponseEntity<Object> findfiltro(@PathVariable String filtro){
	var ListaPaciente=pacienteService.filtroPaciente(filtro);
	return new ResponseEntity<>(ListaPaciente,HttpStatus.OK);
	}

	@GetMapping("/{id_paciente}")
	public ResponseEntity<Object> findOne(@PathVariable String id_paciente){
		var paciente=pacienteService.findOne(id_paciente);
		return new ResponseEntity<>(paciente,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id_paciente}")
	public ResponseEntity<Object> delete(@PathVariable String id_paciente){
		pacienteService.delete(id_paciente);
		return new ResponseEntity<>("Registro Deshabilitado",HttpStatus.OK);
	}
	
	@PutMapping("/{id_paciente}")
	public ResponseEntity<Object> update(@PathVariable String id_paciente, @ModelAttribute("paciente") paciente pacienteUpdate){
		var paciente=pacienteService.findOne(id_paciente).get();
		if (paciente != null) {
			paciente.setDoc_paciente(pacienteUpdate.getDoc_paciente());
			paciente.setPrimer_nombre_paciente(pacienteUpdate.getPrimer_nombre_paciente());
			paciente.setSegundo_nombre_paciente(pacienteUpdate.getSegundo_nombre_paciente());
			paciente.setPrimer_apellido_paciente(pacienteUpdate.getPrimer_apellido_paciente());
			paciente.setSegundo_apellido_paciente(pacienteUpdate.getSegundo_apellido_paciente());
			paciente.setTelefono_paciente(pacienteUpdate.getTelefono_paciente());
			paciente.setCorreo_paciente(pacienteUpdate.getCorreo_paciente());
			paciente.setNombre_percontac(pacienteUpdate.getNombre_percontac());
			paciente.setTel_percontac(pacienteUpdate.getTel_percontac());

			pacienteService.save(paciente);
			return new ResponseEntity<>(paciente,HttpStatus.OK);
		}
		else {
		return new ResponseEntity<>("Error paciente no encontrado",HttpStatus.BAD_REQUEST);
		}
	}

}


