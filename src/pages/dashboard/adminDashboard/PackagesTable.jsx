/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { Box, Button, Container, Grid, Skeleton, Typography } from '@mui/material';
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
import ScrollToTop from '../../../components/ScrollToTop';
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

    const getAllPackagesURL = `http://localhost:5000/packages`;

    useEffect(() => {
        axios.get(getAllPackagesURL).then((result) => setAllPackages(result?.data));
    }, []);

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
        if (allPackages?.length <= 19) {
            Swal.fire("Sorry, you can't delete a package when total package is below 19");
        } else {
            const url = `http://localhost:5000/packages/${id}`;

            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.deletedCount > 0) {
                        Swal.fire('Successfully Deleted !');
                        axios.get(getAllPackagesURL).then((result) => setAllPackages(result?.data));
                    }
                });
        }
    };

    if (allPackages?.length === 0) {
        return (
            <Container>
                <Box
                    style={{
                        height: `100vh`,
                        display: `flex`,
                        justifyContent: `center`,
                        alignItems: `center`,
                        margin: mobile ? `100px 0px` : `180px 15px`,
                    }}
                >
                    {mobile ? (
                        <>
                            <ScrollToTop />
                            <Grid container spacing={3}>
                                {Array.from(Array(3)).map((packages, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Skeleton
                                            variant="rectangular"
                                            style={{
                                                width: `100%`,
                                                height: mobile ? `150px` : `210px`,
                                            }}
                                        />
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    ) : (
                        <Grid container spacing={5}>
                            {Array.from(Array(9)).map((packages, index) => (
                                <Grid item md={6} lg={4} key={index}>
                                    <Skeleton
                                        variant="rectangular"
                                        style={{
                                            width: `100%`,
                                            height: mobile ? `150px` : `210px`,
                                        }}
                                    />
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            </Container>
        );
    }

    return (
        <Paper
            sx={{
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <Typography
                style={{
                    padding: mobile ? `10px` : `25px`,
                    color: `#E46F44`,
                    fontWeight: mobile ? `400` : `700`,
                }}
            >
                All Running Packages
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
