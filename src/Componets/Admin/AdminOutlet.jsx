import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminOutlet() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default AdminOutlet;
