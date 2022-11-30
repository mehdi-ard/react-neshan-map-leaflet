import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import NeshanMap from '../src';

const Map = {
  title: 'Neshan',
  component: NeshanMap,
  args: {
    options: {
      key: 'web.6b144e71c3c0451ab8f31e98e6b3bd1e',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof NeshanMap>;

export default Map;

const Template: ComponentStory<typeof NeshanMap> = args => (
  <NeshanMap {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export const Traffic = Template.bind({});

Traffic.args = {
  options: {
    key: 'web.6b144e71c3c0451ab8f31e98e6b3bd1e',
    traffic: true,
  },
};

export const Poi = Template.bind({});

Poi.args = {
  options: {
    key: 'web.6b144e71c3c0451ab8f31e98e6b3bd1e',
    poi: true,
  },
};

export const Center = Template.bind({});

Center.args = {
  options: {
    key: 'web.6b144e71c3c0451ab8f31e98e6b3bd1e',
    center: [35.813091, 51.398731],
  },
};

export const Zoom = Template.bind({});

Zoom.args = {
  options: {
    key: 'web.6b144e71c3c0451ab8f31e98e6b3bd1e',
    zoom: 15,
  },
};

export const Maptypes = Template.bind({});

Maptypes.args = {
  options: {
    key: 'web.6b144e71c3c0451ab8f31e98e6b3bd1e',
    maptype: 'dreamy',
  },
};

export const OnInit = Template.bind({});

OnInit.args = {
  options: {
    key: 'web.6b144e71c3c0451ab8f31e98e6b3bd1e',
  },
  onInit: (L: any, myMap: any) => {
    let marker = L.marker([35.699739, 51.338097]).addTo(myMap);

    myMap.on('mouseup', (e: any) => {
      marker.setLatLng(e.latlng);
    });
  },
};
