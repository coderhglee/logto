const password_rejected = {
  too_short: 'Minimum length is {{min}}.',
  too_long: 'Maximum length is {{max}}.',
  character_types: 'En az {{min}} türde karakter gereklidir.',
  unsupported_characters: 'Desteklenmeyen karakter bulundu.',
  pwned: 'Kolayca tahmin edilebilen basit şifreleri kullanmaktan kaçının.',
  restricted_found: '{{list, list}} fazla kullanımdan kaçının.',
  'restricted.repetition': 'tekrarlanan karakterler',
  'restricted.sequence': 'dizisel karakterler',
  'restricted.user_info': 'kişisel bilgileriniz',
  'restricted.words': 'ürünle ilgili terimler',
};

export default Object.freeze(password_rejected);
