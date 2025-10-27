# 🪄 React Native Multi-Navigator App

Proyek ini adalah contoh implementasi **navigasi bertingkat** pada React Native menggunakan **React Navigation v7**, dengan kombinasi **Stack Navigator**, **Drawer Navigator**, dan **Tab Navigator**.

---

## 📁 Struktur Folder

```
RN---NAVIGATION/
│
├── android/
├── ios/
├── assets/
├── src/
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   ├── DrawerNavigator.tsx
│   │   └── TabNavigator.tsx
│   │
│   ├── screens/
│   │   ├── Detail/
│   │   │   ├── DestinationScreen1.tsx
│   │   │   └── DetailExample2.tsx
│   │   │
│   │   ├── DrawerScreen/
│   │   │   └── Setting.tsx
│   │   │
│   │   ├── TabScreen/
│   │   │   ├── Home.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Ticket.tsx
│   │   │
│   │   └── HomeScreen.tsx
│   │
│   └── ...
│
├── App.tsx
├── app.json
├── babel.config.js
├── .eslintrc.js
├── .prettierrc.js
├── .watchmanconfig
└── package.json
```

---

## ⚙️ Teknologi & Versi

| Package | Versi (disarankan) |
|----------|--------------------|
| React Native | `0.74.x` |
| React | `18.x` |
| @react-navigation/native | `^7.0.0` |
| @react-navigation/native-stack | `^7.0.0` |
| @react-navigation/bottom-tabs | `^7.0.0` |
| @react-navigation/drawer | `^7.0.0` |
| react-native-screens | `^4.4.0` |
| react-native-safe-area-context | `^5.0.0` |

---

## 🚀 Cara Menjalankan Proyek

### 1️⃣ Clone Repository
```bash
git clone https://github.com/kaylapuspita/Implementasi_UI_Interaktif_PPM.git
cd RN---NAVIGATION
```

### 2️⃣ Install Dependency
```bash
npm install
```
atau
```bash
yarn install
```

### 3️⃣ Jalankan Metro Bundler
```bash
npx react-native start
```

### 4️⃣ Jalankan Aplikasi
Untuk Android:
```bash
npx react-native run-android
```

Untuk iOS (Mac only):
```bash
npx react-native run-ios
```

---

## 🧭 Struktur Navigasi

Proyek ini menggunakan kombinasi navigasi berikut:

- **Stack Navigator** → (root) `AppNavigator.tsx`
- **Drawer Navigator** → di dalam stack `Main`
- **Tab Navigator** → di dalam folder navigation (bagian utama aplikasi)

### 🔹 Alur Navigasi:

```
App.tsx
 └── NavigationContainer
     └── AppNavigator (Stack)
         ├── StartScreen → HomeScreen.tsx
         ├── Main → DrawerNavigator
         │          ├── Home (TabNavigator)
         │          │    ├── Home.tsx
         │          │    ├── Profile.tsx
         │          │    └── Ticket.tsx
         │          └── Setting.tsx
         ├── DetailExample → DestinationScreen1.tsx
         └── DetailExample2 → DetailExample2.tsx
```

---

## 🧩 Root Stack Parameter Types

File: `src/navigation/AppNavigator.tsx`

```ts
export type RootStackParamList = {
  StartScreen: undefined;
  Main: undefined;
  DetailExample: undefined;
  DetailExample2: undefined;
};
```

Contoh penggunaan di halaman lain:
```ts
navigation.navigate('DetailExample2');
```

---

## 🪄 Fitur Utama

✅ Multi-navigator (Stack, Drawer, Tab)  
✅ Penulisan dengan TypeScript  
✅ Struktur modular untuk pengembangan besar  
✅ Navigasi antar layar dengan parameter  
✅ Kompatibel dengan React Navigation v7  

---

## 📖 Cara Tambah Screen Baru

1. Buat file baru di folder `src/screens/`  
   Contoh: `src/screens/Detail/DetailExample3.tsx`

2. Tambahkan ke `AppNavigator.tsx`
   ```ts
   <Stack.Screen name="DetailExample3" component={DetailExample3} />
   ```

3. (Opsional) Tambahkan ke `RootStackParamList`
   ```ts
   export type RootStackParamList = {
     ...
     DetailExample3: undefined;
   };
   ```

---

## 👩‍💻 Author

**Kayla Puspita Khairiyah**  
📅 Oktober 2025  
📍 Sukabumi, Indonesia  
📘 Project: *React Native Navigation Example (Stack + Drawer + Tab)*  

---
