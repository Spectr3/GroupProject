import React from 'react'
import { Container } from "react-bootstrap";

export default function CenteredContainer({ children }) {
    return (
        <Container className="align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div>
                {children}
            </div>
        </Container>
    )
}