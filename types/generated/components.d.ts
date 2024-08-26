import type { Schema, Attribute } from '@strapi/strapi';

export interface TagTag extends Schema.Component {
  collectionName: 'components_tag_tags';
  info: {
    displayName: 'Tag';
    icon: 'write';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    icon: 'chartCircle';
  };
  attributes: {
    linkedin: Attribute.String;
    facebook: Attribute.String;
    instagram: Attribute.String;
    github: Attribute.String;
    malt: Attribute.String;
    email: Attribute.String;
  };
}

export interface SitemapsSitemaps extends Schema.Component {
  collectionName: 'components_sitemaps_sitemaps';
  info: {
    displayName: 'Sitemaps';
    icon: 'crown';
  };
  attributes: {
    Link: Attribute.Component<'link.link'>;
    categorie: Attribute.String;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
    icon: 'quote';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    h1: Attribute.String;
    canonical: Attribute.String;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
    icon: 'book';
    description: '';
  };
  attributes: {
    Link: Attribute.Component<'link.link'>;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    icon: 'crown';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface CtaCta extends Schema.Component {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'cta';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    link: Attribute.Component<'link.link'>;
  };
}

export interface ContentServiceContentService extends Schema.Component {
  collectionName: 'components_content_service_content_services';
  info: {
    displayName: 'Content_service';
    icon: 'alien';
    description: '';
  };
  attributes: {
    seo: Attribute.Component<'seo.seo'>;
  };
}

export interface ContentRealisationsContentRealisations
  extends Schema.Component {
  collectionName: 'components_content_realisations_content_realisations';
  info: {
    displayName: 'Content_realisations';
    icon: 'crown';
    description: '';
  };
  attributes: {
    seo: Attribute.Component<'seo.seo'>;
    title_galery: Attribute.String;
    title_content: Attribute.String;
    title_technology: Attribute.String;
    btn_galery: Attribute.Component<'link.link'>;
    title_links: Attribute.String;
  };
}

export interface ContentNotfoundContentNotfound extends Schema.Component {
  collectionName: 'components_content_notfound_content_notfounds';
  info: {
    displayName: 'Content-notfound';
    icon: 'cup';
  };
  attributes: {
    seo: Attribute.Component<'seo.seo'>;
  };
}

export interface ContentHomeContentHome extends Schema.Component {
  collectionName: 'components_content_home_content_homes';
  info: {
    displayName: 'Content_home';
    icon: 'question';
    description: '';
  };
  attributes: {
    title_home: Attribute.String;
    title_service: Attribute.String;
    title_blog: Attribute.String;
    title_realisation: Attribute.String;
    link: Attribute.Component<'link.link', true>;
    seo: Attribute.Component<'seo.seo'>;
    title_vertical_left_1: Attribute.String;
    title_vertical_left_2: Attribute.String;
    title_vertical_left_3: Attribute.String;
    title_vertical_left_4: Attribute.String;
    title_vertical_left_5: Attribute.String;
    title_vertical_left_6: Attribute.String;
  };
}

export interface ContentFooterContentFooter extends Schema.Component {
  collectionName: 'components_content_footer_content_footers';
  info: {
    displayName: 'content_footer';
    icon: 'server';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Attribute.RichText;
    title_sitemap: Attribute.String;
    title_legals: Attribute.String;
    content_signature: Attribute.RichText;
  };
}

export interface ContentContactContentContact extends Schema.Component {
  collectionName: 'components_content_contact_content_contacts';
  info: {
    displayName: 'Content-contact';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    title_name: Attribute.String;
    title_email: Attribute.String;
    title_phone: Attribute.String;
    title_company: Attribute.String;
    title_content: Attribute.String;
    error_name: Attribute.String;
    error_email: Attribute.String;
    error_phone: Attribute.String;
    error_company: Attribute.String;
    error_content: Attribute.String;
    informative_message: Attribute.String;
    btn_send: Attribute.String;
    seo: Attribute.Component<'seo.seo'>;
    toast_error: Attribute.String;
    toast_success: Attribute.String;
  };
}

export interface ContentCguContentCgu extends Schema.Component {
  collectionName: 'components_content_cgu_content_cgus';
  info: {
    displayName: 'Content_CGU';
    icon: 'crop';
  };
  attributes: {
    seo: Attribute.Component<'seo.seo'>;
  };
}

export interface ContentBlogContentBlog extends Schema.Component {
  collectionName: 'components_content_blog_content_blogs';
  info: {
    displayName: 'Content-blog';
    icon: 'envelop';
  };
  attributes: {
    seo: Attribute.Component<'seo.seo'>;
  };
}

export interface ContentAboutContentAbout extends Schema.Component {
  collectionName: 'components_content_about_content_abouts';
  info: {
    displayName: 'Content-about';
    icon: 'brush';
  };
  attributes: {
    seo: Attribute.Component<'seo.seo'>;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'Contact';
    icon: 'quote';
    description: '';
  };
  attributes: {
    address: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    langage: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tag.tag': TagTag;
      'socials.socials': SocialsSocials;
      'sitemaps.sitemaps': SitemapsSitemaps;
      'seo.seo': SeoSeo;
      'menu.menu': MenuMenu;
      'link.link': LinkLink;
      'cta.cta': CtaCta;
      'content-service.content-service': ContentServiceContentService;
      'content-realisations.content-realisations': ContentRealisationsContentRealisations;
      'content-notfound.content-notfound': ContentNotfoundContentNotfound;
      'content-home.content-home': ContentHomeContentHome;
      'content-footer.content-footer': ContentFooterContentFooter;
      'content-contact.content-contact': ContentContactContentContact;
      'content-cgu.content-cgu': ContentCguContentCgu;
      'content-blog.content-blog': ContentBlogContentBlog;
      'content-about.content-about': ContentAboutContentAbout;
      'contact.contact': ContactContact;
    }
  }
}
