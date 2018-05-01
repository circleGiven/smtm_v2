import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {GnbComponent} from './component/gnb/gnb.component';
import {LnbComponent} from './component/lnb/lnb.component';
import {FooterComponent} from './component/footer/footer.component';

const layoutRoutes: Routes = [
  {
    path: '', component: LayoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes)
  ],
  declarations: [
    LayoutComponent,
    GnbComponent,
    LnbComponent,
    FooterComponent
  ],
  providers: []
})
export class LayoutModule {}
