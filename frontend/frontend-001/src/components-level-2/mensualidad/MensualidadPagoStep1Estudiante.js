import React, { useState } from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import i18n from "../../i18n/i18n";
import enumPaths from "../../models/enumPaths";
import { handleFilterRequest, handleAddRequest, handleGetRequest } from "../../actions/HandleManager";
import CursoGenericTable from "../escuela/generic/CursoGenericTable";
import enumTableColumnsToShow from "../../models/enumTableColumnsToShow";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";
import enumSaleStatus from "./../../models/sales/enumSaleStatus";
import CommonLoading from "../../components-level-1/CommonLoading";

function CursosTable (props) {
  const tableTitle = i18n.escuela.cursosTableTitle;
  const tableSubTitle = i18n.escuela.cursosTableTitleSub;
  const pageSize = 7;
  const numberPagesToShow = 7;
  const history = useHistory();
  const estudianteSelected = {
    username: window.sessionStorage.getItem("username")
  }
  const saleTableViewType = enumSaleTableViewType.FOR_DISPATCHER;
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  function handleGetData (activePage, filterBody, updateArrayData) {
    handleFilterRequest(
      `escuela-cursos-estudiantes-basic/filter?page=${activePage - 1}&size=${pageSize}&estudiante=${estudianteSelected.username}&contains=true`,
      filterBody,
      updateArrayData
    );
  }

  function handleGetSize (filterBody, setTotalPages) {
    handleFilterRequest(
      `escuela-cursos-estudiantes/filter/size?pageSize=${pageSize}&estudiante=${estudianteSelected.username}&contains=true`,
      filterBody,
      setTotalPages
    );
  }

  function handleSelection (cursoSelected) {
    setIsRequestInProgress(true);
    const { username } = estudianteSelected;
    const tenant = window.sessionStorage.getItem("tenant");
    const saleStatus = enumSaleStatus.IN_PROGRESS;
    const bodySale = {
      client: estudianteSelected.username,
      status: saleStatus,
      createdBy: username,
      updatedBy: username,
      aux: cursoSelected.id,
      tenant
    };
    function handleAfterCreateSale (saleId) {
      const saleData = bodySale;
      saleData.id = saleId;
      function handleGetNewSale (saleDataFromRequest) {
        saleData.creationDate = saleDataFromRequest.creationDate;
        history.push({
          pathname: enumPaths.MENSUALIDAD_PAGO_STEP3_ENCARGADO,
          state: {
            data: {
              saleData,
              saleTableViewType,
              estudianteSelected,
              cursoSelected,
            }
          }
        });
      }
      handleGetRequest(`sales/${saleId}`, handleGetNewSale);
    }
    handleAddRequest("sales/", bodySale, handleAfterCreateSale, false);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelection,
      text: i18n.commonTable.selectButton
    }
  ];

  function fixArrayData(listData) {
    const newList = listData.map((data) => {
      return {
        ...data,
        image: null,
      }
    });
    return newList;
  }

  if (isRequestInProgress) {
    return <CommonLoading />;
  }

  return (
    <div>
      <Card>
        <Card.Header as="h4">
          {"Estudiante" + `: ${estudianteSelected.username}`}
        </Card.Header>
      </Card>
      <CursoGenericTable
        tableTitle={tableTitle}
        tableSubTitle={tableSubTitle}
        numberPagesToShow={numberPagesToShow}
        handleGetData={handleGetData}
        handleGetSize={handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MEDIUM}
        fixArrayData={fixArrayData}
      >
      </CursoGenericTable>
    </div>
  );
}

export default CursosTable;
