import type {
  iGREY_COLORS,
  iTYPE_COLORS,
  iGET_COLOR_BY_TYPE,
} from '../../@types';

class AppColors {
  static readonly TYPE_NORMAL: string = '#A8A878';

  static readonly TYPE_FIGHTING: string = '#C03028';

  static readonly TYPE_FLYING: string = '#9FA8DA';

  static readonly TYPE_POISON: string = '#9C27B0';

  static readonly TYPE_GROUND: string = '#FFD54F';

  static readonly TYPE_ROCK: string = '#B8A038';

  static readonly TYPE_BUG: string = '#8BC34A';

  static readonly TYPE_GHOST: string = '#512DA8';

  static readonly TYPE_STEEL: string = '#607D8B';

  static readonly TYPE_FIRE: string = '#F3694B';

  static readonly TYPE_WATER: string = '#76BDFE';

  static readonly TYPE_GRASS: string = '#4EBE52';

  static readonly TYPE_ELECTRIC: string = '#FCD86F';

  static readonly TYPE_PSYCHIC: string = '#EC3070';

  static readonly TYPE_ICE: string = '#26C6DA';

  static readonly TYPE_DRAGON: string = '#7038F8';

  static readonly TYPE_DARK: string = '#494949';

  static readonly TYPE_FAIRY: string = '#F4B0BF';

  static readonly TRANSPARENT: string = 'transparent';

  static readonly WHITE: string = '#FFFFFF';

  static readonly WHITE_ALPHA: string = 'rgba(255,255,255,0.3)';

  static readonly RED: string = '#FB6C6C';

  static readonly BLUE: string = '#2995F8';

  static readonly GREEN: string = '#21CE65';

  static readonly GREY: iGREY_COLORS = {
    '50': '#F9F9F9',
    '100': '#E0E0E0',
    '300': '#828282',
    '400': '#4F4F4F',
  };

  static getColorByTypeName({ typeName }: iGET_COLOR_BY_TYPE): string {
    const typeColor: iTYPE_COLORS = {
      normal: this.TYPE_NORMAL,
      fighting: this.TYPE_FIGHTING,
      flying: this.TYPE_FLYING,
      poison: this.TYPE_POISON,
      ground: this.TYPE_GROUND,
      rock: this.TYPE_ROCK,
      bug: this.TYPE_BUG,
      ghost: this.TYPE_GHOST,
      steel: this.TYPE_STEEL,
      fire: this.TYPE_FIRE,
      water: this.TYPE_WATER,
      grass: this.TYPE_GRASS,
      electric: this.TYPE_ELECTRIC,
      psychic: this.TYPE_PSYCHIC,
      ice: this.TYPE_ICE,
      dragon: this.TYPE_DRAGON,
      dark: this.TYPE_DARK,
      fairy: this.TYPE_FAIRY,
    };

    return typeColor[typeName];
  }
}

export default AppColors;
