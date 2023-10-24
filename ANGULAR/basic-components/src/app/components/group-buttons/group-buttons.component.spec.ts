import { GroupButtonsComponent as Comp }  from './group-buttons.component';

it('GroupButtonsComponent', () => {
  let comp: Comp = new Comp(), spy = spyOn(comp.getActiveButton, 'emit');
  comp.setActiveButton(2);
  spy({ text: 'Button 3', value: 'button3' });
  expect(spy).toHaveBeenCalledWith({ text: 'Button 3', value: 'button3' });
});
