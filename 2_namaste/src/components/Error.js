import { useRouteError } from 'react-router-dom';

function Error() {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status}- {err.statusText} - {err.error.message} - {err.data}
      </h3>
    </>
  );
}

export default Error;
