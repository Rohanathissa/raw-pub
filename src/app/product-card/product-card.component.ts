import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  public title = 'raw title';
  public subtitle = 'raw subtitle';
  public imgCollection: Array<object> = [
    {
      image: '../../assets/img/yellow/sub-image1.jpg',
      thumbImage: '../../assets/img/yellow/main-image.jpg',
      alt: 'Image 1',
      title: 'Image 122334',
      description: 'first heading\'s description',
    },
    {
      image: '../../assets/img/yellow/sub-image2.jpg',
      thumbImage: '../../assets/img/yellow/sub-image2.jpg',
      alt: 'Image 2',
      title: 'Image 122334',
      description: 'first heading\'s description',
    },
    {
      image: '../../assets/img/yellow/sub-image3.jpg',
      thumbImage: '../../assets/img/yellow/sub-image3.jpg',
      alt: 'Image 3',
      title: 'Image 122334',
      description: 'first heading\'s description',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log('@@@@@@@@@@@@@@@@@@============', this.product);
    // this.imgCollection = this.product.imgCollection;
    this.imgCollection = this.product.imgCollection;
  }

  imageClickHandler($event): void {
    console.log('image', $event);
  }
}
