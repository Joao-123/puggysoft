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
import AlcaldiaRecursosMunicipalesFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesFormPage";
import AlcaldiaRecursosMunicipalesTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTablePage";
import AlcaldiaRecursosMunicipalesGrupoStepOnePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesGrupoStepOnePage";
import AlcaldiaRecursosMunicipalesGrupoStepTwoPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesGrupoStepTwoPage";
import AlcaldiaRecursosMunicipalesVentasFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesVentasFormPage";
import AlcaldiaRecursosMunicipalesVentasTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesVentasTablePage";
import AlcaldiaRecursosMunicipalesTimbresFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresFormPage";
import AlcaldiaRecursosMunicipalesTimbresTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresTablePage";
import AlcaldiaRecursosMunicipalesTimbresDescontinuadasFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresDescontinuadosFormPage";
import AlcaldiaRecursosMunicipalesTimbresDescontinuadosTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresDescontinuadosTablePage";
import AlcaldiaRecursosMunicipalesTimbresVentasFormPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresVentasFormPage";
import AlcaldiaRecursosMunicipalesTimbresVentasTablePage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesTimbresVentasTablePage";
import AlcaldiaRecursosMunicipalesReporteDiarioPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteDiarioPage";
import AlcaldiaRecursosMunicipalesReporteMensualPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteMensualPage";
import AlcaldiaRecursosMunicipalesReporteAnualPage from "./components-level-3/alcaldia/AlcaldiaRecursosMunicipalesReporteAnualPage";
import UrbanismoTramiteFormPage from "./components-level-3/alcaldia/UrbanismoTramiteFormPage";
import UrbanismoTramiteTablePage from "./components-level-3/alcaldia/UrbanismoTramiteTablePage";
import RegulaLotesFormPage from "./components-level-3/alcaldia/RegulaLotesFormPage";
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
import UrbanismoFlujoHistorialStepOnePage from "./components-level-3/alcaldia/UrbanismoFlujoHistorialStepOnePage";
import UrbanismoFlujoHistorialStepTwoPage from "./components-level-3/alcaldia/UrbanismoFlujoHistorialStepTwoPage";
import UrbanismoHistorialEstadoStepOnePage from "./components-level-3/alcaldia/UrbanismoHistorialEstadoStepOnePage";
import UrbanismoHistorialEstadoStepTwoPage from "./components-level-3/alcaldia/UrbanismoHistorialEstadoStepTwoPage";
import UrbanismoHistorialEstadoStepThreePage from "./components-level-3/alcaldia/UrbanismoHistorialEstadoStepThreePage";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path={enumPaths.DASHBOARD} component={DashboardPage} />
      <Route exact path={enumPaths.IN_PROGRESS_PAGE} component={InProgressPage} />
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
      <Route exact path={enumPaths.LOGIN_TENANT} component={LoginPage} />
      <Route exact path={enumPaths.LOGIN} component={LoginPage} />
      {/** Alcaldia System */}
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_FORM} component={AlcaldiaRecursosMunicipalesFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TABLE} component={AlcaldiaRecursosMunicipalesTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_ONE} component={AlcaldiaRecursosMunicipalesGrupoStepOnePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_TWO} component={AlcaldiaRecursosMunicipalesGrupoStepTwoPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_FORM} component={AlcaldiaRecursosMunicipalesVentasFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_TABLE} component={AlcaldiaRecursosMunicipalesVentasTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_FORM} component={AlcaldiaRecursosMunicipalesTimbresFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_TABLE} component={AlcaldiaRecursosMunicipalesTimbresTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_FORM} component={AlcaldiaRecursosMunicipalesTimbresDescontinuadasFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_TABLE} component={AlcaldiaRecursosMunicipalesTimbresDescontinuadosTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_FORM} component={AlcaldiaRecursosMunicipalesTimbresVentasFormPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_TABLE} component={AlcaldiaRecursosMunicipalesTimbresVentasTablePage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO} component={AlcaldiaRecursosMunicipalesReporteDiarioPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_MENSUAL} component={AlcaldiaRecursosMunicipalesReporteMensualPage} />
      <Route exact path={enumPaths.ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_ANUAL} component={AlcaldiaRecursosMunicipalesReporteAnualPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_FORM} component={UrbanismoTramiteFormPage} />
      <Route exact path={enumPaths.URBANISMO_TRAMITE_TABLE} component={UrbanismoTramiteTablePage} />
      <Route exact path={enumPaths.REGULA_LOTES_FORM} component={RegulaLotesFormPage} />
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
      <Route exact path={enumPaths.URBANISMO_FLUJO_HISTORIAL_STEP_ONE} component={UrbanismoFlujoHistorialStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_FLUJO_HISTORIAL_STEP_TWO} component={UrbanismoFlujoHistorialStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_ONE} component={UrbanismoHistorialEstadoStepOnePage} />
      <Route exact path={enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_TWO} component={UrbanismoHistorialEstadoStepTwoPage} />
      <Route exact path={enumPaths.URBANISMO_HISTORIAL_ESTADO_STEP_THREE} component={UrbanismoHistorialEstadoStepThreePage} />
      <Route exact path="/" component={LoginPage} />
      <Route component={LoginPage} />
    </Switch>
  </App>
);

export default AppRoutes;
