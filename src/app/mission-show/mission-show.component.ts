import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { missions } from '../missions';

@Component({
  selector: 'app-mission-show',
  templateUrl: './mission-show.component.html',
  styleUrls: ['./mission-show.component.css']
})
export class ShowMissionComponent implements OnInit {

  @Input() idChild;

  mission;

  constructor(private route: ActivatedRoute, private router: Router, ) {
  }

  back() {
    this.router.navigate(['/']);
  }

  ngOnInit() {

    if (this.route.snapshot.params.id !== null && this.route.snapshot.params.id !== undefined) {
      missions.forEach(element => {
        if (element.id == this.route.snapshot.params.id) {
          this.mission = element;
        }
      });
    }
  }

}
