import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import App from './App';
import {getSeoForPath, SEO_ROUTES} from './seo';

export const routes = SEO_ROUTES.map(({path}) => path);

export function render(url: string) {
  return {
    appHtml: renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
    ),
    seo: getSeoForPath(url),
  };
}
