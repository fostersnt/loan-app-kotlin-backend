import { Trash2 } from 'lucide-react'; // or use any icon library you prefer

const DeleteAction = ({ action, label }) => {
    return (
        <button onClick={action} style={{border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}>
            <Trash2 style={{}} />
        </button>
    );
};

export default DeleteAction;
