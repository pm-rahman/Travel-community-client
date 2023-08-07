import TextModifier from "react-text-modifier";

const SingleBanner = ({ slider={} }) => {
    const { bg, title } = slider;
    console.log(slider);
    return (
        <>
            <div
                className="banner relative z-0"
            >
                <img className="absolute top-0 -z-10" src={bg} alt="" />
                <div className="h-full w-full flex justify-center items-center" style={{ background: "rgba(69,69,69,.4)" }}>
                    {/* <h1 >{title}</h1> */}
                    <TextModifier
                        text={title}
                        as="h1"
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
                        highlight={["Travel","Community!"]}
                        highlightClassName="text-4xl md:text-5xl lg:text-6xl font-semibold text-orange-500"
    />
                </div>
            </div>
        </>
    );
};

export default SingleBanner;