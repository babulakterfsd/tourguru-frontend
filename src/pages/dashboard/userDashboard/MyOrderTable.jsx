/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { Button, Typography } from '@mui/material';
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
    { id: 'orderStatus', label: 'Status' },
    { id: 'TrxID', label: 'TrxID' },
    { id: 'action', label: 'Action' },
];

export default function MyOrderTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);
    const { mobile, user } = useAuth();
    const [status, setStatus] = useState(null);
    const [myOrders, setMyOrders] = useState([]);
    const getMyOrdersURL = `https://tourguru.onrender.com/myorders/${user?.email}`;

    useEffect(() => {
        const options = {
            url: getMyOrdersURL,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        };

        axios(options).then((response) => {
            setMyOrders(response.data);
        });
    }, [user?.email]);

    useEffect(() => {
        const row = [];
        myOrders?.forEach((singleOrder) => {
            row.push(singleOrder);
            <div key={Math.random() * 1500} />;
        });
        setRows(row);
    }, [myOrders, status]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleCancelOrder = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't get your money back!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No, go back!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://tourguru.onrender.com/allorder/${id}`;
                fetch(url, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Cancelled!', 'Your order has been deleted.', 'success');
                            const options = {
                                url: `https://tourguru.onrender.com/myorders/${user?.email}`,
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json;charset=UTF-8',
                                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                                },
                            };
                            axios(options).then((response) => {
                                setMyOrders(response.data);
                            });
                        }
                    });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('cancellation stopped!', 'Your Order is in the list :)', 'error');
            }
        });
    };

    return (
        <Paper
            sx={{
                width: '100%',
                overflow: 'hidden',
            }}
            data-aos="zoom-in"
            data-aos-duration="4500"
        >
            <Typography
                style={{
                    padding: mobile ? `10px` : `25px`,
                    color: `#E46F44`,
                    fontWeight: mobile ? `400` : `700`,
                }}
            >
                My Orders
            </Typography>
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
                                        {`${row?.selectedPackage?.location?.city}, ${row?.selectedPackage.location?.country}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `150px`, textAlign: `center` }}
                                    >
                                        {`${row?.selectedPackage?.duration}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `100px`, textAlign: `center` }}
                                    >
                                        {`$${row?.selectedPackage?.price}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `80px`, textAlign: `center` }}
                                    >
                                        {`${row?.status}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {`${row?.billingDetails?.trxid}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `120px`, textAlign: `center` }}
                                    >
                                        {row?.status === `pending` ? (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                style={{
                                                    textTransform: `none`,
                                                }}
                                                onClick={() => handleCancelOrder(row?._id)}
                                            >
                                                Cancel
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                style={{
                                                    textTransform: `none`,
                                                }}
                                                onClick={() => handleCancelOrder(row?._id)}
                                                disabled
                                            >
                                                Cancel
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
