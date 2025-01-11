import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const initialRows = [
    { id: 1, Dependency: 'Dep1', Detail: 'Detail1', Team: 'Team1', Status: 'Started', ETA: '2025-01-20', IndiaPOC: 'IndiaPOC1', USPOC: 'USPOC1', Impediments: 'None' },
    { id: 2, Dependency: 'Dep2', Detail: 'Detail2', Team: 'Team2', Status: 'Inprogress', ETA: '2025-02-15', IndiaPOC: 'IndiaPOC2', USPOC: 'USPOC2', Impediments: 'None' },
];

const CustomDataGrid = () => {
    const [rows, setRows] = useState(initialRows);
    const [open, setOpen] = useState(false);
    const [currentRow, setCurrentRow] = useState({ id: '', Dependency: '', Detail: '', Team: '', Status: '', ETA: '', IndiaPOC: '', USPOC: '', Impediments: '' });

    const handleOpen = (row) => {
        setCurrentRow(row);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentRow({ id: '', Dependency: '', Detail: '', Team: '', Status: '', ETA: '', IndiaPOC: '', USPOC: '', Impediments: '' });
    };

    const handleSave = () => {
        if (currentRow.id) {
            setRows(rows.map(row => (row.id === currentRow.id ? currentRow : row)));
        } else {
            setCurrentRow({ ...currentRow, id: rows.length + 1 });
            setRows([...rows, { ...currentRow, id: rows.length + 1 }]);
        }
        handleClose();
    };

    const handleDelete = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    const columns = [
        { field: 'Dependency', headerName: 'Dependency', width: 150 },
        { field: 'Detail', headerName: 'Detail', width: 150 },
        { field: 'Team', headerName: 'Team', width: 150 },
        { field: 'Status', headerName: 'Status', width: 150 },
        { field: 'ETA', headerName: 'ETA', width: 150 },
        { field: 'IndiaPOC', headerName: 'India POC', width: 150 },
        { field: 'USPOC', headerName: 'US POC', width: 150 },
        { field: 'Impediments', headerName: 'Impediments', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <Box>
                    <Button onClick={() => handleOpen(params.row)}>Edit</Button>
                    <Button onClick={() => handleDelete(params.row.id)}>Delete</Button>
                </Box>
            ),
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <Button onClick={() => handleOpen({ id: '', Dependency: '', Detail: '', Team: '', Status: '', ETA: '', IndiaPOC: '', USPOC: '', Impediments: '' })}>Add</Button>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{currentRow.id ? 'Edit Row' : 'Add Row'}</DialogTitle>
                <DialogContent>
                    {Object.keys(currentRow).map((key) => (
                        key !== 'id' && (
                            <TextField
                                key={key}
                                margin="dense"
                                label={key}
                                type="text"
                                fullWidth
                                value={currentRow[key]}
                                onChange={(e) => setCurrentRow({ ...currentRow, [key]: e.target.value })}
                            />
                        )
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>{currentRow.id ? 'Save' : 'Add'}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CustomDataGrid;