import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  public itemsRegion = [];
  public itemsCountry = [];
  // dunmmy data as api is giving CORS
  public dummyData = [
    {
      DZ: {
        country: 'Algeria',
        region: 'Africa',
      },
      AO: {
        country: 'Angola',
        region: 'Africa',
      },
      BJ: {
        country: 'Benin',
        region: 'Africa',
      },
      BW: {
        country: 'Botswana',
        region: 'Africa',
      },
      BF: {
        country: 'Burkina Faso',
        region: 'Africa',
      },
      BI: {
        country: 'Burundi',
        region: 'Africa',
      },
      CV: {
        country: 'Cabo Verde',
        region: 'Africa',
      },
      CM: {
        country: 'Cameroon',
        region: 'Africa',
      },
      CF: {
        country: 'Central African Republic (the)',
        region: 'Africa',
      },
      TD: {
        country: 'Chad',
        region: 'Africa',
      },
      KM: {
        country: 'Comoros (the)',
        region: 'Africa',
      },
      CD: {
        country: 'Congo (the Democratic Republic of the)',
        region: 'Africa',
      },
      CG: {
        country: 'Congo (the)',
        region: 'Africa',
      },
      CI: {
        country: "Côte d'Ivoire",
        region: 'Africa',
      },
      DJ: {
        country: 'Djibouti',
        region: 'Africa',
      },
      EG: {
        country: 'Egypt',
        region: 'Africa',
      },
      GQ: {
        country: 'Equatorial Guinea',
        region: 'Africa',
      },
      ER: {
        country: 'Eritrea',
        region: 'Africa',
      },
      SZ: {
        country: 'Eswatini',
        region: 'Africa',
      },
      ET: {
        country: 'Ethiopia',
        region: 'Africa',
      },
      GA: {
        country: 'Gabon',
        region: 'Africa',
      },
      GM: {
        country: 'Gambia (the)',
        region: 'Africa',
      },
      GH: {
        country: 'Ghana',
        region: 'Africa',
      },
      GN: {
        country: 'Guinea',
        region: 'Africa',
      },
      GW: {
        country: 'Guinea-Bissau',
        region: 'Africa',
      },
      KE: {
        country: 'Kenya',
        region: 'Africa',
      },
      LS: {
        country: 'Lesotho',
        region: 'Africa',
      },
      LR: {
        country: 'Liberia',
        region: 'Africa',
      },
      LY: {
        country: 'Libya',
        region: 'Africa',
      },
      MG: {
        country: 'Madagascar',
        region: 'Africa',
      },
      MW: {
        country: 'Malawi',
        region: 'Africa',
      },
      ML: {
        country: 'Mali',
        region: 'Africa',
      },
      MR: {
        country: 'Mauritania',
        region: 'Africa',
      },
      MU: {
        country: 'Mauritius',
        region: 'Africa',
      },
      YT: {
        country: 'Mayotte',
        region: 'Africa',
      },
      MA: {
        country: 'Morocco',
        region: 'Africa',
      },
      MZ: {
        country: 'Mozambique',
        region: 'Africa',
      },
      NA: {
        country: 'Namibia',
        region: 'Africa',
      },
      NE: {
        country: 'Niger (the)',
        region: 'Africa',
      },
      NG: {
        country: 'Nigeria',
        region: 'Africa',
      },
      RE: {
        country: 'Réunion',
        region: 'Africa',
      },
      RW: {
        country: 'Rwanda',
        region: 'Africa',
      },
      SH: {
        country: 'Saint Helena, Ascension and Tristan da Cunha',
        region: 'Africa',
      },
      ST: {
        country: 'Sao Tome and Principe',
        region: 'Africa',
      },
      SN: {
        country: 'Senegal',
        region: 'Africa',
      },
      SC: {
        country: 'Seychelles',
        region: 'Africa',
      },
      SL: {
        country: 'Sierra Leone',
        region: 'Africa',
      },
      SO: {
        country: 'Somalia',
        region: 'Africa',
      },
      ZA: {
        country: 'South Africa',
        region: 'Africa',
      },
      SS: {
        country: 'South Sudan',
        region: 'Africa',
      },
      SD: {
        country: 'Sudan (the)',
        region: 'Africa',
      },
      TZ: {
        country: 'Tanzania, the United Republic of',
        region: 'Africa',
      },
      TG: {
        country: 'Togo',
        region: 'Africa',
      },
      TN: {
        country: 'Tunisia',
        region: 'Africa',
      },
      UG: {
        country: 'Uganda',
        region: 'Africa',
      },
      EH: {
        country: 'Western Sahara*',
        region: 'Africa',
      },
      ZM: {
        country: 'Zambia',
        region: 'Africa',
      },
      ZW: {
        country: 'Zimbabwe',
        region: 'Africa',
      },
      AQ: {
        country: 'Antarctica',
        region: 'Antarctic',
      },
      BV: {
        country: 'Bouvet Island',
        region: 'Antarctic',
      },
      TF: {
        country: 'French Southern Territories (the)',
        region: 'Antarctic',
      },
      HM: {
        country: 'Heard Island and McDonald Islands',
        region: 'Antarctic',
      },
      GS: {
        country: 'South Georgia and the South Sandwich Islands',
        region: 'Antarctic',
      },
      AF: {
        country: 'Afghanistan',
        region: 'Asia',
      },
      AM: {
        country: 'Armenia',
        region: 'Asia',
      },
      AZ: {
        country: 'Azerbaijan',
        region: 'Asia',
      },
      BD: {
        country: 'Bangladesh',
        region: 'Asia',
      },
      BT: {
        country: 'Bhutan',
        region: 'Asia',
      },
      IO: {
        country: 'British Indian Ocean Territory (the)',
        region: 'Asia',
      },
      BN: {
        country: 'Brunei Darussalam',
        region: 'Asia',
      },
      KH: {
        country: 'Cambodia',
        region: 'Asia',
      },
      CN: {
        country: 'China',
        region: 'Asia',
      },
      GE: {
        country: 'Georgia',
        region: 'Asia',
      },
      HK: {
        country: 'Hong Kong',
        region: 'Asia',
      },
      IN: {
        country: 'India',
        region: 'Asia',
      },
      ID: {
        country: 'Indonesia',
        region: 'Asia',
      },
      JP: {
        country: 'Japan',
        region: 'Asia',
      },
      KZ: {
        country: 'Kazakhstan',
        region: 'Asia',
      },
      KP: {
        country: "Korea (the Democratic People's Republic of)",
        region: 'Asia',
      },
      KR: {
        country: 'Korea (the Republic of)',
        region: 'Asia',
      },
      KG: {
        country: 'Kyrgyzstan',
        region: 'Asia',
      },
      LA: {
        country: "Lao People's Democratic Republic (the)",
        region: 'Asia',
      },
      MO: {
        country: 'Macao',
        region: 'Asia',
      },
      MY: {
        country: 'Malaysia',
        region: 'Asia',
      },
      MV: {
        country: 'Maldives',
        region: 'Asia',
      },
      MN: {
        country: 'Mongolia',
        region: 'Asia',
      },
      MM: {
        country: 'Myanmar',
        region: 'Asia',
      },
      NP: {
        country: 'Nepal',
        region: 'Asia',
      },
      PK: {
        country: 'Pakistan',
        region: 'Asia',
      },
      PH: {
        country: 'Philippines (the)',
        region: 'Asia',
      },
      SG: {
        country: 'Singapore',
        region: 'Asia',
      },
      LK: {
        country: 'Sri Lanka',
        region: 'Asia',
      },
      TW: {
        country: 'Taiwan (Province of China)',
        region: 'Asia',
      },
      TJ: {
        country: 'Tajikistan',
        region: 'Asia',
      },
      TH: {
        country: 'Thailand',
        region: 'Asia',
      },
      TL: {
        country: 'Timor-Leste',
        region: 'Asia',
      },
      TM: {
        country: 'Turkmenistan',
        region: 'Asia',
      },
      UZ: {
        country: 'Uzbekistan',
        region: 'Asia',
      },
      VN: {
        country: 'Viet Nam',
        region: 'Asia',
      },
      BZ: {
        country: 'Belize',
        region: 'Central America',
      },
    },
  ];
  errorMessage = '';
  public customerData: any = [];
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    // call api to get country and region
    this.fetchCountries();
  }
  onSubmit(form: any): void {
    // set formdata in localStorage
    let storedArray = JSON.parse(localStorage.getItem('customerArr') || '[]');
    storedArray.push(form.value);
    localStorage.setItem('customerArr', JSON.stringify(storedArray));
    alert('Customer is created successfully!');
    this.router.navigate(['/list-pin-cust-crud']);
  }
  // Method to fetch countries/region directly from the API
  fetchCountries() {
    this.http.get<any>('https://api.first.org/data/v1/countries').subscribe(
      (data) => {
        this.itemsCountry = data.data; // Store the countries/region data
      },
      (error) => {
        this.errorMessage = 'Error fetching countries data';
        console.error(error);
        this.extractRegions();
      }
    );
  }
  // extracting region unique as based on country code
  extractRegions() {
    for (const countryCode in this.dummyData[0]) {
      if (this.dummyData[0].hasOwnProperty(countryCode)) {
        const region = this.dummyData[0][countryCode].region;
        const country = this.dummyData[0][countryCode].country;
        // Check if region already exists in the array before adding
        if (!this.itemsRegion.includes(region)) {
          this.itemsRegion.push(region);
        }
        if (!this.itemsCountry.includes(country)) {
          this.itemsCountry.push(country);
        }
      }
    }
  }
}
