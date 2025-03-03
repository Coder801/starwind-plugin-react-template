const styles: HTMLStyleElement[] = [];
const containers: Record<string, HTMLElement> = {};
let isStandalone = false;

export const createShadowContainer = (parentElementId: string): HTMLElement => {
  const shadowContainer = document.getElementById(parentElementId);
  if (!shadowContainer) {
    throw new Error(`Element with id ${parentElementId} not found`);
  }

  const shadowRoot = shadowContainer.shadowRoot || shadowContainer.attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = '';

  const bootstrapLink = document.createElement('link');
  bootstrapLink.rel = 'stylesheet';
  bootstrapLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  shadowRoot.appendChild(bootstrapLink);

  const body = document.createElement('body');

  shadowRoot.appendChild(body);

  return body;
};

export const deleteShadowContainer = (id: string): void => {
  delete containers[id];
};

const insertStyle = (style: HTMLStyleElement): void => {
  styles.push(style);

  if (isStandalone) {
    document.head.appendChild(style);
  } else {
    Promise.resolve().then(() => {
      Object.values(containers).forEach((container) => {
        if (container.shadowRoot) {
          container.shadowRoot.appendChild(style.cloneNode(true));
        }
      });
    });
  }
};

export const runStandalone = (): void => {
  isStandalone = true;
  styles.forEach((style) => document.head.appendChild(style));
};

export default insertStyle;
