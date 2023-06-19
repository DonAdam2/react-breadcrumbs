import { Link, useLocation } from 'react-router-dom';
//constants
import { constructBreadcrumbsLinks } from '@/js/routing/routingConstants/RoutingHelpers';

const Breadcrumbs = ({ isDisplayHomeLink = false, divider, routes }) => {
  const { pathname } = useLocation(),
    pathNames = pathname.split('/').filter(Boolean),
    modifiedRoutes = constructBreadcrumbsLinks({ routes, isDisplayNestedRoutesOnly: true });

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        {isDisplayHomeLink && (
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        )}
        {pathNames.map((name, index, arr) => {
          const routeTo = `/${arr.slice(0, index + 1).join('/')}`,
            isLast = index === arr.length - 1,
            linkLabel = routes
              ? modifiedRoutes.find((link) =>
                  link.path
                    .split('/')
                    .filter(Boolean)
                    .find((pathChunk) => pathChunk === name)
                )?.label
              : undefined,
            currentName = linkLabel ?? name;

          return (
            <li
              key={name}
              className={`breadcrumb-item${isLast ? ' active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                currentName
              ) : (
                <>
                  <Link to={routeTo}>{currentName}</Link>
                  {divider ? (
                    divider
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      className="icon-holder "
                    >
                      <path
                        d="M6.5 3.33337L11.1667 8.00004L6.5 12.6667"
                        stroke="#94A3B8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
