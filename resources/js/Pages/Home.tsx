import { PageProps } from "@/types/global";
import Main from "@/Layouts/Main";

import Hero from "@/Components/Home/Hero";
import About from "@/Components/Home/About";
import Services from "@/Components/Home/Services";
import Testimonials from '@/Components/Home/Testimonials'
import Contact from "@/Components/Home/Contact";
import { Head } from "@inertiajs/react";

export const Home = ({ auth }: PageProps) => {
    return (
        <Main auth={ auth }>
            <Head title="Home"/>
            <Hero/>
            <Services/>
            <About/>
            <Testimonials/>
            <Contact/>
        </Main>
    )
}

export default Home;
