# Biddly Frontend

## Auction Platform Frontend

### About the Project

This is the frontend part of the Biddly Auction Platform, built using the NuxtJS framework. It serves as the user-facing
layer for real-time bidding, auction browsing, and user interactions.

The main goal is to provide a highly responsive and interactive UI that integrates smoothly with a complex backend
architecture based on Event Sourcing and Event-Driven principles.

This app is designed to simulate a real auction environment with real-time bid updates, auto-closing auctions, and a
focus on UX best practices.

---

### Tech Stack

- NuxtJS 3 (Vue 3-based Meta Framework)

- Tailwind CSS (Utility-first CSS framework)

- Pinia (State Management)

- VueUse (Collection of Composition API utilities)

- Socket.IO (WebSocket client for real-time bidding)

- Axios (API Communication)

- TypeScript (Static typing)

- Vite (Lightning-fast dev server and bundler)

- Docker (Dev container setup)

---

### Features

- ⚡ Real-time auction updates via WebSocket

- 🔐 JWT-based auth integration with backend

- 💬 Live bidding UI with reactive state

- 🏷️ Auction categories and filtering

- 📊 Bid history and dynamic countdown timers

- 🧾 User registration, login, and profile pages

- 🧩 Modular component system with full reactivity

### Socket.IO Integration

- Subscribes to auction channels in real time.

- Receives bid events and updates UI accordingly.

- Handles disconnects, reconnects, and stale state.

---
