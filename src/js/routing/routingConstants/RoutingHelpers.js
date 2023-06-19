export const constructBreadcrumbsLinks = ({ routes, isDisplayNestedRoutesOnly = true }) => {
  let newArray = [];
  const func = (newRoutes, parentPath) => {
    newRoutes.forEach((item) => {
      const newPath = parentPath ? `${parentPath}/${item.path}` : item.path;
      newArray.push({
        path: isDisplayNestedRoutesOnly ? newPath : item.path,
        element: item.element,
        label: item.label,
        icon: item.icon,
      });
      if (item.children) {
        func(item.children, newPath);
      }
    });
  };
  func(routes);
  return newArray;
};
