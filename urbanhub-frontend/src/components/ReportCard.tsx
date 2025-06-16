

interface ReportCardProps {
    title: string;
    description: string;
}

const ReportCard = ({ title, description }: ReportCardProps) => (
    <div className="border p-4 rounded shadow-md bg-white">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p>{description}</p>
    </div>
);

export default ReportCard;