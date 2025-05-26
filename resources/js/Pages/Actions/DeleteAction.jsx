import { Trash2 } from 'lucide-react'; // or use any icon library you prefer

const DeleteAction = ({ action, label }) => {
    return (
        <button onClick={action} style={{border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}>
            <Trash2 strokeWidth={1} color='#FF6384' />
        </button>
    );
};

export default DeleteAction;
