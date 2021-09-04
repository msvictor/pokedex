import type { Section } from '../interfaces/Section';

class DetailsSections {
  static readonly SECTIONS: Section[] = [
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
