import { PageProps } from "@/types/global";
import { ReactNode } from "react";
import Header from "@/Layouts/Components/Header";
import Footer from "@/Layouts/Components/Footer";

export const Main = ({ auth, children }: PageProps<{ children: ReactNode }>) => {
    return (
        <>
            <Header auth={ auth }/>
            { children }
            <Footer/>
        </>
    )
}

export default Main;
