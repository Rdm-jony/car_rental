
const Heading = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-semibold my-2">{title}</h1>
            <p className="w-3/5 mx-auto">{description}</p>
        </div>
    );
};

export default Heading;