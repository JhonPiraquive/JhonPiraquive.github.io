type SkillProgressBarProps = {
  name: string;
  percent: number;
};

export function SkillProgressBar({ name, percent }: SkillProgressBarProps) {
  return (
    <div className="clay-progress">
      <div className="clay-progress__header">
        <span className="clay-progress__name">{name}</span>
        <span className="clay-progress__value">{percent}%</span>
      </div>
      <div className="clay-progress__track">
        <div
          className="clay-progress__bar"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
