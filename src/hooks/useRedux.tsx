import { useAppDispatch, useAppSelector } from './hooks';

function useRedux() {
  const trackedAsteroids = useAppSelector(
    (state) => state.asteroidsSlice.trackedAsteroids
  );
  const showTrackedAsteroids = useAppSelector(
    (state) => state.asteroidsSlice.showTrackedAsteroids
  );
  const filter = useAppSelector((state) => state.asteroidsSlice.filter);
  const dispatch = useAppDispatch();

  return { trackedAsteroids, showTrackedAsteroids, filter, dispatch };
}

export default useRedux;
