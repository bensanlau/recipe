import { Component, h, Host } from '@stencil/core';
import StencilLogo from '../../assets/logos/stenciljs-logo.svg';
import { ROUTES } from '../../global/constants';

const routes = [
  {
    text: 'Search',
    route: '/',
    iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.661 232.661" xml:space="preserve"><path d="M116.33 7.501c-49.257 0-89.851 37.094-95.37 84.872-.685 5.933 3.97 11.138 9.943 11.138h170.856c5.973 0 10.628-5.205 9.943-11.138-5.521-47.778-46.114-84.872-95.372-84.872z" fill="#ffe49c"/><path d="M194.319 139.664H38.341c-9.953 0-18.021-8.068-18.021-18.021v-.113c0-9.952 8.068-18.021 18.021-18.021h155.978c9.952 0 18.021 8.068 18.021 18.021v.113c0 9.953-8.068 18.021-18.021 18.021z" fill="#cbe5c0"/><path d="M194.319 175.818H38.341c-9.953 0-18.021-8.068-18.021-18.02v-.113c0-9.952 8.068-18.02 18.021-18.02h155.978c9.952 0 18.021 8.068 18.021 18.02v.113c0 9.952-8.068 18.02-18.021 18.02z" fill="#ff7876"/><path d="M191.34 225.16H41.321c-11.598 0-21-9.402-21-21v-18.342c0-5.523 4.477-10 10-10H202.34c5.523 0 10 4.477 10 10v18.342c0 11.598-9.402 21-21 21z" fill="#ffe49c"/><path fill="#f59d00" d="m154.101 165.818-29.545-26.154h59.089z"/><g fill="#414042"><path d="M219.84 121.53c0-5.985-2.076-11.49-5.538-15.847 3.852-3.964 5.427-9.181 4.849-14.172C213.124 39.342 168.921 0 116.33 0S19.536 39.342 13.509 91.512c-.576 4.995 1.001 10.212 4.85 14.172a25.391 25.391 0 0 0-5.538 15.847v.113c0 7.028 2.856 13.401 7.467 18.02-4.612 4.62-7.467 10.993-7.467 18.021v.112a25.383 25.383 0 0 0 5.28 15.518c-3.252 3.179-5.28 7.606-5.28 12.503v18.343c0 15.715 12.785 28.5 28.5 28.5h150.02c15.715 0 28.5-12.785 28.5-28.5v-18.343c0-4.896-2.027-9.324-5.279-12.503a25.384 25.384 0 0 0 5.279-15.518v-.112c0-7.028-2.856-13.401-7.467-18.021 4.612-4.62 7.467-10.993 7.467-18.02v-.114h-.001zm-15 .114c0 5.801-4.72 10.52-10.521 10.52H38.341c-5.801 0-10.521-4.72-10.521-10.52v-.113c0-5.801 4.72-10.52 10.521-10.52h155.978c5.801 0 10.521 4.72 10.521 10.52v.113zm0 36.041v.112c0 5.801-4.72 10.52-10.521 10.52h-31.727l23.896-21.153h7.831c5.801 0 10.521 4.72 10.521 10.521zm-177.02.112v-.112c0-5.801 4.72-10.521 10.521-10.521h83.372l23.896 21.153H38.341c-5.801 0-10.521-4.719-10.521-10.52zm116.524-10.633h19.514l-9.757 8.637-9.757-8.637zM116.33 15c44.97 0 82.768 33.633 87.92 78.232.17 1.474-.996 2.777-2.493 2.777H30.902c-1.487 0-2.663-1.294-2.493-2.777C33.563 48.633 71.36 15 116.33 15zm88.51 189.16c0 7.444-6.056 13.5-13.5 13.5H41.32c-7.444 0-13.5-6.056-13.5-13.5v-18.343c0-1.379 1.122-2.5 2.5-2.5h172.02c1.378 0 2.5 1.121 2.5 2.5v18.343z"/><circle cx="103.974" cy="41.215" r="5"/><circle cx="81.02" cy="55.28" r="5"/><circle cx="128.687" cy="41.215" r="5"/><circle cx="151.64" cy="55.28" r="5"/></g></svg>`,
  },
  {
    text: 'Favourites',
    route: '/favourites',
    iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" xml:space="preserve"><path d="M395.101 2.167c6.712 29.334-2.201 62.557-26.389 86.746s-57.412 33.101-86.746 26.389c-6.712-29.334 2.201-62.557 26.389-86.746s57.413-33.102 86.746-26.389z" fill="#82d78c"/><path d="M395.101 2.167 281.967 115.3c-6.712-29.334 2.201-62.557 26.389-86.745s57.412-33.102 86.745-26.388z" fill="#a0eb87"/><path d="M151.558 1.505c-4.665 20.384 1.53 43.471 18.338 60.279s39.895 23.003 60.28 18.338c4.665-20.384-1.53-43.471-18.338-60.279S171.941-3.16 151.558 1.505z" fill="#82d78c"/><path d="m151.558 1.505 78.618 78.618c4.665-20.384-1.53-43.471-18.338-60.279S171.941-3.16 151.558 1.505z" fill="#a0eb87"/><path d="M341.706 55.562a8.826 8.826 0 0 0-12.485 0l-64.391 64.391V52.975a8.827 8.827 0 0 0-8.829-8.829 8.827 8.827 0 0 0-8.829 8.829v31.712l-46.758-46.758a8.826 8.826 0 0 0-12.485 0 8.826 8.826 0 0 0 0 12.485l59.243 59.243V167.364a8.827 8.827 0 0 0 8.829 8.829 8.827 8.827 0 0 0 8.829-8.829V144.92l76.875-76.875a8.822 8.822 0 0 0 .001-12.483z" fill="#76b580"/><path d="M458.864 226.633c-48.517-101.005-138.687-77.112-182.066-65.61-7.406 1.972-17.554 4.667-20.797 4.667-3.242 0-13.39-2.695-20.84-4.675-43.335-11.494-133.518-35.401-182.023 65.619-18.809 39.174-18.011 82.934 2.367 130.066 32.566 75.338 106.462 137.121 136.946 149.119 11.912 4.69 21.516 6.184 29.63 6.184 7.82 0 14.257-1.391 20.021-2.632 4.747-1.021 8.842-1.902 13.899-1.902 5.057 0 9.152.88 13.999 1.925 5.638 1.217 12.027 2.592 19.9 2.592 9.406 0 19.103-2.02 29.647-6.167 30.484-11.997 104.384-73.781 136.95-149.119 20.378-47.133 21.176-90.895 2.367-130.067z" fill="#ff6464"/><path d="M256.483 505.904c-23.021-11.998-78.827-73.781-103.421-149.119-15.389-47.132-15.992-90.893-1.787-130.067 12.768-35.213 29.677-58.704 47.67-73.913-46.362-7.666-108.442-3.994-145.807 73.826-18.809 39.174-18.011 82.934 2.367 130.066 32.566 75.337 106.462 137.121 136.946 149.119 11.912 4.69 21.516 6.184 29.63 6.184 7.82 0 14.257-1.391 20.021-2.632 4.747-1.021 8.842-1.902 13.899-1.902.96 0 1.785.158 2.687.216-.743-.754-1.482-1.401-2.205-1.778z" fill="#e15050"/><path d="M419.655 379.651a8.842 8.842 0 0 1-4.44-1.199 8.834 8.834 0 0 1-3.177-12.079c4.634-7.941 8.682-15.917 12.041-23.685 16.141-37.325 17.132-71.228 2.949-100.767a158.046 158.046 0 0 0-4.182-8.13 8.832 8.832 0 0 1 3.467-12.002c4.259-2.345 9.635-.802 11.993 3.467a176.092 176.092 0 0 1 4.647 9.037c16.489 34.342 15.598 73.177-2.664 115.4-3.634 8.415-8.01 17.029-12.998 25.582a8.832 8.832 0 0 1-7.636 4.376z" fill="#ff8383"/><path d="M406.109 206.898a8.806 8.806 0 0 1-5.816-2.19c-7.178-6.294-14.929-10.907-23.703-14.106a8.829 8.829 0 0 1-5.268-11.321c1.673-4.57 6.738-6.932 11.321-5.268 10.709 3.906 20.564 9.769 29.289 17.416 3.668 3.216 4.035 8.795.819 12.459a8.805 8.805 0 0 1-6.642 3.01z" fill="#ff9a9a"/></svg>`,
  },
]

const footerLinks = [
  {
    url: ROUTES.TERMS,
    text: 'Terms',
    target: '_self',
  },
  {
    url: ROUTES.IMPRINT,
    text: 'Imprint',
    target: '_self',
  },
  {
    url: 'https://github.com/bensanlau/recipe',
    text: 'Source',
  },
]
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {

  render() {
    return (
      <Host>
        <d4l-app-header
          menuNavigationItems={routes}
          customLogo='/assets/logos/logo.png'
          logoUrlText="What's in my fridge App"
        />

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url={ROUTES.IMPRINT} component="i-imprint" />
              <stencil-route url={ROUTES.TERMS} component="i-terms" />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <d4l-app-footer footerLinks={footerLinks}>
          <p class="copyright-info" slot="copyright-info">
            Made in 🇩🇪 with <a href="https://stenciljs.com/" target="_blank" rel="noopener" innerHTML={StencilLogo}></a>
          </p>
        </d4l-app-footer>
      </Host>
    );
  }
}
