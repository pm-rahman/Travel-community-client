import Banner from "../Banner/Banner";
import Communities from "../Communities/Communities";

const Home = () => {
    return (
        <div className="flex flex-col gap-14">
            <Banner/>
            <Communities/>
        </div>
    );
};

export default Home;