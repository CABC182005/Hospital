package com.sena.HospitalSena.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.HospitalSena.interfaceService.IMedicoService;
import com.sena.HospitalSena.models.medico;


@RequestMapping("/api/hospital/medico")
@RestController
public class medicoController {
	
	@Autowired
	private IMedicoService medicoService;
	
	@PostMapping("/")
	public ResponseEntity<Object> save(@ModelAttribute("medico") medico medico){	
		medicoService.save(medico);
		return new ResponseEntity<>(medico,HttpStatus.OK);

	}

	@GetMapping("/")
	public ResponseEntity<Object> findAll(){
	var ListaMedico=medicoService.findAll();
	return new ResponseEntity<>(ListaMedico,HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> findOne(@PathVariable String id_medico){
		var medico=medicoService.findOne(id_medico);
		return new ResponseEntity<>(medico,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> delete(@PathVariable String id_medico){
		medicoService.delete(id_medico);
		return new ResponseEntity<>("Registro Eliminado",HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Object> update(@PathVariable String id_medico, @ModelAttribute("id_medico") medico medicoUpdate){
		var medico=medicoService.findOne(id_medico).get();
		if (medico != null) {
			medico.setDoc_medico(medicoUpdate.getDoc_medico());
			medico.setPrimer_nombre_medico(medicoUpdate.getPrimer_nombre_medico());
			medico.setSegundo_nombre_medico(medicoUpdate.getSegundo_nombre_medico());
			medico.setPrimer_apellido_medico(medicoUpdate.getPrimer_apellido_medico());
			medico.setSegundo_apellido_medico(medicoUpdate.getSegundo_apellido_medico());
			medico.setTelefono_medico(medicoUpdate.getTelefono_medico());
			medico.setCorreo_medico(medicoUpdate.getCorreo_medico());
			medico.setEstado_medico(medicoUpdate.getEstado_medico());

			medicoService.save(medico);
			return new ResponseEntity<>(medico,HttpStatus.OK);
		}
		else {
		return new ResponseEntity<>("Error medico no encontrado",HttpStatus.BAD_REQUEST);
		}
	}

}


