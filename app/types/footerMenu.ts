export type FooterMenu = {
    title: string;
    navItems?: {
      label: string;
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      route: any;
    }[];
  };
  