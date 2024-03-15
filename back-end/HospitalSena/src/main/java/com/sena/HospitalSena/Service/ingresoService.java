package com.sena.HospitalSena.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sena.HospitalSena.interfaceService.IIngresoService;
import com.sena.HospitalSena.interfaces.IIngreso;
import com.sena.HospitalSena.models.ingreso;


@Service
public class ingresoService implements IIngresoService{
	@Autowired
	private IIngreso data;

	@Override
	public String save(ingreso ingreso) {
		data.save(ingreso);
		return ingreso.getId_ingreso();
	}

	@Override
	public List<ingreso> findAll() {
		List<ingreso> ListaIngreso=(List<ingreso>) data.findAll();
		return ListaIngreso;
	}
	
	@Override
	public List<ingreso> filtroIngreso(String filtro) {
		List<ingreso> ListaIngreso=data.filtroIngreso(filtro);
		return ListaIngreso;	
	}
	
	@Override
	public List<ingreso> filtroFecha_ingre(Date fecha_ingre) {
		List<ingreso> ListaIngreso=data.filtroFecha_ingre(fecha_ingre);
		return ListaIngreso;	
	}

	@Override
	public Optional<ingreso> findOne(String id_ingreso) {
		Optional<ingreso> ingreso=data.findById(id_ingreso);
		return ingreso;

	}

	@Override
	public int delete(String id_ingreso) {
		// TODO Auto-generated method stub
		return 0;
	}

}

