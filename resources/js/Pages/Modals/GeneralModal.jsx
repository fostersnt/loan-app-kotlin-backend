import '../../../css/modals.css'

export default function GeneralModal({ show, onClose, children, title }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
