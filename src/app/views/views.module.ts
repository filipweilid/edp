import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainHeaderComponent } from "src/app/layout/main-header/main-header.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ViewsComponent } from "./views.component";
import { RouterModule } from "@angular/router";
import { routes } from "./views.common";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [MainHeaderComponent, ViewsComponent, MovieDetailComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class ViewsModule {}
