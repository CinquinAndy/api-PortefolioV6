import type { Attribute, Schema } from '@strapi/strapi';

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    description: '';
    displayName: 'Contact';
    icon: 'quote';
  };
  attributes: {
    address: Attribute.String;
    email: Attribute.String;
    langage: Attribute.String;
    phone: Attribute.String;
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

export interface ContentContactContentContact extends Schema.Component {
  collectionName: 'components_content_contact_content_contacts';
  info: {
    description: '';
    displayName: 'Content-contact';
    icon: 'picture';
  };
  attributes: {
    btn_send: Attribute.String;
    error_company: Attribute.String;
    error_content: Attribute.String;
    error_email: Attribute.String;
    error_name: Attribute.String;
    error_phone: Attribute.String;
    informative_message: Attribute.String;
    seo: Attribute.Component<'seo.seo'>;
    title: Attribute.String;
    title_company: Attribute.String;
    title_content: Attribute.String;
    title_email: Attribute.String;
    title_name: Attribute.String;
    title_phone: Attribute.String;
    toast_error: Attribute.String;
    toast_success: Attribute.String;
  };
}

export interface ContentFooterContentFooter extends Schema.Component {
  collectionName: 'components_content_footer_content_footers';
  info: {
    description: '';
    displayName: 'content_footer';
    icon: 'server';
  };
  attributes: {
    content: Attribute.RichText;
    content_signature: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title_legals: Attribute.String;
    title_sitemap: Attribute.String;
  };
}

export interface ContentHomeContentHome extends Schema.Component {
  collectionName: 'components_content_home_content_homes';
  info: {
    description: '';
    displayName: 'Content_home';
    icon: 'question';
  };
  attributes: {
    link: Attribute.Component<'link.link', true>;
    seo: Attribute.Component<'seo.seo'>;
    title_blog: Attribute.String;
    title_home: Attribute.String;
    title_realisation: Attribute.String;
    title_service: Attribute.String;
    title_vertical_left_1: Attribute.String;
    title_vertical_left_2: Attribute.String;
    title_vertical_left_3: Attribute.String;
    title_vertical_left_4: Attribute.String;
    title_vertical_left_5: Attribute.String;
    title_vertical_left_6: Attribute.String;
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

export interface ContentRealisationsContentRealisations
  extends Schema.Component {
  collectionName: 'components_content_realisations_content_realisations';
  info: {
    description: '';
    displayName: 'Content_realisations';
    icon: 'crown';
  };
  attributes: {
    btn_galery: Attribute.Component<'link.link'>;
    seo: Attribute.Component<'seo.seo'>;
    title_content: Attribute.String;
    title_galery: Attribute.String;
    title_links: Attribute.String;
    title_technology: Attribute.String;
  };
}

export interface ContentServiceContentService extends Schema.Component {
  collectionName: 'components_content_service_content_services';
  info: {
    description: '';
    displayName: 'Content_service';
    icon: 'alien';
  };
  attributes: {
    seo: Attribute.Component<'seo.seo'>;
  };
}

export interface CtaCta extends Schema.Component {
  collectionName: 'components_cta_ctas';
  info: {
    description: '';
    displayName: 'cta';
    icon: 'paperPlane';
  };
  attributes: {
    content: Attribute.RichText;
    link: Attribute.Component<'link.link'>;
    title: Attribute.String;
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

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'book';
  };
  attributes: {
    Link: Attribute.Component<'link.link'>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
    icon: 'quote';
  };
  attributes: {
    canonical: Attribute.String;
    description: Attribute.String;
    h1: Attribute.String;
    title: Attribute.String;
  };
}

export interface SitemapsSitemaps extends Schema.Component {
  collectionName: 'components_sitemaps_sitemaps';
  info: {
    displayName: 'Sitemaps';
    icon: 'crown';
  };
  attributes: {
    categorie: Attribute.String;
    Link: Attribute.Component<'link.link'>;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    icon: 'chartCircle';
  };
  attributes: {
    email: Attribute.String;
    facebook: Attribute.String;
    github: Attribute.String;
    instagram: Attribute.String;
    linkedin: Attribute.String;
    malt: Attribute.String;
  };
}

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

export interface TechnoTechno extends Schema.Component {
  collectionName: 'components_techno_technos';
  info: {
    displayName: 'techno';
    icon: 'alien';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contact': ContactContact;
      'content-about.content-about': ContentAboutContentAbout;
      'content-blog.content-blog': ContentBlogContentBlog;
      'content-cgu.content-cgu': ContentCguContentCgu;
      'content-contact.content-contact': ContentContactContentContact;
      'content-footer.content-footer': ContentFooterContentFooter;
      'content-home.content-home': ContentHomeContentHome;
      'content-notfound.content-notfound': ContentNotfoundContentNotfound;
      'content-realisations.content-realisations': ContentRealisationsContentRealisations;
      'content-service.content-service': ContentServiceContentService;
      'cta.cta': CtaCta;
      'link.link': LinkLink;
      'menu.menu': MenuMenu;
      'seo.seo': SeoSeo;
      'sitemaps.sitemaps': SitemapsSitemaps;
      'socials.socials': SocialsSocials;
      'tag.tag': TagTag;
      'techno.techno': TechnoTechno;
    }
  }
}
