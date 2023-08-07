import Banner from "../Banner/Banner";
import Communities from "../Communities/Communities";
import Posts from "../Posts/Posts";

const Home = () => {
    return (
        <div className="flex flex-col gap-14">
            <Banner/>
            <Posts/>
            <Communities/>
        </div>
    );
};

export default Home;