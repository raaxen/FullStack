/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/App`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/page/footer`; params?: Router.UnknownInputParams; } | { pathname: `/page/Head`; params?: Router.UnknownInputParams; } | { pathname: `/page/Landing`; params?: Router.UnknownInputParams; } | { pathname: `/page/Main`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/App`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/page/footer`; params?: Router.UnknownOutputParams; } | { pathname: `/page/Head`; params?: Router.UnknownOutputParams; } | { pathname: `/page/Landing`; params?: Router.UnknownOutputParams; } | { pathname: `/page/Main`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/App${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/page/footer${`?${string}` | `#${string}` | ''}` | `/page/Head${`?${string}` | `#${string}` | ''}` | `/page/Landing${`?${string}` | `#${string}` | ''}` | `/page/Main${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/App`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/page/footer`; params?: Router.UnknownInputParams; } | { pathname: `/page/Head`; params?: Router.UnknownInputParams; } | { pathname: `/page/Landing`; params?: Router.UnknownInputParams; } | { pathname: `/page/Main`; params?: Router.UnknownInputParams; };
    }
  }
}
