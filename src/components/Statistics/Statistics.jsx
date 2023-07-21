import { getRandomHexColor } from 'utils/randomColor';

export const Statistics = ({ data, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li
            style={{ background: getRandomHexColor() }}
            key={id}
            className="item"
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
