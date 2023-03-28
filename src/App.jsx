import Router, { routes } from '@/js/routing/routingConstants/RoutesConfig';
import Header from '@/js/components/header/Header';
import Breadcrumbs from '@/js/components/breadcrumbs/Breadcrumbs';

const App = () => (
  <div className="container">
    <Header />
    <Breadcrumbs links={routes} />
    <Router />
  </div>
);

export default App;
