import { useEffect, useState } from 'react';
import '../../../css/modals.css'
import '../../../css/forms.css'
import { useForm, usePage } from '@inertiajs/react';


export default function UserEditModal() {
  const [showModal, setShowModal] = useState(false);

  // if (!showModal) return null; //! Returns null is "show" is false

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const { props } = usePage();
  const { my_messages } = props;

  // console.log("GENERAL ERROR === " + JSON.stringify(props));

  const { data, setData, post, processing, progress, errors, setError, clearErrors, wasSuccessful } = useForm({
    name: '',
    email: '',
    msisdn: ''
  })

  const onValueChange = (e) => {
    clearErrors(e.target.name)
    // setError(e.target.name, '');
    setData(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/dashboard/users/create', {
      onSuccess: () => {
        setData({})
        console.log("WAS SUCCESSFUL === " + wasSuccessful);
        
        setShowModal(false)
      },
      onError: () => {
        console.log("INCOMING ERRORS");
      }
    });
  };

  // if (!showModal) return null;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Users List</h3>
        <button onClick={() => toggleModal()} style={{ backgroundColor: '#34495e', color: 'white', fontWeight: 'bold', width: '100px', padding: '10px', border: '0px', cursor: 'pointer' }}>Add
        </button>
      </div>
      {showModal &&
        <div className="modal-backdrop">
          <div className="modal-box">
            <div className="modal-header">
              <h5 className="modal-title">Users List</h5>
              <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${errors.name ? 'red-border' : ''}`}
                    value={data.name}
                    onChange={(e) => onValueChange(e)}
                  // required
                  />
                  {/* {errors.name && <span>{errors.name}</span>} */}
                  <span className='error-message-style'>{errors?.name}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    // type="email"
                    id="email"
                    name="email"
                    className={`form-control ${errors.email ? 'red-border' : ''}`}
                    value={data.email}
                    onChange={(e) => onValueChange(e)}
                  // required
                  />
                  {/* {errors.email && <div>{errors.email}</div>} */}
                  <span className='error-message-style'>{errors?.email}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="msisdn" className="form-label">MSISDN</label>
                  <input
                    type="tel"
                    id="msisdn"
                    name="msisdn"
                    className={`form-control ${errors.msisdn ? 'red-border' : ''}`}
                    value={data.msisdn}
                    onChange={(e) => onValueChange(e)}
                    // required
                    // pattern="[0-9]{10,15}"
                    placeholder="e.g. 233501234567"
                  />
                  {/* {errors.msisdn && <div>{errors.msisdn}</div>} */}
                  <span className='error-message-style'>{errors?.msisdn}</span>
                </div>

                <div className="form-group submit_btn">
                  <button type="submit" className="btn" disabled={processing}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
}
