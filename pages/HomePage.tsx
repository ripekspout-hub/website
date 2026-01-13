import { Hero } from "../components/Hero";
import { Solutions } from "../components/Solutions";
import { Contact } from "../components/Contact";
import { Products } from "../components/Products";

export function HomePage() {

    return (
    <div className="min-h-screen bg-white">
        <Hero />
        <Solutions />
        <Products />
        <Contact />
    </div>
    );
}

export default HomePage;