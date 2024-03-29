import './Progress.css';

export const Progress = ({ progress = 40 }: { progress: number }) => {
  return (
    <div className="progress">
      <div className="current" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
