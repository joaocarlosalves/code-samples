import { Component } from '@angular/core';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
})
export class DragDropComponent {
  availableProducts: any;

  selectedProducts: any;

  draggedProduct: any;

  ngOnInit() {
    this.selectedProducts = [];
    this.availableProducts = [
      { id: '1', name: 'Black Watch' },
      { id: '2', name: 'Bamboo Watch' },
    ];
  }

  dragStart(product: any) {
    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [
        ...(this.selectedProducts as any),
        this.draggedProduct,
      ];
      this.availableProducts = this.availableProducts?.filter(
        (val: any, i: any) => i != draggedProductIndex
      );
      this.draggedProduct = null;
    }
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: any) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as any).length; i++) {
      if (product.id === (this.availableProducts as any)[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
