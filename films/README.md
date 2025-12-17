# Temat projektu  
**Movie Watchlist Manager — aplikacja React do zarządzania listą filmów do obejrzenia**

---

# Opis projektu  

Movie Watchlist Manager to aplikacja frontendowa stworzona w **React**, której celem jest umożliwienie użytkownikowi zarządzania listą filmów do obejrzenia (watchlist).  
Użytkownik może:

- dodawać filmy do listy,
- usuwać filmy z listy,
- przeglądać aktualną listę,
- korzystać z automatycznej walidacji tytułów,
- pracować na stanie globalnym dzięki Context API.

Dodatkowo projekt zawiera:

✔ 10 testów jednostkowych (AAA)  
✔ 10 testów integracyjnych (AAA)  
✔ 10 przypadków testowych dla testera manualnego  
✔ dokumentację API  
✔ czytelny podział na komponenty i warstwy logiki

---

# Uruchamianie projektu

w folderze backend/api w konsoli wpisac komende 
node server.js

w folderze films w konsoli wpisac komendy
npm install
npm start
npm run test

# Testy jednostkowe

| `AddMovie` | `src/tests/unit/AddMovie.test.jsx` | addMovie zwraca nowy film |

| `AddMovieFromMovieForm` | `src/tests/unit/AddMovieFromMovieForm.test.jsx` | MovieForm wywołuje addMovie po wprowadzeniu tytułu i kliknięciu Dodaj |

| `DeleteMovie` | `src/tests/unit/DeleteMovie.test.jsx` | deleteMovie wywołuje fetch z metodą DELETE |

| `FetchMovies` | `src/tests/unit/FetchMovies.test.jsx` | fetchMovies zwraca filmy z API |

| `Home` | `src/tests/unit/Home.test.jsx` | Home renderuje tytuł strony |

| `MovieForm` | `src/tests/unit/MovieForm.test.jsx` | MovieForm pokazuje błąd przy pustym tytule |

| `MovieFormAdd` | `src/tests/unit/MovieFormAdd.test.jsx` | MovieForm dodaje film i czyści input |

| `MovieItemDelete` | `src/tests/unit/MovieItemDelete.test.jsx` | MovieItem usuwa film po kliknięciu |

| `MovieListCounter` | `src/tests/unit/MovieListCounter.test.jsx` | MovieList pokazuje filmy i licznik |

| `MovieListFilter` | `src/tests/unit/MovieListFilter.test.jsx` | MovieList filtruje listę filmów |


## Testy integracyjne

Poniżej znajdują się testy integracyjne dla projektu „Zarządzanie filmami”. Wszystkie testy napisane są w konwencji **AAA** (Arrange, Act, Assert) i wykorzystują **React Testing Library** oraz **MSW** do mockowania API.

### 1. AddAndRefresh
**Plik:** `src/tests/integration/.AddAndRefresh.jsx`  
**Opis:** Test sprawdza, czy aplikacja poprawnie pobiera listę filmów z API i wyświetla je na ekranie.

### 2. AddMovieResetInput
**Plik:** `src/tests/integration/AddMovieResetInput.test.jsx`  
**Opis:** Test sprawdza, czy po dodaniu filmu pole input zostaje wyczyszczone.

### 3. AddMultipleMovies
**Plik:** `src/tests/integration/AddMultipleMovies.test.jsx`  
**Opis:** Test weryfikuje, czy dodawanie kilku filmów po kolei aktualizuje listę.

### 4. AddTwoMovies
**Plik:** `src/tests/integration/AddTwoMovies.test.jsx`  
**Opis:** Test sprawdza, czy dodanie dwóch różnych filmów aktualizuje listę.

### 5. DeleteFromList
**Plik:** `src/tests/integration/DeleteFromList.test.jsx`  
**Opis:** Test weryfikuje czy MovieItem można usunąć z listy.

### 6. EmptyList
**Plik:** `src/tests/integration/EmptyList.test.jsx`  
**Opis:** Test sprawdza, czy aplikacja renderuje komunikat gdy lista jest pusta.

### 7. FetchList
**Plik:** `src/tests/integration/FetchList.test.jsx`  
**Opis:** Test weryfikuje, czy MovieList renderuje filmy pobrane z API.

### 8. FormValidate
**Plik:** `src/tests/integration/FormValidate.test.jsx`  
**Opis:** Test sprawdza, czy MovieForm nie dodaje pustego tytułu.

### 9. OnlySpacesInput
**Plik:** `src/tests/integration/OnlySpacesInput.test.jsx`  
**Opis:** Test weryfikuje, czy nie dodaje filmu gdy tytuł zawiera tylko spacje.

### 10. RemoveAllMovies
**Plik:** `src/tests/integration/RemoveAllMovies.test.jsx`  
**Opis:** Test sprawdza, czy aplikacja usuwa wszystkie filmy po kolei.


# Dokumentacja API

GET /api/movies pobierz wszystkie filmy lista filmów
POSt /api/movies dodaj film { title: string } nowy film
DELETE /api/movies/:id usuń film usunięty film

# Testy manualne

| ID | Tytul | warunki poczatkowe | kroki testowe | oczekiwany rezultat |
| TC01 | Dodanie nowego filmu | Aplikacja uruchomiona, lista filmów pusta | 1. Wpisz tytuł filmu w polu input. 2. Kliknij przycisk „Dodaj”. | Film pojawia się w liście filmów. Pole input zostaje wyczyszczone. |
| TC02 | Dodanie kilku filmów | Aplikacja uruchomiona, lista filmów pusta | 1. Dodaj film „Matrix”. 2. Dodaj film „Inception”. | Oba filmy pojawiają się w liście filmów w kolejności dodania. |
| TC03 | Usunięcie filmu | Lista zawiera co najmniej jeden film | 1. Kliknij przycisk „Usuń” przy wybranym filmie. | Film zostaje usunięty z listy. Pozostałe filmy pozostają. | 
| TC04 | Nie dodawanie pustego tytułu | Aplikacja uruchomiona | 1. Kliknij „Dodaj” bez wpisywania tytułu. | Film nie zostanie dodany. Lista pozostaje bez zmian. |
| TC05 | Nie dodawanie tytułu z samych spacji | Aplikacja uruchomiona | 1. Wpisz w polu input kilka spacji. 2. Kliknij „Dodaj”. | Film nie zostanie dodany. Lista pozostaje bez zmian. |
| TC06 | Zablokowanie duplikatu | Lista zawiera film „Matrix” | 1. Wpisz „Matrix” w polu input. 2. Kliknij „Dodaj”. | Film nie zostanie dodany ponownie. Lista zawiera tylko jeden wpis „Matrix”. |
| TC07 | Wyświetlanie komunikatu dla pustej listy | Lista filmów pusta | - | Zamiast listy wyświetla się komunikat „Brak filmów na liście.” |
| TC08 | Pole input resetuje się po dodaniu | Lista filmów pusta | 1. Wpisz tytuł filmu w polu input. 2. Kliknij „Dodaj”. | Pole input zostaje wyczyszczone po dodaniu filmu. |
| TC09 | Dodawanie filmu z obcietymi spacjami | Lista filmów pusta | 1. Wpisz „ Matrix ” w polu input. 2. Kliknij „Dodaj”. | Film pojawia się w liście jako „Matrix” (bez spacji na początku i końcu). |
| TC10 | Usunięcie jednego filmu spośród wielu | Lista zawiera filmy „Matrix” i „Inception” | 1. Kliknij „Usuń” przy filmie „Matrix”. | Film „Matrix” zostaje usunięty. Film „Inception” pozostaje na liście. |


# Technologie uzyte w projekcie

HTML5
CSS3
React JS
React Testing Library
Javascript
Context API