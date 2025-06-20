// ALL SYSTEMS
const LOGIN = "/login";
const LOGIN_TENANT = "/login/:tenant";
const DASHBOARD = "/dashboard";
const THEME_FORM = "/theme-form";
const SYSTEM_PROPERTIES_TABLE = "/system-properties-table";
const SYSTEM_PROPERTIES_FORM = "/system-properties-form";
const TENANTS_FORM = "/tenants-form";
const TENANTS_TABLE_FILTER_SELECTION = "/tenants-table-filter-selection";
const TENANTS_TABLE_SELECTION_FOR_ROLE = "/tenants-table-selection-for-role";
const TENANTS_TABLE_FILTER_BY_ROLE = "/tenants-table-filter-by-role";
const TENANTS_TABLE_FILTER_EDIT_DELETE = "/tenants-table-filter-edit-delete";
const TENANTS_TABLE_FILTER_BY_USER = "/tenants-table-filter-by-user";
const IN_PROGRESS_PAGE = "/in-progress-page";
// USERS SYSTEM
const USERS_FORM = "/users-form";
const USERS_FORM_TENANT = "/users-form-tenant";
const USERS_TABLE = "/users-table";
const USERS_TABLE_FILTER = "/users-table-filter";
const USERS_TABLE_FILTER_BY_ROLE = "/users-table-filter-by-role";
const USERS_TABLE_FILTER_BY_TENANT = "/users-table-filter-by-tenant";
const USERS_TABLE_FILTER_SELECTION = "/users-table-filter-selection";
const USERS_TABLE_FILTER_EDIT_DELETE = "/users-table-filter-edit-delete";
const USERS_DETAILS = "/user-details";
const ROLES_TABLE = "/roles-table";
const ROLES_TABLE_FILTER = "/roles-table-filter";
const ROLES_TABLE_FILTER_BY_USER = "/roles-table-filter-by-user";
const ROLES_TABLE_FILTER_BY_TENANT = "/roles-table-filter-by-tenant";
const ROLES_TABLE_SELECTION_FOR_TENANTS = "/roles-table-selection-for-tenants";
const ROLES_TABLE_SELECTION = "/roles-table-selection";
const USERS_TABLE_FILTER_ONY_TENANT_EDIT_DELETE = "/users-table-filter-only-tenant-edit-delete";
const USERS_TABLE_FILTER_ONY_TENANT_DETAILS = "/users-table-filter-only-tenant-details";
const USERS_ROLES_STEP_ONE = "/users-roles-step-one";
const USERS_ROLES_STEP_TWO = "/users-roles-step-two";
const ROLES_USERS_STEP_ONE = "/roles-users-step-one";
const ROLES_USERS_STEP_TWO = "/roles-users-step-two";
const TENANTS_USERS_ROLES_STEP_ONE = "/tenants-users-roles-step-one";
const TENANTS_USERS_ROLES_STEP_TWO = "/tenants-users-roles-step-two";
const TENANTS_USERS_ROLES_STEP_THREE = "/tenants-users-roles-step-three";
const TENANTS_ROLES_USERS_STEP_ONE = "/tenants-roles-users-step-one";
const TENANTS_ROLES_USERS_STEP_TWO = "/tenants-roles-users-step-two";
const TENANTS_ROLES_USERS_THREE = "/tenants-roles-users-step-three";
const USERS_TENANTS_ROLES_STEP_ONE = "/users-tenants-roles-step-one";
const USERS_TENANTS_ROLES_STEP_TWO = "/users-tenants-roles-step-two";
const USERS_TENANTS_ROLES_THREE = "/users-tenants-roles-step-three";
const USERS_ROLES_TENANTS_STEP_ONE = "/users-roles-tenants-step-one";
const USERS_ROLES_TENANTS_STEP_TWO = "/users-roles-tenants-step-two";
const USERS_ROLES_TENANTS_THREE = "/users-roles-tenants-step-three";
const ROLES_TENANTS_USERS_STEP_ONE = "/roles-tenants-users-step-one";
const ROLES_TENANTS_USERS_STEP_TWO = "/roles-tenants-users-step-two";
const ROLES_TENANTS_USERS_STEP_THREE = "/roles-tenants-users-step-three";
const ROLES_USERS_TENANTS_STEP_ONE = "/roles-users-tenants-step-one";
const ROLES_USERS_TENANTS_STEP_TWO = "/roles-users-tenants-step-two";
const ROLES_USERS_TENANTS_STEP_THREE = "/roles-users-tenants-step-three";

// SALES SYSTEM
const SALES_PRODUCTS_FORM = "/sales-products-form";
const SALES_PRODUCTS_TABLE_FILTER = "/sales-products-table-filter-edit-delete";
const SALES_GROUP_PRODUCTS_FORM = "/sales-group-products-form";
const SALES_GROUP_PRODUCTS_TABLE_FILTER = "/sales-group-products-table-filter-edit-delete";
const SALES_GROUP_PRODUCTS_FOR_PRODUCTS_STEP1 = "/sales-group-products-for-product-step1";
const SALES_GROUP_PRODUCTS_FOR_PRODUCTS_STEP2 = "/sales-group-products-for-product-step2";
const SALES_CLIENT_FORM = "/sales-client-user-form";
const SALES_CLIENT_TABLE_FILTER_TO_DETAILS = "/sales-client-user-table-filter-to-details";
const SALES_SELLER_FORM = "/sales-seller-user-form";
const SALES_SELLER_TABLE_FILTER_TO_DETAILS = "/sales-seller-user-table-filter-to-details";
const SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS = "/sales-table-filter-edit-delete-details";
const SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_TODO = "/sales-table-filter-edit-delete-details-todo";
const SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_IN_PROGRESS = "/sales-table-filter-edit-delete-details-in-progress";
const SALES_REGISTRATION_STEP_ONE_SELLER = "/sales-registration-step-one-seller";
const SALES_REGISTRATION_STEP_ONE_CASHIER = "/sales-registration-step-one-cashier";
const SALES_REGISTRATION_STEP_TWO = "/sales-registration-step-two";
const SALES_REPORT_QUANTITY = "/sales-report-quantity";
const SALES_REPORT_QUANTITY_COMP = "/sales-report-quantity-comparative";
const SALES_REPORT_QUANTITY_MONTH = "/sales-report-quantity-month";
const SALES_REPORT_QUANTITY_MONTH_COMP = "/sales-report-quantity-month-comparative";
const SALES_REPORT_REVENUE = "/sales-report-revenue";
const SALES_REPORT_REVENUE_COMP = "/sales-report-revenue-comparative";
const SALES_REPORT_REVENUE_MONTH = "/sales-report-revenue-month";
const SALES_REPORT_REVENUE_MONTH_COMP = "/sales-report-revenue-month-comparative";
const SALES_REPORT_PROFIT = "/sales-report-profit";
const SALES_REPORT_PROFIT_COMP = "/sales-report-profit-comparative";
const SALES_REPORT_PROFIT_MONTH = "/sales-report-profit-month";
const SALES_REPORT_PROFIT_MONTH_COMP = "/sales-report-profit-month-comparative";
const SALES_REPORT_QUANTITY_BY_PRODUCT = "/sales-report-quantity-by-product";
const SALES_REPORT_QUANTITY_COMP_BY_PRODUCT = "/sales-report-quantity-comparative-by-product";
const SALES_REPORT_QUANTITY_MONTH_BY_PRODUCT = "/sales-report-quantity-month-by-product";
const SALES_REPORT_QUANTITY_MONTH_COMP_BY_PRODUCT = "/sales-report-quantity-month-comparative-by-product";
const SALES_REPORT_REVENUE_BY_PRODUCT = "/sales-report-revenue-by-product";
const SALES_REPORT_REVENUE_COMP_BY_PRODUCT = "/sales-report-revenue-comparative-by-product";
const SALES_REPORT_REVENUE_MONTH_BY_PRODUCT = "/sales-report-revenue-month-by-product";
const SALES_REPORT_REVENUE_MONTH_COMP_BY_PRODUCT = "/sales-report-revenue-month-comparative-by-product";
const SALES_REPORT_PROFIT_BY_PRODUCT = "/sales-report-profit-by-product";
const SALES_REPORT_PROFIT_COMP_BY_PRODUCT = "/sales-report-profit-comparative-by-product";
const SALES_REPORT_PROFIT_MONTH_BY_PRODUCT = "/sales-report-profit-month-by-product";
const SALES_REPORT_PROFIT_MONTH_COMP_BY_PRODUCT = "/sales-report-profit-month-comparative-by-product";
const SALES_DAILY_REPORT = "/sales-daily-report";
const SALES_MONTHLY_REPORT = "/sales-monthly-report";
const SALES_ANNUAL_REPORT = "/sales-annual-report";
const SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT = "/sales-products-table-to-quantity-report";
const SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT_COMP = "/sales-products-table-to-quantity-comp-report";
const SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT = "/sales-products-table-to-quantity-month-report";
const SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT_COMP = "/sales-products-table-to-quantity-month-comp-report";
const SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT = "/sales-products-table-to-revenue-report";
const SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT_COMP = "/sales-products-table-to-revenue-comp-report";
const SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT = "/sales-products-table-to-revenue-month-report";
const SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT_COMP = "/sales-products-table-to-revenue-month-comp-report";
const SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT = "/sales-products-table-to-profit-report";
const SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT_COMP = "/sales-products-table-to-profit-comp-report";
const SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT = "/sales-products-table-to-profit-month-report";
const SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT_COMP = "/sales-products-table-to-profit-month-comp-report";

// MENSUALIDAD SYSTEM
const MENSUALIDAD_CUOTA_PAGO_FORM = "/mensualidad-cuota-pago-form";
const MENSUALIDAD_CUOTA_PAGO_TABLE = "/mensualidad-cuota-pago-table";
const MENSUALIDAD_ASSIGN_CUOTA_PAGO_STEP1 = "/mensualidad-assign-cuota-pago-step1";
const MENSUALIDAD_ASSIGN_CUOTA_PAGO_STEP2 = "/mensualidad-assign-cuota-pago-step2";
const MENSUALIDAD_PAGO_STEP1_ENCARGADO = "/mensualidad-venta-step1-encargado";
const MENSUALIDAD_PAGO_STEP1_ESTUDIANTE = "/mensualidad-venta-step1-estudiante";
const MENSUALIDAD_PAGO_STEP2_ENCARGADO = "/mensualidad-venta-step2-encargado";
const MENSUALIDAD_PAGO_STEP3_ENCARGADO = "/mensualidad-venta-step3-encargado";
const MENSUALIDAD_PAGO_STEP2_ESTUDIANTE = "/mensualidad-venta-step2-estudiante";
const MENSUALIDAD_TABLA_PAGOS_ESTUDIANTE = "/mensualidad-tabla-pagos-estudiante";
const MENSUALIDAD_TABLA_PAGOS_ENCARGADO = "/mensualidad-tabla-pagos-encargado";
const MENSUALIDAD_HISTORY_SELECCIONAR_ESTUDIANTE_ENCANRGADO = "/mensualidad-history-seleccionar-estudiante-encargado";
const MENSUALIDAD_HISTORY_SELECCIONAR_CURSO_ENCANRGADO = "/mensualidad-history-seleccionar-curso-encargado";
const MENSUALIDAD_HISTORY_SELECCIONAR_CURSO_ESTUDIANTE = "/mensualidad-history-seleccionar-curso-estudiante";
const MENSUALIDAD_HISTORY_POR_ESTUDIANTE_CURSO = "/mensualidad-history-por-estudiante-curso";
const MENSUALIDAD_HISTORY_SELECCIONAR_SOLO_CURSO = "/mensualidad-history-seleccionar-solo-curso";
const MENSUALIDAD_HISTORY_POR_CURSO = "/mensualidad-history-por-curso";

// PAGO UPEA SYSTEM
const PAGO_UPEA_COLEGIATURAS_MATRICULAS_FORM = "/pago-upea-colegiaturas-matriculas-form";
const PAGO_UPEA_COLEGIATURAS_MATRICULAS_TABLE = "/pago-upea-colegiaturas-matriculas-table";
const PAGO_UPEA_PROGRAMA_POSTGRADO_FORM = "/pago-upea-programa-postgrado-form";
const PAGO_UPEA_PROGRAMA_POSTGRADO_CURSO_FORM = "/pago-upea-programa-postgrado-curso-form";
const PAGO_UPEA_PROGRAMA_POSTGRADO_CURSO_TABLE = "/pago-upea-programa-postgrado-curso-table";
const PAGO_UPEA_PROGRAMA_POSTGRADO_TABLE = "/pago-upea-programa-postgrado-table";
const PAGO_UPEA_ASSIGN_COLEGIATURA_MATRICULA_STEP1 = "/pago-upea-assign-colegiatura-matricula-step1";
const PAGO_UPEA_ASSIGN_COLEGIATURA_MATRICULA_STEP2 = "/pago-upea-assign-colegiatura-matricula-step2";

// HOSPITAL SYSTEM
const HOSPITAL_DOCTOR_USER_FORM = "/hospital-doctor-user-form";
const HOSPITAL_DOCTOR_USER_TABLE = "/hospital-doctor-user-table";
const HOSPITAL_PATIENT_USER_FORM = "/hospital-patient-user-form";
const HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS = "/hospital-doctor-user-table-to-details";
const HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS = "/hospital-patient-user-table-to-details";

// RESERVATION SYSTEM
const RESERVATION_RESOURCES_FORM = "/reservation-resource-form";
const RESERVATION_RESOURCES_TABLE = "/reservation-resource-table";
const RESERVATION_SCHEDULE_FORM = "/reservation-schedule-form";
const RESERVATION_SCHEDULE_TABLE = "/reservation-schedule-table";
const RESERVATION_INTERVAL_TIME_FORM = "/reservation-interval-time-form";
const RESERVATION_INTERVAL_TIME_TABLE = "/reservation-interval-time-table";
const RESERVATION_RESOURCES_TABLE_TO_ADD_SCHEDULES = "/reservation-resource-table-to-add-schedules";
const RESERVATION_SCHEDULES_TABLE_TO_ADD_RESOURCES = "/reservation-schedule-table-to-add-resources";
const RESERVATION_RESOURCES_SCHEDULES_BY_RESOURCE = "/reservation-resource-schedules-table-by-resource";
const RESERVATION_RESOURCES_SCHEDULES_BY_SCHEDULE = "/reservation-resource-schedules-table-by-schedule";

// ALCALDIA SYSTEM
const ALCALDIA_LOGIN_COLCAPIRHUA = "/alcaldia-login-colcapirhua";
const ALCALDIA_RECURSOS_MUNICIPALES_FORM = "/alcaldia-recursos-municipales-form";
const ALCALDIA_RECURSOS_MUNICIPALES_TABLE = "/alcaldia-recursos-municipales-table";
const ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_ONE = "/alcaldia-recursos-municipales-grupo-step-one";
const ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_TWO = "/alcaldia-recursos-municipales-grupo-step-two";
const ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_FORM = "/alcaldia-recursos-municipales-ventas-form";
const ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_TABLE = "/alcaldia-recursos-municipales--ventas-table";
const ALCALDIA_ACTIVIDADES_FORM = "/alcaldia-actividades-form";
const ALCALDIA_ACTIVIDADES_TABLE = "/alcaldia-actividades-table";
const ALCALDIA_ACTIVIDADES_JERARQUIA = "/alcaldia-actividades-jerarquia";
const ALCALDIA_ACTIVIDADES_TIMBRES = "/alcaldia-actividades-timbres";
const ALCALDIA_ACTIVIDADES_FOLDERS = "/alcaldia-actividades-folders";
const ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_FORM = "/alcaldia-recursos-municipales-timbres-form";
const ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_TABLE = "/alcaldia-recursos-municipales-timbres-table";
const ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_FORM = "/alcaldia-recursos-municipales-timbres-descontinuados-form";
const ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_TABLE = "/alcaldia-recursos-municipales-timbres-descontinuados-table";
const ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_STEP_1 = "/alcaldia-recursos-municipales-folders-ventas-step1";
const ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_STEP_1 = "/alcaldia-recursos-municipales-timbres-ventas-step1";
const ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_FORM = "/alcaldia-recursos-municipales-timbres-ventas-form";
const ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_TABLE = "/alcaldia-recursos-municipales-timbres-ventas-table";
const ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_FORM = "/alcaldia-recursos-municipales-folders-form";
const ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_TABLE = "/alcaldia-recursos-municipales-folders-table";
const ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_FORM = "/alcaldia-recursos-municipales-folders-ventas-form";
const ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_TABLE = "/alcaldia-recursos-municipales-folders-ventas-table";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_CORTO_DIARIO = "/alcaldia-recursos-municipales-reporte-corto-diario";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO = "/alcaldia-recursos-municipales-reporte-diario";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_TIMBRES = "/alcaldia-recursos-municipales-reporte-diario-timbres";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_FOLDERS = "/alcaldia-recursos-municipales-reporte-diario-folders";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_TIMBRES_STEP1 = "/alcaldia-recursos-municipales-reporte-diario-inventario-timbres-step1";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_TIMBRES_STEP2 = "/alcaldia-recursos-municipales-reporte-diario-inventario-timbres-step2";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_FOLDERS_STEP1 = "/alcaldia-recursos-municipales-reporte-diario-inventario-folders-step1";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_ANUAL = "/alcaldia-recursos-municipales-reporte-anual";
const ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_MENSUAL = "/alcaldia-recursos-municipales-reporte-mensual";
const URBANISMO_TRAMITE_FORM = "/urbanismo-tramite-form";
const URBANISMO_TRAMITE_TABLE = "/urbanismo-tramite-table";
const REGULA_LOTES_FORM = "/regularizacion-lotes-form";
const REGULA_LOTES_EXTRACTO_BANCARIO_FORM = "/regularizacion-lotes-extracto-bancario-form";
const REGULA_LOTES_FORM_CLIENTE = "/regularizacion-lotes-form-cliente";
const REGULA_LOTES_FORM_CLIENTE_STEP_TWO = "/regularizacion-lotes-form-cliente-step-two";
const REGULA_LOTES_TABLE = "/regularizacion-lotes-table";
const URBANISMO_REQUISITOS_FORM = "/urbanismo-requisitos-form";
const URBANISMO_REQUISITOS_TABLE = "/urbanismo-requisitos-table";
const URBANISMO_ESTADOS_FORM = "/urbanismo-estados-form";
const URBANISMO_ESTADOS_TABLE = "/urbanismo-estados-table";
const URBANISMO_TRAMITE_REQUISITOS_STEP_ONE = "/urbanismo-tramites-requisitos-step-one";
const URBANISMO_TRAMITE_REQUISITOS_STEP_TWO = "/urbanismo-tramites-requisitos-step-two";
const URBANISMO_TRAMITE_ESTADOS_STEP_ONE = "/urbanismo-tramites-estados-step-one";
const URBANISMO_TRAMITE_ESTADOS_STEP_TWO = "/urbanismo-tramites-estados-step-two";
const URBANISMO_TRAMITE_ESTADOS_STEP_THREE = "/urbanismo-tramites-flujo-step-three";
const URBANISMO_TRAMITE_ESTADOS_TABLE = "/urbanismo-tramite-estados-table";
const URBANISMO_FLUJO_REQUISITOS_STEP_ONE = "/urbanismo-flujo-requisitos-step-one";
const URBANISMO_FLUJO_REQUISITOS_STEP_TWO = "/urbanismo-flujo-requisitos-step-two";
const URBANISMO_FLUJO_CHANGE_STATE_STEP_ONE = "/urbanismo-flujo-change-state-step-one";
const URBANISMO_FLUJO_CHANGE_STATE_STEP_TWO = "/urbanismo-flujo-change-state-step-two";
const URBANISMO_FLUJO_HISTORIAL_STEP_ONE = "/urbanismo-flujo-historial-step-one";
const URBANISMO_FLUJO_HISTORIAL_STEP_TWO = "/urbanismo-flujo-historial-step-two";
const URBANISMO_HISTORIAL_ESTADO_STEP_ONE = "/urbanismo-historial-estado-step-one";
const URBANISMO_HISTORIAL_ESTADO_STEP_TWO = "/urbanismo-historial-estado-step-two";
const URBANISMO_HISTORIAL_ESTADO_STEP_THREE = "/urbanismo-historial-estado-step-three";
const URBANISMO_FLUJO_BOARD_A = "/urbanismo-flujo-board-a";
const URBANISMO_FLUJO_BOARD_B = "/urbanismo-flujo-board-b";

// GAMES
const GAMES_TIC_TAC_TOE = "/games-tic-tac-toe";
const GAMES_TIC_TAC_TOE_PC = "/games-tic-tac-toe-pc";

// DATA STORAGE SYSTEM
const DATA_STORAGE_SCHEMA_FORM = "/datastorage-schema-form";
const DATA_STORAGE_SCHEMA_TABLE = "/datastorage-schema-table";
const DATA_STORAGE_FIELD_FORM = "/datastorage-field-form";
const DATA_STORAGE_FIELD_TABLE = "/datastorage-field-table";
const DATA_STORAGE_RECORD_FORM_STEP_ONE = "/datastorage-record-form-step-one";
const DATA_STORAGE_RECORD_FORM_STEP_TWO = "/datastorage-record-form-step-two";
const DATA_STORAGE_RECORD_TABLE_STEP_ONE = "/datastorage-record-table-step-one";
const DATA_STORAGE_RECORD_TABLE_STEP_TWO = "/datastorage-record-table-step-two";

// ESCUELA
const ESCUELA_CURSOS_FORM = "/casa-estudios-cursos-form";
const ESCUELA_CURSOS_TABLE = "/casa-estudios-cursos-table";
const ESCUELA_MATERIAS_FORM = "/casa-estudios-materias-form";
const ESCUELA_MATERIAS_TABLE = "/casa-estudios-materias-table";
const ESCUELA_NOTAS_FORM = "/casa-estudios-notas-form";
const ESCUELA_NOTAS_TABLE = "/casa-estudios-notas-table";
const ESCUELA_ASIGNAR_MATERIAS_STEP_ONE = "/casa-estudios-asignar-materias-step-1";
const ESCUELA_ASIGNAR_MATERIAS_STEP_TWO = "/casa-estudios-asignar-materias-step-2";
const ESCUELA_ASIGNAR_NOTAS_STEP_ONE = "/casa-estudios-asignar-notas-step-1";
const ESCUELA_ASIGNAR_NOTAS_STEP_TWO = "/casa-estudios-asignar-notas-step-2";
const ESCUELA_ESTUDIANTES_FORM = "/casa-estudios-estudiantes-form";
const ESCUELA_ESTUDIANTES_TABLE = "/casa-estudios-estudiantes-table";
const ESCUELA_DOCENTES_FORM = "/casa-estudios-docentes-form";
const ESCUELA_DOCENTES_TABLE = "/casa-estudios-docentes-table";
const ESCUELA_CALIFICACIONES_TABLE = "/casa-estudios-calificaciones-table";
const ESCUELA_ASIGNAR_CURSOS_A_ESTUDIANTE_STEP_ONE = "/casa-estudios-asignar-cursos-a-estudiante-step-1";
const ESCUELA_ASIGNAR_CURSOS_A_ESTUDIANTE_STEP_TWO = "/casa-estudios-asignar-cursos-a-estudiante-step-2";
const ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_ONE = "/casa-estudios-asignar-cursos-materias-a-docente-step-1";
const ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_TWO = "/casa-estudios-asignar-cursos-materias-a-docente-step-2";
const ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_THREE = "/casa-estudios-asignar-cursos-materias-a-docente-step-3";
const ESCUELA_ASIGNAR_CALIFICACIONES_STEP_ONE = "/casa-estudios-asignar-calificaciones-step-1";
const ESCUELA_ASIGNAR_CALIFICACIONES_STEP_ONE_TABLE = "/casa-estudios-asignar-calificaciones-step-1-table";
const ESCUELA_ASIGNAR_CALIFICACIONES_STEP_TWO = "/casa-estudios-asignar-calificaciones-step-2";
const ESCUELA_ASIGNAR_CALIFICACIONES_STEP_THREE = "/casa-estudios-asignar-calificaciones-step-3";
const ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FOUR = "/casa-estudios-asignar-calificaciones-step-4";
const ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FIVE = "/casa-estudios-asignar-calificaciones-step-5";
const ESCUELA_CALIFICACIONES_VIEW_ESTUDIANTE= "/escuela-calificaciones-view-estudiante";
const ESCUELA_ASIGNAR_CALIFICACIONES_DOCENTE = "/escuela-asignar-calificaciones-docente";
const ESCUELA_REPORTES_ESTUDIANTES_NOTA_FINAL_MATERIA = "/escuela-reportes-estudiantes-nota-final-materia";
const ESCUELA_REPORTES_DETALLE_ENCARGADO = "/escuela-reportes-detalle-encargado";
const ESCUELA_REPORTES_NOTA_FINAL_PARA_ESTUDIANTE = "/escuela-reportes-nota-final-para-estudiante";

const enumPaths = {
  DASHBOARD,
  THEME_FORM,
  LOGIN,
  LOGIN_TENANT,
  SYSTEM_PROPERTIES_TABLE,
  SYSTEM_PROPERTIES_FORM,
  TENANTS_FORM,
  TENANTS_TABLE_FILTER_SELECTION,
  TENANTS_TABLE_SELECTION_FOR_ROLE,
  TENANTS_TABLE_FILTER_BY_ROLE,
  TENANTS_TABLE_FILTER_EDIT_DELETE,
  TENANTS_TABLE_FILTER_BY_USER,
  IN_PROGRESS_PAGE,
  // USERS SYSTEM
  USERS_FORM,
  USERS_FORM_TENANT,
  USERS_TABLE,
  USERS_TABLE_FILTER,
  USERS_TABLE_FILTER_BY_ROLE,
  USERS_TABLE_FILTER_BY_TENANT,
  USERS_TABLE_FILTER_SELECTION,
  USERS_TABLE_FILTER_EDIT_DELETE,
  USERS_DETAILS,
  ROLES_TABLE,
  ROLES_TABLE_FILTER,
  ROLES_TABLE_FILTER_BY_USER,
  ROLES_TABLE_FILTER_BY_TENANT,
  ROLES_TABLE_SELECTION_FOR_TENANTS,
  ROLES_TABLE_SELECTION,
  USERS_TABLE_FILTER_ONY_TENANT_EDIT_DELETE,
  USERS_TABLE_FILTER_ONY_TENANT_DETAILS,
  USERS_ROLES_STEP_ONE,
  USERS_ROLES_STEP_TWO,
  ROLES_USERS_STEP_ONE,
  ROLES_USERS_STEP_TWO,
  TENANTS_USERS_ROLES_STEP_ONE,
  TENANTS_USERS_ROLES_STEP_TWO,
  TENANTS_USERS_ROLES_STEP_THREE,
  TENANTS_ROLES_USERS_STEP_ONE,
  TENANTS_ROLES_USERS_STEP_TWO,
  TENANTS_ROLES_USERS_THREE,
  USERS_TENANTS_ROLES_STEP_ONE,
  USERS_TENANTS_ROLES_STEP_TWO,
  USERS_TENANTS_ROLES_THREE,
  USERS_ROLES_TENANTS_STEP_ONE,
  USERS_ROLES_TENANTS_STEP_TWO,
  USERS_ROLES_TENANTS_THREE,
  ROLES_TENANTS_USERS_STEP_ONE,
  ROLES_TENANTS_USERS_STEP_TWO,
  ROLES_TENANTS_USERS_STEP_THREE,
  ROLES_USERS_TENANTS_STEP_ONE,
  ROLES_USERS_TENANTS_STEP_TWO,
  ROLES_USERS_TENANTS_STEP_THREE,
  // SALES SYSTEM
  SALES_PRODUCTS_FORM,
  SALES_PRODUCTS_TABLE_FILTER,
  SALES_GROUP_PRODUCTS_FORM,
  SALES_GROUP_PRODUCTS_TABLE_FILTER,
  SALES_GROUP_PRODUCTS_FOR_PRODUCTS_STEP1,
  SALES_GROUP_PRODUCTS_FOR_PRODUCTS_STEP2,
  SALES_CLIENT_FORM,
  SALES_CLIENT_TABLE_FILTER_TO_DETAILS,
  SALES_SELLER_FORM,
  SALES_SELLER_TABLE_FILTER_TO_DETAILS,
  SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS,
  SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_TODO,
  SALES_SALES_TABLE_FILTER_TO_EDIT_DELETE_DETAILS_IN_PROGRESS,
  SALES_REGISTRATION_STEP_ONE_SELLER,
  SALES_REGISTRATION_STEP_ONE_CASHIER,
  SALES_REGISTRATION_STEP_TWO,
  SALES_REPORT_QUANTITY,
  SALES_REPORT_QUANTITY_COMP,
  SALES_REPORT_QUANTITY_MONTH,
  SALES_REPORT_QUANTITY_MONTH_COMP,
  SALES_REPORT_REVENUE,
  SALES_REPORT_REVENUE_COMP,
  SALES_REPORT_REVENUE_MONTH,
  SALES_REPORT_REVENUE_MONTH_COMP,
  SALES_REPORT_PROFIT,
  SALES_REPORT_PROFIT_COMP,
  SALES_REPORT_PROFIT_MONTH,
  SALES_REPORT_PROFIT_MONTH_COMP,
  SALES_REPORT_QUANTITY_BY_PRODUCT,
  SALES_REPORT_QUANTITY_COMP_BY_PRODUCT,
  SALES_REPORT_QUANTITY_MONTH_BY_PRODUCT,
  SALES_REPORT_QUANTITY_MONTH_COMP_BY_PRODUCT,
  SALES_REPORT_REVENUE_BY_PRODUCT,
  SALES_REPORT_REVENUE_COMP_BY_PRODUCT,
  SALES_REPORT_REVENUE_MONTH_BY_PRODUCT,
  SALES_REPORT_REVENUE_MONTH_COMP_BY_PRODUCT,
  SALES_REPORT_PROFIT_BY_PRODUCT,
  SALES_REPORT_PROFIT_COMP_BY_PRODUCT,
  SALES_REPORT_PROFIT_MONTH_BY_PRODUCT,
  SALES_REPORT_PROFIT_MONTH_COMP_BY_PRODUCT,
  SALES_DAILY_REPORT,
  SALES_MONTHLY_REPORT,
  SALES_ANNUAL_REPORT,
  SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_QUANTITY_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_QUANTITY_MONTH_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_REVENUE_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_REVENUE_MONTH_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_PROFIT_BY_PRODUCT_COMP,
  SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT,
  SALES_PRODUCTS_TABLE_TO_PROFIT_MONTH_BY_PRODUCT_COMP,
  // MENSUALIDAD SYSTEM
  MENSUALIDAD_CUOTA_PAGO_FORM,
  MENSUALIDAD_CUOTA_PAGO_TABLE,
  MENSUALIDAD_ASSIGN_CUOTA_PAGO_STEP1,
  MENSUALIDAD_ASSIGN_CUOTA_PAGO_STEP2,
  MENSUALIDAD_PAGO_STEP1_ENCARGADO,
  MENSUALIDAD_PAGO_STEP1_ESTUDIANTE,
  MENSUALIDAD_PAGO_STEP2_ENCARGADO,
  MENSUALIDAD_PAGO_STEP3_ENCARGADO,
  MENSUALIDAD_PAGO_STEP2_ESTUDIANTE,
  MENSUALIDAD_TABLA_PAGOS_ESTUDIANTE,
  MENSUALIDAD_TABLA_PAGOS_ENCARGADO,
  MENSUALIDAD_HISTORY_SELECCIONAR_ESTUDIANTE_ENCANRGADO,
  MENSUALIDAD_HISTORY_SELECCIONAR_CURSO_ENCANRGADO,
  MENSUALIDAD_HISTORY_SELECCIONAR_CURSO_ESTUDIANTE,
  MENSUALIDAD_HISTORY_POR_ESTUDIANTE_CURSO,
  MENSUALIDAD_HISTORY_SELECCIONAR_SOLO_CURSO,
  MENSUALIDAD_HISTORY_POR_CURSO,
  // PAGOS UPEA SYSTEM
  PAGO_UPEA_COLEGIATURAS_MATRICULAS_FORM,
  PAGO_UPEA_COLEGIATURAS_MATRICULAS_TABLE,
  PAGO_UPEA_PROGRAMA_POSTGRADO_FORM,
  PAGO_UPEA_PROGRAMA_POSTGRADO_CURSO_FORM,
  PAGO_UPEA_PROGRAMA_POSTGRADO_CURSO_TABLE,
  PAGO_UPEA_PROGRAMA_POSTGRADO_TABLE,
  PAGO_UPEA_ASSIGN_COLEGIATURA_MATRICULA_STEP1,
  PAGO_UPEA_ASSIGN_COLEGIATURA_MATRICULA_STEP2,
  // HOSPITAL SYSTEM
  HOSPITAL_DOCTOR_USER_FORM,
  HOSPITAL_DOCTOR_USER_TABLE,
  HOSPITAL_PATIENT_USER_FORM,
  HOSPITAL_DOCTOR_USER_TABLE_TO_DETAILS,
  HOSPITAL_PATIENT_USER_TABLE_TO_DETAILS,
  // RESERVATION SYSTEM
  RESERVATION_RESOURCES_FORM,
  RESERVATION_RESOURCES_TABLE,
  RESERVATION_SCHEDULE_FORM,
  RESERVATION_SCHEDULE_TABLE,
  RESERVATION_INTERVAL_TIME_FORM,
  RESERVATION_INTERVAL_TIME_TABLE,
  RESERVATION_RESOURCES_TABLE_TO_ADD_SCHEDULES,
  RESERVATION_SCHEDULES_TABLE_TO_ADD_RESOURCES,
  RESERVATION_RESOURCES_SCHEDULES_BY_RESOURCE,
  RESERVATION_RESOURCES_SCHEDULES_BY_SCHEDULE,
  // ALCALDIA SYSTEM
  ALCALDIA_LOGIN_COLCAPIRHUA,
  ALCALDIA_RECURSOS_MUNICIPALES_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_VENTAS_TABLE,
  ALCALDIA_ACTIVIDADES_FORM,
  ALCALDIA_ACTIVIDADES_TABLE,
  ALCALDIA_ACTIVIDADES_JERARQUIA,
  ALCALDIA_ACTIVIDADES_TIMBRES,
  ALCALDIA_ACTIVIDADES_FOLDERS,
  ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_STEP_1,
  ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_STEP_1,
  ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_VENTAS_TABLE,
  ALCALDIA_RECURSOS_MUNICIPALES_TABLE,
  ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_ONE,
  ALCALDIA_RECURSOS_MUNICIPALES_GRUPO_STEP_TWO,
  ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_TABLE,
  ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_TABLE,
  ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_FOLDERS_VENTAS_TABLE,
  ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_FORM,
  ALCALDIA_RECURSOS_MUNICIPALES_TIMBRES_DESCONTINUADOS_TABLE,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_CORTO_DIARIO,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_TIMBRES,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_FOLDERS,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_TIMBRES_STEP1,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_TIMBRES_STEP2,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_DIARIO_INVENTARIO_FOLDERS_STEP1,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_ANUAL,
  ALCALDIA_RECURSOS_MUNICIPALES_REPORTE_MENSUAL,
  URBANISMO_TRAMITE_FORM,
  URBANISMO_TRAMITE_TABLE,
  REGULA_LOTES_FORM,
  REGULA_LOTES_EXTRACTO_BANCARIO_FORM,
  REGULA_LOTES_FORM_CLIENTE,
  REGULA_LOTES_FORM_CLIENTE_STEP_TWO,
  REGULA_LOTES_TABLE,
  URBANISMO_REQUISITOS_FORM,
  URBANISMO_REQUISITOS_TABLE,
  URBANISMO_ESTADOS_FORM,
  URBANISMO_ESTADOS_TABLE,
  URBANISMO_TRAMITE_REQUISITOS_STEP_ONE,
  URBANISMO_TRAMITE_REQUISITOS_STEP_TWO,
  URBANISMO_TRAMITE_ESTADOS_STEP_ONE,
  URBANISMO_TRAMITE_ESTADOS_STEP_TWO,
  URBANISMO_TRAMITE_ESTADOS_STEP_THREE,
  URBANISMO_TRAMITE_ESTADOS_TABLE,
  URBANISMO_FLUJO_REQUISITOS_STEP_ONE,
  URBANISMO_FLUJO_REQUISITOS_STEP_TWO,
  URBANISMO_FLUJO_CHANGE_STATE_STEP_ONE,
  URBANISMO_FLUJO_CHANGE_STATE_STEP_TWO,
  URBANISMO_FLUJO_HISTORIAL_STEP_ONE,
  URBANISMO_FLUJO_HISTORIAL_STEP_TWO,
  URBANISMO_HISTORIAL_ESTADO_STEP_ONE,
  URBANISMO_HISTORIAL_ESTADO_STEP_TWO,
  URBANISMO_HISTORIAL_ESTADO_STEP_THREE,
  URBANISMO_FLUJO_BOARD_A,
  URBANISMO_FLUJO_BOARD_B,
  // ESCUELA
  ESCUELA_CURSOS_FORM,
  ESCUELA_CURSOS_TABLE,
  ESCUELA_MATERIAS_FORM,
  ESCUELA_MATERIAS_TABLE,
  ESCUELA_NOTAS_FORM,
  ESCUELA_NOTAS_TABLE,
  ESCUELA_ASIGNAR_MATERIAS_STEP_ONE,
  ESCUELA_ASIGNAR_MATERIAS_STEP_TWO,
  ESCUELA_ASIGNAR_NOTAS_STEP_ONE,
  ESCUELA_ASIGNAR_NOTAS_STEP_TWO,
  ESCUELA_ESTUDIANTES_FORM,
  ESCUELA_ESTUDIANTES_TABLE,
  ESCUELA_DOCENTES_FORM,
  ESCUELA_DOCENTES_TABLE,
  ESCUELA_CALIFICACIONES_TABLE,
  ESCUELA_ASIGNAR_CURSOS_A_ESTUDIANTE_STEP_ONE,
  ESCUELA_ASIGNAR_CURSOS_A_ESTUDIANTE_STEP_TWO,
  ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_ONE,
  ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_TWO,
  ESCUELA_ASIGNAR_CURSOS_MATERIAS_A_DOCENTE_STEP_THREE,
  ESCUELA_ASIGNAR_CALIFICACIONES_STEP_ONE,
  ESCUELA_ASIGNAR_CALIFICACIONES_STEP_ONE_TABLE,
  ESCUELA_ASIGNAR_CALIFICACIONES_STEP_TWO,
  ESCUELA_ASIGNAR_CALIFICACIONES_STEP_THREE,
  ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FOUR,
  ESCUELA_ASIGNAR_CALIFICACIONES_STEP_FIVE,
  ESCUELA_ASIGNAR_CALIFICACIONES_DOCENTE,
  ESCUELA_CALIFICACIONES_VIEW_ESTUDIANTE,
  ESCUELA_REPORTES_ESTUDIANTES_NOTA_FINAL_MATERIA,
  ESCUELA_REPORTES_DETALLE_ENCARGADO,
  ESCUELA_REPORTES_NOTA_FINAL_PARA_ESTUDIANTE,
  // GAMES
  GAMES_TIC_TAC_TOE,
  GAMES_TIC_TAC_TOE_PC,
  // DATA STORAGE SYSTEM
  DATA_STORAGE_SCHEMA_FORM,
  DATA_STORAGE_SCHEMA_TABLE,
  DATA_STORAGE_FIELD_FORM,
  DATA_STORAGE_FIELD_TABLE,
  DATA_STORAGE_RECORD_FORM_STEP_ONE,
  DATA_STORAGE_RECORD_FORM_STEP_TWO,
  DATA_STORAGE_RECORD_TABLE_STEP_ONE,
  DATA_STORAGE_RECORD_TABLE_STEP_TWO
};

export default enumPaths;
