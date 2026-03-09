// Popular timezones with cities - ~300 major cities worldwide
const TIMEZONES = [
  // USA - Eastern Time
  { city: 'New York', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Brooklyn', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Queens', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Manhattan', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Bronx', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Boston', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Philadelphia', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Pittsburgh', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Miami', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Fort Lauderdale', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Orlando', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Tampa', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Jacksonville', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Atlanta', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Charlotte', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Raleigh', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Washington DC', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Baltimore', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Detroit', timezone: 'America/Detroit', country: 'USA', countryCode: 'US' },
  { city: 'Columbus', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Cleveland', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Cincinnati', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Indianapolis', timezone: 'America/Indiana/Indianapolis', country: 'USA', countryCode: 'US' },
  { city: 'Louisville', timezone: 'America/Kentucky/Louisville', country: 'USA', countryCode: 'US' },
  { city: 'Buffalo', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Rochester', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  { city: 'Richmond', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
  
  // USA - Central Time
  { city: 'Chicago', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Dallas', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Fort Worth', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Houston', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Austin', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'San Antonio', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'El Paso', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'Minneapolis', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'St. Paul', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Milwaukee', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Oklahoma City', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Tulsa', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'New Orleans', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Memphis', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Nashville', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'St. Louis', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Kansas City', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Omaha', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Des Moines', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Wichita', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Little Rock', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Birmingham', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  { city: 'Mobile', timezone: 'America/Chicago', country: 'USA', countryCode: 'US' },
  
  // USA - Mountain Time
  { city: 'Denver', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'Colorado Springs', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'Aurora', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'Salt Lake City', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'Albuquerque', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'Santa Fe', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'Tucson', timezone: 'America/Phoenix', country: 'USA', countryCode: 'US' },
  { city: 'Phoenix', timezone: 'America/Phoenix', country: 'USA', countryCode: 'US' },
  { city: 'Scottsdale', timezone: 'America/Phoenix', country: 'USA', countryCode: 'US' },
  { city: 'Mesa', timezone: 'America/Phoenix', country: 'USA', countryCode: 'US' },
  { city: 'Boise', timezone: 'America/Boise', country: 'USA', countryCode: 'US' },
  { city: 'Billings', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  { city: 'Cheyenne', timezone: 'America/Denver', country: 'USA', countryCode: 'US' },
  
  // USA - Pacific Time
  { city: 'Los Angeles', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'San Francisco', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'San Jose', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'San Diego', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Seattle', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Portland', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Las Vegas', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Reno', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Sacramento', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Oakland', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Fresno', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Long Beach', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Anaheim', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Riverside', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Spokane', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Tacoma', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  { city: 'Eugene', timezone: 'America/Los_Angeles', country: 'USA', countryCode: 'US' },
  
  // USA - Alaska & Hawaii
  { city: 'Anchorage', timezone: 'America/Anchorage', country: 'USA', countryCode: 'US' },
  { city: 'Fairbanks', timezone: 'America/Anchorage', country: 'USA', countryCode: 'US' },
  { city: 'Juneau', timezone: 'America/Juneau', country: 'USA', countryCode: 'US' },
  { city: 'Honolulu', timezone: 'Pacific/Honolulu', country: 'USA', countryCode: 'US' },
  
  // Canada
  { city: 'Toronto', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA' },
  { city: 'Montreal', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA' },
  { city: 'Ottawa', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA' },
  { city: 'Quebec City', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA' },
  { city: 'Vancouver', timezone: 'America/Vancouver', country: 'Canada', countryCode: 'CA' },
  { city: 'Victoria', timezone: 'America/Vancouver', country: 'Canada', countryCode: 'CA' },
  { city: 'Calgary', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA' },
  { city: 'Edmonton', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA' },
  { city: 'Winnipeg', timezone: 'America/Winnipeg', country: 'Canada', countryCode: 'CA' },
  { city: 'Regina', timezone: 'America/Regina', country: 'Canada', countryCode: 'CA' },
  { city: 'Saskatoon', timezone: 'America/Regina', country: 'Canada', countryCode: 'CA' },
  { city: 'Halifax', timezone: 'America/Halifax', country: 'Canada', countryCode: 'CA' },
  { city: 'St. John\'s', timezone: 'America/St_Johns', country: 'Canada', countryCode: 'CA' },
  
  // Mexico & Central America
  { city: 'Mexico City', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX' },
  { city: 'Guadalajara', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX' },
  { city: 'Monterrey', timezone: 'America/Monterrey', country: 'Mexico', countryCode: 'MX' },
  { city: 'Puebla', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX' },
  { city: 'Toluca', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX' },
  { city: 'Tijuana', timezone: 'America/Tijuana', country: 'Mexico', countryCode: 'MX' },
  { city: 'León', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX' },
  { city: 'Cancún', timezone: 'America/Cancun', country: 'Mexico', countryCode: 'MX' },
  { city: 'Mérida', timezone: 'America/Merida', country: 'Mexico', countryCode: 'MX' },
  { city: 'Acapulco', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX' },
  { city: 'Guatemala City', timezone: 'America/Guatemala', country: 'Guatemala', countryCode: 'GT' },
  { city: 'San Salvador', timezone: 'America/El_Salvador', country: 'El Salvador', countryCode: 'SV' },
  { city: 'Tegucigalpa', timezone: 'America/Tegucigalpa', country: 'Honduras', countryCode: 'HN' },
  { city: 'Managua', timezone: 'America/Managua', country: 'Nicaragua', countryCode: 'NI' },
  { city: 'San José', timezone: 'America/Costa_Rica', country: 'Costa Rica', countryCode: 'CR' },
  { city: 'Panama City', timezone: 'America/Panama', country: 'Panama', countryCode: 'PA' },
  { city: 'Havana', timezone: 'America/Havana', country: 'Cuba', countryCode: 'CU' },
  { city: 'Kingston', timezone: 'America/Jamaica', country: 'Jamaica', countryCode: 'JM' },
  { city: 'San Juan', timezone: 'America/Puerto_Rico', country: 'Puerto Rico', countryCode: 'PR' },
  
  // South America
  { city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR' },
  { city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR' },
  { city: 'Brasília', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR' },
  { city: 'Salvador', timezone: 'America/Bahia', country: 'Brazil', countryCode: 'BR' },
  { city: 'Fortaleza', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR' },
  { city: 'Belo Horizonte', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR' },
  { city: 'Manaus', timezone: 'America/Manaus', country: 'Brazil', countryCode: 'BR' },
  { city: 'Recife', timezone: 'America/Recife', country: 'Brazil', countryCode: 'BR' },
  { city: 'Porto Alegre', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR' },
  { city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR' },
  { city: 'Córdoba', timezone: 'America/Argentina/Cordoba', country: 'Argentina', countryCode: 'AR' },
  { city: 'Rosario', timezone: 'America/Argentina/Cordoba', country: 'Argentina', countryCode: 'AR' },
  { city: 'Mendoza', timezone: 'America/Argentina/Mendoza', country: 'Argentina', countryCode: 'AR' },
  { city: 'Santiago', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL' },
  { city: 'Valparaíso', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL' },
  { city: 'Lima', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE' },
  { city: 'Arequipa', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE' },
  { city: 'Bogotá', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO' },
  { city: 'Medellín', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO' },
  { city: 'Cali', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO' },
  { city: 'Caracas', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE' },
  { city: 'Maracaibo', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE' },
  { city: 'Quito', timezone: 'America/Guayaquil', country: 'Ecuador', countryCode: 'EC' },
  { city: 'Guayaquil', timezone: 'America/Guayaquil', country: 'Ecuador', countryCode: 'EC' },
  { city: 'La Paz', timezone: 'America/La_Paz', country: 'Bolivia', countryCode: 'BO' },
  { city: 'Santa Cruz', timezone: 'America/La_Paz', country: 'Bolivia', countryCode: 'BO' },
  { city: 'Asunción', timezone: 'America/Asuncion', country: 'Paraguay', countryCode: 'PY' },
  { city: 'Montevideo', timezone: 'America/Montevideo', country: 'Uruguay', countryCode: 'UY' },
  
  // UK & Ireland
  { city: 'London', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Manchester', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Birmingham', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Liverpool', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Leeds', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Glasgow', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Edinburgh', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Bristol', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Newcastle', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Belfast', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Cardiff', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
  { city: 'Dublin', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE' },
  { city: 'Cork', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE' },
  { city: 'Galway', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE' },
  
  // Western Europe
  { city: 'Paris', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Marseille', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Lyon', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Toulouse', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Nice', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Nantes', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Strasbourg', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Bordeaux', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR' },
  { city: 'Berlin', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Hamburg', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Munich', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Cologne', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Frankfurt', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Stuttgart', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Düsseldorf', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Dortmund', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Essen', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Leipzig', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE' },
  { city: 'Amsterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL' },
  { city: 'Rotterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL' },
  { city: 'The Hague', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL' },
  { city: 'Utrecht', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL' },
  { city: 'Brussels', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE' },
  { city: 'Antwerp', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE' },
  { city: 'Ghent', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE' },
  { city: 'Zurich', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH' },
  { city: 'Geneva', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH' },
  { city: 'Basel', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH' },
  { city: 'Bern', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH' },
  { city: 'Vienna', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT' },
  { city: 'Graz', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT' },
  { city: 'Salzburg', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT' },
  { city: 'Luxembourg', timezone: 'Europe/Luxembourg', country: 'Luxembourg', countryCode: 'LU' },
  
  // Southern Europe
  { city: 'Madrid', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES' },
  { city: 'Barcelona', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES' },
  { city: 'Valencia', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES' },
  { city: 'Seville', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES' },
  { city: 'Zaragoza', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES' },
  { city: 'Málaga', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES' },
  { city: 'Bilbao', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES' },
  { city: 'Rome', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Milan', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Naples', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Turin', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Palermo', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Genoa', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Bologna', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Florence', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Venice', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT' },
  { city: 'Lisbon', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT' },
  { city: 'Porto', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT' },
  { city: 'Athens', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR' },
  { city: 'Thessaloniki', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR' },
  
  // Northern Europe
  { city: 'Stockholm', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE' },
  { city: 'Gothenburg', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE' },
  { city: 'Malmö', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE' },
  { city: 'Copenhagen', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK' },
  { city: 'Aarhus', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK' },
  { city: 'Oslo', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO' },
  { city: 'Bergen', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO' },
  { city: 'Helsinki', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI' },
  { city: 'Espoo', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI' },
  { city: 'Reykjavik', timezone: 'Atlantic/Reykjavik', country: 'Iceland', countryCode: 'IS' },
  
  // Eastern Europe
  { city: 'Moscow', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU' },
  { city: 'St. Petersburg', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU' },
  { city: 'Novosibirsk', timezone: 'Asia/Novosibirsk', country: 'Russia', countryCode: 'RU' },
  { city: 'Yekaterinburg', timezone: 'Asia/Yekaterinburg', country: 'Russia', countryCode: 'RU' },
  { city: 'Kazan', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU' },
  { city: 'Nizhny Novgorod', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU' },
  { city: 'Vladivostok', timezone: 'Asia/Vladivostok', country: 'Russia', countryCode: 'RU' },
  { city: 'Istanbul', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR' },
  { city: 'Ankara', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR' },
  { city: 'Izmir', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR' },
  { city: 'Bursa', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR' },
  { city: 'Warsaw', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL' },
  { city: 'Kraków', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL' },
  { city: 'Łódź', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL' },
  { city: 'Wrocław', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL' },
  { city: 'Prague', timezone: 'Europe/Prague', country: 'Czech Republic', countryCode: 'CZ' },
  { city: 'Brno', timezone: 'Europe/Prague', country: 'Czech Republic', countryCode: 'CZ' },
  { city: 'Budapest', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU' },
  { city: 'Bucharest', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO' },
  { city: 'Sofia', timezone: 'Europe/Sofia', country: 'Bulgaria', countryCode: 'BG' },
  { city: 'Belgrade', timezone: 'Europe/Belgrade', country: 'Serbia', countryCode: 'RS' },
  { city: 'Zagreb', timezone: 'Europe/Zagreb', country: 'Croatia', countryCode: 'HR' },
  { city: 'Bratislava', timezone: 'Europe/Bratislava', country: 'Slovakia', countryCode: 'SK' },
  { city: 'Ljubljana', timezone: 'Europe/Ljubljana', country: 'Slovenia', countryCode: 'SI' },
  { city: 'Kyiv', timezone: 'Europe/Kyiv', country: 'Ukraine', countryCode: 'UA' },
  { city: 'Odesa', timezone: 'Europe/Kyiv', country: 'Ukraine', countryCode: 'UA' },
  { city: 'Minsk', timezone: 'Europe/Minsk', country: 'Belarus', countryCode: 'BY' },
  { city: 'Vilnius', timezone: 'Europe/Vilnius', country: 'Lithuania', countryCode: 'LT' },
  { city: 'Riga', timezone: 'Europe/Riga', country: 'Latvia', countryCode: 'LV' },
  { city: 'Tallinn', timezone: 'Europe/Tallinn', country: 'Estonia', countryCode: 'EE' },
  
  // Middle East
  { city: 'Dubai', timezone: 'Asia/Dubai', country: 'UAE', countryCode: 'AE' },
  { city: 'Abu Dhabi', timezone: 'Asia/Dubai', country: 'UAE', countryCode: 'AE' },
  { city: 'Sharjah', timezone: 'Asia/Dubai', country: 'UAE', countryCode: 'AE' },
  { city: 'Riyadh', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA' },
  { city: 'Jeddah', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA' },
  { city: 'Mecca', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA' },
  { city: 'Medina', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA' },
  { city: 'Doha', timezone: 'Asia/Qatar', country: 'Qatar', countryCode: 'QA' },
  { city: 'Kuwait City', timezone: 'Asia/Kuwait', country: 'Kuwait', countryCode: 'KW' },
  { city: 'Manama', timezone: 'Asia/Bahrain', country: 'Bahrain', countryCode: 'BH' },
  { city: 'Muscat', timezone: 'Asia/Muscat', country: 'Oman', countryCode: 'OM' },
  { city: 'Amman', timezone: 'Asia/Amman', country: 'Jordan', countryCode: 'JO' },
  { city: 'Beirut', timezone: 'Asia/Beirut', country: 'Lebanon', countryCode: 'LB' },
  { city: 'Damascus', timezone: 'Asia/Damascus', country: 'Syria', countryCode: 'SY' },
  { city: 'Baghdad', timezone: 'Asia/Baghdad', country: 'Iraq', countryCode: 'IQ' },
  { city: 'Tehran', timezone: 'Asia/Tehran', country: 'Iran', countryCode: 'IR' },
  { city: 'Tel Aviv', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL' },
  { city: 'Jerusalem', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL' },
  { city: 'Haifa', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL' },
  
  // Africa
  { city: 'Cairo', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG' },
  { city: 'Alexandria', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG' },
  { city: 'Giza', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG' },
  { city: 'Lagos', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG' },
  { city: 'Kano', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG' },
  { city: 'Ibadan', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG' },
  { city: 'Abuja', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG' },
  { city: 'Johannesburg', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA' },
  { city: 'Cape Town', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA' },
  { city: 'Durban', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA' },
  { city: 'Pretoria', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA' },
  { city: 'Nairobi', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE' },
  { city: 'Mombasa', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE' },
  { city: 'Addis Ababa', timezone: 'Africa/Addis_Ababa', country: 'Ethiopia', countryCode: 'ET' },
  { city: 'Accra', timezone: 'Africa/Accra', country: 'Ghana', countryCode: 'GH' },
  { city: 'Dar es Salaam', timezone: 'Africa/Dar_es_Salaam', country: 'Tanzania', countryCode: 'TZ' },
  { city: 'Casablanca', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA' },
  { city: 'Rabat', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA' },
  { city: 'Algiers', timezone: 'Africa/Algiers', country: 'Algeria', countryCode: 'DZ' },
  { city: 'Tunis', timezone: 'Africa/Tunis', country: 'Tunisia', countryCode: 'TN' },
  { city: 'Tripoli', timezone: 'Africa/Tripoli', country: 'Libya', countryCode: 'LY' },
  { city: 'Khartoum', timezone: 'Africa/Khartoum', country: 'Sudan', countryCode: 'SD' },
  { city: 'Kampala', timezone: 'Africa/Kampala', country: 'Uganda', countryCode: 'UG' },
  { city: 'Lusaka', timezone: 'Africa/Lusaka', country: 'Zambia', countryCode: 'ZM' },
  { city: 'Harare', timezone: 'Africa/Harare', country: 'Zimbabwe', countryCode: 'ZW' },
  
  // India & South Asia
  { city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Delhi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Bangalore', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Hyderabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Ahmedabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Chennai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Kolkata', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Surat', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Pune', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Jaipur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Lucknow', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Kanpur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN' },
  { city: 'Karachi', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK' },
  { city: 'Lahore', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK' },
  { city: 'Islamabad', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK' },
  { city: 'Dhaka', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD' },
  { city: 'Chittagong', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD' },
  { city: 'Colombo', timezone: 'Asia/Colombo', country: 'Sri Lanka', countryCode: 'LK' },
  { city: 'Kathmandu', timezone: 'Asia/Kathmandu', country: 'Nepal', countryCode: 'NP' },
  
  // East Asia
  { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Yokohama', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Osaka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Nagoya', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Sapporo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Fukuoka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Kobe', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Kyoto', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' },
  { city: 'Seoul', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR' },
  { city: 'Busan', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR' },
  { city: 'Incheon', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR' },
  { city: 'Beijing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Shanghai', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Guangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Shenzhen', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Chengdu', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Chongqing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Tianjin', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Wuhan', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Xi\'an', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Hangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Nanjing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN' },
  { city: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'Hong Kong', countryCode: 'HK' },
  { city: 'Macau', timezone: 'Asia/Macau', country: 'Macau', countryCode: 'MO' },
  { city: 'Taipei', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW' },
  { city: 'Kaohsiung', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW' },
  { city: 'Taichung', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW' },
  { city: 'Ulaanbaatar', timezone: 'Asia/Ulaanbaatar', country: 'Mongolia', countryCode: 'MN' },
  
  // Southeast Asia
  { city: 'Singapore', timezone: 'Asia/Singapore', country: 'Singapore', countryCode: 'SG' },
  { city: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH' },
  { city: 'Phuket', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH' },
  { city: 'Chiang Mai', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH' },
  { city: 'Manila', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH' },
  { city: 'Quezon City', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH' },
  { city: 'Davao', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH' },
  { city: 'Cebu', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH' },
  { city: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID' },
  { city: 'Surabaya', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID' },
  { city: 'Bandung', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID' },
  { city: 'Bali', timezone: 'Asia/Makassar', country: 'Indonesia', countryCode: 'ID' },
  { city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY' },
  { city: 'George Town', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY' },
  { city: 'Ho Chi Minh City', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN' },
  { city: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN' },
  { city: 'Phnom Penh', timezone: 'Asia/Phnom_Penh', country: 'Cambodia', countryCode: 'KH' },
  { city: 'Vientiane', timezone: 'Asia/Vientiane', country: 'Laos', countryCode: 'LA' },
  { city: 'Yangon', timezone: 'Asia/Yangon', country: 'Myanmar', countryCode: 'MM' },
  { city: 'Naypyidaw', timezone: 'Asia/Yangon', country: 'Myanmar', countryCode: 'MM' },
  
  // Australia & Pacific
  { city: 'Sydney', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU' },
  { city: 'Melbourne', timezone: 'Australia/Melbourne', country: 'Australia', countryCode: 'AU' },
  { city: 'Brisbane', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU' },
  { city: 'Perth', timezone: 'Australia/Perth', country: 'Australia', countryCode: 'AU' },
  { city: 'Adelaide', timezone: 'Australia/Adelaide', country: 'Australia', countryCode: 'AU' },
  { city: 'Gold Coast', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU' },
  { city: 'Canberra', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU' },
  { city: 'Auckland', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ' },
  { city: 'Wellington', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ' },
  { city: 'Christchurch', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ' },
  { city: 'Fiji', timezone: 'Pacific/Fiji', country: 'Fiji', countryCode: 'FJ' },
  { city: 'Port Moresby', timezone: 'Pacific/Port_Moresby', country: 'Papua New Guinea', countryCode: 'PG' },
  
  // IANA Timezone Codes (Direct Selection)
  // America - North America
  { city: 'America/New_York', timezone: 'America/New_York', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Chicago', timezone: 'America/Chicago', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Denver', timezone: 'America/Denver', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Los_Angeles', timezone: 'America/Los_Angeles', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Anchorage', timezone: 'America/Anchorage', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Phoenix', timezone: 'America/Phoenix', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Detroit', timezone: 'America/Detroit', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Indiana/Indianapolis', timezone: 'America/Indiana/Indianapolis', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Kentucky/Louisville', timezone: 'America/Kentucky/Louisville', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Boise', timezone: 'America/Boise', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Toronto', timezone: 'America/Toronto', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Vancouver', timezone: 'America/Vancouver', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Edmonton', timezone: 'America/Edmonton', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Winnipeg', timezone: 'America/Winnipeg', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Halifax', timezone: 'America/Halifax', country: 'Timezone Code', countryCode: '' },
  { city: 'America/St_Johns', timezone: 'America/St_Johns', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Mexico_City', timezone: 'America/Mexico_City', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Cancun', timezone: 'America/Cancun', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Tijuana', timezone: 'America/Tijuana', country: 'Timezone Code', countryCode: '' },
  
  // America - Central & South America
  { city: 'America/Guatemala', timezone: 'America/Guatemala', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Panama', timezone: 'America/Panama', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Costa_Rica', timezone: 'America/Costa_Rica', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Havana', timezone: 'America/Havana', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Bogota', timezone: 'America/Bogota', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Lima', timezone: 'America/Lima', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Santiago', timezone: 'America/Santiago', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Buenos_Aires', timezone: 'America/Buenos_Aires', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Sao_Paulo', timezone: 'America/Sao_Paulo', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Caracas', timezone: 'America/Caracas', country: 'Timezone Code', countryCode: '' },
  { city: 'America/La_Paz', timezone: 'America/La_Paz', country: 'Timezone Code', countryCode: '' },
  { city: 'America/Montevideo', timezone: 'America/Montevideo', country: 'Timezone Code', countryCode: '' },
  
  // Europe
  { city: 'Europe/London', timezone: 'Europe/London', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Paris', timezone: 'Europe/Paris', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Berlin', timezone: 'Europe/Berlin', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Rome', timezone: 'Europe/Rome', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Madrid', timezone: 'Europe/Madrid', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Amsterdam', timezone: 'Europe/Amsterdam', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Brussels', timezone: 'Europe/Brussels', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Zurich', timezone: 'Europe/Zurich', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Vienna', timezone: 'Europe/Vienna', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Stockholm', timezone: 'Europe/Stockholm', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Oslo', timezone: 'Europe/Oslo', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Copenhagen', timezone: 'Europe/Copenhagen', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Helsinki', timezone: 'Europe/Helsinki', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Dublin', timezone: 'Europe/Dublin', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Lisbon', timezone: 'Europe/Lisbon', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Athens', timezone: 'Europe/Athens', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Istanbul', timezone: 'Europe/Istanbul', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Moscow', timezone: 'Europe/Moscow', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Warsaw', timezone: 'Europe/Warsaw', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Prague', timezone: 'Europe/Prague', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Budapest', timezone: 'Europe/Budapest', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Bucharest', timezone: 'Europe/Bucharest', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Sofia', timezone: 'Europe/Sofia', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Belgrade', timezone: 'Europe/Belgrade', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Zagreb', timezone: 'Europe/Zagreb', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Kiev', timezone: 'Europe/Kiev', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Minsk', timezone: 'Europe/Minsk', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Vilnius', timezone: 'Europe/Vilnius', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Riga', timezone: 'Europe/Riga', country: 'Timezone Code', countryCode: '' },
  { city: 'Europe/Tallinn', timezone: 'Europe/Tallinn', country: 'Timezone Code', countryCode: '' },
  { city: 'Atlantic/Reykjavik', timezone: 'Atlantic/Reykjavik', country: 'Timezone Code', countryCode: '' },
  
  // Asia - Middle East
  { city: 'Asia/Dubai', timezone: 'Asia/Dubai', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Riyadh', timezone: 'Asia/Riyadh', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Qatar', timezone: 'Asia/Qatar', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Kuwait', timezone: 'Asia/Kuwait', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Bahrain', timezone: 'Asia/Bahrain', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Muscat', timezone: 'Asia/Muscat', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Tehran', timezone: 'Asia/Tehran', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Jerusalem', timezone: 'Asia/Jerusalem', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Amman', timezone: 'Asia/Amman', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Beirut', timezone: 'Asia/Beirut', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Damascus', timezone: 'Asia/Damascus', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Baghdad', timezone: 'Asia/Baghdad', country: 'Timezone Code', countryCode: '' },
  
  // Asia - South & Southeast Asia
  { city: 'Asia/Kolkata', timezone: 'Asia/Kolkata', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Karachi', timezone: 'Asia/Karachi', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Dhaka', timezone: 'Asia/Dhaka', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Kathmandu', timezone: 'Asia/Kathmandu', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Colombo', timezone: 'Asia/Colombo', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Bangkok', timezone: 'Asia/Bangkok', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Singapore', timezone: 'Asia/Singapore', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Kuala_Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Manila', timezone: 'Asia/Manila', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Jakarta', timezone: 'Asia/Jakarta', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Ho_Chi_Minh', timezone: 'Asia/Ho_Chi_Minh', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Yangon', timezone: 'Asia/Yangon', country: 'Timezone Code', countryCode: '' },
  
  // Asia - East Asia
  { city: 'Asia/Tokyo', timezone: 'Asia/Tokyo', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Seoul', timezone: 'Asia/Seoul', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Shanghai', timezone: 'Asia/Shanghai', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Hong_Kong', timezone: 'Asia/Hong_Kong', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Taipei', timezone: 'Asia/Taipei', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Macau', timezone: 'Asia/Macau', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Ulaanbaatar', timezone: 'Asia/Ulaanbaatar', country: 'Timezone Code', countryCode: '' },
  
  // Asia - Central & North Asia
  { city: 'Asia/Yekaterinburg', timezone: 'Asia/Yekaterinburg', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Novosibirsk', timezone: 'Asia/Novosibirsk', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Krasnoyarsk', timezone: 'Asia/Krasnoyarsk', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Irkutsk', timezone: 'Asia/Irkutsk', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Vladivostok', timezone: 'Asia/Vladivostok', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Tashkent', timezone: 'Asia/Tashkent', country: 'Timezone Code', countryCode: '' },
  { city: 'Asia/Almaty', timezone: 'Asia/Almaty', country: 'Timezone Code', countryCode: '' },
  
  // Africa
  { city: 'Africa/Cairo', timezone: 'Africa/Cairo', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Lagos', timezone: 'Africa/Lagos', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Johannesburg', timezone: 'Africa/Johannesburg', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Nairobi', timezone: 'Africa/Nairobi', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Casablanca', timezone: 'Africa/Casablanca', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Algiers', timezone: 'Africa/Algiers', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Tunis', timezone: 'Africa/Tunis', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Addis_Ababa', timezone: 'Africa/Addis_Ababa', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Accra', timezone: 'Africa/Accra', country: 'Timezone Code', countryCode: '' },
  { city: 'Africa/Dar_es_Salaam', timezone: 'Africa/Dar_es_Salaam', country: 'Timezone Code', countryCode: '' },
  
  // Australia & Pacific
  { city: 'Australia/Sydney', timezone: 'Australia/Sydney', country: 'Timezone Code', countryCode: '' },
  { city: 'Australia/Melbourne', timezone: 'Australia/Melbourne', country: 'Timezone Code', countryCode: '' },
  { city: 'Australia/Brisbane', timezone: 'Australia/Brisbane', country: 'Timezone Code', countryCode: '' },
  { city: 'Australia/Perth', timezone: 'Australia/Perth', country: 'Timezone Code', countryCode: '' },
  { city: 'Australia/Adelaide', timezone: 'Australia/Adelaide', country: 'Timezone Code', countryCode: '' },
  { city: 'Australia/Darwin', timezone: 'Australia/Darwin', country: 'Timezone Code', countryCode: '' },
  { city: 'Australia/Hobart', timezone: 'Australia/Hobart', country: 'Timezone Code', countryCode: '' },
  { city: 'Pacific/Auckland', timezone: 'Pacific/Auckland', country: 'Timezone Code', countryCode: '' },
  { city: 'Pacific/Fiji', timezone: 'Pacific/Fiji', country: 'Timezone Code', countryCode: '' },
  { city: 'Pacific/Honolulu', timezone: 'Pacific/Honolulu', country: 'Timezone Code', countryCode: '' },
  { city: 'Pacific/Guam', timezone: 'Pacific/Guam', country: 'Timezone Code', countryCode: '' },
  { city: 'Pacific/Tahiti', timezone: 'Pacific/Tahiti', country: 'Timezone Code', countryCode: '' },
  { city: 'Pacific/Pago_Pago', timezone: 'Pacific/Pago_Pago', country: 'Timezone Code', countryCode: '' },
  
  // UTC and GMT
  { city: 'UTC', timezone: 'UTC', country: 'Timezone Code', countryCode: '' },
  { city: 'GMT', timezone: 'GMT', country: 'Timezone Code', countryCode: '' },
];

let clocks = [];
let updateInterval;

// Convert country code to flag emoji
function getFlagEmoji(countryCode) {
  if (!countryCode) return '';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  await loadClocks();
  renderClocks();
  startUpdating();
  
  // Event listeners
  document.getElementById('addClockBtn').addEventListener('click', openModal);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('closeEditModal').addEventListener('click', closeEditModal);
  document.getElementById('cancelAliasBtn').addEventListener('click', closeEditModal);
  document.getElementById('settingsBtn').addEventListener('click', openSettings);
  document.getElementById('searchTimezone').addEventListener('input', filterTimezones);
  
  // Close modal on outside click
  document.getElementById('addModal').addEventListener('click', (e) => {
    if (e.target.id === 'addModal') {
      closeModal();
    }
  });
  
  document.getElementById('editModal').addEventListener('click', (e) => {
    if (e.target.id === 'editModal') {
      closeEditModal();
    }
  });
  
  // Enter key to save alias
  document.getElementById('aliasInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const index = parseInt(e.target.dataset.index);
      saveAlias(index);
    }
  });
  
  // Populate timezone list
  renderTimezoneList(TIMEZONES);
});

// Load clocks from storage
async function loadClocks() {
  const result = await chrome.storage.sync.get(['clocks']);
  clocks = result.clocks || [
    { city: 'New York', timezone: 'America/New_York', country: 'USA', countryCode: 'US' },
    { city: 'London', timezone: 'Europe/London', country: 'UK', countryCode: 'GB' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP' }
  ];
}

// Save clocks to storage
async function saveClocks() {
  await chrome.storage.sync.set({ clocks });
}

// Render all clocks
function renderClocks() {
  const container = document.getElementById('clocksList');
  
  if (clocks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No clocks added yet</p>
        <p>Click "+ Add Timezone" to get started</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = clocks.map((clock, index) => {
    const time = getTimeForTimezone(clock.timezone);
    return createClockElement(clock, time, index);
  }).join('');
  
  // Add delete and edit event listeners
  document.querySelectorAll('.delete-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => deleteClock(index));
  });
  document.querySelectorAll('.edit-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => openEditModal(index));
  });
}

// Create clock HTML element
function createClockElement(clock, time, index) {
  const flag = clock.countryCode ? getFlagEmoji(clock.countryCode) : '';
  const displayName = clock.alias || clock.city;
  
  return `
    <div class="clock-item" data-index="${index}">
      <div class="clock-info">
        <div class="clock-city">
          ${flag ? `<span class="flag-emoji">${flag}</span>` : ''}
          ${displayName}, ${clock.country}
        </div>
        <div class="clock-timezone">${clock.timezone}</div>
        <div class="clock-date">${time.date}</div>
      </div>
      <div class="clock-display">
        <div class="clock-time">${time.time}</div>
      </div>
      <div class="clock-actions">
        <button class="edit-btn" title="Edit alias">✏️</button>
        <button class="delete-btn" title="Remove">🗑️</button>
      </div>
    </div>
  `;
}

// Get formatted time for a timezone
function getTimeForTimezone(timezone) {
  const now = new Date();
  
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return {
    time: timeFormatter.format(now),
    date: dateFormatter.format(now)
  };
}

// Update all clock times
function updateClockTimes() {
  clocks.forEach((clock, index) => {
    const time = getTimeForTimezone(clock.timezone);
    const clockElement = document.querySelector(`[data-index="${index}"]`);
    if (clockElement) {
      clockElement.querySelector('.clock-time').textContent = time.time;
      clockElement.querySelector('.clock-date').textContent = time.date;
    }
  });
}

// Start updating clocks every second
function startUpdating() {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  updateInterval = setInterval(updateClockTimes, 1000);
}

// Delete a clock
async function deleteClock(index) {
  clocks.splice(index, 1);
  await saveClocks();
  renderClocks();
}

// Add a clock
async function addClock(timezone) {
  // Check if already added
  if (clocks.some(c => c.timezone === timezone.timezone)) {
    alert('This timezone is already added!');
    return;
  }
  
  clocks.push(timezone);
  await saveClocks();
  renderClocks();
  closeModal();
}

// Open add timezone modal
function openModal() {
  document.getElementById('addModal').classList.remove('hidden');
  document.getElementById('searchTimezone').value = '';
  document.getElementById('searchTimezone').focus();
  renderTimezoneList(TIMEZONES);
}

// Close modal
function closeModal() {
  document.getElementById('addModal').classList.add('hidden');
}

// Open edit alias modal
function openEditModal(index) {
  const clock = clocks[index];
  const modal = document.getElementById('editModal');
  const input = document.getElementById('aliasInput');
  const savebtn = document.getElementById('saveAliasBtn');
  
  input.value = clock.alias || clock.city;
  input.dataset.index = index;
  modal.classList.remove('hidden');
  input.focus();
  input.select();
  
  // Remove old listener and add new one
  const newSaveBtn = savebtn.cloneNode(true);
  savebtn.parentNode.replaceChild(newSaveBtn, savebtn);
  newSaveBtn.addEventListener('click', () => saveAlias(index));
}

// Close edit modal
function closeEditModal() {
  document.getElementById('editModal').classList.add('hidden');
}

// Save alias
async function saveAlias(index) {
  const input = document.getElementById('aliasInput');
  const alias = input.value.trim();
  
  if (alias && alias !== clocks[index].city) {
    clocks[index].alias = alias;
  } else {
    delete clocks[index].alias;
  }
  
  await saveClocks();
  renderClocks();
  closeEditModal();
  
  // Notify toolbar to update
  const tabs = await chrome.tabs.query({});
  tabs.forEach(tab => {
    chrome.tabs.sendMessage(tab.id, { action: 'updateClocks' }).catch(() => {});
  });
}

// Render timezone list
function renderTimezoneList(timezones) {
  const container = document.getElementById('timezoneList');
  
  container.innerHTML = timezones.map(tz => {
    const offset = getTimezoneOffset(tz.timezone);
    return `
      <div class="timezone-item" data-timezone='${JSON.stringify(tz)}'>
        <div class="timezone-name">${tz.city}, ${tz.country}</div>
        <div class="timezone-offset">${tz.timezone} (${offset})</div>
      </div>
    `;
  }).join('');
  
  // Add click listeners
  document.querySelectorAll('.timezone-item').forEach(item => {
    item.addEventListener('click', () => {
      const tz = JSON.parse(item.dataset.timezone);
      addClock(tz);
    });
  });
}

// Get timezone offset
function getTimezoneOffset(timezone) {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    timeZoneName: 'short'
  });
  
  const parts = formatter.formatToParts(now);
  const tzName = parts.find(part => part.type === 'timeZoneName');
  return tzName ? tzName.value : '';
}

// Filter timezones
function filterTimezones(e) {
  const query = e.target.value.toLowerCase();
  const filtered = TIMEZONES.filter(tz => 
    tz.city.toLowerCase().includes(query) ||
    tz.country.toLowerCase().includes(query) ||
    tz.timezone.toLowerCase().includes(query)
  );
  renderTimezoneList(filtered);
}

// Open settings page
function openSettings() {
  chrome.runtime.openOptionsPage();
}

// Cleanup on unload
window.addEventListener('unload', () => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
});
