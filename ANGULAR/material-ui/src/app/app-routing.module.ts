import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './examples/form/form.component';
import { ButtonsComponent } from './examples/components/buttons/buttons.component';
import { AutocompleteComponent } from './examples/components/autocomplete/autocomplete.component';
import { BadgeComponent } from './examples/components/badge/badge.component';
import { BottomSheetComponent } from './examples/components/bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './examples/components/button-toggle/button-toggle.component';
import { CardComponent } from './examples/components/card/card.component';
import { CheckboxComponent } from './examples/components/checkbox/checkbox.component';
import { ChipsComponent } from './examples/components/chips/chips.component';
import { DatepickerComponent } from './examples/components/datepicker/datepicker.component';
import { DialogComponent } from './examples/components/dialog/dialog.component';
import { DividerComponent } from './examples/components/divider/divider.component';
import { ExpansionPanelComponent } from './examples/components/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './examples/components/form-field/form-field.component';
import { GridListComponent } from './examples/components/grid-list/grid-list.component';
import { IconComponent } from './examples/components/icon/icon.component';
import { InputsComponent } from './examples/components/inputs/inputs.component';
import { ListComponent } from './examples/components/list/list.component';
import { MenuComponent } from './examples/components/menu/menu.component';
import { PaginatorComponent } from './examples/components/paginator/paginator.component';
import { ProgressBarComponent } from './examples/components/progress-bar/progress-bar.component';
import { SpinnerComponent } from './examples/components/spinner/spinner.component';
import { RadioComponent } from './examples/components/radio/radio.component';
import { RippleComponent } from './examples/components/ripple/ripple.component';
import { SelectComponent } from './examples/components/select/select.component';
import { SidenavComponent } from './examples/components/sidenav/sidenav.component';
import { ToggleComponent } from './examples/components/toggle/toggle.component';
import { SliderComponent } from './examples/components/slider/slider.component';
import { SnackbarComponent } from './examples/components/snackbar/snackbar.component';
import { SortHeaderComponent } from './examples/components/sort-header/sort-header.component';
import { StepperComponent } from './examples/components/stepper/stepper.component';
import { TableComponent } from './examples/components/table/table.component';
import { TabsComponent } from './examples/components/tabs/tabs.component';
import { ToolbarComponent } from './examples/components/toolbar/toolbar.component';
import { TooltipComponent } from './examples/components/tooltip/tooltip.component';
import { TreeComponent } from './examples/components/tree/tree.component';
import { CdkComponent } from './examples/cdk/cdk.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FormComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'card', component: CardComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'cdk', component: CdkComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'grid-list', component: GridListComponent },
  { path: 'icon', component: IconComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'list', component: ListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'ripple', component: RippleComponent },
  { path: 'select', component: SelectComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'toggle', component: ToggleComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'sort-header', component: SortHeaderComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'tree', component: TreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
