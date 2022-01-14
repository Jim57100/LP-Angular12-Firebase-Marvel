import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Hero } from '../../models/hero.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {


  private dbPath = '/hero';
  heroesCollection: AngularFirestoreCollection<Hero>;

  // heroes :any = [
  //   {
  //     id: 1,
  //     heroName: 'Black-Widow',
  //     realName: 'Natasha Romanoff',
  //     gender: 'female',
  //     placeOfOrigin: 'Stalingrad, Former U.S.S.R',
  //     powers: 'Slowed Aging, Superhuman Durability, close combat',
  //     affiliation: 'Avengers, S.H.I.E.L.D., Secret Avengers',
  //     characterImg: '../../../assets/img/characters/black-widow.png',
  //     thumbnails: '../../../assets/img/thumbnails/wid_thumb.png',
  //     description: 'Despite her origins as an agent of evil, Natasha Romanoff has become a force for good in the world of covert intelligence and super heroics. Like her namesake arachnid, Romanoff is stealthy, precise, and absolutely lethal. She is the Black Widow.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/widbg2.jpg',
  //   },
  //   {
  //     id: 2,
  //     heroName: 'Thor Odinson',
  //     realName: 'Thor Odinson',
  //     gender: 'male',
  //     placeOfOrigin: 'A cave in Norway',
  //     powers: 'Odinpower"Warrior\'s Madness" (Berserker Rage)Superhuman StrengthSuperhuman DurabilitySuperhuman SpeedSuperhuman ReflexesControl of ElementsHand-to-Hand CombatSword-Fighting',
  //     affiliation: 'Avengers, Heralds of galactus',
  //     characterImg: 'https://i.kym-cdn.com/photos/images/original/001/964/578/fe7',
  //     thumbnails: '../../../assets/img/thumbnails/thor_thumb.png',
  //     description: 'Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/thor.jpg',
  //   },
  //   {
  //     id: 3,
  //     heroName: 'Iron Man',
  //     realName: 'Tony Stark',
  //     gender: 'male',
  //     placeOfOrigin: 'Long Island',
  //     powers: 'Heightened Senses, Superhuman Strength, Regeneration, Genius Intelligence',
  //     affiliation: 'Avengers, Avengers West Coast, Illuminati, S.H.I.E.L.D.',
  //     characterImg: '../../../assets/img/characters/Iron_Man.png',
  //     thumbnails: '../../../assets/img/thumbnails/iron_thumb.png',
  //     description: 'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/iron.jpg',
  //   },
  //   {
  //     id: 4,
  //     heroName: 'Black Panther',
  //     realName: 'T’Challa',
  //     gender: 'male',
  //     placeOfOrigin: 'Wakanda',
  //     powers: 'Heightened Senses, Night Vision, Hand-to-Hand Combat, Superhuman Strength',
  //     affiliation: 'Avengers',
  //     characterImg: '../../../assets/img/characters/black-panther.png',
  //     thumbnails: '../../../assets/img/thumbnails/panth_thumb.png',
  //     description: 'As the king of the African nation of Wakanda, T’Challa protects his people as the latest in a legacy line of Black Panther warriors.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/bpt.jpg',
  //   },
  //   {
  //     id: 5,
  //     heroName: 'Hulk',
  //     realName: 'Bruce BANNER',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: 'Healing Factor, Superhuman Durability, Superhuman Strength, Size and Shape Alteration, Genius Intelligence',
  //     affiliation: 'AvengersDefenders',
  //     characterImg: '../../../assets/img/characters/hulk-marvel.png',
  //     thumbnails: '../../../assets/img/thumbnails/hulk_thumb.png',
  //     description: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/hulk.jpg',
  //   },
  //   {
  //     id: 6,
  //     heroName: 'Vision',
  //     realName: '',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: 'Density Shifting, Intangibility, Photokinesis, Remote Interfacing (with other computer systems),Synthezoid, Regeneration, Heightened Senses, Flight, Superhuman Strength, Superhuman Durability, Superhuman Speed, Superhuman Reflexes, Superhuman Agility',
  //     affiliation: '',
  //     characterImg: '../../../assets/img/characters/vision.png',
  //     thumbnails: '../../../assets/img/thumbnails/vision_thumb.png',
  //     description: 'A fully unique being, Vision came about thanks to a combination of Wakandan Vibranium, Asgardian lightning, an Infinity Stone, and more.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/vision.jpg',
  //   },
  //   {
  //     id: 7,
  //     heroName: 'Thanos',
  //     realName: '',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',
  //     characterImg: '../../../assets/img/characters/thanos.png',
  //     thumbnails: '../../../assets/img/thumbnails/than_thumb.png',
  //     description: 'Using the power of the Infinity Stones, Thanos believes he can ultimately save the universe by wiping out half of its population.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/than.jpg',
  //   },
  //   {
  //     id: 8,
  //     heroName: 'War-Machine',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',
  //     realName: 'Lt. Col. James “Rhodey” Rhodes',
  //     characterImg: '../../../assets/img/characters/war-machine.png',
  //     thumbnails: '../../../assets/img/thumbnails/James_Rhodes_thumb.png',
  //     description: 'Air Force Lieutenant Colonel James “Rhodey” Rhodes exudes loyalty and courage, whether flying a plane or piloting the War Machine armor.',
  //     isFavorite: false,
  //     backgroundImg: '',
  //   },
  //   {
  //     id: 9,
  //     heroName: 'Captain America',
  //     realName: 'Steve Rogers',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',
  //     characterImg: '../../../assets/img/characters/captain-america.png',
  //     thumbnails: '../../../assets/img/thumbnails/cptam_thumb.png',
  //     description: 'America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/ca_bg.jpg',
  //   },
  //   { 
  //     id: 10,
  //     heroName: 'Captain Marvel',
  //     gender: 'female',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',
  //     realName: 'Carol Danvers',
  //     characterImg: '../../../assets/img/characters/captain-marvel.png',
  //     thumbnails: '../../../assets/img/thumbnails/captmarv_thumb.png',
  //     description: 'Carol Danvers becomes one of the universe\'s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
  //     isFavorite: false,
  //     backgroundImg: '',
  //   },
  //   {
  //     id: 11,
  //     heroName: 'Dead Pool',
  //     realName: 'Wade Wilson',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',
  //     characterImg: '../../../assets/img/characters/deadpool.png',
  //     thumbnails: '../../../assets/img/thumbnails/deadp_thumb.png',
  //     description: 'Wade Wilson was born in Canada, but grew up to become the least Canadian person ever. When it comes to the Merc with a Mouth, with great power comes no responsibility.',
  //     isFavorite: false,
  //     backgroundImg: '',
  //   },
  //   {
  //     id: 12,
  //     heroName: 'Hawkeye',
  //     realName: 'Clint Barton',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',
  //     characterImg: '../../../assets/img/characters/hawkeye.png',
  //     thumbnails: '../../../assets/img/thumbnails/hawk.png',
  //     description: 'An expert marksman and fighter, Clint Barton puts his talents to good use by working for S.H.I.E.L.D. as a special agent. The archer known as Hawkeye also boasts a strong moral compass that at times leads him astray from his direct orders.',
  //     isFavorite: false,
  //     backgroundImg: '',
  //   },
  //   {
  //     id: 13,
  //     heroName: 'Rocket',
  //     realName: '',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',    
  //     characterImg: '../../../assets/img/characters/rocket.png',
  //     thumbnails: '../../../assets/img/thumbnails/rocket_thumb.png',
  //     description: 'Ain’t no thing like Rocket, ‘cept Rocket. He lives for the simple things, including collecting valuable bounty alongside his friend and partner, Groot. Quick to train a weapon on anyone who offends him, he’s far more formidable than he appears.',
  //     isFavorite: false,
  //     backgroundImg: '',
  //   },
  //   {
  //     id: 14,
  //     heroName: 'Spiderman',
  //     realName: 'Peter Parker',
  //     gender: 'male',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',
  //     characterImg: '../../../assets/img/characters/spiderman.png',
  //     thumbnails: '../../../assets/img/thumbnails/spider_thumb.png',
  //     description: 'With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/spm.jpg',
  //   },
  //   {
  //     id: 15,
  //     heroName: 'Scarlet Witch',
  //     realName: 'Wanda Maximoff',
  //     gender: 'female',
  //     placeOfOrigin: '',
  //     powers: '',
  //     affiliation: '',
  //     characterImg: '../../../assets/img/characters/wanda-maximoff.png',
  //     thumbnails: '../../../assets/img/thumbnails/scar_thumb.png',
  //     description: 'Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.',
  //     isFavorite: false,
  //     backgroundImg: '../../../assets/img/backgrounds/scar.png',
  //   },
  // ];

  constructor(private db: AngularFirestore) { 
    this.heroesCollection = db.collection(this.dbPath);
  }
  
  getAllHeroes(): any {
    return this.heroesCollection.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  createNewHero(hero: Hero): any {
    return this.heroesCollection.doc(hero.heroName).set({
      id: hero.heroName,
      heroName: hero.heroName,
      realName: hero.realName,
      gender: hero.gender,
      powers: hero.powers,
      placeOfOrigin: hero.placeOfOrigin,
      affiliation: hero.affiliation,
      thumbnails: hero.thumbnails,
      
    }); 
  }

  get(id: any): any {
    return new Observable(obs => {
      this.heroesCollection.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(hero: Hero) {
    return new Observable(obs => {
      this.heroesCollection.doc(hero.id).update(hero);
      obs.next();
    });
  }

  delete(id: any) {
    this.heroesCollection.doc(id).delete();
  }
  
}
