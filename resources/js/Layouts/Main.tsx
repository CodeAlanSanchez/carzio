import { PageProps } from "@/types/global";
import { ReactNode } from "react";

export const Main = ({ auth, children }: PageProps<{ children: ReactNode }>) => {
    return (
        <>
            { children }
        </>
    )
}

export default Main;
