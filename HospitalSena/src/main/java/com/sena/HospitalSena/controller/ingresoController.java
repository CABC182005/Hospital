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

import com.sena.HospitalSena.interfaceService.IIngresoService;
import com.sena.HospitalSena.models.ingreso;


@RequestMapping("/api/hospital/ingreso")
@RestController
public class ingresoController {
	
	@Autowired
	private IIngresoService ingresoService;
	
	@PostMapping("/")
	public ResponseEntity<Object> save(@ModelAttribute("ingreso") ingreso ingreso){	
		ingresoService.save(ingreso);
		return new ResponseEntity<>(ingreso,HttpStatus.OK);

	}

	@GetMapping("/")
	public ResponseEntity<Object> findAll(){
	var ListaIngreso=ingresoService.findAll();
	return new ResponseEntity<>(ListaIngreso,HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> findOne(@PathVariable String id_ingreso){
		var ingreso=ingresoService.findOne(id_ingreso);
		return new ResponseEntity<>(ingreso,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Object> delete(@PathVariable String id_ingreso){
		ingresoService.delete(id_ingreso);
		return new ResponseEntity<>("Registro Eliminado",HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Object> update(@PathVariable String id_ingreso, @ModelAttribute("id_ingreso") ingreso ingresoUpdate){
		var ingreso=ingresoService.findOne(id_ingreso).get();
		if (ingreso != null) {
			ingreso.setHabitacion(ingresoUpdate.getHabitacion());
			ingreso.setCama(ingresoUpdate.getCama());
			ingreso.setPaciente(ingresoUpdate.getPaciente());
			ingreso.setMedico(ingresoUpdate.getMedico());
			ingreso.setFecha_ingreso(ingresoUpdate.getFecha_ingreso());
			ingreso.setFecha_salida(ingresoUpdate.getFecha_salida());
			ingreso.setEstado(ingresoUpdate.getEstado());

			ingresoService.save(ingreso);
			return new ResponseEntity<>(ingreso,HttpStatus.OK);
		}
		else {
		return new ResponseEntity<>("Error ingreso no encontrado",HttpStatus.BAD_REQUEST);
		}
	}

}

