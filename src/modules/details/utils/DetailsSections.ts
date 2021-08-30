import type { DETAIL_SECTION } from '@details/@types';

class DetailsSections {
  static readonly SECTIONS: DETAIL_SECTION[] = [
    {
      caption: 'About',
      isActive: true,
    },
    {
      caption: 'Stats',
      isActive: false,
    },
    {
      caption: 'Evolution',
      isActive: false,
    },
    {
      caption: 'Moves',
      isActive: false,
    },
  ];
}
export default DetailsSections;
