import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        // Update state to indicate an error has occurred
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error details (optional: can log to a service like Sentry)
        const data = {
            errorMessage: error.toString(),
            errorInfo: errorInfo.componentStack,
        };

        fetch("/api/errors/error_boundary", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {response.json()})
            .then(result => {
                console.log("Error logged successfully:", result);
            })
            .catch(err => {
                console.error("Failed to log error:", err);
            });

        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Display fallback UI when there's an error
            return (
                <div style={{ padding: '20px', background: '#f4f4f4', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Something went wrong.</h2>
                    <p>{this.state.errorMessage}</p>
                    {/* You can provide a link to the homepage or retry */}
                    <a href="/">Go back to Home</a>
                </div>
            );
        }

        // If no error, render the children (normal flow)
        return this.props.children;
    }
}

export default ErrorBoundary;
