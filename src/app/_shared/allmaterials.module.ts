import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatNativeDateModule, MatOptionModule, MatRippleModule } from '@angular/material/core';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { CdkTableModule } from '@angular/cdk/table';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { MatSelectModule } from '@angular/material/select';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatDialogModule } from '@angular/material/dialog';
// import { RouterModule } from '@angular/router';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatListModule } from '@angular/material/list';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { RatingModule } from 'primeng/rating';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatDividerModule } from '@angular/material/divider';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { PpBreadcrumbsModule } from 'pp-breadcrumbs';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from "primeng/table";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CheckboxModule } from "primeng/checkbox";
import { TabViewModule } from "primeng/tabview";
import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { RadioButtonModule } from "primeng/radiobutton";
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
// import { AngularEditorModule } from '@kolkov/angular-editor';
// import { PasswordModule } from 'primeng/password';
// import { AuthInterceptorService } from '../_guards/auth-interceptor.service';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { PanelMenuModule } from 'primeng/panelmenu';
// import { CdTimerModule } from 'angular-cd-timer';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FieldsetModule } from 'primeng/fieldset';
import { StyleClassModule } from 'primeng/styleclass';
import { SpeedDialModule } from 'primeng/speeddial';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipsModule } from 'primeng/chips';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabMenuModule } from 'primeng/tabmenu';
// import { GenericListFilterModule } from 'generic-list-filter'
import { ToggleButtonModule } from 'primeng/togglebutton';


const allMaterials = [
  FieldsetModule,
  ScrollPanelModule,
  OverlayPanelModule,
  // MatFormFieldModule,
  // MatButtonModule,
  // MatIconModule,
  // MatChipsModule,
  FormsModule,
  
  // DragDropModule,
  // MatExpansionModule,
  // MatSlideToggleModule,
  // MatCheckboxModule,
  // MatToolbarModule,
  // MatSidenavModule,
  // MatMenuModule,
  // MatCardModule,
  // MatInputModule,
  // MatGridListModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  // MatNativeDateModule,
  // MatDatepickerModule,
  // CdkTableModule,
  // MatTableModule,
  // MatPaginatorModule,
  // MatSortModule,
  // MatSelectModule,
  // MatStepperModule,
  // MatTooltipModule,
  // MatRadioModule,
  // MatProgressBarModule,
  // MatButtonToggleModule,
  // MatOptionModule,
  // MatDialogModule,
  // RouterModule,
  // MatSliderModule,
  // MatAutocompleteModule,
  // MatRippleModule,
  // MatListModule,
  // MatProgressSpinnerModule,
  // RatingModule,
  // MatTabsModule,
  // MatBadgeModule,
  AvatarModule,
  ButtonModule,
  MenubarModule,
  MegaMenuModule,
  InputTextModule,
  GalleriaModule,
  // FlexLayoutModule,
  // MatDividerModule,
  // BreadcrumbModule,
  // PpBreadcrumbsModule,
  CardModule,
  RippleModule,
  AvatarGroupModule,
  DataViewModule,
  TableModule,
  InputTextareaModule,
  CheckboxModule,
  TabViewModule,
  CarouselModule,
  RadioButtonModule,
  DropdownModule,
  InputMaskModule,
  CalendarModule,
  ToastModule,
  StepsModule,
  FileUploadModule,
  ToolbarModule,
  SplitterModule,
  DividerModule,
  SplitButtonModule,
  ConfirmDialogModule,
  DialogModule,
  InputNumberModule,
  // AngularEditorModule,
  // PasswordModule,
  // NgxIntlTelInputModule,
  // TooltipModule.forRoot(),
  // PanelMenuModule,
  // CdTimerModule,
  PanelModule,
  SidebarModule,
  StyleClassModule,
  SpeedDialModule,
  MultiSelectModule,
  ChipsModule,
  SelectButtonModule,
  TabMenuModule,
  // GenericListFilterModule,
  ToggleButtonModule
]

@NgModule({
  imports: [
    allMaterials
  ],
  exports: [
    allMaterials
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ]
})
export class AllMaterialModule { }