const translations = {
  malay: {
    english: {
      "morning": "pagi",
      "night": "malam",
      "hello": "hai",
      "goodbye": "selamat tinggal",
      "water": "air",
      "food": "makanan",
      "book": "buku",
      "house": "rumah",
      "school": "sekolah",
      "work": "kerja"
    }, 
    spanish: {
      "mañana": "pagi",
      "noche": "malam",
      "hola": "hai",
      "adiós": "selamat tinggal",
      "agua": "air",
      "comida": "makanan",
      "libro": "buku",
      "casa": "rumah",
      "escuela": "sekolah",
      "trabajo": "kerja"
    }
  },
  spanish: {
    english: {
      "morning": "mañana",
      "night": "noche",
      "hello": "hola",
      "goodbye": "adiós",
      "water": "agua",
      "food": "comida",
      "book": "libro",
      "house": "casa",
      "school": "escuela",
      "work": "trabajo"
    }, 
    malay: {
      "pagi": "mañana",
      "malam": "noche",
      "hai": "hola",
      "selamat tinggal": "adiós",
      "air": "agua",
      "makanan": "comida",
      "buku": "libro",
      "rumah": "casa",
      "sekolah": "escuela",
      "kerja": "trabajo"
    }
  },
  english: {
    malay: {
      "pagi": "morning",
      "malam": "night",
      "hai": "hello",
      "selamat tinggal": "goodbye",
      "air": "water",
      "makanan": "food",
      "buku": "book",
      "rumah": "house",
      "sekolah": "school",
      "kerja": "work"
    },
    spanish: {
      "mañana": "morning",
      "noche": "night",
      "hola": "hello",
      "adiós": "goodbye",
      "agua": "water",
      "comida": "food",
      "libro": "book",
      "casa": "house",
      "escuela": "school",
      "trabajo": "work"
    }
  }
};


export function translate(language1, language2, inputText) {
  if (translations[language2][language1].hasOwnProperty(inputText)) {
    return translations[language2][language1][inputText]
  } else {return "Not found"
    }
};