import { useGetAsteroidQuery } from "../../api/apiSlice";
import { useAppSelector } from "../../hooks/hooks";
import AsteroidComposeComponent from "./AsteroidComposeComponent";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";
import asteroidBg from "../../../public/images/m2.jpg";
import "./asteroid.scss";

function Asteroid() {
  const asteroidId = useAppSelector((state) => state.asteroidsSlice.id);
  const {
    data: asteroid,
    isError,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetAsteroidQuery(asteroidId);

  return (
    <div className="asteroid">
      <img src={asteroidBg} alt="asteroid" className="asteroid__image" />
      {(isFetching || isLoading) && <Spinner />}
      {isError && <Error />}
      {isSuccess && <AsteroidComposeComponent asteroid={asteroid} />}
    </div>
  );
}

export default Asteroid;
