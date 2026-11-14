import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Load environment configuration from .env file
load_dotenv()

# Read allowed frontend origin from environment with fallback
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

# Initialize FastAPI application
app = FastAPI(title="ClaimUp Insurance AI Assistant API")

# Configure CORS so the frontend origin can communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def get_health():
    # Health check endpoint returning status ok
    return {"status": "ok"}
