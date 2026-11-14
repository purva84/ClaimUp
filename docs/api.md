# API Documentation

## Endpoints

| Method | Endpoint | Description | Request Body | Response Body |
|---|---|---|---|---|
| `GET` | `/health` | Service health check returning uptime readiness status | None | `{"status": "ok"}` |

### Detailed Endpoint Specifications

#### `GET /health`
- **Description**: Verifies that the FastAPI backend server is running and accessible.
- **Request Parameters**: None
- **Response**:
  - **Status Code**: `200 OK`
  - **Content-Type**: `application/json`
  - **Body**:
    ```json
    {
      "status": "ok"
    }
    ```
