import { Button } from 'antd';
import { useRouteError } from 'react-router-dom';

type Props = { resetError: () => void };

export function ErrorPage({ resetError }: Props) {
  const error = useRouteError() as { message: string; statusText: string };
  console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={resetError}>clear</Button>
    </div>
  );
}
