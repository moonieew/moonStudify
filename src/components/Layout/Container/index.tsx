import React, { FC, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
    showFooter?: boolean;
}

const PAGE_SHOW_HEADER = [
    '/',
    '/home'
];

const Layout: FC<Props> = ({ children, showFooter = true }) => {
    const router = useRouter();
    const [isShowHeader, setShowHeader] = useState(true);

    useEffect(() => {
        if (PAGE_SHOW_HEADER.includes(router.pathname)) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, [router.pathname]);
    return (
        <>
            <Head>
                <title>
                    Studify
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            {isShowHeader && <Header />}
            <Box bg="#fff">{children}</Box>
            {showFooter && <Footer />}
        </>
    );
};

export default Layout;
