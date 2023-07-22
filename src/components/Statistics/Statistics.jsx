import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/randomColor';
import css from './Statistics.module.css';

export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {data.map(({ id, label, percentage }) => (
          <li
            style={{ background: getRandomHexColor() }}
            key={id}
            className={css.item}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
