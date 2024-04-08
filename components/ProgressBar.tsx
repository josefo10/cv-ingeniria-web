interface ProgressBarProps {
    Title: String;
    Percentage: String
}

const ProgressBar = ({ Title, Percentage }: ProgressBarProps) => {
    return (
        <div className="mb-4">
            <div className="flex flex-row justify-between">
                <p className="text-hv-text-gray mb-2 text-sm font-medium">{Title}</p>
                <p className="text-hv-text-gray mb-2 text-sm font-medium">{Percentage}</p>
            </div>

            <div className=" flex items-center h-2 border-hv-yellow border-[1px] rounded-full px-[3px] py-[5px]">
                <div
                    className="h-1 rounded-full bg-hv-yellow"
                    style={{ width: `${Percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export { ProgressBar }