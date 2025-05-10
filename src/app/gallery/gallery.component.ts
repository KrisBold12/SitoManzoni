import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleriaModule, ButtonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
images: any[] = [
  {
    itemImageSrc: '../../assets/images/casa1.jpg',
    alt: 'Description of image 1',
    title: 'Title of image 1'
  },
  {
    itemImageSrc: '../../assets/images/casa2.jpg',
    alt: 'Description of image 2',
    title: 'Title of image 2'
  },
  {
    itemImageSrc: '../../assets/images/casa3.jpg',
    alt: 'Description of image 3',
    title: 'Title of image 3'
  },
  
  {
    itemImageSrc: '../../assets/images/casa5.jpg',
    alt: 'Description of image 5',
    title: 'Title of image 5'
  },
  {
    itemImageSrc: '../../assets/images/casa6.jpg',
    alt: 'Description of image 6',
    title: 'Title of image 6'
  },
  {
    itemImageSrc: '../../assets/images/casa7.jpg',
    alt: 'Description of image 7',
    title: 'Title of image 7'
  },
  {
    itemImageSrc: '../../assets/images/casa8.jpg',
    alt: 'Description of image 8',
    title: 'Title of image 8'
  },
  {
    itemImageSrc: '../../assets/images/casa9.jpg',
    alt: 'Description of image 9',
    title: 'Title of image 9'
  },
  {
    itemImageSrc: '../../assets/images/casa10.jpg',
    alt: 'Description of image 10',
    title: 'Title of image 10'
  },
  {
    itemImageSrc: '../../assets/images/casa11.jpg',
    alt: 'Description of image 11',
    title: 'Title of image 11'
  },
  {
    itemImageSrc: '../../assets/images/casa12.jpg',
    alt: 'Description of image 12',
    title: 'Title of image 12'
  },
  {
    itemImageSrc: '../../assets/images/casa13.jpg',
    alt: 'Description of image 13',
    title: 'Title of image 13'
  },
  {
    itemImageSrc: '../../assets/images/casa14.jpg',
    alt: 'Description of image 14',
    title: 'Title of image 14'
  },
  {
    itemImageSrc: '../../assets/images/casa15.jpg',
    alt: 'Description of image 15',
    title: 'Title of image 15'
  },
  {
    itemImageSrc: '../../assets/images/casa16.jpg',
    alt: 'Description of image 16',
    title: 'Title of image 16'
  }
];


constructor() {}


  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];
}

