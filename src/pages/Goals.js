import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// Define the URL of your Google Cloud Function
const cloudFunctionUrl = "https://us-central1-my-portfolio-405919.cloudfunctions.net/getGoalSheetData";

const getGoalMetrics = async () => {
    try {
        const response = await fetch(cloudFunctionUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching goal metrics:", error);
        return [];
    }
};

const GoalsComponent = () => {
    const [goalMetrics, setGoalMetrics] = useState([]);

    useEffect(() => {
        getGoalMetrics().then(data => {
            setGoalMetrics(data);
        });
    }, []);

    // Predefined goal descriptions
    const goalDescriptions = [
        "Operate within “feel best” range for 80% of days",
        "Block out 4-6 hours per week to build something I enjoy",
        "Read 6-12 books",
    ];

    return (
        <TableContainer component={Paper}style={{ marginBottom: 20, marginTop: 20 }}>
            <Table aria-label="goal metrics table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold' }}>Goal Description</TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>Current #</TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>Goal #</TableCell>
                        <TableCell align="right" style={{ fontWeight: 'bold' }}>Progress %</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {goalMetrics.map((metric, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {goalDescriptions[index]}
                            </TableCell>
                            <TableCell align="right">{metric.data ? metric.data[1][0] : 'N/A'}</TableCell> {/* Current # */}
                            <TableCell align="right">{metric.data ? metric.data[1][1] : 'N/A'}</TableCell> {/* Goal # */}
                            <TableCell align="right">{metric.data ? metric.data[1][2] : 'N/A'}</TableCell> {/* Progress % */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};



function Goals() {
    return (
        <main>
            <h1>Goals</h1>
            <GoalsComponent />
            <p style={{ marginTop: '20px' }}>
                To see how this table works, go to the <a href="https://declankramper.notion.site/Visual-Goal-Tracker-e93fdab0cad1446f896983068aa90a4f?pvs=4" target="_blank" rel="noopener noreferrer">Notion build page</a>.
            </p>
        </main>
    );
}

export default Goals;
