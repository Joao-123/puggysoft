package com.puggysoft.services.sales;

import com.puggysoft.dtos.sales.DtoClient;
import com.puggysoft.repositories.sales.IRepositoryClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/** Services for edit by id. */
@Service
public class ServiceClientEditById {

  @Autowired
  private IRepositoryClient repositoryClient;

  /** method for edit. */
  @Transactional
  public ResponseEntity<String> editById(Long id, DtoClient dtoClient) {
    if (repositoryClient.existsById(id)) {
      try {
        dtoClient.setId(id);
        repositoryClient.save(dtoClient.dtoToEntity());
        return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
      } catch (DataAccessException ex) {
        String dbException = ex.getMostSpecificCause().getMessage();
        return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
      }
    }
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
  }
}