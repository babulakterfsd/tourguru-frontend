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
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'role', label: 'Role' },
    { id: 'action', label: 'Action' },
];

export default function StickyHeadTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);
    const { mobile, user } = useAuth();
    const [status, setStatus] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getAllUsersURL = `https://rocky-inlet-29740.herokuapp.com/users`;

    useEffect(() => {
        axios.get(getAllUsersURL).then((result) => setAllUsers(result?.data));
    }, [getAllUsersURL]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const url = `https://rocky-inlet-29740.herokuapp.com/users?name=${searchTerm}`;
            axios.get(url).then((result) => {
                setAllUsers(result?.data);
            });
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    useEffect(() => {
        const row = [];
        allUsers?.forEach((singleUser) => {
            row.push(singleUser);
            <div key={Math.random() * 1500} />;
        });
        setRows(row);
    }, [allUsers, status]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This user will be an admin!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Make Admin!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://rocky-inlet-29740.herokuapp.com/users/${id}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(allUsers),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount > 0) {
                            setStatus(!status);
                            Swal.fire(
                                'Congratulations!',
                                'The user has been promoted to admin',
                                'success'
                            );
                            axios.get(getAllUsersURL).then((res) => setAllUsers(res?.data));
                        } else {
                            setStatus(false);
                        }
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'The user has not been promoted :)', 'error');
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
                    justifyContent: mobile ? 'start' : 'space-between',
                    alignItems: 'center',
                    flexDirection: mobile ? 'column' : 'row',
                }}
            >
                <Typography
                    style={{
                        padding: mobile ? `10px 0px` : `25px`,
                        marginBottom: mobile ? `10px` : `0px`,
                        color: `#E46F44`,
                        fontWeight: mobile ? `500` : `700`,
                    }}
                >
                    All Registered Users
                </Typography>
                <TextField
                    id="standard-basic"
                    label="Search User by Name"
                    variant="standard"
                    style={{
                        color: '#f3680b',
                        marginRight: '8px',
                    }}
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
                                <TableRow key={row?.email} hover>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {row?.displayName}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {row?.email}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {row?.role === `admin` ? `admin` : `user`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{
                                            minWidth: `170px`,
                                            textAlign: `center`,
                                            display: `flex`,
                                            justifyContent: `center`,
                                            alignItems: `center`,
                                        }}
                                    >
                                        {row?.role === `admin` ? (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                disabled
                                                title="already admin"
                                                style={{
                                                    textTransform: `none`,
                                                    cursor: `not-allowed`,
                                                }}
                                            >
                                                Make Admin
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                style={{ textTransform: `none` }}
                                                onClick={() => handleMakeAdmin(row?._id)}
                                            >
                                                Make Admin
                                            </Button>
                                        )}
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
