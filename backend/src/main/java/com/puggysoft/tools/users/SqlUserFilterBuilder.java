package com.puggysoft.tools.users;

import com.puggysoft.dtos.users.DtoUserFilter;
import com.puggysoft.tools.SqlFilterBuilder;

/** Tool class.*/
public final class SqlUserFilterBuilder {

  /** Constructor.*/
  private SqlUserFilterBuilder() {
  }

  /** build filter query method. */
  public static String build(DtoUserFilter dtoUserFilter) {
    String query = "";
    query = query + SqlFilterBuilder.getFilterQuery("u.id", dtoUserFilter.idCriteria, dtoUserFilter.idOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.username", dtoUserFilter.usernameCriteria, dtoUserFilter.usernameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.password", dtoUserFilter.passwordCriteria, dtoUserFilter.passwordOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.dni", dtoUserFilter.dniCriteria, dtoUserFilter.dniOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.name", dtoUserFilter.nameCriteria, dtoUserFilter.nameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.secondName", dtoUserFilter.secondNameCriteria, dtoUserFilter.secondNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.lastName", dtoUserFilter.lastNameCriteria, dtoUserFilter.lastNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.secondLastName", dtoUserFilter.secondLastNameCriteria, dtoUserFilter.secondLastNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.birthDate", dtoUserFilter.birthDateCriteria, dtoUserFilter.birthDateNameOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.telephone", dtoUserFilter.telephoneCriteria, dtoUserFilter.telephoneOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.address", dtoUserFilter.addressCriteria, dtoUserFilter.addressOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.email", dtoUserFilter.emailCriteria, dtoUserFilter.emailOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.createdBy", dtoUserFilter.createdByCriteria, dtoUserFilter.createdByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.updatedBy", dtoUserFilter.updatedByCriteria, dtoUserFilter.updatedByOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.creationDate", dtoUserFilter.creationDateCriteria, dtoUserFilter.creationDateOperator);
    query = query + SqlFilterBuilder.getFilterQuery("u.updateDate", dtoUserFilter.updateDateCriteria, dtoUserFilter.updateDateOperator);
    return query;
  }

}