import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"skills", component:SkillsComponent},
  {path:"experience", component:ExperienceComponent},
  {path:"work", component:WorkComponent},
  {path:"**", component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
