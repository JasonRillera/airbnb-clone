import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
    return (
        <div>
            <Header />

            <main className="flex">
                <section>
                    <p className="text-xs ">300+ Stays for 6 Guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in SF</h1>
                </section>
                
                <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type of place</p>
                    <p className="button">Price</p>
                    <p className="button">Rooms and Beds</p>
                    <p className="button">More filters</p>
                </div>

            </main>



            <Footer />
        </div>
    )
}

export default Search
