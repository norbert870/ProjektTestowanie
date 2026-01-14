# Nazwa kursu
Testowanie i Jakość Oprogramowania

# Autor
Norbert Szopa 32620

# Temat projektu  
Aplikacja do zarządzania filmami do obejrzenia

# Opis projektu  

Aplikacja frontendowa stworzona w **React**, której celem jest umożliwienie użytkownikowi zarządzania listą filmów do obejrzenia.  
Użytkownik może:

- dodawać filmy do listy,
- usuwać filmy z listy,
- przeglądać aktualną listę,

Dodatkowo projekt zawiera:

✔ 10 testów jednostkowych (AAA)  
✔ 10 testów integracyjnych (AAA)  
✔ 10 przypadków testowych dla testera manualnego  
✔ dokumentację API  
✔ czytelny podział na komponenty i warstwy logiki

# Uruchamianie projektu

w folderze backend/api w konsoli wpisac komende 
node server.js

w folderze films w konsoli wpisac komendy
npm install
npm start
npm run test

## Testy jednostkowe

### 1. AddMovie 
**Plik:** `src/tests/unit/AddMovie.test.jsx` 
**Opis:** addMovie zwraca nowy film 

### 2. AddMovieFromMovieForm 
**Plik:** `src/tests/unit/AddMovieFromMovieForm.test.jsx` 
**Opis:** MovieForm wywołuje addMovie po wprowadzeniu tytułu i kliknięciu Dodaj 

### 3. DeleteMovie 
**Plik:** `src/tests/unit/DeleteMovie.test.jsx` 
**Opis:** deleteMovie wywołuje fetch z metodą DELETE 

### 4. FetchMovies 
**Plik:** `src/tests/unit/FetchMovies.test.jsx` 
**Opis:** fetchMovies zwraca filmy z API

### 5. Home 
**Plik:** `src/tests/unit/Home.test.jsx` 
**Opis:** Home renderuje tytuł strony 

### 6. MovieForm 
**Plik:** `src/tests/unit/MovieForm.test.jsx` 
**Opis:** MovieForm pokazuje błąd przy pustym tytule 

### 7. MovieFormAdd
**Plik:** `src/tests/unit/MovieFormAdd.test.jsx` 
**Opis:** MovieForm dodaje film i czyści input 

### 8. MovieItemDelete
**Plik:** `src/tests/unit/MovieItemDelete.test.jsx` 
**Opis:** MovieItem usuwa film po kliknięciu 

### 9. MovieListCounter 
**Plik:** `src/tests/unit/MovieListCounter.test.jsx` 
**Opis:** MovieList pokazuje filmy i licznik

### 10. MovieListFilter 
**Plik:** `src/tests/unit/MovieListFilter.test.jsx` 
**Opis:** MovieList filtruje listę filmów 


## Testy integracyjne

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

### GET **/api/movies** - pobiera wszystkie filmy
### POST ** /api/movies** - dodaje film
### DELETE ** /api/movies/:id** - usuwa film

# Testy manualne

### TC01 Dodanie nowego filmu 
**Warunki początkowe:** Aplikacja uruchomiona, lista filmów pusta 
**Kroki testowe:** 1. Wpisz tytuł filmu w polu input. 2. Kliknij przycisk „Dodaj”. 
**Oczekiwany rezultat:** Film pojawia się w liście filmów. Pole input zostaje wyczyszczone.

### TC02 Dodanie kilku filmów 
**Warunki początkowe:** Aplikacja uruchomiona, lista filmów pusta 
**Kroki testowe:** 1. Dodaj film „Matrix”. 2. Dodaj film „Inception”. 
**Oczekiwany rezultat:** Oba filmy pojawiają się w liście filmów w kolejności dodania.

### TC03 Usunięcie filmu 
**Warunki początkowe:** Lista zawiera co najmniej jeden film
**Kroki testowe:** 1. Kliknij przycisk „Usuń” przy wybranym filmie. 
**Oczekiwany rezultat:** Film zostaje usunięty z listy. Pozostałe filmy pozostają. 

### TC04 Nie dodawanie pustego tytułu 
**Warunki początkowe:** Aplikacja uruchomiona 
**Kroki testowe:** 1. Kliknij „Dodaj” bez wpisywania tytułu. 
**Oczekiwany rezultat:** Film nie zostanie dodany. Lista pozostaje bez zmian.

### TC05 Nie dodawanie tytułu z samych spacji
**Warunki początkowe:** Aplikacja uruchomiona 
**Kroki testowe:** 1. Wpisz w polu input kilka spacji. 2. Kliknij „Dodaj”. 
**Oczekiwany rezultat:** Film nie zostanie dodany. Lista pozostaje bez zmian.

### TC06 Zablokowanie duplikatu
**Warunki początkowe:** Lista zawiera film „Matrix” 
**Kroki testowe:** 1. Wpisz „Matrix” w polu input. 2. Kliknij „Dodaj”. 
**Oczekiwany rezultat:** Film nie zostanie dodany ponownie. Lista zawiera tylko jeden wpis „Matrix”.

### TC07 Wyświetlanie komunikatu dla pustej listy 
**Warunki początkowe:** Lista filmów pusta 
**Kroki testowe:** - 
**Oczekiwany rezultat:** Zamiast listy wyświetla się komunikat „Brak filmów na liście.” 

### TC08 Pole input resetuje się po dodaniu 
**Warunki początkowe:** Lista filmów pusta 
**Kroki testowe:** 1. Wpisz tytuł filmu w polu input. 2. Kliknij „Dodaj”. 
**Oczekiwaby rezultat:**  Pole input zostaje wyczyszczone po dodaniu filmu.

### TC09 Dodawanie filmu z obcietymi spacjami 
**Warunki początkowe:** Lista filmów pusta
**Kroki testowe:** 1. Wpisz „ Matrix ” w polu input. 2. Kliknij „Dodaj”. 
**Oczekiwany rezultat:** Film pojawia się w liście jako „Matrix” (bez spacji na początku i końcu).

### TC10 Usunięcie jednego filmu spośród wielu
**Warunki początkowe:** Lista zawiera filmy „Matrix” i „Inception” 
**Kroki testowe:** 1. Kliknij „Usuń” przy filmie „Matrix”. 
**Oczekiwany rezultat:** Film „Matrix” zostaje usunięty. Film „Inception” pozostaje na liście.


# Technologie uzyte w projekcie

HTML5,
CSS3,
React JS,
React Testing Library,
Javascript