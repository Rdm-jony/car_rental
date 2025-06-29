
const DashboardHeading = ({title,description}:{title:string,description:string}) => {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground w-2/3">{description}</p>
        </div>
    );
};

export default DashboardHeading;