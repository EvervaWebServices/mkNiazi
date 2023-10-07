import type { Schema, Attribute } from '@strapi/strapi';

export interface AsasaZz extends Schema.Component {
  collectionName: 'components_asasa_zzes';
  info: {
    displayName: 'zz';
    icon: 'emotionUnhappy';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'asasa.zz': AsasaZz;
    }
  }
}
