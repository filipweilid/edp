import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [MatToolbarModule, MatTabsModule, MatCardModule, MatButtonModule, MatDividerModule],
})
export class MaterialModule {}
