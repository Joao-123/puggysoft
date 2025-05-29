package com.puggysoft.controllers.escuela;

import com.puggysoft.dtos.escuela.DtoEscuelaCursos;
import com.puggysoft.dtos.escuela.DtoEscuelaCursosFilter;
import com.puggysoft.services.escuela.ServiceEscuelaCursosDocenteGetFilter;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEscuelaCursosDocenteGetFilter {

  @Autowired
  private ServiceEscuelaCursosDocenteGetFilter service;

  @PostMapping(path = "/api/v1/escuela-cursos-de-docente/filter")
  public ResponseEntity<List<DtoEscuelaCursos>> getFilter(
      @RequestParam int page,
      @RequestParam int size,
      @RequestParam String docente,
      @RequestBody @Valid DtoEscuelaCursosFilter dtoFilter) {
    return service.filter(dtoFilter, page, size, docente);
  }
}
