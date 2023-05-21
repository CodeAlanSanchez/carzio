import { PageProps } from "@/types/global";
import Main from "@/Layouts/Main";

import Hero from "@/Components/Home/Hero";
import About from "@/Components/Home/About";
import Services from "@/Components/Home/Services";
import Testimonials from '@/Components/Home/Testimonials'

export const Home = ({ auth }: PageProps) => {
    return (
        <Main auth={ auth }>
            <Hero/>
            <Services/>
            <About/>
            <Testimonials/>
        </Main>
    )
}

export default Home;
