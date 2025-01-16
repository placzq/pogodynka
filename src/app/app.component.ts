import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  city: string = 'Wrocław'; // Domyślne miasto
  weather: any;
  currentView: string = 'pogoda'; // Domyślny widok to "Pogoda"



  // Słownik tłumaczeń
  weatherDescriptions: { [key: string]: string } = {
    "clear sky": "czyste niebo",
    "few clouds": "małe zachmurzenie",
    "scattered clouds": "rozproszone chmury",
    "broken clouds": "zachmurzenie umiarkowane",
    "shower rain": "przelotne opady",
    "rain": "deszcz",
    "thunderstorm": "burza",
    "snow": "śnieg",
    "mist": "mgła",
    "light rain": "lekki deszcz",
    "light snow": "lekki śnieg",
    "overcast clouds": "całkowite zachmurzenie",
    "haze": "mglisto",
    "fog": "gęsta mgła"
  };

  // Funkcja do tłumaczenia opisów
  translateWeather(description: string): string {
    return this.weatherDescriptions[description] || description;
  }

  constructor(private http: HttpClient) {}
  showView(view: string) {
    this.currentView = view;
  
    if (view === 'pogoda7dni') {
      this.get7DayForecast(); // Pobierz prognozę na 7 dni
    } else if (view === 'nasa') {
      this.getNasaData(); // Pobierz dane NASA przy przejściu na widok NASA
    }
  }

  ngOnInit() {
    this.getWeather(); // Automatyczne pobranie pogody dla Wrocławia
  }
  
  getWeather() {
    const apiKey = 'b7641a8213feff45cf9a7ca5a953aee6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;
    this.http.get(url).subscribe(
      (data) => {
        this.weather = data;
 
        },
      (error) => {
        console.error('Error fetching weather data:', error);
        alert('Nie znaleziono miasta. Spróbój ponownie!');
      }
    );
  }




  

  // Funkcja mapująca warunki pogodowe na własne ikony
  getWeatherIcon(condition: string): string {
    const icons: { [key: string]: string } = {
   Snow: 'icons/snowflake.png',
    Clear: 'icons/sunny.png',
    Clouds: 'icons/cloudy.png',
    Rain: 'icons/rain.png',
    Thunderstorm: 'icons/thunderstorm.png',
    Drizzle: 'icons/drizzle.png',
    Mist: 'icons/mist.png',
    };
    return icons[condition] || 'assets/icons/default.png'; // Domyślna ikona
  }
  getTodayImieniny(): string[] {
    const imieniny: { [key: string]: string[] } = {
      "2025-01-10": ["Adrian", "Wilhelmina", "Jan"],
      "2025-01-11": ["Honorata", "Matylda", "Feliks"],
      "2025-01-12": ["Arkadiusz", "Krystyna", "Cezary"],
      "2025-01-13": ["Weronika", "Bogumił", "Leontyna"],
      "2025-01-14": ["Feliksa", "Hieronim", "Odeta"],
      "2025-01-15": ["Aleksander", "Pawel", "Janina"],
      "2025-01-16": ["Marcel", "Włodzimierz", "Włodzisław"],
      "2025-01-17": ["Antoni", "Rozalia", "Jan"],
      "2025-01-18": ["Bogumiła", "Piotr", "Krzysztof"],
      "2025-01-19": ["Mariusz", "Henryk", "Marta"],
      "2025-01-20": ["Fabian", "Sebastian", "Dobiesław"],
      "2025-01-21": ["Agnieszka", "Jarosław", "Inga"],
      "2025-01-22": ["Anastazja", "Wincenty", "Dominik"],
      "2025-01-23": ["Ildefons", "Maria", "Klemens"],
      "2025-01-24": ["Franciszek", "Mirosław", "Rafał"],
      "2025-01-25": ["Paweł", "Miłosz", "Michał"],
      "2025-01-26": ["Tymoteusz", "Tytus", "Mirosław"],
      "2025-01-27": ["Angela", "Przemysław", "Ireneusz"],
      "2025-01-28": ["Karol", "Tomasz", "Julian"],
      "2025-01-29": ["Zdzisław", "Franciszek", "Walenty"],
      "2025-01-30": ["Maciej", "Marian", "Martyna"],
      "2025-01-31": ["Euzebiusz", "Jan", "Krzysztof"],
      "2025-02-01": ["Brygida", "Ignacy", "Żyrosław"],
      "2025-02-02": ["Maria", "Joanna", "Katarzyna"],
      "2025-02-03": ["Błażej", "Oskar", "Dorota"],
      "2025-02-04": ["Andrzej", "Joanna", "Tomasz"],
      "2025-02-05": ["Agnieszka", "Adriana", "Izydor"],
      "2025-02-06": ["Dorota", "Bogdan", "Tytus"],
      "2025-02-07": ["Ryszard", "Romuald", "Hilary"],
      "2025-02-08": ["Sebastian", "Stefan", "Zenon"],
      "2025-02-09": ["Apolonia", "Marcin", "Łucja"],
      "2025-02-10": ["Wilhelm", "Gabriel", "Agnieszka"],
      "2025-02-11": ["Lucjan", "Maria", "Grzegorz"],
      "2025-02-12": ["Julian", "Joanna", "Gerald"],
      "2025-02-13": ["Katarzyna", "Franciszek", "Julianna"],
      "2025-02-14": ["Walentyn", "Cyryl", "Metody"],
      "2025-02-15": ["Jowita", "Kinga", "Tadeusz"],
      "2025-02-16": ["Danuty", "Julian", "Bernard"],
      "2025-02-17": ["Agnieszka", "Zbigniew", "Łucjan"],
      "2025-02-18": ["Konstancja", "Marta", "Szymon"],
      "2025-02-19": ["Arnold", "Konrad", "Marcin"],
      "2025-02-20": ["Aniela", "Mirosław", "Roman"],
      "2025-02-21": ["Eleonora", "Feliks", "Barbara"],
      "2025-02-22": ["Marta", "Patrycja", "Zenon"],
      "2025-02-23": ["Damian", "Piotr", "Józef"],
      "2025-02-24": ["Bogusz", "Marek", "Radosław"],
      "2025-02-25": ["Wiktor", "Cezary", "Kazimierz"],
      "2025-02-26": ["Miłosz", "Aleksandra", "Roman"],
      "2025-02-27": ["Gustaw", "Szymon", "Roman"],
      "2025-02-28": ["Roman", "Aneta", "Marek"],
      "2025-03-01": ["Antoni", "Józef", "Ewelina"],
      "2025-03-02": ["Halina", "Helenka", "Martyna"],
      "2025-03-03": ["Kazimiera", "Kunegunda", "Marianna"],
      "2025-03-04": ["Adrian", "Kazimierz", "Łucja"],
      "2025-03-05": ["Wacław", "Józef", "Teofil"],
      "2025-03-06": ["Róża", "Oskar", "Jordan"],
      "2025-03-07": ["Felicja", "Paweł", "Tomasz"],
      "2025-03-08": ["Beata", "Jan", "Wincenty"],
      "2025-03-09": ["Dominik", "Franciszek", "Katarzyna"],
      "2025-03-10": ["Aleksander", "Bożena", "Maciej"],
      "2025-03-11": ["Konstanty", "Benedykt", "Eugenia"],
      "2025-03-12": ["Grzegorz", "Bernadeta", "Dobrosław"],
      "2025-03-13": ["Krystyna", "Erwin", "Rodryg"],
      "2025-03-14": ["Matylda", "Łucja", "Leonard"],
      "2025-03-15": ["Klemens", "Longin", "Zofia"],
      "2025-03-16": ["Herbert", "Henryk", "Gabriel"],
      "2025-03-17": ["Patryk", "Zbigniew", "Patrycja"],
      "2025-03-18": ["Aleksandra", "Anzelm", "Bogdan"],
      "2025-03-19": ["Józef", "Bogdan", "Nikodem"],
      "2025-03-20": ["Aleksander", "Klaudia", "Tomasz"],
      "2025-03-21": ["Ludwik", "Benedykta", "Filemon"],
      "2025-03-22": ["Katarzyna", "Bartosz", "Paweł"],
      "2025-03-23": ["Feliksa", "Oktawian", "Zbysław"],
      "2025-03-24": ["Gabriel", "Marek", "Cezary"],
      "2025-03-25": ["Maria", "Wieńczysław", "Dobrosława"],
      "2025-03-26": ["Emanuel", "Larysa", "Mirosław"],
      "2025-03-27": ["Ernest", "Rupert", "Janusz"],
      "2025-03-28": ["Aniela", "Renata", "Aleksander"],
      "2025-03-29": ["Wiktor", "Eustachy", "Cyryl"],
      "2025-03-30": ["Amelia", "Krzysztof", "Mariusz"],
      "2025-03-31": ["Beniamin", "Leonard", "Balbina"],
      "2025-04-01": ["Grażyna", "Hugo", "Zbigniew"],
      "2025-04-02": ["Franciszek", "Urban", "Ewelina"],
      "2025-04-03": ["Antoni", "Ryszard", "Janina"],
      "2025-04-04": ["Izydor", "Benedykt", "Wacław"],
      "2025-04-05": ["Irena", "Wincenty", "Juliusz"],
      "2025-04-06": ["Izabela", "Adam", "Diana"],
      "2025-04-07": ["Rufin", "Donata", "Władysław"],
      "2025-04-08": ["Julia", "Wojciech", "Cezary"],
      "2025-04-09": ["Marta", "Franciszek", "Marcelina"],
      "2025-04-10": ["Maciej", "Jan", "Borys"],
      "2025-04-11": ["Filip", "Szymon", "Leonia"],
      "2025-04-12": ["Juliusz", "Andrzej", "Jakub"],
      "2025-04-13": ["Ida", "Lucjan", "Marcin"],
      "2025-04-14": ["Józefa", "Waleria", "Michał"],
      "2025-04-15": ["Damian", "Leonid", "Paweł"],
      "2025-04-16": ["Erwin", "Marianna", "Wacław"],
      "2025-04-17": ["Klara", "Robert", "Sylwester"],
      "2025-04-18": ["Bogusław", "Apollinaria", "Anastazja"],
      "2025-04-19": ["Leona", "Czesław", "Tymoteusz"],
      "2025-04-20": ["Agnieszka", "Teodor", "Kajetan"],
      "2025-04-21": ["Wacław", "Felicjan", "Angelika"],
      "2025-04-22": ["Kajetan", "Leon", "Soter"],
      "2025-04-23": ["Wojciech", "Jerzy", "Adalbert"],
      "2025-04-24": ["Aleksander", "Horacy", "Grzegorz"],
      "2025-04-25": ["Marek", "Wiktor", "Jarosław"],
      "2025-04-26": ["Marzena", "Maria", "Jan"],
      "2025-04-27": ["Zyta", "Anastazja", "Teofil"],
      "2025-04-28": ["Paweł", "Waleria", "Maria"],
      "2025-04-29": ["Piotr", "Ryszard", "Angelika"],
      "2025-04-30": ["Marian", "Jakub", "Katarzyna"],
      "2025-05-01": ["Józef", "Filip", "Jakub"],
      "2025-05-02": ["Władysław", "Antonina", "Zygmunt"],
      "2025-05-03": ["Maria", "Józef", "Aleksander"],
      "2025-05-04": ["Florian", "Mirosław", "Walenty"],
      "2025-05-05": ["Irena", "Jacek", "Waldemar"],
      "2025-05-06": ["Jan", "Józef", "Marcin"],
      "2025-05-07": ["Ludmiła", "Augustyn", "Irena"],
      "2025-05-08": ["Stanisław", "Michał", "Eryk"],
      "2025-05-09": ["Anna", "Antonina", "Mikołaj"],
      "2025-05-10": ["Symeon", "Ireneusz", "Antonina"],
      "2025-05-11": ["Filip", "Franciszek", "Władysława"],
      "2025-05-12": ["Dominik", "Leonia", "Pankracy"],
      "2025-05-13": ["Robert", "Ofelia", "Małgorzata"],
      "2025-05-14": ["Bonifacy", "Maciej", "Bartosz"],
      "2025-05-15": ["Zofia", "Izydor", "Tadeusz"],
      "2025-05-16": ["Andrzej", "Jędrzej", "Wiktoria"],
      "2025-05-17": ["Sławomir", "Weronika", "Paschalis"],
      "2025-05-18": ["Eryk", "Aleksandra", "Erwin"],
      "2025-05-19": ["Mikołaj", "Piotr", "Augustyn"],
      "2025-05-20": ["Wiktoria", "Jan", "Wilhelm"],
      "2025-05-21": ["Wiesław", "Bazyli", "Wiktor"],
      "2025-05-22": ["Emil", "Helena", "Jan"],
      "2025-05-23": ["Iwona", "Marta", "Konstanty"],
      "2025-05-24": ["Joanna", "Maria", "Zofia"],
      "2025-05-25": ["Urban", "Grzegorz", "Lucyna"],
      "2025-05-26": ["Filip", "Alicja", "Krzysztof"],
      "2025-05-27": ["Augustyn", "Magdalena", "Maciej"],
      "2025-05-28": ["Jarosław", "Justyna", "Maria"],
      "2025-05-29": ["Magdalena", "Maria", "Zenon"],
      "2025-05-30": ["Joanna", "Ferdynand", "Krzysztof"],
      "2025-05-31": ["Aniela", "Szymon", "Wiktor"],
      "2025-06-01": ["Konrad", "Magdalena", "Jakub"],
      "2025-06-02": ["Erazm", "Marii", "Marceli"],
      "2025-06-03": ["Karol", "Tamara", "Cecylia"],
      "2025-06-04": ["Klaudia", "Marian", "Laura"],
      "2025-06-05": ["Bonifacy", "Wiesław", "Walter"],
      "2025-06-06": ["Norbert", "Paulina", "Jan"],
      "2025-06-07": ["Roberta", "Julian", "Franciszek"],
      "2025-06-08": ["Medard", "Adrian", "Cezary"],
      "2025-06-09": ["Felicjan", "Pelagia", "Anatol"],
      "2025-06-10": ["Bogumił", "Diana", "Eugeniusz"],
      "2025-06-11": ["Barnaba", "Bartosz", "Radomir"],
      "2025-06-12": ["Onufry", "Julian", "Bazyli"],
      "2025-06-13": ["Antoni", "Wawrzyniec", "Lucjan"],
      "2025-06-14": ["Bazyli", "Walerian", "Eliza"],
      "2025-06-15": ["Wit", "Witold", "Bernard"],
      "2025-06-16": ["Alina", "Aneta", "Benon"],
      "2025-06-17": ["Rita", "Alicja", "Jan"],
      "2025-06-18": ["Leona", "Erwin", "Markus"],
      "2025-06-19": ["Gerwazy", "Protazy", "Bogusław"],
      "2025-06-20": ["Andrzej", "Maria", "Rafał"],
      "2025-06-21": ["Alicja", "Euzebiusz", "Zenon"],
      "2025-06-22": ["Paulin", "Wanda", "Florian"],
      "2025-06-23": ["Władysław", "Alicja", "Maria"],
      "2025-06-24": ["Jan", "Janusz", "Zygmunt"],
      "2025-06-25": ["Lucja", "Tadeusz", "Kornelia"],
      "2025-06-26": ["Janina", "Paulina", "Władysława"],
      "2025-06-27": ["Maria", "Joanna", "Euzebiusz"],
      "2025-06-28": ["Ireneusz", "Leon", "Piotr"],
      "2025-06-29": ["Piotr", "Paweł", "Wanda"],
      "2025-06-30": ["Emil", "Lucjan", "Władysław"]
    };

    const today = new Date().toISOString().split('T')[0]; // Dzisiejsza data w formacie YYYY-MM-DD
    return imieniny[today] || ["Brak danych"];
  }

forecast: any[] = []; // Przechowuje dane prognozy na 5 dni

get7DayForecast() {
  const apiKey = 'b7641a8213feff45cf9a7ca5a953aee6'; // Wprowadź swój klucz OpenWeather API
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&appid=${apiKey}`;

  this.http.get(url).subscribe(
    (data: any) => {
      this.forecast = data.list.filter((item: any, index: number) => index % 8 === 0); // Filtruj dane na każdy dzień
    },
    (error) => {
      console.error('Error fetching 5-day forecast:', error);
      alert('Nie udało się pobrać prognozy na 5 dni. Spróbuj ponownie.');
    }
  );
}
nasaData: any = null;

getNasaData() {
  const apiKey = 'jBci8HohfJazX2XANDGN7ZM0ptq7S4Dt3BVGMWOT'; // Wprowadź swój klucz API NASA
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  this.http.get(url).subscribe(
    (data) => {
      this.nasaData = data;
    },
    (error) => {
      console.error('Error fetching NASA data:', error);
      alert('Nie udało się pobrać danych NASA.');
    }
  );
}}
