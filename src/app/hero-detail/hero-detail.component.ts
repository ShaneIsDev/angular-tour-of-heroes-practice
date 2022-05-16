import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id);
  }

  goBack():void{
    this.location.back();
  }
  save(): void{
    if(this.hero){
      this.heroService.updateHero(this.hero).subscribe(()=> this.goBack());
    }
  }


}
