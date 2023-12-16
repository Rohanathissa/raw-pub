import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private object: ArrayConstructor;
  public imgCollection: Array<object> = [
    {
      image: '../../assets/img/main-slider/yellow/yellow2.png',
      thumbImage: '../../assets/img/main-slider/yellow1.png',
      alt: 'Image 1',
      title: 'Hummingbirds are amazing creatures',
      description: 'first heading\'s description',
      subtext: 'Just some overlay',
    }, {
      image: '../../assets/img/main-slider/blue.jpg',
      thumbImage: '../../assets/img/main-slider/2.jpg',
      title: 'Hummingbirds are amazing creatures',
      alt: 'Image 2',
      description: 'first heading\'s description',
      subtext: 'Just some overlay',
    }, {
      image: '../../assets/img/main-slider/2.jpg',
      thumbImage: '../../assets/img/main-slider/3.jpeg',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '../../assets/img/main-slider/3.jpeg',
      thumbImage: '../../assets/img/main-slider/ruby.jpg',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../../assets/img/main-slider/pink.jpg',
      thumbImage: '../../assets/img/main-slider/ruby.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '../../assets/img/main-slider/images.jpeg',
      thumbImage: '../../assets/img/main-slider/3.jpeg',
      title: 'Image 6',
      alt: 'Image 6'
    }
  ];

  products = [
    {
      title: 'Blue Sapphire',
      subTitle: 'Royal blue',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Heated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/main-slider/blue/main-image.jpg',
      imgCollection: [
        {
          image: '../../assets/img/blue/sub-image1.jpg',
          thumbImage: '../../assets/img/blue/main-image.jpg',
          alt: 'Image 1',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/blue/sub-image2.jpg',
          thumbImage: '../../assets/img/blue/main-image.jpg',
          alt: 'Image 2',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/blue/sub-image3.jpg',
          thumbImage: '../../assets/img/blue/main-image.jpg',
          alt: 'Image 3',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
      ]
    },
    {
      title: 'Pink Sapphire',
      subTitle: 'Baby blue',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/pink/main-image.jpg',
      imgCollection: [
        {
          image: '../../assets/img/pink/sub-image1.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 1',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/pink/sub-image2.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 2',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/pink/sub-image3.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 3',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
      ]
    },
    {
      title: 'Yellow Sapphire',
      subTitle: 'Golden blue',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/yellow/main-image.jpg',
      imgCollection: [
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
      ]
    },
    {
      title: 'Ruby',
      subTitle: 'Pigeon Blood',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/ruby/main-image.jpg',
      imgCollection: [
        {
          image: '../../assets/img/ruby/sub-image1.jpg',
          thumbImage: '../../assets/img/ruby/main-image.jpg',
          alt: 'Image 1',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/ruby/sub-image2.jpg',
          thumbImage: '../../assets/img/ruby/sub-image2.jpg',
          alt: 'Image 2',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/ruby/sub-image3.jpg',
          thumbImage: '../../assets/img/ruby/sub-image4.jpg',
          alt: 'Image 3',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
      ]
    },    {
      title: 'Blue Sapphire',
      subTitle: 'Royal blue',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Heated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/main-slider/blue/main-image.jpg',
      imgCollection: [
        {
          image: '../../assets/img/blue/sub-image1.jpg',
          thumbImage: '../../assets/img/blue/main-image.jpg',
          alt: 'Image 1',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/blue/sub-image2.jpg',
          thumbImage: '../../assets/img/blue/main-image.jpg',
          alt: 'Image 2',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/blue/sub-image3.jpg',
          thumbImage: '../../assets/img/blue/main-image.jpg',
          alt: 'Image 3',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
      ]
    },
    {
      title: 'Pink Sapphire',
      subTitle: 'Baby blue',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/pink/main-image.jpg',
      imgCollection: [
        {
          image: '../../assets/img/pink/sub-image1.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 1',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/pink/sub-image2.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 2',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/pink/sub-image3.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 3',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
      ]
    },
    {
      title: 'Yellow Sapphire',
      subTitle: 'Golden blue',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/yellow/main-image.jpg',
      imgCollection: [
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
      ]
    },
    {
      title: 'Ruby',
      subTitle: 'Pigeon Blood',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/ruby/main-image.jpg',
      imgCollection: [
        {
          image: '../../assets/img/ruby/sub-image1.jpg',
          thumbImage: '../../assets/img/ruby/main-image.jpg',
          alt: 'Image 1',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/ruby/sub-image2.jpg',
          thumbImage: '../../assets/img/ruby/sub-image2.jpg',
          alt: 'Image 2',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/ruby/sub-image3.jpg',
          thumbImage: '../../assets/img/ruby/sub-image4.jpg',
          alt: 'Image 3',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
      ]
    },
    {
      title: 'Pink Sapphire',
      subTitle: 'Baby blue',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/pink/main-image.jpg',
      imgCollection: [
        {
          image: '../../assets/img/pink/sub-image1.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 1',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/pink/sub-image2.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 2',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/pink/sub-image3.jpg',
          thumbImage: '../../assets/img/pink/main-image.jpg',
          alt: 'Image 3',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
      ]
    },
    {
      title: 'Yellow Sapphire',
      subTitle: 'Golden blue',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/yellow/main-image.jpg',
      imgCollection: [
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
      ]
    },
    {
      title: 'Ruby',
      subTitle: 'Pigeon Blood',
      dimensions: {
        height: '6 mm', width: '6 mm', length: '7 mm'
      },
      origin: 'Ceylon',
      treatment: 'Natural, Not any treated',
      shep: 'Cushion',
      weight: '2.5 crt',
      cutTop: 'Brilliant cuts',
      cutBottom: 'Step cut',
      mainImage: '../../assets/img/ruby/main-image.jpg',
      imgCollection: [
        {
          image: '../../assets/img/ruby/sub-image1.jpg',
          thumbImage: '../../assets/img/ruby/main-image.jpg',
          alt: 'Image 1',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/ruby/sub-image2.jpg',
          thumbImage: '../../assets/img/ruby/sub-image2.jpg',
          alt: 'Image 2',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
        {
          image: '../../assets/img/ruby/sub-image3.jpg',
          thumbImage: '../../assets/img/ruby/sub-image4.jpg',
          alt: 'Image 3',
          title: 'Image 122334',
          description: 'first heading\'s description',
        },
      ]
    }
  ];
  name = 'Angular qwertyuiop;[';

  constructor() {
  }

  ngOnInit(): void {
  }

  imageClickHandler(e): void {
    console.log('image click', e);
  }
}
