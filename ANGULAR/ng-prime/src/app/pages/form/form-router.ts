import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'autocomplete',       loadChildren: () => import('./autocomplete/autocomplete.module').then(m => m.AutocompleteModule) },
  { path: 'calendar',           loadChildren: () => import('./calendar/calendar.module').then(m => m.PCalendarModule) },
  { path: 'cascade-select',     loadChildren: () => import('./cascade-select/cascade-select.module').then(m => m.PCascadeSelectModule) },
  { path: 'checkbox',           loadChildren: () => import('./checkbox/checkbox.module').then(m => m.PCheckboxModule) },
  { path: 'chips',              loadChildren: () => import('./chips/chips.module').then(m => m.PChipsModule) },
  { path: 'colorpicker',        loadChildren: () => import('./colorpicker/colorpicker.module').then(m => m.ColorpickerModule) },
  { path: 'dropdown',           loadChildren: () => import('./dropdown/dropdown.module').then(m => m.PDropdownModule) },
  { path: 'editor',             loadChildren: () => import('./editor/editor.module').then(m => m.PEditorModule) },
  { path: 'input-group',        loadChildren: () => import('./input-group/input-group.module').then(m => m.InputGroupModule) },
  { path: 'input-mask',         loadChildren: () => import('./input-mask/input-mask.module').then(m => m.PInputMaskModule) },
  { path: 'input-number',       loadChildren: () => import('./input-number/input-number.module').then(m => m.PInputNumberModule) },
  { path: 'input-switch',       loadChildren: () => import('./input-switch/input-switch.module').then(m => m.PInputSwitchModule) },
  { path: 'input-text',         loadChildren: () => import('./input-text/input-text.module').then(m => m.PInputTextModule) },
  { path: 'input-textarea',     loadChildren: () => import('./input-textarea/input-textarea.module').then(m => m.PInputTextareaModule) },
  { path: 'knob',               loadChildren: () => import('./knob/knob.module').then(m => m.PKnobModule) },
  { path: 'key-filter',         loadChildren: () => import('./key-filter/key-filter.module').then(m => m.PKeyFilterModule) },
  { path: 'list-box',           loadChildren: () => import('./list-box/list-box.module').then(m => m.PListBoxModule) },
  { path: 'multi-select',       loadChildren: () => import('./multi-select/multi-select.module').then(m => m.PMultiSelectModule) },
  { path: 'password',           loadChildren: () => import('./password/password.module').then(m => m.PPasswordModule) },
  { path: 'radio-button',       loadChildren: () => import('./radio-button/radio-button.module').then(m => m.PRadioButtonModule) },
  { path: 'rating',             loadChildren: () => import('./rating/rating.module').then(m => m.PRatingModule) },
  { path: 'select-button',      loadChildren: () => import('./select-button/select-button.module').then(m => m.PSelectButtonModule) },
  { path: 'slider',             loadChildren: () => import('./slider/slider.module').then(m => m.PSliderModule) },
  { path: 'toggle',             loadChildren: () => import('./toggle/toggle.module').then(m => m.PToggleModule ) },
  { path: 'tree-select',        loadChildren: () => import('./tree-select/tree-select.module').then(m => m.PTreeSelectModule) },
  { path: 'tri-state-checkbox', loadChildren: () => import('./tri-state/tri-state.module').then(m => m.PTriStateModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRouterModule { }
