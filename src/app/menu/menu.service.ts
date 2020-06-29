import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductCategory } from '../models';

@Injectable({ providedIn: 'root' })
export class MenuService {
    getMenu(): Observable<ProductCategory[]> {
        return of([
            {
                "name": "Aloo dishes",
                "products": [
                    {
                        "name": "Aloo gobi",
                        "weight": 300,
                        "price": 100
                    },
                    {
                        "name": "Aloo tikki",
                        "weight": "300/110",
                        "price": 150
                    },
                    {
                        "name": "Aloo matar",
                        "weight": 300,
                        "price": 150
                    },
                    {
                        "name": "Aloo methi",
                        "weight": 300,
                        "price": 120
                    },
                    {
                        "name": "Aloo shimla mirch",
                        "weight": 300,
                        "price": 120
                    }
                ]
            },
            {
                "name": "Dal",
                "products": [
                    {
                        "name": "Dal makhani",
                        "weight": 100,
                        "price": 95
                    },
                    {
                        "name": "Dal fry",
                        "weight": 100,
                        "price": 85
                    },
                    {
                        "name": "Dal makhani 2",
                        "weight": 100,
                        "price": 95
                    }
                ]
            },
            {
                "name": "Salads",
                "products": [
                    {
                        "name": "Salad simple",
                        "additionalInformation": "Filled with sour cream",
                        "weight": 200,
                        "price": 105
                    },
                    {
                        "name": "Vegetable salad",
                        "additionalInformation": "Filled with vegetable oil",
                        "weight": 200,
                        "price": 105
                    },
                    {
                        "name": "Salad with onion",
                        "weight": 150,
                        "price": 160
                    },
                    {
                        "name": "Salad with grilled",
                        "additionalInformation": "Honey-mustard fill",
                        "weight": 150,
                        "price": 140
                    }
                ]
            },
            {
                "name": "Side dishes",
                "products": [
                    {
                        "name": "Kheer",
                        "weight": 120,
                        "price": 60
                    },
                    {
                        "name": "Khichdi",
                        "weight": 150,
                        "price": 65
                    },
                    {
                        "name": "Kofta",
                        "weight": 150,
                        "price": 50
                    },
                    {
                        "name": "Kulfi falooda",
                        "weight": 180,
                        "price": 110
                    }
                ]
            }
        ])
    }
}