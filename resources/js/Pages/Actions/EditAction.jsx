import { SquarePen } from 'lucide-react'; // or use any icon library you prefer

const EditAction = ({ action, label }) => {
    return (
        <button onClick={action} style={{border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}>
            <SquarePen strokeWidth={1} color='#34495e' />
        </button>
    );
};

export default EditAction;
