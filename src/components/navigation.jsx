import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

function pathToArray(path) {
  return { path, pathArray: path.slice(1, path.length - 1).replace(/-/g, ' ').split('/') };
}

function arrayToObject(arr, obj, path) {
  if (arr.length < 2) {
    return obj;
  }

  const nextKey = arr.shift();

  if (arr.length === 1) {
    obj[nextKey] = obj[nextKey] || [];
    obj[nextKey].push({ name: arr.shift(), path });
    return obj;
  }

  obj[nextKey] = obj[nextKey] || {};
  obj[nextKey] = arrayToObject(arr, obj[nextKey], path);
  return obj;
}


export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Navigation nodes={data.allSitePage.nodes}/>
    )}
  />
);

const Navigation = ({ nodes }) => {
  const routeMap = {};
  nodes.map(({ path }) => pathToArray(path)).filter(({ pathArray }) => pathArray.length > 1)
    .forEach(({ path, pathArray }) => arrayToObject(pathArray, routeMap, path));

  return NavList(routeMap);
}

const NavList = map => (
  <ul>
    { Object.entries(map).map(([dir, list]) => (
      <li key={dir}>
        { Array.isArray(list) ?
          <ul>
            <div>{dir}</div>
            { list.map(listItem => (
              <li key={listItem.name}>
                <Link to={listItem.path}>
                  {listItem.name}
                </Link>
              </li>
            ))}
          </ul> :
          <ul>
            <div>{dir}</div>
            {NavList(list)}
          </ul>
        }
      </li>
    ))}
  </ul>
);

const query = graphql`
  query BlahQuery {
    allSitePage {
      nodes {
        path
      }
    }
  }
`;
