package com.puggysoft.services.users;

import com.puggysoft.dtos.users.DtoUser;
import com.puggysoft.repositories.users.IRepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/** Services for create a user. */
@Service
public class ServiceUserCreate {

  @Autowired
  private IRepositoryUser repositoryUser;

  /** method for create a user. */
  public ResponseEntity<String> create(DtoUser dtoUser) {
    try {
      repositoryUser.save(dtoUser.dtoToEntity());
      return ResponseEntity.status(HttpStatus.CREATED).body("Created successfully");
    } catch (DataAccessException ex) {
      String dbException = ex.getMostSpecificCause().getMessage();
      return ResponseEntity.status(HttpStatus.CONFLICT).body(dbException);
    }
  }
}