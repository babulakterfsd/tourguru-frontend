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
    { id: 'orderedBy', label: 'OrderedBy' },
    { id: 'email', label: 'email' },
    { id: 'orderStatus', label: 'Order Status' },
    { id: 'action', label: 'Action' },
];

export default function StickyHeadTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);
    const { mobile, user } = useAuth();
    const [status, setStatus] = useState(null);
    const [allOrders, setAllOrders] = useState([]);

    const getAllOrdersURL = `http://localhost:5000/allorder`;

    useEffect(() => {
        axios.get(getAllOrdersURL).then((result) => setAllOrders(result?.data));
    }, []);

    useEffect(() => {
        const row = [];
        allOrders?.forEach((singleOrder) => {
            row.push(singleOrder);
            <div key={Math.random() * 1500} />;
        });
        setRows(row);
    }, [allOrders, status]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDeleteOrder = (id) => {
        const url = `http://localhost:5000/allorder/${id}`;

        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    Swal.fire('Order Deleted Successfully !');
                    axios.get(getAllOrdersURL).then((result) => setAllOrders(result?.data));
                }
            });
    };

    const handleOrderStatus = (id) => {
        const url = `http://localhost:5000/allorder/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Tour package approved !');
                    axios.get(getAllOrdersURL).then((result) => setAllOrders(result?.data));
                }
            });
    };

    return (
        <Paper
            sx={{
                width: '100%',
                overflow: 'hidden',
            }}
            data-aos="fade-up-left"
            data-aos-duration="1500"
        >
            <Typography
                style={{
                    padding: mobile ? `10px` : `25px`,
                    color: `#E46F44`,
                    fontWeight: mobile ? `400` : `700`,
                }}
            >
                All Orders
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
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {`${row?.billingDetails?.name}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {`${row?.email}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {`${row?.status}`}
                                    </TableCell>
                                    <TableCell
                                        role="checkbox"
                                        tabIndex={-1}
                                        style={{ minWidth: `170px`, textAlign: `center` }}
                                    >
                                        {row?.status === 'approved' ? (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                style={{
                                                    textTransform: `none`,
                                                    marginRight: `4px`,
                                                }}
                                                onClick={() => handleOrderStatus(row?._id)}
                                                disabled
                                            >
                                                Approve
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                size="small"
                                                style={{
                                                    textTransform: `none`,
                                                    marginRight: `4px`,
                                                }}
                                                onClick={() => handleOrderStatus(row?._id)}
                                            >
                                                Approve
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            size="small"
                                            style={{
                                                textTransform: `none`,
                                            }}
                                            onClick={() => handleDeleteOrder(row?._id)}
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
