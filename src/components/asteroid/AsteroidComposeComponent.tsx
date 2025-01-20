import { useNavigate } from 'react-router-dom';
import { numberFormatting } from '../asteroidsListItem/utils';
import { ISingleAsteroid } from '../../api/types';
import { v4 as uuidv4 } from 'uuid';
import { AsteroidInnerProps } from './types';

function renderAsteroidTableView(asteroid: ISingleAsteroid) {
  const items = asteroid?.approach_data?.map((item) => {
    return (
      <div className="asteroid__approach-item" key={uuidv4()}>
        <span> {item.close_approach_date}</span>{' '}
        <span>{numberFormatting(item?.distance_kilometers)}</span>{' '}
        <span>{numberFormatting(item?.kilometers_per_hour)}</span>
      </div>
    );
  });

  return (
    <div className="asteroid__approach">
      <div className="asteroid__approach-title">
        Данные о сближении с Землей
      </div>
      <div className="asteroid__approach-inner">
        <span>Дата сближения</span>
        <span>Расстояние (km)</span>
        <span>Скорость (km/s)</span>
      </div>
      {items}
    </div>
  );
}

function renderAsteroidView(asteroid: any) {
  const navigate = useNavigate();
  return (
    <>
      <div className="asteroid__common-data">
        <h2 className="asteroid__title">
          Астероид - {asteroid?.name.replace(/[^\w ]/g, '')}
        </h2>
        <span className="asteroid__text">
          Звездная величина: {asteroid?.absolute_magnitude_h} H
        </span>
        <span className="asteroid__text">
          Обозначение: {asteroid?.designation}
        </span>
        <span className="asteroid__text">
          Потенциально опасный:{' '}
          {asteroid?.is_potentially_hazardous_asteroid
            ? 'опасный'
            : 'не опасный'}
        </span>
        <span className="asteroid__text"></span>
        <span className="asteroid__text"></span>
        <div className="asteroid__back-btn" onClick={() => navigate(-1)}>
          {'❮  Вернуться'}
        </div>
      </div>
      <div className="asteroid__orbital-data">
        <span className="asteroid__text">Equinox: {asteroid?.equinox}</span>
        <span className="asteroid__text">
          Дата первого наблюдения: {asteroid?.first_observation_date}
        </span>
        <span className="asteroid__text">
          Дата последнего наблюдения: {asteroid?.last_observation_date}
        </span>
        <span className="asteroid__text">
          Количество наблюдений: {asteroid?.observations_used}
        </span>
        <span className="asteroid__text">
          Описание класса орбиты: {asteroid?.orbit_class_description}
        </span>
        <span className="asteroid__text">
          Диапазон класса орбиты: {asteroid?.orbit_class_range}
        </span>
        <span className="asteroid__text">
          Тип класса орбиты: {asteroid?.orbit_class_type}
        </span>
        <span className="asteroid__text">
          Дата определения орбиты: {asteroid?.orbit_determination_date}
        </span>
        <a className="asteroid__text" href={asteroid?.nasa_jpl_url}>
          Дополнительная информация: <span>{asteroid?.nasa_jpl_url}</span>
        </a>
      </div>
    </>
  );
}

function AsteroidComposeComponent({ asteroid }: AsteroidInnerProps) {
  const asteroidItem = renderAsteroidView(asteroid);
  const table = renderAsteroidTableView(asteroid);
  return (
    <>
      {asteroidItem}
      {table}
    </>
  );
}

export default AsteroidComposeComponent;
