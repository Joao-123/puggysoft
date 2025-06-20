import React from "react";
import { Route, Switch } from "react-router-dom";
import enumPaths from "./models/enumPaths";

// Components
import App from "./App";
import LoginPage from "./components-level-3/LoginPage";
import DashboardPage from "./components-level-3/DashboardPage";
import SystemPropertiesFormPage from "./components-level-3/system/SystemPropertiesFormPage";
import SystemPropertiesTablePage from "./components-level-3/system/SystemPropertiesTablePage";
import TenantFormPage from "./components-level-3/system/TenantFormPage";
import TenantTableFilterByUserPage from "./components-level-3/system/TenantTableFilterByUserPage";
import InProgressPage from "./components-level-3/system/InProgressPage";
import TenantTableSelectForRolePage from "./components-level-3/system/TenantTableSelectForRolePage";
import TenantTableFilterByRolePage from "./components-level-3/system/TenantTableFilterByRolePage";
import CommonMessageReduxPage from "./components-level-3/system/CommonMessageReduxPage";
import ThemeFormPage from "./components-level-3/system/ThemeFormPage";

// Users System
import UsersFormPage from "./components-level-3/users/UserFormPage";
import UserFormTenantPage from "./components-level-3/users/UserFormTenantPage";
import DeprecateUserTableBasicPage from "./components-level-3/users/DeprecateUserTableBasicPage";
import DeprecateUserTableFilterFullDataPage from "./components-level-3/users/DeprecateUserTableFilterFullDataPage";
import UserTableFilterByRolePage from "./components-level-3/users/UserTableFilterByRolePage";
import UserTableFilterByTenantPage from "./components-level-3/users/UserTableFilterByTenantPage";
import UserTableFilterSelectionToDetailsPage from "./components-level-3/users/UserTableFilterSelectionToDetailsPage";
import UserTableFilterEditDeletePage from "./components-level-3/users/UserTableFilterEditDeletePage";
import UserDetailsPage from "./components-level-3/users/UserDetailsPage";
import RoleTablePage from "./components-level-3/users/RoleTablePage";
import RoleTableFilterPage from "./components-level-3/users/RoleTableFilterPage";
import RoleTablePageByUserPage from "./components-level-3/users/RoleTablePageByUserPage";
import RoleTableSelectForTenantPage from "./components-level-3/users/RoleTableSelectForTenantPage";
import RoleTableFilterByTenantPage from "./components-level-3/users/RoleTableFilterByTenantPage";
import UserTableFilterEditDeleteOnlyTenantPage from "./components-level-3/users/UserTableFilterEditDeleteOnlyTenantPage";
import UserTableFilterToDetailsOnlyTenantPage from "./components-level-3/users/UserTableFilterToDetailsOnlyTenantPage";
import RolesUsersStepOnePage from "./components-level-3/users/RolesUsersStepOnePage";
import RolesUsersStepTwoPage from "./components-level-3/users/RolesUsersStepTwoPage";
import UsersRolesStepOnePage from "./components-level-3/users/UsersRolesStepOnePage";
import UsersRolesStepTwoPage from "./components-level-3/users/UsersRolesStepTwoPage";
import TenantsUsersRolesStepAPage from "./components-level-3/users/TenantsUsersRolesStepAPage";
import TenantsUsersRolesStepBPage from "./components-level-3/users/TenantsUsersRolesStepBPage";
import TenantsUsersRolesStepCPage from "./components-level-3/users/TenantsUsersRolesStepCPage";

// Sales System
import ProductFormPage from "./components-level-3/sales/ProductFormPage";
import ProductTableFilterEditDeletePage from "./components-level-3/sales/ProductTableFilterEditDeletePage";
import GoupProductFormPage from "./components-level-3/sales/GroupProductFormPage";
import GoupProductTableFilterEditDeletePage from "./components-level-3/sales/GroupProductTableFilterEditDeletePage";
import GroupProductForProductsStep1Page from "./components-level-3/sales/GroupProductForProductsStep1Page";
import GroupProductForProductsStep2Page from "./components-level-3/sales/GroupProductForProductsStep2Page";
import ClientFormPage from "./components-level-3/sales/ClientFormPage";
import ClientTableFilterSelectionToDetailsPage from "./components-level-3/sales/ClientTableFilterSelectionToDetailsPage";
import SellerFormPage from "./components-level-3/sales/SellerFormPage";
import SellerTableFilterSelectionToDetailsPage from "./components-level-3/sales/SellerTableFilterSelectionToDetailsPage";
import SalesTableFilterAllPage from "./components-level-3/sales/SalesTableFilterAllPage";
import SalesTableFilterTodoPage from "./components-level-3/sales/SalesTableFilterTodoPage";
import SalesTableFilterInProgressPage from "./components-level-3/sales/SalesTableFilterInProgressPage";
import SaleAddStepOnePageForSeller from "./components-level-3/sales/SaleAddStepOnePageForSeller";
import SaleAddStepOnePageForCashier from "./components-level-3/sales/SaleAddStepOnePageForCashier";
import SaleAddStepTwoPage from "./components-level-3/sales/SaleAddStepTwoPage";
import SaleReportQuantityPage from "./components-level-3/sales/SaleReportQuantityPage";
import SaleReportQuantityCompPage from "./components-level-3/sales/SaleReportQuantityCompPage";
import SaleReportQuantityMonthByProductPage from "./components-level-3/sales/SaleReportQuantityMonthByProductPage";
import SaleReportQuantityMonthCompByProductPage from "./components-level-3/sales/SaleReportQuantityMonthCompByProductPage";
import SaleReportQuantityMonthPage from "./components-level-3/sales/SaleReportQuantityMonthPage";
import SaleReportQuantityMonthCompPage from "./components-level-3/sales/SaleReportQuantityMonthCompPage";
import SaleReportRevenuePage from "./components-level-3/sales/SaleReportRevenuePage";
import SaleReportRevenueCompPage from "./components-level-3/sales/SaleReportRevenueCompPage";
import SaleReportRevenueMonthByProductPage from "./components-level-3/sales/SaleReportRevenueMonthByProductPage";
import SaleReportRevenueMonthCompByProductPage from "./components-level-3/sales/SaleReportRevenueMonthCompByProductPage";
import SaleReportRevenueMonthPage from "./components-level-3/sales/SaleReportRevenueMonthPage";
import SaleReportRevenueMonthCompPage from "./components-level-3/sales/SaleReportRevenueMonthCompPage";
import SaleReportProfitPage from "./components-level-3/sales/SaleReportProfitPage";
import SaleReportProfitCompPage from "./components-level-3/sales/SaleReportProfitCompPage";
import SaleReportProfitMonthByProductPage from "./components-level-3/sales/SaleReportProfitMonthByProductPage";
import SaleReportProfitMonthCompByProductPage from "./components-level-3/sales/SaleReportProfitMonthCompByProductPage";
import SaleReportProfitMonthPage from "./components-level-3/sales/SaleReportProfitMonthPage";
import SaleReportProfitMonthCompPage from "./components-level-3/sales/SaleReportProfitMonthCompPage";
import ProductTableToQuantityReportPage from "./components-level-3/sales/ProductTableToQuantityReportPage";
import ProductTableToQuantityComparativeReportPage from "./components-level-3/sales/ProductTableToQuantityComparativeReportPage";
import ProductTableToRevenueReportPage from "./components-level-3/sales/ProductTableToRevenueReportPage";
import ProductTableToRevenueComparativeReportPage from "./components-level-3/sales/ProductTableToRevenueComparativeReportPage";
import ProductTableToProfitReportPage from "./components-level-3/sales/ProductTableToProfitReportPage";
import ProductTableToProfitComparativeReportPage from "./components-level-3/sales/ProductTableToProfitComparativeReportPage";
import ProductTableToProfitMonthCompReportPage from "./components-level-3/sales/ProductTableToProfitMonthCompReportPage";
import ProductTableToProfitMonthReportPage from "./components-level-3/sales/ProductTableToProfitMonthReportPage";
import ProductTableToQuantityMonthCompReportPage from "./components-level-3/sales/ProductTableToQuantityMonthCompReportPage";
import ProductTableToQuantityMonthReportPage from "./components-level-3/sales/ProductTableToQuantityMonthReportPage";
import ProductTableToRevenueMonthCompReportPage from "./components-level-3/sales/ProductTableToRevenueMonthCompReportPage";
import ProductTableToRevenueMonthReportPage from "./components-level-3/sales/ProductTableToRevenueMonthReportPage";
import SaleReportQuantityByProductPage from "./components-level-3/sales/SaleReportQuantityByProductPage";
import SaleReportQuantityComparativeByProductPage from "./components-level-3/sales/SaleReportQuantityComparativeByProductPage";
import SaleReportRevenueByProductPage from "./components-level-3/sales/SaleReportRevenueByProductPage";
import SaleReportRevenueComparativeByProductPage from "./components-level-3/sales/SaleReportRevenueComparativeByProductPage";
import SaleReportProfitByProductPage from "./components-level-3/sales/SaleReportProfitByProductPage";
import SaleReportProfitComparativeByProductPage from "./components-level-3/sales/SaleReportProfitComparativeByProductPage";
import SaleDailyReportPage from "./components-level-3/sales/SaleDailyReportPage";
import SaleMonthlyReportPage from "./components-level-3/sales/SaleMonthlyReportPage";
import SaleAnnualReportPage from "./components-level-3/sales/SaleAnnualReportPage";

// Mensualidad System
import CuotaPagoFormPage from "./components-level-3/mesualidad/CuotaPagoFormPage";
import CuotaPagoTablePage from "./components-level-3/mesualidad/CuotaPagoTablePage";
import AssignCuotaPagoStep1Page from "./components-level-3/mesualidad/AssignCuotaPagoStep1Page";
import AssignCuotaPagoStep2Page from "./components-level-3/mesualidad/AssignCuotaPagoStep2Page";
import MensualidadPagoStep1EncargadoPage from "./components-level-3/mesualidad/MensualidadPagoStep1EncargadoPage";
import MensualidadPagoStep2EncargadoPage from "./components-level-3/mesualidad/MensualidadPagoStep2EncargadoPage";
import MensualidadPagoStep3EncargadoPage from "./components-level-3/mesualidad/MensualidadPagoStep3EncargadoPage";
import MensualidadPagoStep1EstudiantePage from "./components-level-3/mesualidad/MensualidadPagoStep1EstudiantePage";
import MensualidadPagoStep2EstudiantePage from "./components-level-3/mesualidad/MensualidadPagoStep2EstudiantePage";
import MensualidadTablaPagosEncargadoPage from "./components-level-3/mesualidad/MensualidadTablaPagosEncargadoPage";
import MensualidadTablaPagosEstudiantePage from "./components-level-3/mesualidad/MensualidadTablaPagosEstudiantePage";
import MensualidadHistorySeleccionarEstudianteEncargadoPage from "./components-level-3/mesualidad/MensualidadHistorySeleccionarEstudianteEncargadoPage";
import MensualidadHistorySeleccionarCursoEncargadoPage from "./components-level-3/mesualidad/MensualidadHistorySeleccionarCursoEncargadoPage";
import MensualidadHistorySeleccionarCursoEstudiantePage from "./components-level-3/mesualidad/MensualidadHistorySeleccionarCursoEstudiantePage";
import MensualidadHistoryPorEstudianteCursoPage from "./components-level-3/mesualidad/MensualidadHistoryPorEstudianteCursoPage";
import MensualidadHistorySeleccionarSoloCursoEncargadoPage from "./components-level-3/mesualidad/MensualidadHistorySeleccionarSoloCursoEncargadoPage";
import MensualidadHistoryPorCursoPage from "./components-level-3/mesualidad/MensualidadHistoryPorCursoPage";

// Pago Upea System
import ColegiaturaMatriculaFormPage from "./components-level-3/pagos-upea/ColegiaturaMatriculaFormPage";
import ProgramaPostgradoCursoFormPage from "./components-level-3/pagos-upea/ProgramaPostgradoCursoFormPage";
import ProgramaPostgradoCursoTablePage from "./components-level-3/pagos-upea/ProgramaPostgradoCursoTablePage";
import ColegiaturaMatriculaTablePage from "./components-level-3/pagos-upea/ColegiaturaMatriculaTablePage";
import ProgramaPostgradoFormPage from "./components-level-3/pagos-upea/ProgramaPostgradoFormPage";
import ProgramaPostgradoTablePage from "./components-level-3/pagos-upea/ProgramaPostgradoTablePage";
import AssignColegiaturaMatriculaStep1Page from "./components-level-3/pagos-upea/AssignColegiaturaMatriculaStep1Page";
import AssignColegiaturaMatriculaStep2Page from "./components-level-3/pagos-upea/AssignColegiaturaMatriculaStep2Page";

// Hospital System
import DoctorUserFormPage from "./components-level-3/hospital/DoctorUserFormPage";
import DoctorUserTableToDetailsPage from "./components-level-3/hospital/DoctorUserTableToDetailsPage";
import PatientUserFormPage from "./components-level-3/hospital/PatientUserFormPage";
import PatientUserTableToDetailsPage from "./components-level-3/hospital/PatientUserTableToDetailsPage";

// Reservation System
import ResourceFormPage from "./components-level-3/reservation/ResourceFormPage";
import ResourceTablePage from "./components-level-3/reservation/ResourceTablePage";
import ScheduleFormPage from "./components-level-3/reservation/ScheduleFormPage";
import IntervalTimeTablePage from "./components-level-3/reservation/IntervalTimeTablePage";
import IntervalTimeFormPage from "./components-level-3/reservation/IntervalTimeFormPage";
import ScheduleTablePage from "./components-level-3/reservation/ScheduleTablePage";
import TenantTableFilterEditDeletePage from "./components-level-3/system/TenantTableFilterEditDeletePage";
import TenantTableFilterPage from "./components-level-3/system/TenantTableFilterPage";

// Alcaldia System
import LoginAlcaldiaColcapirhuaPage from "./components-level-3/alcaldia/LoginAlcaldiaColcapirhuaPage";
import AlcaldiaRecursosMunicipalesFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesFormPage";
import AlcaldiaRecursosMunicipalesTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTablePage";
import AlcaldiaRecursosMunicipalesGrupoStepOnePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesGrupoStepOnePage";
import AlcaldiaRecursosMunicipalesGrupoStepTwoPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesGrupoStepTwoPage";
import AlcaldiaRecursosMunicipalesVentasFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesVentasFormPage";
import AlcaldiaRecursosMunicipalesVentasTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesVentasTablePage";
import AlcaldiaActividadesFormPage from "./components-level-3/alcaldia/AlcaldiaActividadesFormPage";
import AlcaldiaActividadesTablePage from "./components-level-3/alcaldia/AlcaldiaActividadesTablePage";
import AlcaldiaActividadesGrupoPage from "./components-level-3/alcaldia/AlcaldiaActividadesGrupoPage";
import AlcaldiaActividadesTimbresPage from "./components-level-3/alcaldia/AlcaldiaActividadesTimbresPage";
import AlcaldiaActividadesFoldersPage from "./components-level-3/alcaldia/AlcaldiaActividadesFoldersPage";
import AlcaldiaRecursosMunicipalesTimbresFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresFormPage";
import AlcaldiaRecursosMunicipalesTimbresTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresTablePage";
import AlcaldiaRecursosMunicipalesTimbresDescontinuadasFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresDescontinuadosFormPage";
import AlcaldiaRecursosMunicipalesTimbresDescontinuadosTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresDescontinuadosTablePage";
import AlcaldiaRecursosMunicipalesTimbresVentasFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresVentasFormPage";
import AlcaldiaRecursosMunicipalesTimbresVentasTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresVentasTablePage";
import AlcaldiaRecursosMunicipalesFoldersFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesFoldersFormPage";
import AlcaldiaRecursosMunicipalesFoldersTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesFoldersTablePage";
import AlcaldiaRecursosMunicipalesFoldersVentasTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesFoldersVentasTablePage";
import AlcaldiaRecursosMunicipalesReporteCortoDiarioPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteCortoDiarioPage";
import AlcaldiaRecursosMunicipalesReporteDiarioPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioPage";
import AlcaldiaRecursosMunicipalesReporteDiarioTimbresPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioTimbresPage";
import AlcaldiaRecursosMunicipalesReporteDiarioFoldersPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioFoldersPage";
import AlcaldiaRecursosMunicipalesReporteMensualPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteMensualPage";
import AlcaldiaRecursosMunicipalesReporteAnualPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteAnualPage";
import AlcaldiaRecursosMunicipalesReporteDiarioInventarioTimbresStep1Page from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioInventarioTimbresStep1Page";
import AlcaldiaRecursosMunicipalesReporteDiarioInventarioFoldersStep1Page from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioInventarioFoldersStep1Page";
import AlcaldiaRecursosMunicipalesReporteDiarioInventarioTimbresStep2Page from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioInventarioTimbresStep2Page";
import AlcaldiaRecursosMunicipalesVentaFoldersStep1Page from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesVentaFoldersStep1Page";
import AlcaldiaRecursosMunicipalesVentaTimbresStep1Page from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesVentaTimbresStep1Page";
import UrbanismoTramiteFormPage from "./components-level-3/alcaldia/UrbanismoTramiteFormPage";
import UrbanismoTramiteTablePage from "./components-level-3/alcaldia/UrbanismoTramiteTablePage";
import RegulaLotesFormPage from "./components-level-3/alcaldia/RegulaLotesFormPage";
import RegulaLotesExtractoBancarioFormPage from "./components-level-3/alcaldia/RegulaLotesExtractoBancarioFormPage";
import RegulaLotesFormClientePage from "./components-level-3/alcaldia/RegulaLotesFormClientePage";
import RegulaLotesFormClienteStepTwoPage from "./components-level-3/alcaldia/RegulaLotesFormClienteStepTwoPage";
import RegulaLotesTablePage from "./components-level-3/alcaldia/RegulaLotesTablePage";
import UrbanismoRequisitosFormPage from "./components-level-3/alcaldia/UrbanismoRequisitosFormPage";
import UrbanismoRequisitosTablePage from "./components-level-3/alcaldia/UrbanismoRequisitosTablePage";
import UrbanismoEstadosFormPage from "./components-level-3/alcaldia/UrbanismoEstadosFormPage";
import UrbanismoEstadosTablePage from "./components-level-3/alcaldia/UrbanismoEstadosTablePage";
import UrbanismoTramiteRequisitosStepOnePage from "./components-level-3/alcaldia/UrbanismoTramiteRequisitosStepOnePage";
import UrbanismoTramiteRequisitosStepTwoPage from "./components-level-3/alcaldia/UrbanismoTramiteRequisitosStepTwoPage";
import UrbanismoTramiteEstadosTablePage from "./components-level-3/alcaldia/UrbanismoTramiteEstadosTablePage";
import UrbanismoFlujoRequisitosStepOnePage from "./components-level-3/alcaldia/UrbanismoFlujoRequisitosStepOnePage";
import UrbanismoFlujoRequisitosStepTwoPage from "./components-level-3/alcaldia/UrbanismoFlujoRequisitosStepTwoPage";
import UrbanismoTramiteEstadosStepOnePage from "./components-level-3/alcaldia/UrbanismoTramiteEstadosStepOnePage";
import UrbanismoTramiteEstadosStepTwoPage from "./components-level-3/alcaldia/UrbanismoTramiteEstadosStepTwoPage";
import UrbanismoTramiteEstadosStepThreePage from "./components-level-3/alcaldia/UrbanismoTramiteEstadosStepThreePage";
import UrbanismoTramiteFlujoChangeStateStepOnePage from "./components-level-3/alcaldia/UrbanismoTramiteFlujoChangeStateStepOnePage";
import UrbanismoTramiteFlujoChangeStateStepTwoPage from "./components-level-3/alcaldia/UrbanismoTramiteFlujoChangeStateStepTwoPage";
import UrbanismoFlujoHistorialStepOnePage from "./components-level-3/alcaldia/UrbanismoFlujoHistorialStepOnePage";
import UrbanismoFlujoHistorialStepTwoPage from "./components-level-3/alcaldia/UrbanismoFlujoHistorialStepTwoPage";
import UrbanismoHistorialEstadoStepOnePage from "./components-level-3/alcaldia/UrbanismoHistorialEstadoStepOnePage";
import UrbanismoHistorialEstadoStepTwoPage from "./components-level-3/alcaldia/UrbanismoHistorialEstadoStepTwoPage";
import UrbanismoHistorialEstadoStepThreePage from "./components-level-3/alcaldia/UrbanismoHistorialEstadoStepThreePage";
import UrbanismoFlujoBoardStepOnePage from "./components-level-3/alcaldia/UrbanismoFlujoBoardStepOnePage";
import UrbanismoFlujoBoardStepTwoPage from "./components-level-3/alcaldia/UrbanismoFlujoBoardStepTwoPage";

// Data Storage System
import StorageSchemaFormPage from "./components-level-3/datastorage/StorageSchemaFormPage";
import StorageSchemaTablePage from "./components-level-3/datastorage/StorageSchemaTablePage";
import StorageFieldFormPage from "./components-level-3/datastorage/StorageFieldFormPage";
import StorageFieldTablePage from "./components-level-3/datastorage/StorageFieldTablePage";
import StorageRecordFormStepOnePage from "./components-level-3/datastorage/StorageRecordFormStepOnePage";
import StorageRecordFormStepTwoPage from "./components-level-3/datastorage/StorageRecordFormStepTwoPage";
import StorageRecordTableStepOnePage from "./components-level-3/datastorage/StorageRecordTableStepOnePage";
import StorageRecordTableStepTwoPage from "./components-level-3/datastorage/StorageRecordTableStepTwoPage";
import NotFoundPage from "./components-level-3/system/NotFoundPage";

// Escuela System
import CursosFormPage from "./components-level-3/escuela/CursosFormPage";
import MateriasFormPage from "./components-level-3/escuela/MateriasFormPage";
import NotasFormPage from "./components-level-3/escuela/NotasFormPage";
import CursosTablePage from "./components-level-3/escuela/CursosTablePage";
import MateriasTablePage from "./components-level-3/escuela/MateriasTablePage";
import NotasTablePage from "./components-level-3/escuela/NotasTablePage";
import AsignarMateriasPageStep1 from "./components-level-3/escuela/AsignarMateriasPageStep1";
import AsignarMateriasPageStep2 from "./components-level-3/escuela/AsignarMateriasPageStep2";
import AsignarNotasPageStep1 from "./components-level-3/escuela/AsignarNotasPageStep1";
import AsignarNotasPageStep2 from "./components-level-3/escuela/AsignarNotasPageStep2";
import EstudiantesFormPage from "./components-level-3/escuela/EstudiantesFormPage";
import EstudiantesTablePage from "./components-level-3/escuela/EstudiantesTablePage";
import DocentesFormPage from "./components-level-3/escuela/DocentesFormPage";
import DocentesTablePage from "./components-level-3/escuela/DocentesTablePage";
import AsignarCursosAEstudiantesPageStep1 from "./components-level-3/escuela/AsignarCursosAEstudiantesPageStep1";
import AsignarCursosAEstudiantesPageStep2 from "./components-level-3/escuela/AsignarCursosAEstudiantesPageStep2";
import AsignarCursosMateriasADocentesPageStep1 from "./components-level-3/escuela/AsignarCursosMateriasADocentesPageStep1";
import AsignarCursosMateriasADocentesPageStep2 from "./components-level-3/escuela/AsignarCursosMateriasADocentesPageStep2";
import AsignarCursosMateriasADocentesPageStep3 from "./components-level-3/escuela/AsignarCursosMateriasADocentesPageStep3";
import AsignarCalificacionesPageStep1 from "./components-level-3/escuela/AsignarCalificacionesPageStep1";
import AsignarCalificacionesPageStep1Table from "./components-level-3/escuela/AsignarCalificacionesPageStep1Table";
import AsignarCalificacionesPageStep2 from "./components-level-3/escuela/AsignarCalificacionesPageStep2";
import AsignarCalificacionesPageStep3 from "./components-level-3/escuela/AsignarCalificacionesPageStep3";
import AsignarCalificacionesPageStep4 from "./components-level-3/escuela/AsignarCalificacionesPageStep4";
import AsignarCalificacionesPageStep5 from "./components-level-3/escuela/AsignarCalificacionesPageStep5";
import AsignarCalificacionesDocentePage from "./components-level-3/escuela/AsignarCalificacionesDocentePage";
import CalificacionesViewEstudiantePage from "./components-level-3/escuela/CalificacionesViewEstudiantePage";
import CalificacionesTablePage from "./components-level-3/escuela/CalificacionesTablePage";

// Games System
import TicTacToePage from "./components-level-3/games/tic-tac-toe/TicTacToePage";
import TicTacToePagePc from "./components-level-3/games/tic-tac-toe/TicTacToePagePc";
import ReporteCalificacionesMateriasPage from "./components-level-3/escuela/ReporteCalificacionesMateriasPage";
import ReporteDetalladoEncargadoPage from "./components-level-3/escuela/ReporteDetalladoEncargadoPage";
import ReporteCalificacionesMateriasViewEstudiantePage from "./components-level-3/escuela/ReporteCalificacionesMateriasViewEstudiantePage";

// const CursosFormLazyPage = lazy(() => import("./components-level-3/escuela/CursosFormPage"));

const AppRoutes = () => (
  <App>
    {/** Here common components */}
    <CommonMessageReduxPage />
    <Switch>
      <Route exact path={enumPaths.DASHBOARD} component={DashboardPage} />
      <Route exact path={enumPaths.IN_PROGRESS_PAGE} component={InProgressPage} />
      <Route exact path={enumPaths.THEME_FORM} component={ThemeFormPage} />
      {/** System Properties */}
      <Route exact path={enumPaths.SYSTEM_PROPERTIES_FORM} component={SystemPropertiesFormPage} />
      <Route exact path={enumPaths.SYSTEM_PROPERTIES_TABLE} component={SystemPropertiesTablePage} />
      <Route exact path={enumPaths.TENANTS_FORM} component={TenantFormPage} />
      <Route exact path={enumPaths.TENANTS_TABLE_FILTER_SELECTION} component={TenantTableFilterPage} />
      <Route exact path={enumPaths.TENANTS_TABLE_SELECTION_FOR_ROLE} component={TenantTableSelectForRolePage} />
      <Route exact path={enumPaths.TENANTS_TABLE_FILTER_BY_ROLE} component={TenantTableFilterByRolePage} />
      <Route exact path={enumPaths.TENANTS_TABLE_FILTER_BY_USER} component={TenantTableFilterByUserPage} />
      <Route exact path={enumPaths.TENANTS_TABLE_FILTER_EDIT_DELETE} component={TenantTableFilterEditDeletePage} />
      {/** Users System */}
      <Route exact path={enumPaths.USERS_FORM} component={UsersFormPage} />
      <Route exact path={enumPaths.USERS_FORM_TENANT} component={UserFormTenantPage} />
      <Route exact path={enumPaths.USERS_TABLE} component={DeprecateUserTableBasicPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER} component={DeprecateUserTableFilterFullDataPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_BY_ROLE} component={UserTableFilterByRolePage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_BY_TENANT} component={UserTableFilterByTenantPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_SELECTION} component={UserTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_EDIT_DELETE} component={UserTableFilterEditDeletePage} />
      <Route exact path={enumPaths.USERS_DETAILS} component={UserDetailsPage} />
      <Route exact path={enumPaths.ROLES_TABLE} component={RoleTablePage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER} component={RoleTableFilterPage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER_BY_USER} component={RoleTablePageByUserPage} />
      <Route exact path={enumPaths.ROLES_TABLE_SELECTION_FOR_TENANTS} component={RoleTableSelectForTenantPage} />
      <Route exact path={enumPaths.ROLES_TABLE_FILTER_BY_TENANT} component={RoleTableFilterByTenantPage} />
      <Route exact path={enumPaths.ROLES_TABLE_SELECTION} component={RoleTablePage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_ONY_TENANT_EDIT_DELETE} component={UserTableFilterEditDeleteOnlyTenantPage} />
      <Route exact path={enumPaths.USERS_TABLE_FILTER_ONY_TENANT_DETAILS} component={UserTableFilterToDetailsOnlyTenantPage} />
      <Route exact path={enumPaths.USERS_ROLES_STEP_ONE} component={UsersRolesStepOnePage} />
      <Route exact path={enumPaths.USERS_ROLES_STEP_TWO} component={UsersRolesStepTwoPage} />
      <Route exact path={enumPaths.ROLES_USERS_STEP_ONE} component={RolesUsersStepOnePage} />
      <Route exact path={enumPaths.ROLES_USERS_STEP_TWO} component={RolesUsersStepTwoPage} />
      <Route exact path={enumPaths.TENANTS_USERS_ROLES_STEP_ONE} component={TenantsUsersRolesStepAPage} />
      <Route exact path={enumPaths.TENANTS_USERS_ROLES_STEP_TWO} component={TenantsUsersRolesStepBPage} />
      <Route exact path={enumPaths.TENANTS_USERS_ROLES_STEP_THREE} component={TenantsUsersRolesStepCPage} />
      {/** Sales System */}
      <Route exact path={enumPaths.SALES_PRODUCTS_FORM} component={ProductFormPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_FILTER} component={ProductTableFilterEditDeletePage} />
      <Route exact path={enumPaths.SALES_GROUP_PRODUCTS_FORM} component={GoupProductFormPage} />
      <Route exact path={enumPaths.SALES_GROUP_PRODUCTS_TABLE_FILTER} component={GoupProductTableFilterEditDeletePage} />
      <Route exact path={enumPaths.SALES_GROUP_PRODUCTS_FOR_PRODUCTS_STEP1} component={GroupProductForProductsStep1Page} />
      <Route exact path={enumPaths.SALES_GROUP_PRODUCTS_FOR_PRODUCTS_STEP2} component={GroupProductForProductsStep2Page} />
      <Route exact path={enumPaths.SALES_CLIENT_FORM} component={ClientFormPage} />
      <Route exact path={enumPaths.SALES_CLIENT_TABLE_FILTER_TO_DETAILS} component={ClientTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.SALES_SELLER_FORM} component={SellerFormPage} />
      <Route exact path={enumPaths.SALES_SELLER_TABLE_FILTER_TO_DETAILS} component={SellerTableFilterSelectionToDetailsPage} />
      <Route exact path={enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS} component={SalesTableFilterAllPage} />
      <Route exact path={enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_TODO} component={SalesTableFilterTodoPage} />
      <Route exact path={enumPaths.SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_IN_PROGRESS} component={SalesTableFilterInProgressPage} />
      <Route exact path={enumPaths.SALES_REGISTRATION_STEP_ONE_SELLER} component={SaleAddStepOnePageForSeller} />
      <Route exact path={enumPaths.SALES_REGISTRATION_STEP_ONE_CASHIER} component={SaleAddStepOnePageForCashier} />
      <Route exact path={enumPaths.SALES_REGISTRATION_STEP_TWO} component={SaleAddStepTwoPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY} component={SaleReportQuantityPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_COMP} component={SaleReportQuantityCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_MONTH} component={SaleReportQuantityMonthPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_MONTH_COMP} component={SaleReportQuantityMonthCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE} component={SaleReportRevenuePage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_COMP} component={SaleReportRevenueCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_MONTH} component={SaleReportRevenueMonthPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_MONTH_COMP} component={SaleReportRevenueMonthCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT} component={SaleReportProfitPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_COMP} component={SaleReportProfitCompPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_MONTH} component={SaleReportProfitMonthPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_MONTH_COMP} component={SaleReportProfitMonthCompPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT} component={ProductTableToQuantityReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT_COMP} component={ProductTableToQuantityComparativeReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT} component={ProductTableToRevenueReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT_COMP} component={ProductTableToRevenueComparativeReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT} component={ProductTableToProfitReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT_COMP} component={ProductTableToProfitComparativeReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT} component={ProductTableToQuantityMonthReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT_COMP} component={ProductTableToQuantityMonthCompReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT} component={ProductTableToRevenueMonthReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT_COMP} component={ProductTableToRevenueMonthCompReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT} component={ProductTableToProfitMonthReportPage} />
      <Route exact path={enumPaths.SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT_COMP} component={ProductTableToProfitMonthCompReportPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_BY_PRODUCT} component={SaleReportQuantityByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_COMP_BY_PRODUCT} component={SaleReportQuantityComparativeByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_MONTH_BY_PRODUCT} component={SaleReportQuantityMonthByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_QUANTITY_MONTH_COMP_BY_PRODUCT} component={SaleReportQuantityMonthCompByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_BY_PRODUCT} component={SaleReportRevenueByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_COMP_BY_PRODUCT} component={SaleReportRevenueComparativeByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_MONTH_BY_PRODUCT} component={SaleReportRevenueMonthByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_REVENUE_MONTH_COMP_BY_PRODUCT} component={SaleReportRevenueMonthCompByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_BY_PRODUCT} component={SaleReportProfitByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_COMP_BY_PRODUCT} component={SaleReportProfitComparativeByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_MONTH_BY_PRODUCT} component={SaleReportProfitMonthByProductPage} />
      <Route exact path={enumPaths.SALES_REPORT_PROFIT_MONTH_COMP_BY_PRODUCT} component={SaleReportProfitMonthCompByProductPage} />
      {/** Sales System Report Detail */}
      <Route exact path={enumPaths.SALES_DAILY_REPORT} component={SaleDailyReportPage} />
      <Route exact path={enumPaths.SALES_MONTHLY_REPORT} component={SaleMonthlyReportPage} />
      <Route exact path={enumPaths.SALES_ANNUAL_REPORT} component={SaleAnnualReportPage} />
      {/** Mensualidad System */}
      <Route exact path={enumPaths.MENSUALIDAD_CUOTA_PAGO_FORM} component={CuotaPagoFormPage} />
      <Route exact path={enumPaths.MENSUALIDAD_CUOTA_PAGO_TABLE} component={CuotaPagoTablePage} />
      <Route exact path={enumPaths.MENSUALIDAD_ASSIGN_CUOTA_PAGO_STEP1} component={AssignCuotaPagoStep1Page} />
      <Route exact path={enumPaths.MENSUALIDAD_ASSIGN_CUOTA_PAGO_STEP2} component={AssignCuotaPagoStep2Page} />
      <Route exact path={enumPaths.MENSUALIDAD_PAGO_STEP1_ENCARGADO} component={MensualidadPagoStep1EncargadoPage} />
      <Route exact path={enumPaths.MENSUALIDAD_PAGO_STEP2_ENCARGADO} component={MensualidadPagoStep2EncargadoPage} />
      <Route exact path={enumPaths.MENSUALIDAD_PAGO_STEP3_ENCARGADO} component={MensualidadPagoStep3EncargadoPage} />
      <Route exact path={enumPaths.MENSUALIDAD_PAGO_STEP1_ESTUDIANTE} component={MensualidadPagoStep1EstudiantePage} />
      <Route exact path={enumPaths.MENSUALIDAD_PAGO_STEP2_ESTUDIANTE} component={MensualidadPagoStep2EstudiantePage} />
      <Route exact path={enumPaths.MENSUALIDAD_TABLA_PAGOS_ENCARGADO} component={MensualidadTablaPagosEncargadoPage} />
      <Route exact path={enumPaths.MENSUALIDAD_TABLA_PAGOS_ESTUDIANTE} component={MensualidadTablaPagosEstudiantePage} />
      {/*  Mensualidad History */}
      <Route exact path={enumPaths.MENSUALIDAD_HISTORY_SELECCIONAR_ESTUDIANTE_ENCANRGADO} component={MensualidadHistorySeleccionarEstudianteEncargadoPage} />
      <Route exact path={enumPaths.MENSUALIDAD_HISTORY_SELECCIONAR_CURSO_ENCANRGADO} component={MensualidadHistorySeleccionarCursoEncargadoPage} />
      <Route exact path={enumPaths.MENSUALIDAD_HISTORY_SELECCIONAR_CURSO_ESTUDIANTE} component={MensualidadHistorySeleccionarCursoEstudiantePage} />
      <Route exact path={enumPaths.MENSUALIDAD_HISTORY_POR_ESTUDIANTE_CURSO} component={MensualidadHistoryPorEstudianteCursoPage} />
      <Route exact path={enumPaths.MENSUALIDAD_HISTORY_SELECCIONAR_SOLO_CURSO} component={MensualidadHistorySeleccionarSoloCursoEncargadoPage} />
      <Route exact path={enumPaths.MENSUALIDAD_HISTORY_POR_CURSO} component={MensualidadHistoryPorCursoPage} />
      {/** Pagos Upea System */}
      <Route exact path={enumPaths.PAGO_UPEA_COLEGIATURAS_MATRICULAS_FORM} component={ColegiaturaMatriculaFormPage} />
      <Route exact path={enumPaths.PAGO_UPEA_COLEGIATURAS_MATRICULAS_TABLE} component={ColegiaturaMatriculaTablePage} />
      <Route exact path={enumPaths.PAGO_UPEA_PROGRAMA_POSTGRADO_FORM} component={ProgramaPostgradoFormPage} />
      <Route exact path={enumPaths.PAGO_UPEA_PROGRAMA_POSTGRADO_CURSO_FORM} component={ProgramaPostgradoCursoFormPage} />
      <Route exact path={enumPaths.PAGO_UPEA_PROGRAMA_POSTGRADO_CURSO_TABLE} component={ProgramaPostgradoCursoTablePage} />
      <Route exact path={enumPaths.PAGO_UPEA_PROGRAMA_POSTGRADO_TABLE} component={ProgramaPostgradoTablePage} />
      <Route exact path={enumPaths.PAGO_UPEA_ASSIGN_COLEGIATURA_MATRICULA_STEP1} component={AssignColegiaturaMatriculaStep1Page} />
      <Route exact path={enumPaths.PAGO_UPEA_ASSIGN_COLEGIATURA_MATRICULA_STEP2} component={AssignColegiaturaMatriculaStep2Page} />
      {/** Hospital System */}
      <Route exact path={enumPaths.HOSPITAL_DOCTOR_USER_FORM} component={DoctorUserFormPage} />
      <Route exact path={enumPaths.HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS} component={DoctorUserTableToDetailsPage} />
      <Route exact path={enumPaths.HOSPITAL_PATIENT_USER_FORM} component={PatientUserFormPage} />
      <Route exact path={enumPaths.HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS} component={PatientUserTableToDetailsPage} />
      {/** Reservation System */}
      <Route exact path={enumPaths.RESERVATION_RESOURCES_FORM} component={ResourceFormPage} />
      <Route exact path={enumPaths.RESERVATION_RESOURCES_TABLE} component={ResourceTablePage} />
      <Route exact path={enumPaths.RESERVATION_SCHEDULE_FORM} component={ScheduleFormPage} />
      <Route exact path={enumPaths.RESERVATION_SCHEDULE_TABLE} component={ScheduleTablePage} />
      <Route exact path={enumPaths.RESERVATION_INTERVAL_TIME_FORM} component={IntervalTimeFormPage} />
      <Route exact path={enumPaths.RESERVATION_INTERVAL_TIME_TABLE} component={IntervalTimeTablePage} />
      {/** Alcaldia System */}
      <Route exact path={enumPaths.ALCALDIA_LOGIN_COLCAPIRHUA} component={LoginAlcaldiaColcapirhuaPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FORM} component={AlcaldiaRecursosMunicipalesFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TABLE} component={AlcaldiaRecursosMunicipalesTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_ONE} component={AlcaldiaRecursosMunicipalesGrupoStepOnePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_TWO} component={AlcaldiaRecursosMunicipalesGrupoStepTwoPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_FORM} component={AlcaldiaRecursosMunicipalesVentasFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_TABLE} component={AlcaldiaRecursosMunicipalesVentasTablePage} />
      <Route exact path={enumPaths.ALCALDIA_ACTIVIDADES_FORM} component={AlcaldiaActividadesFormPage} />
      <Route exact path={enumPaths.ALCALDIA_ACTIVIDADES_TABLE} component={AlcaldiaActividadesTablePage} />
      <Route exact path={enumPaths.ALCALDIA_ACTIVIDADES_JERARQUIA} component={AlcaldiaActividadesGrupoPage} />
      <Route exact path={enumPaths.ALCALDIA_ACTIVIDADES_TIMBRES} component={AlcaldiaActividadesTimbresPage} />
      <Route exact path={enumPaths.ALCALDIA_ACTIVIDADES_FOLDERS} component={AlcaldiaActividadesFoldersPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_FORM} component={AlcaldiaRecursosMunicipalesTimbresFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_TABLE} component={AlcaldiaRecursosMunicipalesTimbresTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_FORM} component={AlcaldiaRecursosMunicipalesTimbresDescontinuadasFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_TABLE} component={AlcaldiaRecursosMunicipalesTimbresDescontinuadosTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_FORM} component={AlcaldiaRecursosMunicipalesTimbresVentasFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_TABLE} component={AlcaldiaRecursosMunicipalesTimbresVentasTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_FORM} component={AlcaldiaRecursosMunicipalesFoldersFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_TABLE} component={AlcaldiaRecursosMunicipalesFoldersTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_FORM} component={AlcaldiaRecursosMunicipalesTimbresVentasFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_TABLE} component={AlcaldiaRecursosMunicipalesFoldersVentasTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_CORTO_DIARIO} component={AlcaldiaRecursosMunicipalesReporteCortoDiarioPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO} component={AlcaldiaRecursosMunicipalesReporteDiarioPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_TIMBRES} component={AlcaldiaRecursosMunicipalesReporteDiarioTimbresPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_FOLDERS} component={AlcaldiaRecursosMunicipalesReporteDiarioFoldersPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_MENSUAL} component={AlcaldiaRecursosMunicipalesReporteMensualPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_ANUAL} component={AlcaldiaRecursosMunicipalesReporteAnualPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_TIMBRES_STEP1} component={AlcaldiaRecursosMunicipalesReporteDiarioInventarioTimbresStep1Page} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_FOLDERS_STEP1} component={AlcaldiaRecursosMunicipalesReporteDiarioInventarioFoldersStep1Page} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_TIMBRES_STEP2} component={AlcaldiaRecursosMunicipalesReporteDiarioInventarioTimbresStep2Page} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_STEP_1} component={AlcaldiaRecursosMunicipalesVentaFoldersStep1Page} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_STEP_1} component={AlcaldiaRecursosMunicipalesVentaTimbresStep1Page} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_FORM} component={UrbanismoTramiteFormPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_TABLE} component={UrbanismoTramiteTablePage} />
      <Route exact path={enumPaths.REGULA_LOTES_FORM} component={RegulaLotesFormPage} />
      <Route exact path={enumPaths.REGULA_LOTES_EXTRACTO_BANCARIO_FORM} component={RegulaLotesExtractoBancarioFormPage} />
      <Route exact path={enumPaths.REGULA_LOTES_FORM_CLIENTE} component={RegulaLotesFormClientePage} />
      <Route exact path={enumPaths.REGULA_LOTES_FORM_CLIENTE_STEP_TWO} component={RegulaLotesFormClienteStepTwoPage} />
      <Route exact path={enumPaths.REGULA_LOTES_TABLE} component={RegulaLotesTablePage} />
      <Route exact path={enumPaths.URBANISMO_REQUISITOS_FORM} component={UrbanismoRequisitosFormPage} />
      <Route exact path={enumPaths.URBANISMO_REQUISITOS_TABLE} component={UrbanismoRequisitosTablePage} />
      <Route exact path={enumPaths.URBANISMO_ESTADOS_FORM} component={UrbanismoEstadosFormPage} />
      <Route exact path={enumPaths.URBANISMO_ESTADOS_TABLE} component={UrbanismoEstadosTablePage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_REQUISITOS_STEP_ONE} component={UrbanismoTramiteRequisitosStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_REQUISITOS_STEP_TWO} component={UrbanismoTramiteRequisitosStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_ESTADOS_TABLE} component={UrbanismoTramiteEstadosTablePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_REQUISITOS_STEP_ONE} component={UrbanismoFlujoRequisitosStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_REQUISITOS_STEP_TWO} component={UrbanismoFlujoRequisitosStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_ONE} component={UrbanismoTramiteEstadosStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_TWO} component={UrbanismoTramiteEstadosStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_ESTADOS_STEP_THREE} component={UrbanismoTramiteEstadosStepThreePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_CHANGE_STATE_STEP_ONE} component={UrbanismoTramiteFlujoChangeStateStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_CHANGE_STATE_STEP_TWO} component={UrbanismoTramiteFlujoChangeStateStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_HISTORIAL_STEP_ONE} component={UrbanismoFlujoHistorialStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_HISTORIAL_STEP_TWO} component={UrbanismoFlujoHistorialStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_ONE} component={UrbanismoHistorialEstadoStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_TWO} component={UrbanismoHistorialEstadoStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_THREE} component={UrbanismoHistorialEstadoStepThreePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_BOARD_A} component={UrbanismoFlujoBoardStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_BOARD_B} component={UrbanismoFlujoBoardStepTwoPage} />
      {/** ESCUELA SYSTEM */}
      {/** <Route exact path={enumPaths.ESCUELA_CURSOS_FORM} element={(<Suspense fallback={<Loading />}><CursosFormLazyPage /></Suspense>)} /> */}
      <Route exact path={enumPaths.ESCUELA_CURSOS_FORM} component={CursosFormPage} />
      <Route exact path={enumPaths.ESCUELA_MATERIAS_FORM} component={MateriasFormPage} />
      <Route exact path={enumPaths.ESCUELA_NOTAS_FORM} component={NotasFormPage} />
      <Route exact path={enumPaths.ESCUELA_CURSOS_TABLE} component={CursosTablePage} />
      <Route exact path={enumPaths.ESCUELA_MATERIAS_TABLE} component={MateriasTablePage} />
      <Route exact path={enumPaths.ESCUELA_NOTAS_TABLE} component={NotasTablePage} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_MATERIAS_STEP_ONE} component={AsignarMateriasPageStep1} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_MATERIAS_STEP_TWO} component={AsignarMateriasPageStep2} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_NOTAS_STEP_ONE} component={AsignarNotasPageStep1} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_NOTAS_STEP_TWO} component={AsignarNotasPageStep2} />
      <Route exact path={enumPaths.ESCUELA_ESTUDIANTES_FORM} component={EstudiantesFormPage} />
      <Route exact path={enumPaths.ESCUELA_ESTUDIANTES_TABLE} component={EstudiantesTablePage} />
      <Route exact path={enumPaths.ESCUELA_DOCENTES_FORM} component={DocentesFormPage} />
      <Route exact path={enumPaths.ESCUELA_DOCENTES_TABLE} component={DocentesTablePage} />
      <Route exact path={enumPaths.ESCUELA_CALIFICACIONES_TABLE} component={CalificacionesTablePage} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CURSOS_A_ESTUDIANTE_STEP_ONE} component={AsignarCursosAEstudiantesPageStep1} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CURSOS_A_ESTUDIANTE_STEP_TWO} component={AsignarCursosAEstudiantesPageStep2} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_ONE} component={AsignarCursosMateriasADocentesPageStep1} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_TWO} component={AsignarCursosMateriasADocentesPageStep2} />
      <Route exact path={enumPaths.ESCUELA_CALIFICACIONES_VIEW_ESTUDIANTE} component={CalificacionesViewEstudiantePage} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_THREE} component={AsignarCursosMateriasADocentesPageStep3} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_ONE} component={AsignarCalificacionesPageStep1} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_ONE_TABLE} component={AsignarCalificacionesPageStep1Table} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_TWO} component={AsignarCalificacionesPageStep2} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_THREE} component={AsignarCalificacionesPageStep3} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FOUR} component={AsignarCalificacionesPageStep4} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FIVE} component={AsignarCalificacionesPageStep5} />
      <Route exact path={enumPaths.ESCUELA_ASIGNAR_CALIFICACIONES_DOCENTE} component={AsignarCalificacionesDocentePage} />
      <Route exact path={enumPaths.ESCUELA_REPORTES_ESTUDIANTES_NOTA_FINAL_MATERIA} component={ReporteCalificacionesMateriasPage} />
      <Route exact path={enumPaths.ESCUELA_REPORTES_DETALLE_ENCARGADO} component={ReporteDetalladoEncargadoPage} />
      <Route exact path={enumPaths.ESCUELA_REPORTES_NOTA_FINAL_PARA_ESTUDIANTE} component={ReporteCalificacionesMateriasViewEstudiantePage} />
      {/** GAMES */}
      <Route exact path={enumPaths.GAMES_TIC_TAC_TOE} component={TicTacToePage} />
      <Route exact path={enumPaths.GAMES_TIC_TAC_TOE_PC} component={TicTacToePagePc} />

      {/** DATA STORAGE SYSTEM */}
      <Route exact path={enumPaths.DATA_STORAGE_SCHEMA_FORM} component={StorageSchemaFormPage} />
      <Route exact path={enumPaths.DATA_STORAGE_SCHEMA_TABLE} component={StorageSchemaTablePage} />
      <Route exact path={enumPaths.DATA_STORAGE_FIELD_FORM} component={StorageFieldFormPage} />
      <Route exact path={enumPaths.DATA_STORAGE_FIELD_TABLE} component={StorageFieldTablePage} />
      <Route exact path={enumPaths.DATA_STORAGE_RECORD_FORM_STEP_ONE} component={StorageRecordFormStepOnePage} />
      <Route exact path={enumPaths.DATA_STORAGE_RECORD_FORM_STEP_TWO} component={StorageRecordFormStepTwoPage} />
      <Route exact path={enumPaths.DATA_STORAGE_RECORD_TABLE_STEP_ONE} component={StorageRecordTableStepOnePage} />
      <Route exact path={enumPaths.DATA_STORAGE_RECORD_TABLE_STEP_TWO} component={StorageRecordTableStepTwoPage} />
      <Route exact path={enumPaths.LOGIN_TENANT} component={LoginPage} />
      <Route exact path={enumPaths.LOGIN} component={LoginPage} />
      <Route exact path="/" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </App >
);

export default AppRoutes;
