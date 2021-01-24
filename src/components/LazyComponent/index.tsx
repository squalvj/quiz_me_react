import { Suspense, FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

interface iProps {
  component: FunctionComponent<any>
}

export default function LazyComponent({ component: Comp}: iProps) {
  const history = useHistory();
  return (
    <Suspense fallback={null}>
        <Comp history={history}/>
    </Suspense>
  );
}
