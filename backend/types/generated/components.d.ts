import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    description: '';
    displayName: 'content';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface ContentContentCard extends Struct.ComponentSchema {
  collectionName: 'components_content_content_cards';
  info: {
    description: '';
    displayName: 'Content Card';
  };
  attributes: {
    content: Schema.Attribute.Text;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface ParticipantEmail extends Struct.ComponentSchema {
  collectionName: 'components_participant_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    email: Schema.Attribute.Email;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.content': ContentContent;
      'content.content-card': ContentContentCard;
      'participant.email': ParticipantEmail;
    }
  }
}
