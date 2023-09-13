export const VisibilityControl = ({
  ischecked,
  setShowCompleted,
  cleanTask,
}) => {
  const handleDelete = () => {
    if (window.confirm("estas seguro de eliminar?")) {
      cleanTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          checked={ischecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label>Ver tareas completas</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger">
        Borrar
      </button>
    </div>
  );
};
