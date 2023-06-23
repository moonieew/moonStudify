import React, { FC } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
    showFooter?: boolean;
}

const Layout: FC<Props> = ({ children, showFooter = true }) => {
    return (
        <>
            <Head>
                <title>
                    Studify
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <Header />
            <Box bg="#fff">{children}</Box>
            {showFooter && <Footer />}
        </>
    );
};

export default Layout;
