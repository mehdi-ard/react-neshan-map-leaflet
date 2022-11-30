const BASE_URL = 'https://static.neshan.org';
const DEFAULT_URL_SCRIPT = `${BASE_URL}/sdk/leaflet/1.4.0/leaflet.js`;
const DEFAULT_URL_STYLE = `${BASE_URL}/sdk/leaflet/1.4.0/leaflet.css`;

interface LoadersProps {
  onError: () => void;
  onLoad: () => void;
}

export default (props: LoadersProps) => {
  const createScriptStyle = () => {
    const { onError, onLoad } = props; //-----import style

    if (!document.head.querySelector(`link[href="${DEFAULT_URL_STYLE}"]`)) {
      const style = document.createElement('link');
      style.href = DEFAULT_URL_STYLE;
      style.rel = 'stylesheet';
      document.head.appendChild(style);
    } //------import script

    if (window.L) {
      if (onLoad) onLoad();
      return;
    }

    const script: HTMLScriptElement =
      document.body.querySelector(`script[src="${DEFAULT_URL_SCRIPT}"]`) ||
      document.createElement('script');
    script.addEventListener('load', () => {
      if (onLoad) onLoad();
      return;
    });
    script.addEventListener('error', () => {
      if (onError) onError();
      return;
    });

    if (!script.src) {
      script.src = DEFAULT_URL_SCRIPT;
      document.body.appendChild(script);
    }
  };

  return createScriptStyle();
};
