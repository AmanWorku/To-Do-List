/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

let listArr; let index; let
  editTask;

window.editTask = (index) => {
  const saveBtn = document.getElementById(`edit${index}`);
  const editBtn = document.getElementById(`save${index}`);

  saveBtn.style.display = 'none';
  editBtn.style.display = 'block';

  const specTask = document.getElementById(`task${index}`);

  specTask.removeAttribute('readonly');
  const { length } = specTask.value;
  specTask.setSelectionRange(length, length);
  specTask.focus();

  return specTask;
};

export default { editTask };