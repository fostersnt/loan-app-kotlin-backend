import '../../../css/modals.css'

export default function UserEditModal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="modal-header">
          <h5 className="modal-title">Modal Title</h5>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
