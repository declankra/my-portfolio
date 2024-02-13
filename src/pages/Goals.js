import React, { useEffect, useState } from "react";

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
            console.log(data); // Check the fetched data
            setGoalMetrics(data);
        });
    }, []);

    return (
        <div>
            <h2>Goal Metrics</h2>
            {goalMetrics.length > 0 ? (
                goalMetrics.map((metric, index) => (
                    <div key={index}>
                        <h3>{metric.sheetName}</h3>
                        <pre>{JSON.stringify(metric.data, null, 2)}</pre>
                    </div>
                ))
            ) : (
                <p>No data found</p>
            )}
        </div>
    );
};

function Goals() {
    return (
        <main>
            <h1>Goals</h1>
            <GoalsComponent />
        </main>
    );
}

export default Goals;
