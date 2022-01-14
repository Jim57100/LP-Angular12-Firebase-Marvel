export class Hero 
{
  id? :string;
  heroName :string;
  realName :string;
  gender :string;
  powers :string;
  placeOfOrigin :string;
  affiliation :string;
  thumbnails :string;


  constructor() {
    this.id = '';
    this.heroName = '';
    this.realName = '';
    this.gender = '';
    this.powers = '';
    this.affiliation = '';
    this.thumbnails = '';
    this.placeOfOrigin = '';
  }
}