import { useAppDispatch } from '../../hooks/hooks';
import { setFilter } from '../../slices/slice';
import useRedux from '../../hooks/useRedux';
import './filter.scss';

function Filter() {
  const dispatch = useAppDispatch();
  const { filter } = useRedux();
  return (
    <ul className="filter">
      сортировать:
      <li
        className={
          filter === 'date'
            ? 'filter__item filter__item--active'
            : 'filter__item'
        }
        onClick={() => dispatch(setFilter('date'))}
      >
        дата сближения
      </li>
      <li
        className={
          filter === 'distance'
            ? 'filter__item filter__item--active'
            : 'filter__item'
        }
        onClick={() => dispatch(setFilter('distance'))}
      >
        расстояние
      </li>
      <li
        className={
          filter === 'danger'
            ? 'filter__item filter__item--active'
            : 'filter__item'
        }
        onClick={() => dispatch(setFilter('danger'))}
      >
        {' '}
        опасность
      </li>
    </ul>
  );
}

export default Filter;
