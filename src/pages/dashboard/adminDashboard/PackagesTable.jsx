/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { Box, Button, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const columns = [
    { id: 'destination', label: 'Destination' },
    { id: 'duration', label: 'Duration' },
    { id: 'price', label: 'Price' },
    { id: 'action', label: 'Action' },
];

export default function StickyHeadTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);
    const { mobile, user } = useAuth();
    const [status, setStatus] = useState(null);
    const [allPackages, setAllPackages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllPackagesURL = `https://tourguru-backend.vercel.app/packages`;

    useEffect(() => {
        axios.get(getAllPackagesURL).then((result) => setAllPackages(result?.data));
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const url = `https://tourguru-backend.vercel.app/packages?location=${searchTerm}`;
            axios.get(url).then((result) => {
                setAllPackages(result?.data);
            });
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    useEffect(() => {
        const row = [];
        allPackages?.forEach((singleUser) => {
            row.push(singleUser);
            <div key={Math.random() * 1500} />;
        });
        setRows(row);
    }, [allPackages, status]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDeletePackage = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This package will be deleted permanently!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                if (allPackages?.length <= 19) {
                    Swal.fire(
                        'Failed',
                        "Sorry, you can't delete a package when total package is below 19",
                        'error'
                    );
                } else {
                    const url = `https://tourguru-backend.vercel.app/packages/${id}`;

                    fetch(url, {
                        method: 'DELETE',
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data?.deletedCount > 0) {
                                Swal.fire(
                                    'Success',
                                    'The package has been deleted successfully',
                                    'success'
                                );
                                axios
                                    .get(getAllPackagesURL)
                                    .then((res) => setAllPackages(res?.data));
                            }
                        });
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'The package has not been deleted :)', 'error');
            }
        });
    };

    return (
        <Paper
            sx={{
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: mobile ? 'column' : 'row',
                }}
            >
                <Typography
                    style={{
                        padding: mobile ? `10px` : `25px`,
                        marginBottom: mobile ? `10px` : `0px`,
                        color: `#E46F44`,
                        fontWeight: mobile ? `400` : `700`,
                    }}
                >
                    All Available Packages
                </Typography>
                <TextField
                    id="standard-basic"
                    label="Search Location by City"
                    variant="standard"
                    style={{ color: '#f3680b', marginRight: '8px' }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Box>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={Math.random() * 1500}
                                    style={{
                                        textAlign: `center`,
                                        fontWeight: mobile ? `500` : `700`,
                                        color: `#f3680b`,
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow key={Math.random() * 1500} hover>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {`${row?.location?.city}, ${row?.location?.country}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {row?.duration}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {`$${row?.price}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        <Button
                                            variant="contained"
                                            size="small"
                                            style={{
                                                textTransform: `none`,
                                            }}
                                            onClick={() => handleDeletePackage(row?._id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
