function Person({ id, name, dob, photo, children, onEdit, onDelete }) {
  return (
    <div className="person-card">
      <img src={photo} alt={${name}'s photo} />
      <div className="info">
        <h3>{name}</h3>
        <p>{dob}</p>
        <div className="actions">
          <button onClick={() => onEdit(id)}>✏️</button>
          <button onClick={() => onDelete(id)}>🗑️</button>
        </div>
      </div>
      <div className="children">
        {children?.map(child => (
          <Person key={child.id} {...child} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
