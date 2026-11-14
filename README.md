# ClaimUp - Insurance AI Assistant

An AI assistant that helps people understand and use their insurance policy after buying it. This is the starting setup (Step 0) providing a FastAPI backend and a React + TypeScript frontend with health check verification.

---

## Prerequisites

Before running the project, ensure you have the following installed:
- **Git**
- **Python 3.11+**
- **Node.js 20+** (with npm)

---

## Project Structure

```text
ClaimUp/
  backend/
    app/
      __init__.py
      main.py               # FastAPI application entry point
      routers/              # API routers directory
      services/             # Business logic and services directory
    tests/                  # Backend test suite (pytest)
    requirements.txt        # Pinned Python dependencies
    pytest.ini              # Pytest configuration
    .env.example            # Backend environment template
  frontend/
    src/
      components/           # Reusable UI components (TopBar)
      pages/                # Route pages (Home, Upload)
      api.ts                # API client functions (getHealth)
      App.tsx               # Main app layout and routing
      main.tsx              # React DOM entry point
      index.css             # Tailwind CSS entry point
      setupTests.ts         # Vitest test setup
    vite.config.ts          # Vite and Vitest configuration
    .env.example            # Frontend environment template
  docs/
    api.md                  # API documentation
  .gitignore                # Git ignore rules
  README.md                 # Setup and usage guide
```

---

## Getting Started

### 1. Backend Setup

Open a terminal and navigate to the `backend` folder:

```bash
cd backend
```

#### Step 1.1: Copy Environment Variables
- **macOS / Linux:**
  ```bash
  cp .env.example .env
  ```
- **Windows (PowerShell):**
  ```powershell
  Copy-Item .env.example .env
  ```
- **Windows (Command Prompt):**
  ```cmd
  copy .env.example .env
  ```

#### Step 1.2: Create and Activate Virtual Environment
- **macOS / Linux:**
  ```bash
  python3 -m venv .venv
  source .venv/bin/activate
  ```
- **Windows (PowerShell):**
  ```powershell
  python -m venv .venv
  .venv\Scripts\Activate.ps1
  ```
- **Windows (Command Prompt):**
  ```cmd
  python -m venv .venv
  .venv\Scripts\activate.bat
  ```

#### Step 1.3: Install Dependencies
```bash
pip install -r requirements.txt
```

#### Step 1.4: Run the Backend Server
```bash
uvicorn app.main:app --port 8000
```
The backend server will start at `http://localhost:8000`. You can verify it by opening `http://localhost:8000/health` in your browser.

---

### 2. Frontend Setup

Open a second terminal and navigate to the `frontend` folder:

```bash
cd frontend
```

#### Step 2.1: Copy Environment Variables
- **macOS / Linux:**
  ```bash
  cp .env.example .env
  ```
- **Windows (PowerShell):**
  ```powershell
  Copy-Item .env.example .env
  ```
- **Windows (Command Prompt):**
  ```cmd
  copy .env.example .env
  ```

#### Step 2.2: Install Dependencies
```bash
npm install
```

#### Step 2.3: Run the Frontend Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. When the backend is running, the page will display **Backend: OK**.

---

## Running Tests

### Backend Tests
From the `backend` directory (with your virtual environment activated):
```bash
pytest
```
Or from the project root:
```bash
cd backend && pytest
```

### Frontend Tests
From the `frontend` directory:
```bash
npm test
```
Or from the project root:
```bash
cd frontend && npm test
```

### Build Frontend
To create a production build of the frontend:
```bash
cd frontend && npm run build
```
