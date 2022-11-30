import React, { useEffect, useRef } from 'react';
import neshan_map_loader from './loaders';
import { NeshanMapProps } from './types';

declare global {
  interface Window {
    L?: any;
  }
}

const NeshanMap = (props: NeshanMapProps) => {
  const { style, options, onInit } = props;

  const mapEl = useRef(null);

  const defaultStyle = {
    width: '600px',
    height: '450px',
    margin: 0,
    padding: 0,
    background: '#eee',
  };

  const defaultOptions = {
    key: 'YOUR_API_KEY',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [35.699739, 51.338097],
    zoom: 14,
  };

  useEffect(() => {
    neshan_map_loader({
      onLoad: () => {
        let map = new window.L.Map(mapEl.current, {
          ...defaultOptions,
          ...options,
        });
        if (onInit) onInit(window.L, map);
      },
      onError: () => {
        console.error(
          "Neshan Maps Error: This page didn't load Neshan Maps correctly"
        );
      },
    });
  }, []);
  return /*#__PURE__*/ React.createElement('div', {
    ref: mapEl,
    style: { ...defaultStyle, ...style },
  });
};

export default NeshanMap;
