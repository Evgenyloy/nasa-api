import { useGetAsteroidQuery } from '../../api/apiSlice';
import { useAppSelector } from '../../hooks/hooks';
import './asteroid.scss';

function asteroid() {
  const asteroidId = useAppSelector((state) => state.asteroidsSlice.id);
  const {
    data: asteroid,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetAsteroidQuery('2377097');
  console.log(asteroid);

  return (
    <div className="asteroid">
      <div className="asteroid__common-data">
        <h2 className="asteroid__title">{asteroid?.name}</h2>
        <span className="asteroid__text">
          Звездная величина: {asteroid?.absolute_magnitude_h} H
        </span>
        <span className="asteroid__text">
          Обозначение: {asteroid?.designation}
        </span>
        <span className="asteroid__text">
          Потенциально опасный:{' '}
          {asteroid?.is_potentially_hazardous_asteroid ? 'опасный' : 'нет'}
        </span>

        <span className="asteroid__text"></span>
        <span className="asteroid__text"></span>
      </div>
      <div className="asteroid__orbital-data">
        {/* <span className="asteroid__text">
          расстояние афелия: {asteroid?.orbital_data.aphelion_distance}
        </span>
        <span className="asteroid__text">
          долгота восходящего узла:{' '}
          {asteroid?.orbital_data?.ascending_node_longitude}
        </span>
        <span className="asteroid__text">
          эксцентриситет: {asteroid?.orbital_data?.eccentricity}
        </span> */}
        <span className="asteroid__text">
          Equinox: {asteroid?.orbital_data?.equinox}
        </span>
        <span className="asteroid__text">
          Дата первого наблюдения:{' '}
          {asteroid?.orbital_data?.first_observation_date}
        </span>
        <span className="asteroid__text">
          Дата последнего наблюдения:{' '}
          {asteroid?.orbital_data?.last_observation_date}
        </span>
        <span className="asteroid__text">
          Количество наблюдений: {asteroid?.orbital_data?.observations_used}
        </span>
        <span className="asteroid__text">
          Описание класса орбиты:{' '}
          {asteroid?.orbital_data?.orbit_class?.orbit_class_description}
        </span>
        <span className="asteroid__text">
          Диапазон класса орбиты:{' '}
          {asteroid?.orbital_data?.orbit_class?.orbit_class_range}
        </span>
        <span className="asteroid__text">
          Тип класса орбиты:{' '}
          {asteroid?.orbital_data?.orbit_class?.orbit_class_type}
        </span>
        <span className="asteroid__text">
          Дата определения орбиты:{' '}
          {asteroid?.orbital_data?.orbit_determination_date}
        </span>
        <a className="asteroid__text" href={asteroid?.nasa_jpl_url}>
          Дополнительная информация: <span>{asteroid?.nasa_jpl_url}</span>
        </a>
      </div>
      <div className="asteroid__approach">
        <div className="asteroid__approach-title">
          Данные о сближении с Землей
        </div>
        <div className="asteroid__approach-inner">
          <span>Дата сближения</span> <span>Расстояние (km)</span>{' '}
          <span>Скорость (km/s)</span>
        </div>

        {asteroid?.close_approach_data?.map((item: any) => {
          return (
            <div className="asteroid__approach-item">
              <span> {item.close_approach_date}</span>{' '}
              <span>
                {' '}
                {parseFloat(item?.miss_distance?.kilometers).toFixed()}
              </span>{' '}
              <span>
                {' '}
                {parseFloat(
                  item.relative_velocity?.kilometers_per_hour
                ).toFixed()}
              </span>
            </div>
          );
        })}
        {/* <div className="asteroid__approach-item">
          <span>Дата :</span>
          {asteroid?.close_approach_data?.map((item: any) => {
            return <span> {item.close_approach_date}</span>;
          })}
        </div>
        <div className="asteroid__approach-item">
          <span>Расстояние (km):</span>
          {asteroid?.close_approach_data?.map((item: any) => {
            return (
              <span>
                {' '}
                {parseFloat(item?.miss_distance?.kilometers).toFixed()}
              </span>
            );
          })}
        </div>
        <div className="asteroid__approach-item">
          <span>Скорость (km/s):</span>
          {asteroid?.close_approach_data?.map((item: any) => {
            return (
              <span>
                {' '}
                {parseFloat(
                  item.relative_velocity?.kilometers_per_hour
                ).toFixed()}
              </span>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default asteroid;
