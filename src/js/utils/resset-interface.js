export function resetInterface({
  form,
  inputFrom,
  fieldsetInputs,
  fieldsetResults,
  values,
}) {
  values.innerHTML = "";
  form.reset();
  fieldsetResults.classList.add("disabled");
  fieldsetInputs.classList.remove("disabled");
  inputFrom.focus();
}
