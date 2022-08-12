import { useHistory } from "react-router";
import UserTableFilterGeneric from "./../users/UserTableFilterGeneric";
import { handleFilterRequest, handleDeleteRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths"
import i18n from "../../i18n/i18n";

function UserTableFilterEditDelete() {

  const pageSize = 10;
  const numberPagesToShow = 10;
  const tableTitle = i18n.userTable.title;
  const history = useHistory();

  function handleGetData(activePage, filterBody, updateArrayData) {
    handleFilterRequest(`users/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize(filterBody, setTotalPages) {
    handleFilterRequest(`users/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleEdit(data) {
    history.push({
      pathname: enumPaths.USERS_FORM,
      state: {
        data: data,
        edit: true
      }
    })
  }

  function handleDelete(data) {
    handleDeleteRequest("users/", data.id)
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "warning",
      handleCustom: handleEdit,
      text: i18n.commonTable.editButton
    },
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ]

  return (
    <div className="puggysoft-users-table-edit-delete" >
      <UserTableFilterGeneric
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableTitle={tableTitle}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        numberPagesToShow={numberPagesToShow}
      >
      </UserTableFilterGeneric>
    </div>
  )
}

export default UserTableFilterEditDelete;