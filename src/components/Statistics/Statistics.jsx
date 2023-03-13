import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.statistics__title}>{title}</h2>
      <ul className={css.statistics__area}>
        {statistics.map((statistics, index) => (
          <li
            className={css['statistics__box' + (index % 5)]}
            key={statistics.id}
          >
            <span className={css.statistics__label}>{statistics.label}</span>
            <span className={css.statistics__percentage}>
              {statistics.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
