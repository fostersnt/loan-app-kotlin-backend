import { Link } from '@inertiajs/react';
import { SquarePen } from 'lucide-react'; // or use any icon library you prefer
import React from 'react';

const EditAction = ({ action, label }) => {
    return (
        <button onClick={action} style={{border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}>
            <SquarePen style={{}} />
        </button>
    );
};

export default EditAction;
