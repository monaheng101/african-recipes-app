# African Recipes App

> African cooking made simple. Spice up your routine with hundreds of rich, heritage-rich dishes from across the continent.

[![React Native](https://shields.io)](https://reactnative.dev)
[![Expo](https://shields.io)](https://expo.dev/)
[![TypeScript](https://shields.io)](https://typescriptlang.org)

---

## 📱 Features

- **Feature 1:** Spring Animation (e.g., React Native Reanimated animates rings on the welcome page withspring to welcome the user)
- **Feature 1:** Short description (e.g., File-based routing with Expo Router)
- **Feature 2:** Short description (e.g., Cross-platform iOS & Android support)
- **Feature 3:** Short description (e.g., Dark mode & theme support)
- **Feature 4:** Short description (e.g., State management with Zustand/Redux)

---

## 🛠️ Tech Stack

- **Framework:** [React Native](https://reactnative.dev) via [Expo](https://expo.dev/)
- **Routing:** [Expo Router](https://expo.dev) (File-based navigation)
- **Language:** [TypeScript](https://typescriptlang.org)
- **Styling:** (e.g., NativeWind / StyleSheet / Tailwind)
- **State / API:** (e.g., TanStack Query, Zustand, Axios)

---

## 📋 Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org) (LTS version recommended)
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.io) / [bun](https://bun.sh)
- **Expo Go** app installed on your physical iOS or Android device, or an iOS Simulator / Android Emulator configured.

---

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   `npx expo start`
4. **Run the app:**
   - Scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS).
   - Press `i` in the terminal to open the **iOS Simulator**.
   - Press `a` in the terminal to open the **Android Emulator**.
   - Press `w` to open in a **Web browser**.

---

## 📁 Project Structure

```text
├── app/                  # File-based routing & screens (Expo Router)
│   ├── _layout.tsx       # Root layout & navigation providers
│   ├── index.tsx         # Home/Landing screen
│   └── tabs/             # Bottom tab navigator screens
├── assets/               # Images, fonts, icons, and splash screens
├── components/           # Reusable UI components
├── constants/            # Theme, colors, and global constants
├── hooks/                # Custom React hooks
├── types/                # TypeScript interfaces and types
├── app.json              # Expo app configuration & native metadata
├── package.json          # Project scripts and dependencies
└── tsconfig.json         # TypeScript compiler configuration
```

---

---

## Libraries

**react-native-heroicons** [heroicons](https://www.npmjs.com/package/react-native-heroicons)

---

## API

**Flagpedia** API for flags of all the countries in the world available at, [Flagpedia] (https://flagpedia.net/download/api)

<details>
<summary>Click to expand JSON file for country names and codes</summary>

```json
{
  "ad": "Andorra",
  "ae": "United Arab Emirates",
  "af": "Afghanistan",
  "ag": "Antigua and Barbuda",
  "ai": "Anguilla",
  "al": "Albania",
  "am": "Armenia",
  "ao": "Angola",
  "aq": "Antarctica",
  "ar": "Argentina",
  "as": "American Samoa",
  "at": "Austria",
  "au": "Australia",
  "aw": "Aruba",
  "ax": "Åland Islands",
  "az": "Azerbaijan",
  "ba": "Bosnia and Herzegovina",
  "bb": "Barbados",
  "bd": "Bangladesh",
  "be": "Belgium",
  "bf": "Burkina Faso",
  "bg": "Bulgaria",
  "bh": "Bahrain",
  "bi": "Burundi",
  "bj": "Benin",
  "bl": "Saint Barthélemy",
  "bm": "Bermuda",
  "bn": "Brunei",
  "bo": "Bolivia",
  "bq": "Caribbean Netherlands",
  "br": "Brazil",
  "bs": "Bahamas",
  "bt": "Bhutan",
  "bv": "Bouvet Island",
  "bw": "Botswana",
  "by": "Belarus",
  "bz": "Belize",
  "ca": "Canada",
  "cc": "Cocos (Keeling) Islands",
  "cd": "DR Congo",
  "cf": "Central African Republic",
  "cg": "Republic of the Congo",
  "ch": "Switzerland",
  "ci": "Côte d'Ivoire (Ivory Coast)",
  "ck": "Cook Islands",
  "cl": "Chile",
  "cm": "Cameroon",
  "cn": "China",
  "co": "Colombia",
  "cr": "Costa Rica",
  "cu": "Cuba",
  "cv": "Cape Verde",
  "cw": "Curaçao",
  "cx": "Christmas Island",
  "cy": "Cyprus",
  "cz": "Czechia",
  "de": "Germany",
  "dj": "Djibouti",
  "dk": "Denmark",
  "dm": "Dominica",
  "do": "Dominican Republic",
  "dz": "Algeria",
  "ec": "Ecuador",
  "ee": "Estonia",
  "eg": "Egypt",
  "eh": "Western Sahara",
  "er": "Eritrea",
  "es": "Spain",
  "et": "Ethiopia",
  "eu": "European Union",
  "fi": "Finland",
  "fj": "Fiji",
  "fk": "Falkland Islands",
  "fm": "Micronesia",
  "fo": "Faroe Islands",
  "fr": "France",
  "ga": "Gabon",
  "gb": "United Kingdom",
  "gb-eng": "England",
  "gb-nir": "Northern Ireland",
  "gb-sct": "Scotland",
  "gb-wls": "Wales",
  "gd": "Grenada",
  "ge": "Georgia",
  "gf": "French Guiana",
  "gg": "Guernsey",
  "gh": "Ghana",
  "gi": "Gibraltar",
  "gl": "Greenland",
  "gm": "Gambia",
  "gn": "Guinea",
  "gp": "Guadeloupe",
  "gq": "Equatorial Guinea",
  "gr": "Greece",
  "gs": "South Georgia",
  "gt": "Guatemala",
  "gu": "Guam",
  "gw": "Guinea-Bissau",
  "gy": "Guyana",
  "hk": "Hong Kong",
  "hm": "Heard Island and McDonald Islands",
  "hn": "Honduras",
  "hr": "Croatia",
  "ht": "Haiti",
  "hu": "Hungary",
  "id": "Indonesia",
  "ie": "Ireland",
  "il": "Israel",
  "im": "Isle of Man",
  "in": "India",
  "io": "British Indian Ocean Territory",
  "iq": "Iraq",
  "ir": "Iran",
  "is": "Iceland",
  "it": "Italy",
  "je": "Jersey",
  "jm": "Jamaica",
  "jo": "Jordan",
  "jp": "Japan",
  "ke": "Kenya",
  "kg": "Kyrgyzstan",
  "kh": "Cambodia",
  "ki": "Kiribati",
  "km": "Comoros",
  "kn": "Saint Kitts and Nevis",
  "kp": "North Korea",
  "kr": "South Korea",
  "kw": "Kuwait",
  "ky": "Cayman Islands",
  "kz": "Kazakhstan",
  "la": "Laos",
  "lb": "Lebanon",
  "lc": "Saint Lucia",
  "li": "Liechtenstein",
  "lk": "Sri Lanka",
  "lr": "Liberia",
  "ls": "Lesotho",
  "lt": "Lithuania",
  "lu": "Luxembourg",
  "lv": "Latvia",
  "ly": "Libya",
  "ma": "Morocco",
  "mc": "Monaco",
  "md": "Moldova",
  "me": "Montenegro",
  "mf": "Saint Martin",
  "mg": "Madagascar",
  "mh": "Marshall Islands",
  "mk": "North Macedonia",
  "ml": "Mali",
  "mm": "Myanmar",
  "mn": "Mongolia",
  "mo": "Macau",
  "mp": "Northern Mariana Islands",
  "mq": "Martinique",
  "mr": "Mauritania",
  "ms": "Montserrat",
  "mt": "Malta",
  "mu": "Mauritius",
  "mv": "Maldives",
  "mw": "Malawi",
  "mx": "Mexico",
  "my": "Malaysia",
  "mz": "Mozambique",
  "na": "Namibia",
  "nc": "New Caledonia",
  "ne": "Niger",
  "nf": "Norfolk Island",
  "ng": "Nigeria",
  "ni": "Nicaragua",
  "nl": "Netherlands",
  "no": "Norway",
  "np": "Nepal",
  "nr": "Nauru",
  "nu": "Niue",
  "nz": "New Zealand",
  "om": "Oman",
  "pa": "Panama",
  "pe": "Peru",
  "pf": "French Polynesia",
  "pg": "Papua New Guinea",
  "ph": "Philippines",
  "pk": "Pakistan",
  "pl": "Poland",
  "pm": "Saint Pierre and Miquelon",
  "pn": "Pitcairn Islands",
  "pr": "Puerto Rico",
  "ps": "Palestine",
  "pt": "Portugal",
  "pw": "Palau",
  "py": "Paraguay",
  "qa": "Qatar",
  "re": "Réunion",
  "ro": "Romania",
  "rs": "Serbia",
  "ru": "Russia",
  "rw": "Rwanda",
  "sa": "Saudi Arabia",
  "sb": "Solomon Islands",
  "sc": "Seychelles",
  "sd": "Sudan",
  "se": "Sweden",
  "sg": "Singapore",
  "sh": "Saint Helena, Ascension and Tristan da Cunha",
  "si": "Slovenia",
  "sj": "Svalbard and Jan Mayen",
  "sk": "Slovakia",
  "sl": "Sierra Leone",
  "sm": "San Marino",
  "sn": "Senegal",
  "so": "Somalia",
  "sr": "Suriname",
  "ss": "South Sudan",
  "st": "São Tomé and Príncipe",
  "sv": "El Salvador",
  "sx": "Sint Maarten",
  "sy": "Syria",
  "sz": "Eswatini (Swaziland)",
  "tc": "Turks and Caicos Islands",
  "td": "Chad",
  "tf": "French Southern and Antarctic Lands",
  "tg": "Togo",
  "th": "Thailand",
  "tj": "Tajikistan",
  "tk": "Tokelau",
  "tl": "Timor-Leste",
  "tm": "Turkmenistan",
  "tn": "Tunisia",
  "to": "Tonga",
  "tr": "Turkey",
  "tt": "Trinidad and Tobago",
  "tv": "Tuvalu",
  "tw": "Taiwan",
  "tz": "Tanzania",
  "ua": "Ukraine",
  "ug": "Uganda",
  "um": "United States Minor Outlying Islands",
  "un": "United Nations",
  "us": "United States",
  "us-ak": "Alaska",
  "us-al": "Alabama",
  "us-ar": "Arkansas",
  "us-az": "Arizona",
  "us-ca": "California",
  "us-co": "Colorado",
  "us-ct": "Connecticut",
  "us-de": "Delaware",
  "us-fl": "Florida",
  "us-ga": "Georgia",
  "us-hi": "Hawaii",
  "us-ia": "Iowa",
  "us-id": "Idaho",
  "us-il": "Illinois",
  "us-in": "Indiana",
  "us-ks": "Kansas",
  "us-ky": "Kentucky",
  "us-la": "Louisiana",
  "us-ma": "Massachusetts",
  "us-md": "Maryland",
  "us-me": "Maine",
  "us-mi": "Michigan",
  "us-mn": "Minnesota",
  "us-mo": "Missouri",
  "us-ms": "Mississippi",
  "us-mt": "Montana",
  "us-nc": "North Carolina",
  "us-nd": "North Dakota",
  "us-ne": "Nebraska",
  "us-nh": "New Hampshire",
  "us-nj": "New Jersey",
  "us-nm": "New Mexico",
  "us-nv": "Nevada",
  "us-ny": "New York",
  "us-oh": "Ohio",
  "us-ok": "Oklahoma",
  "us-or": "Oregon",
  "us-pa": "Pennsylvania",
  "us-ri": "Rhode Island",
  "us-sc": "South Carolina",
  "us-sd": "South Dakota",
  "us-tn": "Tennessee",
  "us-tx": "Texas",
  "us-ut": "Utah",
  "us-va": "Virginia",
  "us-vt": "Vermont",
  "us-wa": "Washington",
  "us-wi": "Wisconsin",
  "us-wv": "West Virginia",
  "us-wy": "Wyoming",
  "uy": "Uruguay",
  "uz": "Uzbekistan",
  "va": "Vatican City (Holy See)",
  "vc": "Saint Vincent and the Grenadines",
  "ve": "Venezuela",
  "vg": "British Virgin Islands",
  "vi": "United States Virgin Islands",
  "vn": "Vietnam",
  "vu": "Vanuatu",
  "wf": "Wallis and Futuna",
  "ws": "Samoa",
  "xk": "Kosovo",
  "ye": "Yemen",
  "yt": "Mayotte",
  "za": "South Africa",
  "zm": "Zambia",
  "zw": "Zimbabwe"
}
```

</details>

## 📦 Building for Production (EAS Build)

This project uses [EAS Build](https://expo.dev) for compiling native iOS and Android binaries.

1. **Install EAS CLI:**

   ```bash
   npm install -g eas-cli
   ```

2. **Log in to your Expo account:**

   ```bash
   eas login
   ```

3. **Configure EAS Build:**

   ```bash
   eas build:configure
   ```

4. **Build the app:**
   - **Android (APK / AAB):**
     ```bash
     eas build --platform android --profile production
     ```
   - **iOS (IPA):**
     ```bash
     eas build --platform ios --profile production
     ```

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

```

<FollowUp>
If you want to customize this further, tell me:
* What **backend or database** your app connects to (e.g., Supabase, Firebase, Node.js)?
* What **state management or UI libraries** you are using?
</FollowUp>
```
