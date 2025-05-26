import { Link } from '@inertiajs/react';
import { Trash2 } from 'lucide-react'; // or use any icon library you prefer
import React from 'react';

const DeleteAction = ({ onEdit, label }) => {
    return (
        <Link href='/dashboard' style={{}}>
            <Trash2 style={{}} />
        </Link>
    );
};

export default DeleteAction;
