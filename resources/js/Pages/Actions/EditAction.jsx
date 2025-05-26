import { Link } from '@inertiajs/react';
import { SquarePen } from 'lucide-react'; // or use any icon library you prefer
import React from 'react';

const EditAction = ({ onEdit, label }) => {
    return (
        <Link href='/dashboard' style={{}}>
            <SquarePen style={{}} />
        </Link>
    );
};

export default EditAction;
