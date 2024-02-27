import { Routes } from '@angular/router';

import { FeedComponent } from './components/feed/feed.component';
import { LandingComponent } from './components/landing/landing.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'recommendations', component: RecommendationsComponent },

  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./landing/landing.component').then((mod) => mod.LandingComponent),
  // },
  // {
  //   path: 'feed',
  //   loadComponent: () =>
  //     import('./feed/feed.component').then((mod) => mod.FeedComponent),
  // },
  // {
  //   path: 'skills',
  //   loadComponent: () =>
  //     import('./skills/skills.component').then((mod) => mod.SkillsComponent),
  // },
  // {
  //   path: 'recommendations',
  //   loadComponent: () =>
  //     import('./recommendations/recommendations.component').then(
  //       (mod) => mod.RecommendationsComponent
  //     ),
  // },
];
