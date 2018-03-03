import ReactDOM from 'react-dom';
import { makeMainRoutes } from './Routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes, document.getElementById('root'));
