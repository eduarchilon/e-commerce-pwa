import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { MAIN_MENU } from 'src/app/data/menu.data';
import { Menu } from 'src/app/model/menu.mode';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('drawer', { static: true }) drawer!: MatSidenav;

  isToggle!: boolean;
  mainMenu: Menu[] = MAIN_MENU;

  private breakpointObserver = inject(BreakpointObserver);

  constructor(private router: Router) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Tablet, Breakpoints.Handset, Breakpoints.WebPortrait])
    .pipe(
      map((result) => {
        this.isToggle = result.matches;
        return result.matches;
      }),
      shareReplay()
    );

  ngOnInit(): void {}
}
