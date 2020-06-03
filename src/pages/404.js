import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLayout from "../components/PageLayout";
import "./about.css";

const ErrorPage = () => (
    <div>
        <Navbar />
        <PageLayout title="404" width={30}>
            <div>
            <p>Oops! Page not found :(</p>
            <p></p>
            <p></p>
            </div>
        </PageLayout>
        <Footer />
    </div>
);

export default ErrorPage;