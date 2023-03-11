import PropTypes from 'prop-types';

export const Statistics = ({ title, statistics }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {statistics.map(statistics => (
          <li key={statistics.id}>
            <span>{statistics.label}</span>
            <span>{statistics.percentage}%</span>
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
