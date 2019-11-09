const carSizes = {
  small: { value: 'small', label: 'Pequeño' },
  medium: { value: 'medium', label: 'Mediano' },
  large: { value: 'large', label: 'Grande' },
};

const carSizeLabel = (key) => carSizes[key].label;

const banks = {
  pichincha: { value: 'pichincha', label: 'Pichincha' },
  guayaquil: { value: 'guayaquil', label: 'Guayaquil' },
  produbanco: { value: 'produbanco', label: 'Produbanco' },
  otro: { value: 'otro', label: 'Otro' },
};

const assignmentSortByUser = (a, b) => {
  if (a.user.name < b.user.name) {
    return -1;
  }
  if (a.user.name > b.user.name) {
    return 1;
  }
  return 0;
};

const sortAssignmentsByUser = (assignmentsList) => assignmentsList.sort(assignmentSortByUser);

const userSort = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const monthNames = [
  'Enero', 'Febrero', 'Marzo',
  'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre',
  'Noviembre', 'Diciembre',
];

const constants = {
  carSizes,
  banks,
  monthNames,
  userSort,
  carSizeLabel,
  sortAssignmentsByUser,
  assignmentSortByUser,
};

export default constants;
